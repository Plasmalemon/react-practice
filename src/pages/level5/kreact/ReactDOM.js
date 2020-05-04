import { initVnode } from './virtual-dom';


function render(vnode, container) {
    console.log('vnode', vnode);
    // vnode => node
    const node = initVnode(vnode, container)
    // 把真实的dom节点放到container中
    container.appendChild(node);
}

const ReactDOM = {
    render
}

export default {
    render
}