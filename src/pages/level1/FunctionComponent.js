import React, { useEffect, useState } from 'react';

export function FunctionComponent(props) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        // console.log("useEffect");
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(timer)
    }, [])
    // console.log("return")
    return (
        <div>
            <h3>FunctionComponent</h3>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}
// 16.8之后之后新增的hooks
// 如果你熟悉 React class 的⽣生命周期函数，
//你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
