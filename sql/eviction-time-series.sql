with days as (
	select *
    from generate_series('01-01-2019', CURRENT_DATE - '1 WEEK'::INTERVAL, '1 DAY'::INTERVAL) day
)
select 
	day, 
	count(*) filter (where classification = 'Holdover' and region = 'NYC') as nyc_holdover_filings,
	count(*) filter (where classification = 'Holdover' and region = 'NYC' and propertytype = 'Residential') as nyc_holdover_res_filings,
	count(*) filter (where classification = 'Non-Payment' and region = 'NYC') as nyc_nonpay_filings,
	count(*) filter (where classification = 'Non-Payment' and region = 'NYC' and propertytype = 'Residential') as nyc_nonpay_res_filings,
	count(*) filter (where classification = 'Holdover' and region = 'Outside NYC') as outside_nyc_holdover_filings,
	count(*) filter (where classification = 'Non-Payment' and region = 'Outside NYC') as outside_nyc_nonpay_filings,
	count(*) filter (where indexnumberid is not null) as total_filings
	from days
	left join (
		select 
			i.*,
			date_trunc('day', i.fileddate)::date as day,
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
	) eviction_cases using(day)
group by day
order by day;
