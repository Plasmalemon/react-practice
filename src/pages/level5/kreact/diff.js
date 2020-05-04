import { initVnode } from './virtual-dom';

// 假的diff
export function diff(cache, newVnode) {
    const { vnode, parentNode, node } = cache;
    console.log('cache', cache);

    // newVnode
    // diff 逻辑
    // 简单的replace,直接做了替换
    const newNode = initVnode(newVnode, parentNode);
    parentNode.replaceChild(newNode, node)
    return newNode
}