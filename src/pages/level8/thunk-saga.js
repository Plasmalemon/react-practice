
import { call, put, takeEvery } from "redux-saga / effects";
// 模拟登录接口
const UserService = {
    login(userName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userName === "⼩小明") {
                    resolve({ userName: "⼩小明" });
                } else {
                    reject({ err: "⽤户名或密码错误" });
                }
            }, 1000);
        });
    }

};
//worker saga
function* loginHandle(action) {
    try {
        yield put({ type: "loginRequest" }); //登录
        const res = yield call(UserService.login,
            action.payload.userName);
        console.log("res", res);
        yield put({
            type: "loginSuccess", payload:
                { ...res }
        });
    } catch (err) {
        yield put({
            type: "loginFailure", payload:
                { ...err }
        });
    }
}
//watcher saga
function* mySaga(props) {
    yield takeEvery("login", loginHandle);
}
export default mySaga;
// 2. 注册redux - saga，./store/index.js

import { createStore, applyMiddleware } from "redux";

// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import mySaga from "./mySaga";
const sagaMiddleware = createSagaMiddleware();
const loginInfo = {
    isLogin: false,
    loading: false,
    userName: ""
};
function loginReducer(state = { ...loginInfo },
    action) {
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


const store = createStore(loginReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
export default store;

// 测试，LoginPage.js


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
                <button onClick={() =>
                    login(this.state.userName)}>
                    {loading ? "loading..." : "login"}
                </button>
                <p>{err}</p>
            </div >
        );
    }
}

export default connect(
    state => ({
        isLogin: state.isLogin,
        loading: state.loading,
        err: state.err
    }),
    {
        login: userName => ({
            type: "login",
            payload: { userName }
        })
    }
)(LoginPage);

// redux-saga 使⽤了 ES6 的 Generator 功能，让异步的流程 更易于读取，写⼊和测试。
// (如果你还不熟悉的话，这里有 一些介绍性的链接) 通过这样的方式，这些异步的流程看起 来就像是标准同步的 Javascript 代码。
// (有点像async / await，但 Generator 还有⼀一些更更棒⽽而且我们也需要 的功能) 。
// 不同于 redux thunk，你不会再遇到回调地狱了，你可以很 容易地测试异步流程并保持你的 action 是⼲净的，
// 因此我们 可以说redux - saga更擅长解决复杂异步这样的场景，也更便于测试。