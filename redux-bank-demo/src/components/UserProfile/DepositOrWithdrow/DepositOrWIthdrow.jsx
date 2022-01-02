import React, {useState} from "react";
import {useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionsCreators } from '../../../state/index';
import { TextField, Button } from "@mui/material";
import Styled from 'styled-components';

const InputStyle = {
    width: '100%'
}

const ButtonStyle = {
    width: '35%',
    height: '5.5vh'
}

const DepositeAndWithdrowWrapper = Styled.div((props)=>({
    width: '50%',
    margin: "0 auto",
    marginTop: '2%'
}))

const ButtonWrapper = Styled.div((props)=>({
    display: 'flex',
    justifyContent: "space-evenly",
    marginTop: '2.5%',
    marginBottom: "2.5%"
}))


export default function DepositOrWithdrow(){
    const [amountOfMoney, setAmountOfMoney] = useState(0);
    const dispatch = useDispatch();
    const {depositMoney,withdrowMoney} = bindActionCreators(actionsCreators, dispatch);


    return (
        <DepositeAndWithdrowWrapper>
            <TextField style={InputStyle} label="Enter Amount To Deposit/Withdrow" variant="filled" onChange={(event) => {setAmountOfMoney(event.target.value)}} />
            <ButtonWrapper>
                <Button style={ButtonStyle} variant="contained" color="success" onClick={()=>{depositMoney(Number(amountOfMoney))}}>Deposit</Button>
                <Button style={ButtonStyle} variant="contained" color="error" onClick={()=>{withdrowMoney(Number(amountOfMoney))}}>Withdrow</Button>
            </ButtonWrapper>
        </ DepositeAndWithdrowWrapper>
    )
}