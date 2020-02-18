import React, { Component, Fragment } from 'react';
import MyComponent from './pages/level1/MyComponent';
import { FunctionComponent } from './pages/level1/FunctionComponent';
import ClassComponentState from './pages/level1/ClassComponentState';
import EventHandleComponent from './pages/level1/EventHandleComponent';
import LifeCycleComponent from './pages/level1/LifeCycleComponent';
import NewLifeCycleComponent from './pages/level1/NewLifeCycleComponent';
import HomePage from './pages/level2/HomePage';

import { Provider, Consumer, Parent } from './pages/level2/AppContext';
import HocPage from './pages/level2/HocPage';
import Composition from './pages/level2/Composition';
import HookPage from './pages/level2/HookPage';
import MultipleHooksPage from './pages/level2/MultipleHooksPage';
import UseReducerPage from './pages/level2/UseReducerPage';
import UseContext from './pages/level2/UseContext';
import FormPage from './pages/level3/FormPage';
import MyFormPage from './pages/level3/MyFormPage';
import DialogPage from './pages/level3/DialogPage';
import './pages/level3/compose'
import ReduxPage from './pages/level3/reduxPages/ReduxPage';
import ReduxPage2 from './pages/level4/reduxPages/ReduxPage2';

// function App() {
//   return (
//     <div className="App">
//       qqq
//     </div>
//   );
// }

// export default App;

// 组件通信方式一 props逐层传递
// 组件通信方式二 context v16.3 跨层级传递
// const Context = React.createContext();
// const Provider = Context.Provider; // 提供者
// const Consumer = Context.Consumer; // 消费者

const store = {
  user: {
    name: '小明'
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        {/* level1 */}
        <MyComponent />
        <FunctionComponent />
        <ClassComponentState />
        <EventHandleComponent />
        <LifeCycleComponent />
        <NewLifeCycleComponent />
        {/* level2 */}
        {/* <HomePage {...store} /> */}
        <Provider value={store}>
          {/* consumer方法一 */}
          {/* consumer 里边是个函数 */}
          {/* <Consumer>
            {
              ctx => (
                <Fragment>
                  <HomePage {...ctx} />
                  <HomePage {...ctx} />
                </Fragment>
              )
            }
          </Consumer> */}


          {/* consumer方法二 */}
          <HomePage />
          <HocPage />
          <Composition />
          <Parent />
          <HookPage type="Hook" />
          <MultipleHooksPage />
          <UseReducerPage />
          <UseContext />
          {/* level3 */}
          <FormPage />
          <MyFormPage />
          <DialogPage />
          <ReduxPage />
          {/* level4 */}
          <ReduxPage2 />
        </Provider>
      </div>
    )
  }
}
