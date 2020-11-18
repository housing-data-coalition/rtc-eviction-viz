select 
	week, 
	count(*) filter (where classification = 'Holdover' and region = 'NYC') as nyc_holdover_filings,
	count(*) filter (where classification = 'Non-Payment' and region = 'NYC') as nyc_nonpay_filings,
	count(*) filter (where classification = 'Holdover' and region = 'Outside NYC') as outside_nyc_holdover_filings,
	count(*) filter (where classification = 'Non-Payment' and region = 'Outside NYC') as outside_nyc_nonpay_filings,
	count(*) as total_filings
	from (
		select 
			i.*, 
			c.causeofactiontype, 
			c.interestfromdate, 
			c.amount, 
			e.eventname, 
			e.fileddate as eventfileddate, 
			e.feetype, 
			e.filingpartiesroles, 
			e.answertype,
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
		left join oca_causes c on c.indexnumberid = i.indexnumberid
		left join oca_events e on e.indexnumberid = i.indexnumberid 
		where i.fileddate >= '01-01-2019' and i.classification = any('{Holdover,Non-Payment}') 
		order by i.fileddate asc 
	) eviction_cases
group by week
order by week