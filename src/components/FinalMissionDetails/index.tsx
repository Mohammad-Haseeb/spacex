import React from 'react';
import { useLaunchMissionInfoQuery } from './../../generated/graphql';
import {useParams } from 'react-router-dom';

import {Loading} from './../loading';


 export let CompoleteDetails=()=>{
    let { invoiceId } = useParams();
    let x:string=invoiceId
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
        {
            console.log("Type",typeof(invoiceId))
        }
        <h1 style={{color:"white"}}> Hello {invoiceId} {data.launch?.launch_site?.site_name}</h1>
        </>
    );
}

