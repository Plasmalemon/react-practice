import React, { Component } from 'react'

class MyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
            // 强制同步跟新 不建议使用
            // this.state.date = new Date();
            // this.forceUpdate();
        }, 1000)
    }

    componentWillMount() {
        clearInterval(this.timer)
    }

    render() {
        const { date } = this.state;
        return (
            <div>
                <h3>ClassComponent</h3>
                {date.toLocaleTimeString()}
            </div>
        )
    }
}

export default MyComponent
