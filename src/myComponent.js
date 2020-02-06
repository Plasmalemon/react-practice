import React, { Component, useState } from 'react';

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.conterHandle = this.conterHandle.bind(this);
    }

    componentDidMount() {
        // this.conterHandle();
        document.body.addEventListener('click', this.conterHandle, false)
    }

    conterHandle() {
        this.setState({
            counter: this.state.counter + 1
        })
        // this.setState({
        //     counter: this.state.counter + 2
        // })

        // this.setState((nextState) => {
        //     return {
        //         counter: nextState.counter + 1
        //     }
        // })
        // this.setState((nextState) => {
        //     return {
        //         counter: nextState.counter + 2
        //     }
        // })

        // setTimeout(() => {
        //     this.setState({
        //         counter: this.state.counter + 2
        //     })
        //     console.log(this.state.counter);
        // }, 0)
        console.log(this.state.counter);
    }

    // conterHandle = () => {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }


    render() {
        const { counter } = this.state;
        return (
            <div>
                <button onClick={() => this.setState({ counter: counter + 1 })}>{counter}</button>
                <button onClick={() => this.conterHandle()}>{counter}</button>
                <button onClick={this.conterHandle}>{counter}</button>

            </div>
        )
    }
}


// export default class MyComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0
//         }
//         this.conterHandle = this.conterHandle.bind(this);
//     }

//     componentDidMount() {
//         // this.conterHandle();
//         document.body.addEventListener('click', this.conterHandle, false)
//     }

//     conterHandle() {
//         this.setState({
//             counter: this.state.counter + 1
//         })
//         // this.setState({
//         //     counter: this.state.counter + 2
//         // })

//         // this.setState((nextState) => {
//         //     return {
//         //         counter: nextState.counter + 1
//         //     }
//         // })
//         // this.setState((nextState) => {
//         //     return {
//         //         counter: nextState.counter + 2
//         //     }
//         // })

//         // setTimeout(() => {
//         //     this.setState({
//         //         counter: this.state.counter + 2
//         //     })
//         //     console.log(this.state.counter);
//         // }, 0)
//         console.log(this.state.counter);
//     }

//     // conterHandle = () => {
//     //     this.setState({
//     //         counter: this.state.counter + 1
//     //     })
//     // }


//     render() {
//         const { counter } = this.state;
//         return (
//             <div>
//                 {/* <button onClick={() => this.setState({ counter: counter + 1 })}>{counter}</button> */}
//                 {/* <button onClick={() => this.conterHandle()}>{counter}</button> */}
//                 {/* <button onClick={() => this.conterHandle()}>{counter}</button> */}
//                 <button onClick={this.conterHandle}>{counter}</button>

//             </div>
//         )
//     }
// }

// export default function MyComponent() {
//     const [conter, setConter] = useState(0);
//     return (
//         <button onClick={() => setConter(conter + 1)}>{conter}</button>
//     )
// }
