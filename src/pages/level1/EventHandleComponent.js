import React, { Component } from 'react'

class EventHandleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
        // 如果不使用箭头函数
        // this.submit = this.submit.bind(this)
    }

    // submit() {
    //     // const val = this.refs.input;
    //     // console.log(val.value)
    //     console.log(this.state.name)
    // }

    submit = () => {
        // const val = this.refs.input;
        // console.log(val.value)
        console.log(this.state.name)
    }

    change = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        const { name } = this.state
        return (
            <div>
                <h3>EventHandleComponent</h3>
                {/* <input ref="input" /> */}
                <input value={name} onChange={this.change} />
                <button onClick={this.submit}>submit</button>
                {/* <button onClick={() => this.submit.call(this)}>submit</button>
                <button onClick={() => this.submit.apply(this)}>submit</button> */}
            </div>
        )
    }
}

export default EventHandleComponent

//事件回调函数注意绑定this指向，常⻅见三种⽅方法:
// 1. 构造函数中绑定并覆盖: this.change = this.change.bind(this)
// <button onClick = {() => this.submit.apply(this)}> 提交 <button onClick = {() => this.submit.call(this)}> 提交
// 2. ⽅方法定义为箭头函数: change = () => { }
// 3. 事件中定义为箭头函数: onChange = {()=> this.change()}
// react⾥里里遵循单项数据流，没有双向绑定，输⼊入框要设置value 和onChange，称为受控组件
// TODO
// 高阶组件会更简单
