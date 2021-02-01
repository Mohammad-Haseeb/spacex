import React from 'react';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";


interface Props{
    missionName: string | null | undefined
    launchSuccess:boolean | null | undefined
    LaunchYear:number | null | undefined
    ids:number
    missionId:any
}
const MissionList:React.FC<Props>=(props)=>{
    let statusChecker:string=props.launchSuccess?"MissionStatusSuccess":props.launchSuccess===null?"MissionStatusSuccess":props.launchSuccess===undefined?"MissionStatusSuccess":"MissionStatusFailed"
    let navigate = useNavigate();
    return(
        <>
         <div>
             <p ><span className="missionNumber">{props.ids }.Mission:</span> <span className={statusChecker}>{props.missionName}</span></p>
             <p className="yearStying">Year : {props.LaunchYear}</p>
            <Button  onClick={()=>{navigate(`missionDetails/${props.ids}`)}} variant="contained" style={{background:"#292727",fontWeight:"bold",fontFamily:"Source Sans Pro"}} color="secondary">Read More</Button>
         </div>
            

        </>
    );
}
export default MissionList;