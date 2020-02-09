import React, { Component } from 'react'


export function createStore(reducer, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }
    let currentState = undefined;

    const listeners = []

    function getState() {
        return currentState;
    }

    function dispatch(action) {
        currentState = reducer(currentState, action)
        listeners.map(listener => listener())
    }

    function subscribe(listener) {
        listeners.push(listener)
    }
    // 初始化
    dispatch({ type: '@@REDUX/00000' })

    return {
        getState,
        dispatch,
        subscribe
    }

}

export function applyMiddleware(...middlewares) {
    return createStore => (...args) => {
        const store = createStore(...args)
        let dispatch = store.dispatch;

        const midApi = {
            getState: store.getState,
            dispatch
        }

        const chain = middlewares.map(mw => mw(midApi))
        dispatch = compose(...chain)(dispatch)// 只给第一个中间件传值, 第一个中间件的返回值再做为下一个中间件的参数
        return { ...store, dispatch }
    }
}

function compose(...funcs) {
    const len = funcs.length
    if (len === 0) {
        return arg => arg
    }

    if (len === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}