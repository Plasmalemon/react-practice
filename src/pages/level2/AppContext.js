import React from 'react'


// 组件通信方式一 props逐层传递
// 组件通信方式二 context v16.3 跨层级传递
export const Context = React.createContext();
export const Provider = Context.Provider; // 提供者
export const Consumer = Context.Consumer; // 消费者

