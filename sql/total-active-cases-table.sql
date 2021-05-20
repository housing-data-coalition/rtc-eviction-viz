with t as (
    select
        classification,
        case when
            propertytype is null then 'All' else propertytype end as propertytype,
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
            fileddate < '2020-03-21' then 'Issued Prepandemic'
            else 'Issued Pandemic' end as timebucket
    from oca_index
    where status ~ 'Active' and
    classification = any('{Holdover,Non-Payment}')
)
select 
    count(*) as count,
    concat(region,'.',timebucket, '.', propertytype,'.', classification) as category
from t
group by classification, propertytype, region, timebucket