# [Redux](https://www.redux.org.cn/)
* Redux 是 JavaScript 状态容器，提供可预测化的状态管理
* 可以让你构建一致化的应用，运行于不同的环境（客户端、服务器、原生应用），并且易于测试。它还提供超爽的开发体验
* Redux 除了和 React 一起用外，还支持其它界面库。 它体小精悍（只有2kB，包括依赖）
## 要点
* 应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。
* 惟一改变 state 的办法是dispatch一个action，一个描述发生什么的对象。
* reducers来描述 action 如何改变 state 树

> 强制使用 action 来描述所有变化带来的好处是可以清晰地知道应用中到底发生了什么。如果一些东西改变了，就可以知道为什么变。action 就像是描述发生了什么的指示器。最终，为了把 action 和 state 串起来，开发一些函数，这就是 reducer。再次地，没有任何魔法，reducer 只是一个接收 state 和 action，并返回新的 state 的函数。 对于大的应用来说，不大可能仅仅只写一个这样的函数，所以我们编写很多小函数来分别管理 state 的一部分：

## 三大原则
1. 单一数据源
    - 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
    - 这让同构应用开发变得非常容易。来自服务端的 state 可以在无需编写更多代码的情况下被序列化并注入到客户端中。由于是单一的 state tree ，调试也变得非常容易。在开发中，你可以把应用的 state 保存在本地，从而加快开发速度。此外，受益于单一的 state tree ，以前难以实现的如“撤销/重做”这类功能也变得轻而易举。
2. State 是只读的
    - 唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
    - 这样确保了视图和网络请求都不能直接修改 state，相反它们只能表达想要修改的意图。因为所有的修改都被集中化处理，且严格按照一个接一个的顺序执行，因此不用担心 race condition 的出现。 Action 就是普通对象而已，因此它们可以被日志打印、序列化、储存、后期调试或测试时回放出来。
3. 使用纯函数来执行修改
    - 为了描述 action 如何改变 state tree ，你需要编写 reducers。
    - Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state。刚开始你可以只有一个 reducer，随着应用变大，你可以把它拆成多个小的 reducers，分别独立地操作 state tree 的不同部分，因为 reducer 只是函数，你可以控制它们被调用的顺序，传入附加数据，甚至编写可复用的 reducer 来处理一些通用任务，如分页器。

## Action
1. Action 是把数据从应用（译者注：这里之所以不叫 view 是因为这些数据有可能是服务器响应，用户输入或其它非 view 的数据 ）传到 store 的有效载荷。它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store
2. Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。
3. 除了 type 字段外，action 对象的结构完全由你自己决定。
4. Action 创建函数 就是生成 action 的方法。“action” 和 “action 创建函数” 这两个概念很容易混在一起，使用时最好注意区分。