with weeks as (
	select *
    from generate_series('01-07-2019', CURRENT_DATE - '1 WEEK'::INTERVAL, '1 WEEK'::INTERVAL) week
)
select 
	week, 
	count(*) filter (where classification = 'Holdover' and region = 'NYC') as nyc_holdover_filings,
	count(*) filter (where classification = 'Non-Payment' and region = 'NYC') as nyc_nonpay_filings,
	count(*) filter (where classification = 'Holdover' and region = 'Outside NYC') as outside_nyc_holdover_filings,
	count(*) filter (where classification = 'Non-Payment' and region = 'Outside NYC') as outside_nyc_nonpay_filings,
	count(*) filter (where indexnumberid is not null) as total_filings
	from weeks
	left join (
		select 
			i.*,
			date_trunc('week', i.fileddate)::date as week,
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
			else 'Outside NYC' end as region
		from oca_index i 
		where i.fileddate >= '01-01-2019' and i.classification = any('{Holdover,Non-Payment}') 
		order by i.fileddate asc 
	) eviction_cases using(week)
group by week
order by week;
