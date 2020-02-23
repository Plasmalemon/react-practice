import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Router } from 'react-router-dom'
import HomePage from './HomePage'
import UserPage from './UserPage'
// import SomeWhere from './SomeWhere'

class ReactRouterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="router-page">
                <h3>ReactRouterPage</h3>
                <BrowserRouter>
                    <Link to="/">首页</Link>
                    <Link to="/user">用户中心</Link>
                    {/* <Route to="somewhere" component={SomeWhere} /> */}
                    <Route exact path="/" component={HomePage} />
                    <Route path="/user"
                        component={UserPage} // 渲染的时候执行的是React.createElement,下面两种执行的括号
                        render={() => <UserPage />}
                        children={() => <UserPage />}
                    />

                </BrowserRouter>
            </div>
        )
    }
}

export default ReactRouterPage

// Route渲染优先级:children>component>render。
// 三者能接收到同样的[route props]，包括match, location and history，
// 但是当不匹配的时候，children的match为 null。

// 有时候，不管location是否匹配，你都需要渲染一些内容，这
// 时候你可以用children。 除了不管location是否匹配都会被渲染之外，其它工作⽅法与
// render完全⼀一样。


// 但是当你用render的时候，你调⽤用的只是个函数。但是它和
// component一样，能访问到所有的[route props]。


// component: component
// 只在当location匹配的时候渲染
// 当你⽤component的时候，Router会用你指定的组件和React.createElement创建⼀个新的[React element]。
// 这意味着当你提供的是一个内联函数的时候，每次render都会创建⼀个新的组件。
// 这会导致不再更新已经现有组件，⽽是直接卸载然后再去挂载⼀个新的组件。因此，当用到内联函数的内联渲染时
// ，请使用render或者children。



// 失败案例
// function ListItemLink({ to, name, ...rest }) {
//     console.log('ListItemLink props', arguments)
//     return (
//         <Route
//             path={to}
//             children={({ match }) => (
//                 <Link to={to} {...rest}>
//                     {name}
//                 </Link>
//             )}
//         />
//     );
// }

// class RouteChildren extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>RouteChildren</h3>
//                 {/* <Router> */}
//                 <ul>
//                     <ListItemLink other='34234' to="/somewhere" name="链接1" />
//                     <ListItemLink to="/somewhere-else" name="链接2" />
//                 </ul>
//                 {/* </Router> */}
//             </div>
//         );
//     }
// }
