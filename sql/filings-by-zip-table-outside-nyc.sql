with 
filings_zips as (
	select 
		i.*, 
		LEFT(postalcode,5) AS zipcode,
		court as court_name
	from oca_index i 
	left join oca_addresses a on a.indexnumberid = i.indexnumberid
	where i.fileddate >= '03-23-2020' and i.classification = any('{Holdover,Non-Payment}') 
	and court not in
	('New York County Civil Court', 
	'Kings County Civil Court',
	'Queens County Civil Court', 
	'Bronx County Civil Court',
	'Richmond County Civil Court',
	'Redhook Community Justice Center',
	'Harlem Community Justice Center')
	order by i.fileddate asc)

select
zipcode,
count(*) as filings,
court_name
from filings_zips
group by court_name, zipcode
order by court_name