
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from
    "react-router-dom";
// ⽅方便便的内联渲染
ReactDOM.render(
    <Router>
        <Route path="/home" render={() => <div>Home</div>} />
    </Router>, node
);
// wrapping/composing


//把route参数传递给你的组件
function FadingRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={routeProps => (
                <Component {...routeProps} />
            )}
        />
    );
}

ReactDOM.render(
    <Router>
        <FadingRoute path="/cool" component={Something} />
    </Router>,
    node
);

// 但是当你用render的时候，你调⽤用的只是个函数。但是它和
// component一样，能访问到所有的[route props]。
