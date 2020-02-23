import React, { Component } from 'react'

class UserPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        console.log('router-props', this.props)
        return (
            <div>
                <h3>UserPage</h3>
            </div>
        )
    }
}

export default UserPage
