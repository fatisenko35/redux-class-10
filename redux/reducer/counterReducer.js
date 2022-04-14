const initialState = {
    counter : 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return {...state, counter : state.counter + 1}
        case 'DECREASE_COUNTER':
            return {...state, counter : state.counter - 1}
        case 'RESET':
            return {...state, counter : initialState}
        default:
            return state
    }
}

export default counterReducer;