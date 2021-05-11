with t as (
    select
        classification,
        propertytype,
        case when 
            (court = any('{
            Bronx County Civil Court,
            Kings County Civil Court,
            New York County Civil Court,
            Queens County Civil Court,
            Richmond County Civil Court,
            Redhook Community Justice Center,
            Harlem Community Justice Center
        }')) then 'NYC' 
        else 'Outside NYC' end as region,
        case when
            fileddate < '2021-03-21' then 'Issued Prepandemic'
            else 'Issued Pandemic' end as timebucket
    from oca_index
    where status ~ 'Active' and
    classification = any('{Holdover,Non-Payment}')
)
select 
    count(*) as count,
    concat(classification,'-',propertytype,'-',region,'-',timebucket) as category
from t
group by classification, propertytype, region, timebucket