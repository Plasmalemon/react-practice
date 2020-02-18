import React, { Component } from 'react'
import { connect } from 'react-redux'



class ReduxPage2 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        console.log('props', this.props);
        const { counter, dispatch, add } = this.props
        return (
            <div>
                <h3>ReactReduxPage2  reacr-redux</h3>
                <p>{counter}</p>
                {/* 使用dispatch */}
                {/* <button onClick={() => dispatch({ type: 'add' })}>add</button> */}
                {/* 不使用dispatch */}
                <button onClick={add}>add</button>
            </div>
        )
    }
}

export default connect(
    //mapStateToProps, // 把state映射到props上
    state => ({ counter: state }),
    // mapDispatchToProps  如果不想用dispatch，把所有的dispatch方法映射到props上
    {
        add: () => ({ type: 'add' })
    }
)(ReduxPage2)
