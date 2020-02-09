import React, { Component } from 'react'
import store from './store/'

class ReduxPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate();
        })
    }



    add = () => {
        store.dispatch({ type: "add" })
    }

    minus = () => {
        store.dispatch({ type: "minus" })
    }
    // redux-thunk 支持 dispatch function，以此让 action creator 控制反转。
    // 被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它。这类的 function 就称为 thunk。
    asyAdd = () => {
        store.dispatch(dispatch => {
            setTimeout(() => {
                dispatch({ type: "add" })
            }, 1000)
        })
    }

    render() {
        console.log('store', store);

        return (
            <div>
                <h3>ReduxPage</h3>
                <p>{store.getState()}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.asyAdd}>asyAdd</button>
            </div>
        )
    }
}

export default ReduxPage
