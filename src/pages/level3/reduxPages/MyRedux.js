import React, { Component } from 'react'


export function createStore(reducer) {
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