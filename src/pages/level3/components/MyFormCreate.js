import React, { useState } from 'react';

const myFormCreate = Cmp => props => {
    const [state, setState] = useState({});
    const options = {}
    const setChange = (event) => {
        setState({
            ...state,// hooks中setState是覆盖, class中是合并
            [event.target.name]: event.target.value,
        });
    }

    const getFieldDecorator = (field, option) => InputCmp => {
        options[field] = field
        // 不建议在原来的元素上修改
        return React.cloneElement(InputCmp, {
            name: field,
            value: state[field] || "",
            onChange: setChange
        })
    }

    const getFieldsValue = () => {
        return { ...state }
    }

    const getFieldValue = (field) => {
        return state[field]
    }

    const validateFields = callback => {
        const err = []
        for (let key in options) {
            if (state[key] === undefined) {
                err.push({
                    [key]: 'error'
                })
            }
        }

        if (err.length) {
            callback(err, { ...state })
        } else {
            callback(undefined, { ...state })
        }

        // callback(err, values)
    }
    return <Cmp {...props} getFieldDecorator={getFieldDecorator} getFieldsValue={getFieldsValue} getFieldValue={getFieldValue} validateFields={validateFields} />
}

export default myFormCreate;

// 表单组件要求实现数据收集、校验、提交等特性，可通过高阶组件扩展
// 高阶组件给表单组件传递一个input组件包装函数接管其输入事件并统一管理表单数据
// 高阶组件给表单组件传递一个校验函数使其具备数据校验功能
