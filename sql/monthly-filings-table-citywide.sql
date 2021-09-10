
with two_months_ago as (
select
		count(*) as num,
		ABS(extract(month from cast(i.fileddate as Date)) - extract(month from current_timestamp)) as months_ago,
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
	where (extract(month from cast(i.fileddate as Date)) = extract(month from current_timestamp - interval '2' month) )
    and cast(i.fileddate as Date) > current_timestamp - interval '4' month
 
    and i.classification = any('{Holdover,Non-Payment}')
    GROUP BY months_ago, region, borough
    ORDER BY borough
),

three_months_ago as (
select
		count(*) as num,
		ABS(extract(month from cast(i.fileddate as Date)) - extract(month from current_timestamp)) as months_ago,
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
	where extract(month from cast(i.fileddate as Date)) = extract(month from current_timestamp - interval '3' month)
    and cast(i.fileddate as Date) > current_timestamp - interval '4' month --only want filings from this year, not the same month from previous years
 
    and i.classification = any('{Holdover,Non-Payment}')
    GROUP BY months_ago, region, borough
    ORDER BY borough
)

select
	a.borough,
    a.region,
	a.num as two_months_ago,
	b.num as three_months_ago,
	a.num - b.num as num_increase,
	CASE -- When there were no evictions 3 months ago, add 1 to num & denom to avoid divide by zero (e.g. 0 -> 26 = 2600% change)
	  when b.num = 0
	  then a.num * 100
	  ELSE
	    cast(((cast(a.num as double precision) - cast(b.num as double precision)) / cast(b.num as double precision)) * 100 as int)
	  END
	  as percent_increase
	from two_months_ago a
	left join three_months_ago b on b.borough = a.borough
	ORDER BY percent_increase DESC NULLS LAST limit 10; -- by default NULLS are first, which we don't want. We don't have data for some zips, and some zips are missing, which is why there are NULLs in the first place.