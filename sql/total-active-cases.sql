with covid_filings as (	
	select 
		court,
		fileddate,
		propertytype,
		disposeddate,
		date_trunc('week', fileddate)::date as week_filed,
		date_trunc('week', disposeddate)::date as week_disposed
	from oca_index 
	where 
	classification = any('{Holdover,Non-Payment}') 
	--and propertytype = 'Residential' # commented out to show Statewide evictions, which includes commercial
	order by fileddate asc
	),
	
weekly as (
select 
week_filed as day, 
count(*) as cases_filed,
count(*) filter (where week_disposed is not null) as cases_disposed
from covid_filings
group by week_filed
order by week_filed)

select 
day,
cases_filed,
sum(cases_filed) over (order by day) as cum_filed,
cases_disposed,
sum(cases_disposed) over (order by day) as cum_disposed,
sum(cases_filed) over (order by day) - sum(cases_disposed) over (order by day) as active_cases
from weekly
