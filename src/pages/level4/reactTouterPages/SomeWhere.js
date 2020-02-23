import React, { Component } from 'react'

class SomeWhere extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        console.log("router props", this.props);
        return (
            <div>
                <h3>SomeWhere</h3>
            </div>
        )
    }
}

export default SomeWhere
