import React, { Component } from 'react'

class ClassComponentState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
        }
    }


    componentDidMount() {
        // 方法二 在componentDidMount生命周期中使用setTimeout定时器
        // this.timer = setTimeout(() => {
        //     this.setCounter()
        // })

        // 方法三  使用原生事件
        document.getElementById('test').addEventListener('click', this.setCounter)
    }

    // 体现异步(其实是批量执行, 是合并操作, hooks中setState是覆盖)
    // 每次setState的时候会向一个数组push一个状态,等所有的setState执行完毕之后,再去遍历这个数组, 从头到尾做个合并,
    // 再此次合并中 key值是counter,所以会对counter做个合并,也就是覆盖
    // 如果是个函数, 它会直接执行
    setCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
        // this.setState({
        //     counter: counter + 2
        // })


        // 方法一 使用nextState
        // this.setState(nextState => ({
        //     counter: nextState.counter + 1
        // }))
        // this.setState(nextState => ({
        //     counter: nextState.counter + 2
        // }))
        console.log('counter', this.state.counter)
    }

    render() {
        const { counter } = this.state;
        return (
            <div>
                <h3>ClassComponentState</h3>
                <button onClick={this.setCounter}>{counter}</button>
                <button id='test' >{counter}</button>
            </div>
        )
    }
}

export default ClassComponentState


// 总结: setState只有在合成事件和生命周期函数中是异步的，在原⽣事件和setTimeout中都是同步的，这⾥的异步其实是批量更新是合并操作。
// 如果想同步有三种方法
// 疑问 为什么合成事件是异步的?