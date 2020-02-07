import React, { Component } from 'react'
import { Consumer } from './AppContext'
import TopBar from './TopBar'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>HomePage</h3>
                <TopBar />
                <Consumer>
                    {
                        ctx => <HomeHandle {...ctx} />
                    }
                </Consumer>
            </div>
        )
    }
}

export default HomePage

function HomeHandle(props) {
    return (<div>{props.user.name}</div>)
}
