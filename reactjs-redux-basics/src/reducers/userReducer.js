const userReducer = (state = {
    name: "Joshua",
    age: 17
}, action) => {
    switch(action.type) {
        case "SET_NAME_FULFILLED" :
            state = {
                ...state, // Get properties of old state object and set them to new one
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

export default userReducer;