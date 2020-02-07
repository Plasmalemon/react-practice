import React, { useState, useEffect } from 'react';

function MultipleHooksPage() {
    const [counter, setCounter] = useState(0);
    const [fruits, setFruits] = useState(["apple", "banana"]);
    return (
        <div>
            <h1>MultipleHooksPage</h1>
            {/* <p>{useDate().toLocaleTimeString()}</p> */}
            <p onClick={() => setCounter(counter + 1)}>{counter}</p>
            <FruitAdd
                fruits={fruits}
                addFruit={name => setFruits([...fruits, name])}
            />
            <FruitList fruits={fruits} setFruits={setFruits} />
        </div>
    );
}

function FruitList({ fruits, setFruits }) {
    // 定义的方法不可以放在useEffect里边去 这个是因为 useEfect是几个生命周期的结合, useEfect里边的内容比return里边的内容后执行
    // useEffect里边是放副作用的
    // useEffect(() => {
    //     const delFruit = delIndex => {
    //         const tem = [...fruits];
    //         tem.splice(delIndex, 1);
    //         setFruits(tem);
    //     };
    // })
    const delFruit = delIndex => {
        const tem = [...fruits];
        tem.splice(delIndex, 1);
        setFruits(tem);
    };
    return (
        <ul>
            {
                fruits.map((item, index) => (
                    <li key={item} onClick={() => delFruit(index)}>{item} </li>
                ))
            }
        </ul>
    );
}

function FruitAdd({ fruits, addFruit }) {
    const [name, setName] = useState("");
    return (
        <div>
            <input value={name} onChange={event => setName(event.target.value)} />
            <button onClick={() => addFruit(name)}>add</button>
        </div>
    );
}

export default MultipleHooksPage;
