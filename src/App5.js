// import React, { Component } from 'react'
import React from './pages/level5/kreact'
// import ReactDOM from './pages/level5/ReactDOM';

import './index.css'

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    handle = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        const { counter } = this.state;
        return (
            <div>
                <button onClick={this.handle}>{counter}</button>
                <div className="border">{this.props.name}</div>
                {
                    [1, 2, 3].map(item => <FunctionComponent key={item} name={'FunctionComponent' + item} />)
                }
            </div>
        )
    }
}

function FunctionComponent(props) {
    return <div className="border">{props.name}</div>
}


// 节点分为4种， 1原生标签2文本节点3.class组件4.Function组件
export const jsx = (
    <div className="border">
        <div className="border"> 我是文本</div>
        <FunctionComponent name="FunctionComponent" />
        <ClassComponent name="ClassComponent" />
    </div>
)


// export default jsx