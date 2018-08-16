import React from 'react';
import "./Login.css";
import { Icon, Input, Button, Checkbox, Form, notification  } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const FormItem = Form.Item;

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post("/users/login", values)
                .then(response => response.data)
                .then(res => {
                    if (res.status === '0') {
                        //登陆成功跳转
                        this.props.history.push("/");
                    } else {
                        notification.error({
                            message: '登录失败',
                            description: res.msg
                        })
                    }
                })
            }
        });
    }

    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="container">
                <div className="bg-cover" />
                <div className="login-wpt">
                    <h3 className="title">测试平台登录</h3>
                    <div className="content"  style={{ width: '80%', margin: '0 auto'}}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入用户名'}],
                                })(
                                    <Input type="text" placeholder="用户名" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.3)'}} />} />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入用户名'}],
                                })(
                                    <Input type="password" placeholder="密码" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.3)'}} />} />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                        initialValue: true,
                                })(
                                    <Checkbox>自动登录</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">忘记密码</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                                你也可以<a href="">前往注册</a>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            );
    }
}

const WrappedLoginForm = Form.create()(Login);

const RouterLogin = withRouter(WrappedLoginForm);

export default RouterLogin;