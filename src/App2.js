import React, { Component } from 'react'
// import ReactReduxPage2 from './pages/level4/reactReduxPages/ReactReduxPage2'
import ReactRouterPage from './pages/level4/reactTouterPages/ReactRouterPage'
import { Divider } from 'antd'
import MyReactRouterPage from './pages/level4/MyReactRouterPage'

export default class App2 extends Component {
    render() {
        return (
            <>
                {/* <ReactReduxPage2 /> */}
                {/* <ReactRouterPage /> */}
                <MyReactRouterPage />
            </>
        )
    }
}