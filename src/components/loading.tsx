import React from 'react';
import loader from './../loader.gif';
export let Loading=()=>{
    return(
        <>
             <img src={loader} 
              style={{display:'flex',margin:"0 auto",width:"50%"}}
             alt="loader"/>
        </>
    );
}