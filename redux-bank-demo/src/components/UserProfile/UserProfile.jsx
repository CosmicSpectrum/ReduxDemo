import React, {useEffect} from "react";
import Title from "./Title/Title";
import Styled from 'styled-components';
import {Card, CardHeader, Divider, CardContent, Typography} from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators } from "../../state";
import { bindActionCreators } from "redux";
import DepositOrWithdrow from "./DepositOrWithdrow/DepositOrWIthdrow";

const ProfileWrapper = Styled.div((props)=>({
    width: '50%',
    margin: "0 auto",
    marginTop: '5%'
}))


export default function UserProfile(props) {
    const account = useSelector(state => state.account);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const {getBalance} = bindActionCreators(actionsCreators, dispatch);

    useEffect(()=>{
        if(users && !account){
            getBalance(users.IdNumber);
        }
    },[users])

    return(
        <ProfileWrapper>
            <Title />
            <Card>
                <CardHeader style={{textAlign: "center", userSelect: "none"}} title="Deposit/Withdrow Money" />
                <Divider />
                <CardContent>
                    <Typography sx={{fontSize: 20, userSelect: 'none'}}>
                       {`The Current Balance For ${users && users.FullName}'s Account:`}
                    </Typography>
                    <Typography align="center" sx={{fontSize: 90, userSelect: "none"}}>{account}</Typography>
                </CardContent>
                <DepositOrWithdrow />
            </Card>
        </ProfileWrapper>
    )
}