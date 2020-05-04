import { diff } from './diff'

//  jsx被babel-loader处理过后变成js dom对象，然后交给createElement变成成熟的虚拟DOM

function createElement(type, props, ...children) {
    console.log("createElement", type, props, ...children);
    // 返回一个vnode
    // vnode并不是我们想要的树状结果。我们需要通过props.children = children变成树状结果

    // 构建成树状图
    props.children = children;

    // 不同类型的dom节点作区分
    let vtype;
    if (typeof type === 'string') {
        // 原生标签
        vtype = 1;
    } else if (typeof type === 'function') {
        // class： 2或者Function组件3
        vtype = type.isReactComponent ? 2 : 3;
    }
    return {
        type,
        vtype,
        props
    }
}

class Component {
    static isReactComponent = {};
    constructor(props) {
        this.props = props
        this.$cache = {} // 可以存储父节点，在每次初始化的时候去拿父节点，初始化是从上往下进行的
        this.state = {}
    }

    setState = (nextState, callback) => {
        //  真实的setState是一个批量处理，我们也成为异步
        // 我们暂时写一个假的
        // setState()是一个合并, hooks是直接覆盖
        this.state = {
            ...this.state,
            ...nextState
        };
        console.log('state', this.state);
        this.forceUpdate();
    }
    forceUpdate = () => {
        // vnode -> node -> container
        const newVnode = this.render();
        const { $cache: cache } = this
        const newNode = diff(cache, newVnode); // newVnode -> node, 最终更新到container
        console.log('newVnode', newVnode);
        // 每次更新vnode
        this.$cache = {
            ...cache,
            vnode: newVnode,
            node: newNode,
        }
    }
}

const React = { createElement, Component }

export default React