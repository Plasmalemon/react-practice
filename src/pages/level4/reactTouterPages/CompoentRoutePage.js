import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
class Foo extends Component {
    componentDidMount() {
        console.log("Foo componentDidMount");
    }
    componentWillUnmount() {
        console.log("Foo componentWillUnmount");
    }
    render() {
        const { counter } = this.props;
        return <div>Foo: {counter}</div>;
    }
}


export default class RouterPage extends Component {
    constructor(prop) {
        super(prop);
        this.state = { counter: 1 };
    }
    render() {
        const { counter } = this.state;
        return (
            <div>
                <button onClick={() => this.setState({ counter: counter + 1 })}>
                    {counter}
                </button>
                <BrowserRouter>
                    {/* 渲染component会调用 React.createElement, 如果使⽤下⾯这种匿名函数的形式，
每次都会⽣成一个新的匿名函数，导致生成的组件的 type总不相同，会产生重复的卸载和挂载。
所以请正确使⽤Route中的component和render。 */}
                    {/* <Route component={() => <Foocounter={this.state.counter} />} /> */}
                    {/* 以下才是正确使⽤用 */}
                    <Route render={() => <Foo counter={this.state.counter} />} />
                </BrowserRouter>
            </div>
        );
    }
}

// component: component
// 只在当location匹配的时候渲染
// 当你⽤component的时候，Router会用你指定的组件和React.createElement创建⼀个新的[React element]。
// 这意味着当你提供的是一个内联函数的时候，每次render都会创建⼀个新的组件。
// 这会导致不再更新已经现有组件，⽽是直接卸载然后再去挂载⼀个新的组件。因此，当用到内联函数的内联渲染时
// ，请使用render或者children。
