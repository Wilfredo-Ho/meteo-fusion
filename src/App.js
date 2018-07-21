import React, { Component } from 'react';
import { Layout } from 'antd';
import MyHeader from './layout/header/Header';
import { MyRouter, MyRoute } from './layout/router/router';
import "./App.css";

const { Header, Content, Sider } = Layout;

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      height: 200
    }
  }

  componentWillMount () {
    this.setState({
      height: window.innerHeight - 64
    })
  }

  componentDidMount () {
    window.addEventListener("resize", () => {
      this.setState({
        height: window.innerHeight - 64
      })
    })
  }

  componentWillUnmount () {
    window.removeEventListener("resize", () => {})
  }

  render() {
    return (
      <Layout>
        <Header style={{ padding: '0 20px' }}>
          <MyHeader />
        </Header>
        <Layout>
          <Sider width={256} style={{ height: this.state.height }}>
            <MyRouter />
          </Sider>
          <Content>
            {MyRoute}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
