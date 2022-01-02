const reducer = (state = null, action)=>{
    switch(action.type){
        case 'login':
            return state = action.payload;
        case 'signout':
            return state = action.payload;
        default:
            return state; 
    }
}

export default reducer;