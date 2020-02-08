import React, { Component } from 'react'
import { Consumer, handleConsumer } from './AppContext'
import TopBar from './TopBar'

const HandleConsumer = handleConsumer(HomeHandle);
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
                <HandleConsumer />
            </div>
        )
    }
}

export default HomePage

function HomeHandle(props) {
    return (<div>{props.user.name} - HomePage</div>)
}
