import React, { Component } from 'react'
import TopBar from './TopBar'
import Layout from './Layout'


// 组件复合, 具名 和 不具名
class Composition extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        console.log(this.props)
        return (
            <>
                {/* 具名 */}
                {/* <Layout showTopbar title="首页">
                    <div>
                        <h3>Composition 具名</h3>

                    </div>
                </Layout> */}
                {/* 不具名 */}
                <Layout showTopbar title="首页">
                    {{
                        btn: <button>提交</button>,
                        txt: 'Composition 具名'
                    }}
                </Layout>
            </>
        )
    }
}

export default Composition


