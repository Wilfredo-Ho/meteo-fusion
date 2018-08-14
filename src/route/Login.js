import React from 'react';
import "./Login.css";
import { Icon, Input, Button, Checkbox } from 'antd';

class Login extends React.Component {

    login () {
        alert();
    }

    render () {
        return (
            <div class="container">
                <div className="bg-cover">
                    
                </div>
                <div className="login-wpt">
                    <h3 className="title">测试平台登录</h3>
                    <div className="content"  style={{ width: '80%', margin: '0 auto'}}>
                        <Input type="text" placeholder="用户名" prefix={<Icon type="user" />} style={{marginBottom: 16}} />
                        <Input type="password" placeholder="密码" prefix={<Icon type="lock" />} style={{marginBottom: 16}} />
                        <Checkbox style={{marginBottom: 16}}>记住密码</Checkbox>
                        <Button onClick={this.login} type="primary" style={{width: '100%', marginBottom: 30}}>登录</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;