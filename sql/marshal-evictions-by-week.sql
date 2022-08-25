with marshalevics as 
(select 
date_trunc('week', executeddate)::date as week_eviction
from marshal_evictions_all mea 
where residentialcommercialind = 'RESIDENTIAL'
-- and executeddate > '01-15-2022' # pull all of them, edit viz to not show all of them
)
select week_eviction, count(*) as marshalevictions from marshalevics 
group by week_eviction
order by week_eviction