import { createStore, combineReducers } from 'redux'

function counterReducer(state = 0, action) {
    // console.log('state', state)
    switch (action.type) {
        case 'add':
            return state + 1;
        case "minus":
            return state - 1;
        default:
            return state;
    }
}

// const store = createStore(counterReducer)

const store = createStore(
    combineReducers({
        counter: counterReducer
    })
)

export default store