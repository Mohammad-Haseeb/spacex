import React from 'react';
import { useLaunchMissionInfoQuery } from '../../generated/graphql';
import {useParams } from 'react-router-dom';
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
    
   let date=data.launch?.launch_year
     
        
    return(
        <>
        <div style={{color:"white"}}>
                  <h1 ><span style={{color: "#777" ,fontSize:"40px"}}> Mission: {data.launch?.mission_name}</span></h1>
        <div style={{color: "#777" ,fontSize:"30px", fontWeight:"bold", fontFamily:"Source Sans Pro"}}>
        <p  style={{color: "#777" ,fontSize:"30px", fontWeight:"bold", fontFamily:"Source Sans Pro"}}>{data.launch?.details!==null && 
        data.launch?.details!==undefined?"Descritpion :"+data.launch?.details:""}</p>
        <p >Rocket Name : {data.launch?.rocket?.rocket_name}</p>
        
        <p >{data.launch?.launch_year!==null &&data.launch?.launch_year!==undefined?"Launching Date : "+date:"" }</p>
        ￼
         </div>



         
   </div>
        

        </>
    );
}

