import React, { Component } from 'react';
import MyComponent from './pages/level1/MyComponent';
import { FunctionComponent } from './pages/level1/FunctionComponent';
import ClassComponentState from './pages/level1/ClassComponentState';
import EventHandleComponent from './pages/level1/EventHandleComponent';

// function App() {
//   return (
//     <div className="App">
//       qqq
//     </div>
//   );
// }

// export default App;

export default class App extends Component {
  render() {
    return (
      <div>
        <MyComponent />
        <FunctionComponent />
        <ClassComponentState />
        <EventHandleComponent />
      </div>
    )
  }
}
