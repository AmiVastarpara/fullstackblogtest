const initialSate = {
    loggedIn:false
}

const AuthReducer = (state=initialSate,action)=>{
    switch (action.type) {
        case "login":
            return {
                ...state,
                loggedIn:true,
            }
        case "logout":
            return {
                ...initialSate
            }
        default:
            return state;
    }
}

export default AuthReducer;