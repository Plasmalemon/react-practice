import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { connect } from './myReactRedux'

import { connect } from './myReactRedux2'


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
                {/* 1.使用dispatch */}
                {/* <button onClick={() => dispatch({ type: 'add' })}>add</button> */}
                {/* 2.不使用dispatch */}
                <button onClick={add}>add</button>
                {/* 执行add方法的时候 其实是执行dispatch({type: 'add'}) */}
                {/* {add: (...arg) => dispatch(actionCreator(...arg))} */}
            </div>
        )
    }
}

export default connect(
    //mapStateToProps, // 把state映射到props上
    // state => ({ counter: state }),
    state => ({ counter: state.counter }), // 此处state.counter和combineReducers中key对应
    // mapDispatchToProps  如果不想用dispatch，把所有的dispatch方法映射到props上
    {
        add: () => ({ type: 'add' })
    }
)(ReduxPage2)
