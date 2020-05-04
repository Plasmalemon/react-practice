// 当前函数需要把vnode 变成node
// initVnode只是判断当前的type类型
export function initVnode(vnode, container) {
    let node = null;
    const { vtype } = vnode;
    if (!vtype) {
        node = initTextNode(vnode, container)
    }
    if (vtype === 1) {
        // 原生
        node = initHtmlNode(vnode, container)
    }

    if (vtype === 2) {
        // class
        node = classComponent(vnode, container)
    }

    if (vtype === 3) {
        node = initFunctionComponent(vnode, container);
    }
    return node
}
// 把class组件变成真实节点
function classComponent(vnode, container) {
    const { type, props } = vnode;
    const cmp = new type(props)
    const vvnode = cmp.render()
    const node = initVnode(vvnode, container)
    let cache = {
        vnode: vvnode,//当前的虚拟DOM节点，用于diff 要进行diff的话需要保存oldVnode,因为要和newVnode做比较，
        node, // 真实的node用于替换
        parentNode: container
    }
    cmp.$cache = cache;
    return node
}

function initFunctionComponent(vnode, container) {
    const { type, props } = vnode;
    const vvnode = type(props);
    // 这里是因为我的Function组件返回的元素不确定
    return initVnode(vvnode, container);
}

function initHtmlNode(vnode, container) {
    const { type, props } = vnode;
    const { children, ...rest } = props;
    const node = document.createElement(type);
    children.map(item => {
        if (Array.isArray(item)) {
            for (let i of item) {
                node.appendChild(initVnode(i, node))
            }
        } else {
            node.appendChild(initVnode(item, node))
        }

    })
    Object.keys(rest).map(key => {
        // console.log('key', key)
        if (key === "className") {
            node.setAttribute('class', rest[key])
        } else if (key.slice(0, 2) === "on") {
            // 如果属性值以on开头就当做是click事件
            node.addEventListener("click", rest[key]);
        }
    })
    return node;
}

function initTextNode(vnode, container) {
    const node = document.createTextNode(vnode);
    console.log('text', node);
    return node
}