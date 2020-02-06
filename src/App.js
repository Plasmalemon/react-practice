import React, { Component } from 'react';
import MyComponent from './pages/MyComponent';
import { FunctionComponent } from './pages/FunctionComponent';

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
      </div>
    )
  }
}
