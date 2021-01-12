
/*
 * with cases_active_pre_2020 as (
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
		else 'Outside NYC' end as region,
		case when ( court = 'New York County Civil Court') 
		then 'Manhattan' else 'Not Manhattan' end as manhattan
	from oca_index i 
	left join oca_causes c on c.indexnumberid = i.indexnumberid
	left join oca_events e on e.indexnumberid = i.indexnumberid 
	left join oca_addresses a on a.indexnumberid = i.indexnumberid
	where i.fileddate < '01-01-2020' 
	and status = 'Active'
	and i.classification = any('{Holdover,Non-Payment}') 
	order by i.fileddate asc 
	)
	
	select count(*) from cases_active_pre_2020
	
	
	Result: 183,173
 */





with covid_res_filings as (	
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
		date_trunc('week', i.fileddate)::date as week_filed,
		date_trunc('week', disposeddate)::date as week_disposed,
		case when (
		court = 'New York County Civil Court' or 
		court = 'Kings County Civil Court' or 
		court = 'Queens County Civil Court' or 
		court = 'Bronx County Civil Court' or 
		court = 'Richmond County Civil Court' or 
		court = 'Redhook Community Justice Center' or 
		court = 'Harlem Community Justice Center')
		 then 'NYC' 
		else 'Outside NYC' end as region,
		j.*
	from oca_index i 
	left join oca_causes c on c.indexnumberid = i.indexnumberid
	left join oca_events e on e.indexnumberid = i.indexnumberid 
	left join oca_addresses a on a.indexnumberid = i.indexnumberid
	left join oca_judgments j on j.indexnumberid = i.indexnumberid 
	where i.fileddate >= '01-01-2020' and i.classification = any('{Holdover,Non-Payment}') 
	order by i.fileddate asc),

grouped_week_filed as (
select
week_filed,
count(*) as cases_filed
from covid_res_filings
group by week_filed
order by week_filed),

grouped_week_disposed as (
select
week_disposed,
count(*) as cases_disposed
from covid_res_filings
group by week_disposed
order by week_disposed),

cumulative as (
select week_filed as day, 
cases_filed, 
183173 + sum(cases_filed) over (order by week_filed) as cum_filed,
cases_disposed,
sum(cases_disposed) over (order by week_filed) as cum_disposed
from grouped_week_filed 
full join grouped_week_disposed on week_filed = week_disposed)

select 
day,
cum_filed - cum_disposed as active_cases
from cumulative
where day > '01-01-2020' and
day is not null
	