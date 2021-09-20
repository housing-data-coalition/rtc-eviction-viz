select
    count(*) as count,
    case when
        	(court = 'Bronx County Civil Court') then 'Bronx'
        	when (court = any('{Kings County Civil Court, Redhook Community Justice Center}')) then 'Brooklyn'
        	when (court = any('{New York County Civil Court,  Harlem Community Justice Center}')) then 'Manhattan'
			when (court = 'Queens County Civil Court') then 'Queens'
			when (court = 'Richmond County Civil Court') then 'Staten Island'
		else 'Outside NYC' end as borough,
    case when
        fileddate < '2020-03-23' then 'Issued Prepandemic'
        else 'Issued Pandemic' end as timebucket

    from oca_index
    where status ~ 'Active' and classification = any('{Holdover,Nonpayment}')
    and court = any('{
        Bronx County Civil Court,
        Kings County Civil Court,
        New York County Civil Court,
        Queens County Civil Court,
        Richmond County Civil Court,
        Redhook Community Justice Center,
        Harlem Community Justice Center
    }')
group by borough, timebucket