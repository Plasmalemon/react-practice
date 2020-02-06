import React, { Component } from 'react'
// 16.4 之后的生命周期
class NewLifeCycleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
        console.log('constructor', this.state)
    }

    static getDerivedStateFromProps(props, state) {
        console.log('static getDerivedStateFromProps', state)
        return null
    }
    // 在render之后，在componentDidUpdate之前
    // getSnapshotBeforeUpdate()
    // 在最近⼀一次渲染输出(提交到 DOM 节点)之前调⽤用。它使得组件能在发⽣生更改之前从 DOM 中 捕获⼀一些信息(例例如，滚动位置)。
    // 此⽣生命周期的任何返回值将作为参数传递给 componentDidUpdate()。
    // 此⽤用法并不常见，但它可能出现在 UI 处理中，如需要以特殊⽅式 处理滚动位置的聊天线程等
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevState)
        return { ...prevState, omg: 'omg' };
    }


    // 这里的生命周期函数之所以不用箭头函数是因为
    // 在源码中 是要通过 ctc.componentWillMount 来获取生命周期函数的
    // UNSAFE_componentWillMount() {
    //     console.log('UNSAFE_componentWillMount', this.state)
    // }
    componentDidMount() {
        console.log('componentDidMount', this.state)
    }

    // UNSAFE_componentWillUpdate(nextProps, nextState) {
    //     console.log('UNSAFE_componentWillUpdate', this.state, nextState)
    // }
    componentDidUpdate() {
        console.log('componentDidUpdate', arguments)
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
                <h3>NewLifeCycleComponent</h3>
                <button onClick={this.setCounter}>{counter}</button>
                {!!(counter % 2) && <Foo counter={counter} />}
            </div>
        )
    }
}

export default NewLifeCycleComponent


class Foo extends Component {

    state = {}

    // 只有在已挂载组件的props更新之前才会更新
    // UNSAFE_componentWillReceiveProps() {
    //     console.log('UNSAFE_componentWillReceiveProps', this.props)
    // }

    // UNSAFE_componentWillMount() {
    //     console.log('UNSAFE_componentWillMount')
    // }

    static getDerivedStateFromProps(props, state) {
        console.log('static getDerivedStateFromProps', props)
        return null
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


// V16.4之后的⽣生命周期:
//  V17可能会废弃的三个⽣生命周期函数用getDerivedStateFromProps替代，目前使⽤的话加上UNSAFE_:
// componentWillMount componentWillReceiveProps componentWillUpdate
// 引⼊入两个新的生命周期函数:
// static getDerivedStateFromProps getSnapshotBeforeUpdate


// 原来(React v16.0前)的⽣命周期在React v16推出的Fiber之后就不合适了，因为如果要开启async rendering，在render函数之前的所有函数，都有可能被执行多次。
// 原来(React v16.0前)的⽣生命周期有哪些是在render前执⾏行行的呢? componentWillMount componentWillReceiveProps shouldComponentUpdate componentWillUpdate
// 如果开发者开了async rendering，⽽且⼜在以上这些render前执行的⽣生命周期方法做AJAX请求的话，那AJAX将被无谓地多次调用。。。明显不是我们期望的结果。⽽且在componentWillMount⾥发起AJAX，不管多快得到结果也赶不上⾸次render，而且componentWillMount在服务器端渲染也会被调⽤到(当然，也许这是预期的结果)，这样的IO操作放在componentDidMount⾥更合适。
// 禁⽌不能⽤⽐劝导开发者不要这样用的效果更好，所以除了shouldComponentUpdate，其他在render函数之前的所有函数 (componentWillMount，componentWillReceiveProps， componentWillUpdate)都被getDerivedStateFromProps替代。
// 也就是⽤⼀个静态函数getDerivedStateFromProps来取代被deprecate的几个⽣命周期函数，就是强制开发者在render之前只做⽆副作⽤的操作，而且能做的操作局限在根据props和state决定新的state

// React v16.0刚推出的时候，是增加了⼀一个componentDidCatch⽣命周期函数，这只是一个增量式修改，完全不影响原有生命周期函数;但是，到了React v16.3，大改动来了，引⼊了两个新的⽣命周期函数。
// 新引⼊了两个新的⽣命周期函数: static getDerivedStateFromProps ， getSnapshotBeforeUpdate
//  static getDerivedStateFromProps(props, state)
// getDerivedStateFromProps 会在调用 render ⽅法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新state，如果返回 null 则不更新任何内容。
// 请注意，不管原因是什么，都会在每次渲染前触发此⽅法。这与UNSAFE_componentWillReceiveProps形成对⽐比，后者仅在父组件重新渲染时触发，⽽不是在内部调⽤setState时
