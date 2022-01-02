import Gate from "../../utils/gate"

export const depositMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const withdrowMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'withdrow',
            payload: amount
        })
    }
}

export const getBalance = (userId) => {
    return (dispatch)=>{
        new Gate().get('getBalance', {userId: userId}).then(res=>{
            if(res.data){
                dispatch({type: 'getAmount', payload: res.data.balance});
            }else{
                dispatch({type: 'getAmount', payload: 0});
            }
        })
    }
}

export const loginUser = (user) => {
    return (dispatch)=>{
        new Gate().get('authUser', user).then(res=>{
            if(res.data.status){
                dispatch({type: 'login', payload: user});
            }else{
                dispatch();
            }
        })
    }
}

export const signOutUser = () =>{
    return (dispatch)=>{
        dispatch({type: 'signout', payload: null})
    }
}