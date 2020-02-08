import React, { Component } from 'react'
import { Form, Button, Input } from 'antd'

const nameRules = {
    required: true,
    message: "please input ur name"
};

const passwordRules = {
    required: true,
    message: "please input ur password"
};

@Form.create()
class FormPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    submit = () => {
        const { getFieldsValue, getFieldValue, validateFields } = this.props.form
        validateFields((err, value) => {
            if (err) {
                console.log('err', err)
            } else {
                console.log('value', value)
            }
        })
        console.log('msg', getFieldValue("name"))
        console.log('submit', getFieldsValue())
    }

    render() {
        console.log('props', this.props);
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h3>FormPage</h3>
                <Form>
                    <Form.Item label="姓名">
                        {getFieldDecorator("name", { rules: [nameRules] })(<Input />)}
                    </Form.Item>
                    <Form.Item label="密码">
                        {getFieldDecorator("password", { rules: [passwordRules] })(
                            <Input type="password" />
                        )}
                    </Form.Item>
                </Form>
                <Button onClick={this.submit}>submit</Button>
            </div>
        )
    }
}

export default FormPage
