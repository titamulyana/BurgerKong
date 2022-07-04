const initialState = {
    users : [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.payLoad
            }
        default:
           return state;
    }
}