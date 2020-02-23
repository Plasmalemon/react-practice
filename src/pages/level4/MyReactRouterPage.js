import React, { Component } from 'react'
// import { BrowserRouter, Link, Route } from 'react-router-dom'
import { BrowserRouter, Link, Route } from './MyReactRouter'
import HomePage from './reactTouterPages/HomePage'
import UserPage from './reactTouterPages/UserPage'


class MyReactRouterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h3>MyReactRouterPage</h3>
                <BrowserRouter>
                    <Link to="/homepage">首页</Link>
                    <Link to="/user">用户中心</Link>
                    <Route path="/homepage" component={HomePage} />
                    <Route path="/user"
                        component={UserPage}
                    />
                    <Route render={() => <div>404</div>} />
                </BrowserRouter>
            </div>
        )
    }
}

export default MyReactRouterPage
