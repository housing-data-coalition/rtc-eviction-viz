 with cases_active_pre_2020 as (
	select 
		i.*
	from oca_index i 
	where i.fileddate < '01-01-2020' -- case was filed before 1/1/20
	and (disposeddate >= '01-01-2020' or status like '%Active%') -- case is active or was disposed after 1/1/20, i.e. active on 1/1/20
	and i.classification = any('{Holdover,Non-Payment}') 
	order by i.fileddate desc
	)

select count(*) as pre20count from cases_active_pre_2020;

-- Result: 167,889


with covid_res_filings as (	
	select 
		i.*,
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
		else 'Outside NYC' end as region
	from oca_index i  
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
167889 + sum(cases_filed) over (order by week_filed) as cum_filed,
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