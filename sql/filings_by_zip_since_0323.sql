with eviction_cases_zips as (
	select 
		i.*, 
		a.postalcode,
		c.causeofactiontype, 
		c.interestfromdate, 
		c.amount, 
		e.eventname, 
		e.fileddate as eventfileddate, 
		e.feetype, 
		e.filingpartiesroles, 
		e.answertype,
		--date_trunc('week', i.fileddate)::date as week,
		case when (
		court = 'New York County Civil Court' or 
		court = 'Kings County Civil Court' or 
		court = 'Queens County Civil Court' or 
		court = 'Bronx County Civil Court' or 
		court = 'Richmond County Civil Court' or 
		court = 'Redhook Community Justice Center' or 
		court = 'Harlem Community Justice Center')
		 then 'NYC' 
		else 'Outside NYC' end as region
	from oca_index i 
	left join oca_causes c on c.indexnumberid = i.indexnumberid
	left join oca_events e on e.indexnumberid = i.indexnumberid 
	left join oca_addresses a on a.indexnumberid = i.indexnumberid
	where i.fileddate >= '03-23-2019' and i.classification = any('{Holdover,Non-Payment}') 
	order by i.fileddate asc 
)

select
postalcode,
count(*) filter (where region = 'NYC') as nyc_filings,
count(*) filter (where region = 'Outside NYC') as outside_nyc_filings
from eviction_cases_zips
group by postalcode 
order by postalcode






