with 
filings_zips as (
	select 
		i.*, 
		LEFT(postalcode,5) AS zipcode
	from oca_index i 
	left join oca_causes c on c.indexnumberid = i.indexnumberid
	left join oca_addresses a on a.indexnumberid = i.indexnumberid
	where i.fileddate >= '03-23-2020' and i.classification = any('{Holdover,Non-Payment}') 
	and propertytype = 'Residential'
	and
	(court = 'New York County Civil Court' or 
		court = 'Kings County Civil Court' or 
		court = 'Queens County Civil Court' or 
		court = 'Bronx County Civil Court' or 
		court = 'Richmond County Civil Court' or 
		court = 'Redhook Community Justice Center' or 
		court = 'Harlem Community Justice Center')
	order by i.fileddate asc),

grouped_zips as (
select
zipcode,
count(*) as filings_since_032320
from filings_zips
group by zipcode
order by zipcode),

grouped_unitsres as (
select zipcode, 
sum(unitsres) as unitsres_total,
sum(unitsres) filter (where unitstotal > 1) as unitsrental
from pluto_19v2
group by zipcode
order by zipcode)

select a.zipcode, 
filings_since_032320, 
unitsres_total, 
--total residential units in the zip code as per PLUTO
unitsrental,
--total residential units in the zip code except for single unit properties
filings_since_032320 * 1000 / nullif(unitsrental, 0)::numeric as filingsrate_2plus
--filings normalized by total res units in the zip code except for single unit properties. 
from grouped_zips a
left join grouped_unitsres b on b.zipcode = a.zipcode 

/*For map of filings by zip code, make choropleth using filingsrate_2plus
include filings_since_032320 in tool tip*/