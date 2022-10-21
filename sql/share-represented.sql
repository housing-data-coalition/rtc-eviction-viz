-- select non-payment and holdover cases' respondents and representation types, filed during pandemic, that have had an appearance
-- note this query has more info than needed for a chart of share of represented tenants over time, it includes partial representation 
with cases_plus_rep as (
	select 
		oi.*,
		representationtype from oca_index oi  
	left join oca_parties op using(indexnumberid)
	left join oca_case_summary ocs using(indexnumberid)
	where oi.classification in ('Non-Payment','Holdover')
		and role = 'Respondent' 
		and propertytype = 'Residential'
		and representationtype != 'No Appearance' -- filter out no appearances 
		and oi.court = any('{
						Bronx County Civil Court,
						Kings County Civil Court,
						New York County Civil Court,
						Queens County Civil Court,
						Richmond County Civil Court,
						Redhook Community Justice Center,
						Harlem Community Justice Center
					}')
		and fileddate > '2022-01-15'
		and appearances_num > 0
),
-- select just relevant fields and eliminate duplicates
all_cases as (
	select 
		indexnumberid, 
		classification, 
		fileddate,
		date_trunc('week', fileddate)::date as day, 
		string_agg(distinct representationtype, ', ') as representationtype
	from cases_plus_rep
	group by indexnumberid, classification, fileddate, day
)
-- group by week filed and calculated representation rate 
select 
	day, 
	-- Count cases with "Self-Represented Litigants" only
	count(*) filter (where representationtype = 'SRL') as srl,
	-- Count cases with representation (or partial representation)
	count(*) filter (where representationtype != 'SRL') as represented,
	-- Count total eviction cases with appearances 
	count(*) as allcases,
	-- Calculate percent of cases that had representation
	(count(*) filter (where representationtype != 'SRL'))::numeric*100 / count(*) as rep_rate
from all_cases
-- grab everything until 4 weeks before current date to account for missing recent data 
where day < current_date - interval '4 weeks'
group by day
order by day; 