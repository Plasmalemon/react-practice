import React, { Component } from 'react'
// 16.3 之前的生命周期
class LifeCycleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
        console.log('constructor', this.state)
    }
    // 这里的生命周期函数之所以不用箭头函数是因为
    // 在源码中 是要通过 ctc.componentWillMount 来获取生命周期函数的
    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount', this.state)
    }
    componentDidMount() {
        console.log('componentDidMount', this.state)
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('UNSAFE_componentWillUpdate', this.state, nextState)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate', this.state)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount', this.state)
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate', this.state)
        return true
    }



    setCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        const { counter } = this.state
        console.log('render', this.state)
        return (
            <div>
                <h3>LifeCycleComponent</h3>
                <button onClick={this.setCounter}>{counter}</button>
                {!!(counter % 2) && <Foo counter={counter} />}
            </div>
        )
    }
}

export default LifeCycleComponent


class Foo extends Component {

    // 只有在已挂载组件的props更新之前才会更新
    UNSAFE_componentWillReceiveProps() {
        console.log('UNSAFE_componentWillReceiveProps', this.props)
    }

    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount')
    }

    render() {
        const { counter } = this.props
        return (
            <div>
                {counter}
            </div>
        )
    }
}

// TODO 利用生命周期优化