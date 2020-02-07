import React, { Component } from 'react'


// 组件通信方式一 props逐层传递
// 组件通信方式二 context v16.3 跨层级传递
// 组件通信方式三 如果⽗组件传递的是函数，则可以把子组件信息传⼊父组件，这个常称为状态提升
// 组件通信方式四 redux
export const Context = React.createContext();
export const Provider = Context.Provider; // 提供者
export const Consumer = Context.Consumer; // 消费者
export const handleConsumer = Cmp => props => {
    return <Consumer>{ctx => <Cmp {...ctx} {...props} />}</Consumer>
}


export const MyContext = React.createContext();
export const MyProvider = MyContext.Provider; // 提供者
export const MyConsumer = MyContext.Consumer; // 消费者

export class Parent extends Component {

    tellme(msg) {
        console.log("msg", msg);
    }
    render() {
        return (
            <div>
                <Child tellme={this.tellme} />
            </div>
        )
    }
}

class Child extends Component {
    submit = () => {
        this.props.tellme('search')
    }
    render() {
        return (
            <div>
                <h3>SearchPage</h3>
                <button onClick={this.submit}>提交</button>
            </div>
        )
    }
}