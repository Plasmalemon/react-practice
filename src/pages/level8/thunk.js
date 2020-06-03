
import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from
    "./pages/PrivateRoute";
import { connect } from "react-redux";
class App extends Component {
    render() {
        const { userName } = this.props;
        return (
            <div className="App">
                <BrowserRouter>
                    <Link to="/">⾸首⻚页</Link>
                    <Link to="/user">个⼈人中⼼心</Link>

                    <Link to={userName ? "/user" : "/login"}>{userName || "登录"}</Link>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        {/* <Route path="/user" component={UserPage} /> */}
                        <Route path="/login" component={LoginPage} />
                        <PrivateRoute path="/user" component={UserPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default connect(state => ({
    userName: state.userName
}))(App);

// 创建store/index.js

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


const loginInfo = {
    isLogin: false,
    loading: false,
    userName: ""
};
function loginReducer(state = { ...loginInfo },
    action) {
    console.log("action", action.payload);
    switch (action.type) {
        case "loginRequest":
            return {
                ...state, ...loginInfo, loading:
                    true
            };
        case "loginSuccess":
            return {
                ...state, isLogin: true,
                loading: false, ...action.payload
            };
        case "loginFailure":
            return {
                ...state, ...loginInfo,
                ...action.payload
            };
        default:
            return state;
    }
}
const store = createStore(loginReducer, applyMiddleware(thunk));
export default store;

//  登录⻚面pages/LoginPage.js

import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { userName: "" };
    }
    render() {
        const { isLogin, location, login, loading, err } = this.props;
        const { redirect = "/" } = location.state || {};
        if (isLogin) {
            return <Redirect to={redirect} />;
        }
        return (
            <div>
                <h3>LoginPage</h3>
                <input
                    value={this.state.userName}
                    onChange={event => this.setState({
                        userName: event.target.value
                    })}
                />
                <button onClick={() => login(this.state.userName)}>
                    {loading ? "loading..." : "login"}
                </button>
                <p>{err}</p>
            </div>
        );
    }
}

export default connect(
    state => ({
        isLogin: state.isLogin,
        loading: state.loading,
        err: state.err
    }), {
    login: userName => dispatch => {
        dispatch({ type: "loginRequest" });
        setTimeout(() => {
            dispatch({
                type: "loginSuccess",
                payload: { userName }
            });
        }, 1000);
    }
}
)(LoginPage);

//路由守卫/pages/PrivatePage.js:


import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
class PrivateRoute extends Component {
    render() {
        const { isLogin, path, component } = this.props;
        if (isLogin) {
            return <Route path={path} component={component} />;
        }
        return (
            <Redirect
                to={{
                    pathname: "/login",
                    state: {
                        redirect: path
                    }
                }}
            />
        );
    }
}
export default connect(
    state => ({
        isLogin: state.isLogin

    }),
    {}
)(PrivateRoute);