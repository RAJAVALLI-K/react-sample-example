export const initialState = {
    name: 'Rajavalli',
    age: 222,
    tasks:[],
}

export const stateReducer = (state, action) => { //action two values--type and payload
    console.log(state, action);

    // state.name=action.payload;

    switch (action.type) {
        case "UPDATE_NAME": {
            return {
                ...state,
                name: action.payload,
            };
        }
        case "UPDATE_AGE": {
            return {
                ...state,
                age: action.payload,
            };
        }
        default:
            return state;
    }

}