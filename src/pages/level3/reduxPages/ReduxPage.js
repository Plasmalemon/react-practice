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

    render() {
        console.log('store', store);

        return (
            <div>
                <h3>ReduxPage</h3>
                <p>{store.getState()}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
            </div>
        )
    }
}

export default ReduxPage
