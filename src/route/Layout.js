import React, { Component } from 'react';
import { Layout } from 'antd';
import MyHeader from '../layout/header/Header';
import { MyRouter, MyRoute } from '../router/router';
import { Switch } from 'react-router-dom';
import "../App.css";

const { Header, Content, Sider } = Layout;

class MyLayout extends Component {
  constructor (props) {
    super(props);
  }

  componentWillUnmount () {
    window.removeEventListener("resize", () => {})
  }

  render() {
    return (
      <Layout style={{width: '100%', height: '100%'}}>
        <Header style={{ padding: '0 20px' }}>
          <MyHeader />
        </Header>
        <Layout style={{minHeight: 'calc(100% - 64px)'}}>
          <Sider width={256}>
            <MyRouter />
          </Sider>
          <Content>
              <Switch>
                  {MyRoute}
              </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MyLayout;
