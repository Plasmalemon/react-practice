// import { createStore, applyMiddleware } from 'redux'
import { createStore, applyMiddleware } from '../MyRedux'
// import thunk from "redux-thunk"
// import logger from "redux-logger"

function counterReducer(state = 0, action) {
    console.log('state', state)
    switch (action.type) {
        case 'add':
            return state + 1;
        case "minus":
            return state - 1;
        default:
            return state;
    }
}

// const store = createStore(counterReducer, applyMiddleware(thunk, logger))
const store = createStore(counterReducer, applyMiddleware(thunk, logger))
// 经过createStore包装过后 会增加 dispatch, subscribe, getState, replaceReducer, Symbol(boservable)


function logger() {
    return dispatch => action => {
        console.log(action.type + "执行了！");
        return dispatch(action);
    };
}

function thunk() {
    return dispatch => action => {
        if (typeof action === 'function') {
            return action(dispatch)
        }
        return dispatch(action);
    };
}

export default store

// 再次强调一下 Redux 应用只有一个单一的 store。当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store。
// 我们使用 combineReducers() 将多个 reducer
// createStore() 的第二个参数是可选的, 用于设置 state 初始状态。
// 这对开发同构应用时非常有用，服务器端 redux 应用的 state 结构可以与客户端保持一致, 那么客户端可以将从网络接收到的服务端 state 直接用于本地数据初始化