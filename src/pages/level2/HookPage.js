import React, { useState, useEffect } from 'react';

// Hook是React16.8一个新增项，它可以让你在不编写class的情况下使用state以及其他的React特性。
// 使你在无需修改组件结构的情况下复用状态逻辑
// 可将组件中相互关联的部分拆分成更小的函数，复杂组件将变得更容易理解
// 更简洁、更易理解的代码

function HookPage(props) {
    // console.log('props', props);
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h3>HookPage</h3>
            <p>{useClock().toLocaleTimeString()}</p>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        </div>
    )
}

export default HookPage;

// 自定义hooks
// 自定义Hook是一个函数，其名称以“use”开头，函数内部可以调用其他的Hook。
// 一定use开头
function useClock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, []);
    return date
}

// 如果你正在将代码从 class 组件迁移到使用 Hook 的函数组件，则需要注意 useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的。
// 但是，我们推荐你一开始先用 useEffect，只有当它出问题的时候再尝试使用 useLayoutEffect。



// 只在最顶层使用 Hook，不要在循环，条件或嵌套函数中调用 Hook。(如果我们想要有条件地执行一个effect，可以将判断放到Hook的内部:)
// 只能用在function组件中或自定义hook中,不能用在class组件中
// 只在React函数(大写字母开头的函数组件, use开头的hook)中调用Hook。不要在普通的JavaScript函数中调用Hook:

// 我们在单个组件中可以使用多个state hook或者effect hook，那么React怎么知道哪个state对应哪个useState?
// 答案是React靠的是Hook调用的顺序。因为我们的示例中，Hook的调用顺序在每次渲染中都是相同的，所以它能够正常工作。
// 只要Hook的调用顺序在多次渲染之间保持一 致，React 就能正确地将内部state和对应的Hook进行关联。
// 要在React的函数组件中调用Hook;在自定义Hook中调用其他Hook
// 依赖项
