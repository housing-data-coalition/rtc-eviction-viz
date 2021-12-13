with judgments as (
select distinct on (indexnumberid) oj.*, classification,
date_trunc('week', latestjudgmentstatusdate)::date as week_judgment
from oca_judgments oj 
left join oca_index oi using(indexnumberid)
where (classification = 'Non-Payment' or classification = 'Holdover')
and withpossession is true 
and oi.fileddate > '03-23-20'
and latestjudgmentstatus <> 'Vacated'
and oj.indexnumberid 
	not in 
	(select indexnumberid from oca_judgments oj 
	where indexnumberid in 
		(select indexnumberid 
		from oca_judgments
		left join oca_index oi using(indexnumberid)
		where (classification = 'Non-Payment' or classification = 'Holdover')
		and withpossession is true 
		and oi.fileddate > '03-23-20'
		group by indexnumberid
		HAVING count(*) > 1)  
	and latestjudgmentstatus = 'Vacated') 
	) 
	
	select week_judgment as day, count(*) as judgments
	from judgments 
	group by day
	order by day desc 