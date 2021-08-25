const userRequest = () => {
    return{
        type: "USER_REQUEST"
    }
}

const userSuccess = (data) => {
    return{
        type: "USER_SUCCESS",
        // data
    }
}

const userError = () => {
return{
    type: "USER_ERROR"
}
}

export{
    userRequest,
    userSuccess,
    userError
}