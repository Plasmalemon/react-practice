import React, { useState, useContext, useEffect } from 'react'

const ReduxContext = React.createContext()

export function Provider({ store, children }) {
    return (<ReduxContext.Provider value={store}>
        {children}
    </ReduxContext.Provider>)
}

export const connect = (
    mapStateToProps = state => state,
    mapDispatchToProps // {add: () => ({ type: 'add' })}
) => Cmp => props => {
    const store = useContext(ReduxContext) // 获取store
    console.log('store', store);

    const getMoreProps = () => {
        const stateProps = mapStateToProps(store.getState()) // 获取state并把state映射到props上
        const dispatchProps = bindActionCreators( // 本身没有dispatch方法
            mapDispatchToProps,
            store.dispatch
        )
        return {
            ...stateProps,
            ...dispatchProps
        }
    }
    console.log('自带的props', { ...props });
    const [moreProps, setMoreProps] = useState(getMoreProps())
    useEffect(() => {
        store.subscribe(() => {
            setMoreProps({
                ...moreProps,
                ...getMoreProps()
            })
        })
    }, []);
    return <Cmp {...props} {...moreProps} />
}

// actionCreator就是当前add方法
function bindActionCreator(actionCreator, dispatch) {
    console.log('actionCreator', actionCreator)
    return (...arg) => dispatch(actionCreator(...arg))
}

// 给actionCreators所有的方法绑定上dispatch,
// 使actionCreator变成下边样子 {add: (...arg) => dispatch(actionCreator(...arg))}
function bindActionCreators(actionCreators, dispatch) {
    console.log('omg', actionCreators);
    let obj = {} //不污染原来的
    for (let key in actionCreators) {
        obj[key] = bindActionCreator(actionCreators[key], dispatch)
    }
    console.log('obj', obj)// {add: (...arg) => dispatch(actionCreator(...arg))}
    return obj
}

