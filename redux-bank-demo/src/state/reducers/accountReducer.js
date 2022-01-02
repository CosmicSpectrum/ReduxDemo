const reducer = (state = null, action ) =>{
    switch(action.type){
        case 'deposit':
            return state + action.payload;
        case 'withdrow':
            return state - action.payload;
        case 'getAmount':
            return state = action.payload; 
        default:
            return state;
    }
};

export default reducer;