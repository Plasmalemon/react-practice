import React, { useReducer, useEffect } from 'react';
import { FruitList, FruitAdd } from './MultipleHooksPage'

// reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
// 为什么叫reducer是因为它和reduce里边的callback属于相同类型
// useReducer是useState的可选项，常用于组件有复杂状态逻辑时，类似于redux中reducer概念。

function fruitReducer(state = [], action) {
    switch (action.type) {
        case "init":
        case "replace":
            return [...action.payload];
        case "add":
            return [...state, action.payload]
        default:
            return state;
    }
}

function UseReducerPage() {
    const [fruit, dispatch] = useReducer(fruitReducer, ['water'])

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'init', payload: ['apple', 'banana'] })
        }, 1000)
    }, []);
    return (
        <div>
            <h3>UseReducerPage</h3>
            <FruitList fruits={fruit} setFruits={newList => dispatch({ type: 'replace', payload: newList })} />
            <FruitAdd
                fruits={fruit}
                addFruit={name => dispatch({ type: "add", payload: name })}
            />
        </div>
    )
}


export default UseReducerPage;
