import React from 'react';
import { useMissionsInfoQuery } from './../../generated/graphql';
import MissionList from './MissionListAccordian';
import "./list.css";
import {Loading} from './../loading';


const MissionContainer = () => {

    const { data, error, loading } = useMissionsInfoQuery();

    if (loading)
        return (<Loading/>)

    if (error || !data)
        return <h1>Error</h1>
    

    return (
        <>
        <p style={{color:"white",marginLeft:"30px",marginBottom:"0px",marginTop:"0px",fontWeight:"bolder",fontSize:"40px"}}>Launches</p>
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