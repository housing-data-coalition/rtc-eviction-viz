-- select non-payment and holdover cases' respondents and representation types, filed during pandemic, that have had an appearance
-- note this query has more info than needed for a chart of share of represented tenants over time, it includes partial representation 
with cases_plus_rep as 
	(select oi.*,
	representationtype from oca_index oi  
	left join oca_parties op using(indexnumberid)
	left join oca_case_summary ocs using(indexnumberid)
	where oi.classification in ('Non-Payment', 'HP')
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
	and fileddate > '01-01-2020'
	and appearances_num > 0), 
-- select just relevant fields and eliminate duplicates
index_plus_rep as 
	(select indexnumberid, classification, fileddate, representationtype from cases_plus_rep
	group by indexnumberid, classification, fileddate, representationtype),
-- identify cases where there's both counsel and not-counsel (multiple defendants), assign them counseltypes = 2
count_rep_types as 
	(select indexnumberid, count(*) as counseltypes from index_plus_rep 
	group by indexnumberid 
	order by counseltypes desc),
-- join counseltypes count to table of indexID, case type, filed date, and representation type so you can ID partial representation
index_rep_count as 	
	(select * from index_plus_rep
	left join count_rep_types using(indexnumberid)
	order by indexnumberid),
-- name partial representation and delete records of self represented tenants where there's partial representation
all_cases as 
	(select *,
	case when counseltypes = 2 then 'Partial representation' else representationtype end as partialrep,
	date_trunc('week', fileddate)::date as day
	from index_rep_count 
	where (representationtype = 'SRL' and counseltypes = 2) is false
	order by fileddate)
-- group by week filed and calculated representation rate 
select day, 
count(*) filter (where representationtype = 'SRL') as srl,
count(*) filter (where representationtype = 'Counsel') as represented,
count(*) as allcases,
(count(*) filter (where representationtype = 'Counsel'))*100 / count(*) as rep_rate
from all_cases
-- grab everything until 5 weeks before current date to account for missing recent data 
where day < current_date - interval '5 weeks'
group by day
order by day