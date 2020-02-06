import React, { useEffect, useState } from 'react';

export function FunctionComponent(props) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log("useEffect");
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(timer)
    }, [])
    console.log("return")
    return (
        <div>
            <h3>FunctionComponent</h3>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}

