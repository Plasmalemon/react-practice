import React, { Component } from 'react'
import { Consumer } from './AppContext'

class TopBar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h4>TopBar</h4>
                <Consumer>
                    {
                        ctx => <div>{ctx.user.name}</div>
                    }
                </Consumer>
            </div>
        )
    }
}

export default TopBar
