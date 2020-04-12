export function setName(username) {
    // return dispatch => {
    //     setTimeout(() => { // Asynchronous dispatch using thunk
    //         dispatch({
    //             type: "SET_NAME",
    //             payload: username
    //         })
    //     }, 2000); // Simulate server request
    // }

    return { // Asynchronous Promise dispatch using promise-middleware (uses SET_NAME_FULFILLED action when done)
        type: "SET_NAME",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(username);
            }, 2000)
        })
    }
};

export function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    };
};