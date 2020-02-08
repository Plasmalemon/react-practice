import React, { Component } from 'react'
import myFormCreate from './components/MyFormCreate'


const nameRules = {
    required: true,
    message: "please input ur name"
};

const passwordRules = {
    required: true,
    message: "please input ur password"
};


@myFormCreate
class MyFormPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    submit = () => {
        const { getFieldsValue, getFieldValue, validateFields } = this.props
        validateFields((err, value) => {
            if (err) {
                console.log('err', err)
            } else {
                console.log('success', value)
            }
        })
        console.log('msg', getFieldValue("name"))
        console.log('submit', getFieldsValue())
    }

    render() {
        const { getFieldDecorator } = this.props
        console.log("props", this.props);

        return (
            <div>
                <h3>MyFormPage</h3>
                {getFieldDecorator("name", { rules: [nameRules] })(<input />)}
                {
                    getFieldDecorator("password", { rules: [passwordRules] })(<input type="password" />)
                }
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
}

export default MyFormPage
