const mathsReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch(action.type) {
        case "ADD" :
            state = {
                ...state, // Get properties of old state object and set them to new one
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        default:
            break;
    }
    return state;
};

export default mathsReducer;