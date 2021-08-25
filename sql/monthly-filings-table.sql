
with by_zip as (
select
		count(*) as num,
		ABS(extract(month from cast(i.fileddate as Date)) - extract(month from current_timestamp)) as months_ago,
        LEFT(postalcode,5) AS zipcode,
        case when 
            (court = any('{
                Bronx County Civil Court,
                Kings County Civil Court,
                New York County Civil Court,
                Queens County Civil Court,
                Richmond County Civil Court,
                Redhook Community Justice Center,
                Harlem Community Justice Center
            }')) then 'NYC'
        else 'Outside NYC' end as region,
        case when
        	(court = 'Bronx County Civil Court') then 'Bronx'
        	when (court = any('{Kings County Civil Court, Redhook Community Justice Center}')) then 'Brooklyn'
        	when (court = any('{New York County Civil Court,  Harlem Community Justice Center}')) then 'Manhattan'
			when (court = 'Queens County Civil Court') then 'Queens'
			when (court = 'Richmond County Civil Court') then 'Staten Island'
		else 'Outside NYC' end as borough
	from oca_index i 
	left join oca_addresses a on a.indexnumberid = i.indexnumberid
	where (extract(month from cast(i.fileddate as Date)) = extract(month from current_timestamp - interval '2' month) 
		OR extract(month from cast(i.fileddate as Date)) = extract(month from current_timestamp - interval '3' month))
    and cast(i.fileddate as Date) > current_timestamp - interval '4' month
 
    and i.classification = any('{Holdover,Non-Payment}')
    GROUP BY zipcode, months_ago, region, borough
    ORDER BY region
)

select 
	zipcode,
	region,
	borough,
	num as two_months_ago,
	LEAD(num, 1, '0') over (ORDER BY region) as three_months_ago,
	num - LEAD(num, 1, '0')
	  over (ORDER BY region) as num_increase,
	CASE -- When there were no evictions 3 months ago, add 1 to num & denom to avoid divide by zero (e.g. 0 -> 26 = 2600% change)
		when LEAD(num, 1, '0') over (ORDER BY region) = 0
		THEN num * 100
		ELSE
		(num - LEAD(num, 1, '0')
		  over (ORDER BY region)) / LEAD(num, 1, '0') over (ORDER BY region) * 100 END
		  as percent_increase
	
from by_zip
WHERE num is not NULL
ORDER BY percent_increase DESC LIMIT 10;