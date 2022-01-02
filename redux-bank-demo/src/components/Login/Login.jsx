import React, {useState, useEffect} from 'react'
import { Card, CardHeader, CardContent, Divider, Typography, CardActions, Button} from '@mui/material'
import Styled from 'styled-components'
import Inputs from './Inputs/Inputs'
import {useSelector, useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux'
import { actionsCreators } from '../../state/index';

const CardStyle = {
    width: "20%",
    marginTop: '10%'
}

const CardWrapper = Styled.div(props => (
    {
        display: 'flex',
        justifyContent: 'center'
    }));


export default function Login(props){
    const [User, setUser] = useState({
        FullName: '',
        IdNumber: '',
        Password: ''
    })
    const dispatch = useDispatch();
    const {loginUser} = bindActionCreators(actionsCreators,dispatch);


    function handleFullNameChange(value){
        setUser(prev => ({...prev, FullName: value}));
    }

    function handleIdNumberChange(value){
        setUser(prev => ({...prev, IdNumber: value}));
    }

    function handlePasswordChange(value){
        setUser(prev => ({...prev, Password: value}));
    }

    return(
        <CardWrapper>        
            <Card style={CardStyle}> 
                <CardHeader title="ArTech Bank Login" />
                <Divider />
                <CardContent>
                    <Typography component='div'>
                        welcome to ArTech Bank, please sign in:
                    </Typography>
                    <Inputs setPassword={handlePasswordChange} setIdNumber={handleIdNumberChange} setFullName={handleFullNameChange} />
                </CardContent>
                <CardActions>
                    <Button onClick={()=>{loginUser(User)}} variant="contained">Login</Button>
                </CardActions>
            </Card>
        </CardWrapper>
    )
};