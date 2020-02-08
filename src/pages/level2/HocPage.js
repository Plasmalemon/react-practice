import React, { Component } from 'react'
import './index.css'

// 为了提高组件复用率，可测试性，就要保证组件功能单一性;
// 但是若要满足复杂需求就要扩展功能单一的组件，在React里就有了HOC(Higher-Order Components)的概念
// 定义:是一个函数，它接收一个组件并返回另一个组件。

function Child(props) {
    return <div>Child-{props.name}</div>
}


// 繁琐
// 这里的Cmp是function组件或者class组件
// const foo = Cmp => {
//     return props => {
//         return (
//             <div>
//                 <Cmp {...props} />
//             </div>
//         )
//     }
// }

// 简化
const foo = Cmp => props => {
    // console.log('Cmp', Cmp)
    return (
        <div className="border">
            <Cmp {...props} />
        </div>
    )
}

// const foo = Cmp => props => <div>
//     <Cmp {...props} />
// </div>
// 之所以不写成这种形式是因为箭头函数的返回值如果是多行的话需要用花括号包裹一下,

@foo
@foo
class Child2 extends Component {
    render() {
        return (
            <div>Child-{this.props.name}</div>
        )
    }
}
// javascript.implicitProjectConfig.experimentalDecorators
// 这里可能需要你的编辑器配置一下 支持装饰器语法

// 处理原生标签
const fooHost = cmp => {
    // console.log('fooHost', cmp)
    // return cmp // 返回原先标签
    // element, config , child
    // return React.cloneElement(cmp, { className: 'border' })
    // type, config , child
    // return React.createElement(cmp.type, { ...cmp.props, className: 'border' })
    return <cmp.type {...cmp.props} />
}

class HocPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    // 这不仅仅是性能问题 - 重新挂载组件会导致该组件及其所有子组件的状态丢失。
    // 如果在组件之外创建 HOC，这样一来组件只会创建一次。因此，每次 render 时都会是同一个组件。一般来说，这跟你的预期表现是一致的。
    // 在极少数情况下，你需要动态调用 HOC。你可以在组件的生命周期方法或其构造函数中进行调用

    // 高阶组件的好处可以链式调用, 可以使用装饰器
    Foo = foo(foo(Child))
    render() {

        return (
            <div>
                <h4>HocPage</h4>
                {/* 调用方法一 */}
                <this.Foo name='msg' />
                {/* 调用方法二 */}
                {foo(Child)({ name: 'hhh' })}

                <Child2 name="child2" />

                {fooHost(<div>omg</div>)}
            </div>
        )
    }
}

export default HocPage

//
// 问题
// 虽然高阶组件的约定是将所有 props 传递给被包装组件，但这对于 refs 并不适用。
// 那是因为 ref 实际上并不是一个 prop - 就像 key 一样，它是由 React 专门处理的。
// 如果将 ref 添加到 HOC 的返回组件中，则 ref 引用指向容器组件，而不是被包装组件
// 这个问题的解决方案是通过使用 React.forwardRef API（React 16.3 中引入）
// https://react.docschina.org/docs/forwarding-refs.html
