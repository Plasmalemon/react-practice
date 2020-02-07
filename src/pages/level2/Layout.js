import React, { Component } from 'react'
import TopBar from './TopBar'
// 组件复核
class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        const { title = "商城" } = this.props
        document.title = title
    }

    render() {
        console.log(this.props)
        const { showTopbar, children } = this.props
        return (
            <div>
                <h3>Layout</h3>
                {showTopbar && <TopBar />}
                {/* {this.props.children} */}
                {children.btn}
                {children.txt}
            </div>
        )
    }
}

export default Layout
