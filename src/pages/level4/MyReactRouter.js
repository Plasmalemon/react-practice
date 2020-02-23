import React, { Component, useContext } from "react";

import { createBrowserHistory } from "history";

const RouterContext = React.createContext();

export class BrowserRouter extends Component {
    constructor(props) {
        super(props)
        this.history = createBrowserHistory(this.props)
        this.state = {
            location: this.history.location
        }

        this.unlisten = this.history.listen(location => {
            this.setState({
                location
            })
        })
    }

    componentWillUnmount() {
        if (this.unlisten) {
            this.unlisten()
        }
    }
    render() {
        return (
            <RouterContext.Provider value={{
                history: this.history,
                location: this.state.location
            }}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}

export function Route(props) {
    const { path, component: Component } = props
    const { location } = useContext(RouterContext)
    const match = path === location.pathname
    return match ? <Component /> : ''
}

export class Link extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleClick = (event, history) => {
        event.preventDefault();
        console.log('...')
        // 跳转用到history  是从browserRouter 通过context向下传递的
        history.push(this.props.to)
    }

    render() {
        const { to, children } = this.props
        return (
            <RouterContext.Consumer>
                {
                    ctx => (<a href={to} onClick={(event) => this.handleClick(event, ctx.history)}>{children}</a>)
                }
            </RouterContext.Consumer>
        )
    }
}
