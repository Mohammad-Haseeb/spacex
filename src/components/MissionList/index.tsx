import React from 'react';
import { useMissionsInfoQuery } from './../../generated/graphql';
import MissionList from './MissionListAccordian';
import "./list.css";



const MissionContainer = () => {

    const { data, error, loading } = useMissionsInfoQuery();

    if (loading)
        return <h2>Loading</h2>

    if (error || !data)
        return <h1>Error</h1>
    

    return (
        <>
        <span className="Success"></span> <span className="text"> = Success</span><br/>
        <span className="fail"></span> <span className="text"> = Fail</span><br/>
        <ul style={{listStyle:"none",marginLeft:"0px"}}>
            {
                data.launches?.map((obj,ind)=>{
                       let missionId:any=obj?.mission_id;
                    return(<li  className="listContainer" key={ind}>
                    {<MissionList missionName={obj?.mission_name}
                     launchSuccess={obj?.launch_success} 
                    LaunchYear={obj?.launch_year} ids={ind} missionId={missionId}/>}</li>);
                })
            }
        </ul>
        </>
    )
}

export default MissionContainer;