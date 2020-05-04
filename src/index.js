// import React from 'react';
// import ReactDOM from 'react-dom';
// level5中用到一下两个
import React from './pages/level5/kreact'
import ReactDOM from './pages/level5/kreact/ReactDOM';

import './index.css';
// import App from './App';
import App2 from './App2'
import { jsx } from './App5';
import * as serviceWorker from './serviceWorker';

// import { Provider } from 'react-redux'
// import { Provider } from './pages/level4/reactReduxPages/myReactRedux'
import { Provider } from './pages/level4/reactReduxPages/myReactRedux2'


import store from './pages/level4/reactReduxPages/store/Store'

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//     <Provider store={store}>
//         <App2 />
//     </Provider>,
//     document.getElementById('root'));


ReactDOM.render(
    jsx,
    document.getElementById('root'));

// serviceWorker.unregister();


// 失败案例
// import { Route, Router } from 'react-router-dom'
// import HomePage from './pages/level4/reactTouterPages/HomePage';
// //把route参数传递给你的组件
// function FadingRoute({ component: Component, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={routeProps => (
//                 <Component {...routeProps} />
//             )}
//         />
//     );
// }

// ReactDOM.render(
//     <Router>
//         <FadingRoute path="/cool" component={<HomePage />} />
//     </Router>,
//     document.getElementById('root')
// );
