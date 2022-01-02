import React from "react";
import {TextField} from '@mui/material'

const InputStyle = {
    marginTop: "5%"
}

export default function Inputs(props){
    return(
        <>
            <TextField id="standard-basic1" label="Full Name" variant="standard" onChange={(event)=>{props.setFullName(event.target.value)}} />
            <TextField id="standard-basic2" label="Id Number" variant="standard" style={InputStyle} onChange={(event)=>{props.setIdNumber(event.target.value)}} />
            <TextField id="standard-basic3" label="Password" type="password" variant="standard" style={InputStyle} onChange={(event)=>{props.setPassword(event.target.value)}} />
        </>
    )
}