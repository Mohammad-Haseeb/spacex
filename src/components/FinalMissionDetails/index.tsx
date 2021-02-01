import React from 'react';
import { useLaunchMissionInfoQuery } from '../../generated/graphql';
import {useParams } from 'react-router-dom';
import ReactPlayer from "react-player";
import {Loading} from '../loading';


 export let CompoleteDetails=()=>{
    let { invoiceId } = useParams();
    let x:string=invoiceId==="0"?"1":invoiceId;
    
    const { data, loading, error } = useLaunchMissionInfoQuery({
           variables: {
              id: x
           },
         });
         if (loading)
        return (<Loading/>)

    if (error || !data)
        return <h1 style={{color:"white"}}>Error</h1>
    

        
    return(
        <>
        <div style={{color:"white"}}>
                  <h1 ><span style={{color: "#777" ,fontSize:"40px"}}> Mission: {data.launch?.mission_name}</span></h1>

        <p  style={{color: "#777" ,fontSize:"30px", fontWeight:"bold", fontFamily:"Source Sans Pro"}}>{data.launch?.details!=null && 
        data.launch?.details!=undefined?"Descritpion :"+data.launch?.details:""}</p>
        <p >{data.launch?.rocket?.rocket_name}</p>
        
        <p >{data.launch?.launch_year}</p>
        ￼


Falcon 1


        { <ReactPlayer
        style={{margin:"0 auto"}}
        url={data.launch?.links?.video_link!=undefined?data.launch.links.video_link:"https://www.youtube.com/watch?v=ujX6CuRELFE"}
      />
       }
   </div>
        

        </>
    );
}

