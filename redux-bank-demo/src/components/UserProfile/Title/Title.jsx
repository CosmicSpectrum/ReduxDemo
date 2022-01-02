import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

export default function Title(props){
    const users = useSelector(state => state.users);

    return(
        <>
            <Typography align="center" sx={{...props.style , fontSize: 40, fontWeight: "bold", userSelect: "none" }}>
                {`Welcome ${users && users.FullName}`}
            </Typography>
        </>
    )
}