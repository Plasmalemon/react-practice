import React, { Component } from 'react'
import { createPortal } from 'react-dom';

// 所有的逻辑写在组件里边, 组件暴露api给外边调用就可以了
// 传送门，react v16之后出现的portal可以实现内容传送功能。


class Dialog extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        const doc = window.document
        this.node = doc.createElement("div")
        doc.body.appendChild(this.node)
    }
    componentWillUnmount() {
        window.document.body.removeChild(this.node)
    }


    render() {
        return createPortal(
            <div className="dialog">
                <h4>Dialog</h4>
            </div>,
            this.node
        )
    }
}

export default Dialog
// export class Dialog2 extends React.Component {
//     render() {
//         return null;
//     }
//     componentDidMount() {
//         const doc = window.document;
//         this.node = doc.createElement("div");
//         doc.body.appendChild(this.node);
//         this.createPortal(this.props);
//     }
//     componentDidUpdate() {
//         this.createPortal(this.props);
//     }
//     componentWillUnmount() {
//         unmountComponentAtNode(this.node);
//         window.document.body.removeChild(this.node);
//     }
//     createPortal(props) {
//         unstable_renderSubtreeIntoContainer(
//             this, //当前组件
//             <div className="dialog">{props.children}</div>, // 塞进传送门的JSX this.node // 传送门另一端的DOM node
//         );
//     }
// }

