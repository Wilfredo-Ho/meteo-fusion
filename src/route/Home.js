import React, { Component } from 'react';
import { Layout } from 'antd';
import MyHeader from '../layout/header/Header';
import { MyRouter } from '../layout/router/router';
import MyLayout from './Layout';
import TemperatureMonth from '../route/temperature/month';
import TemperatureDay from '../route/temperature/day';
import { Switch, Route } from 'react-router-dom';
import "../App.css";

const { Header, Content, Sider } = Layout;

class Home extends Component {
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
                        <Switch>
                            <Route exact path="/" component={MyLayout} />
                            <Route path="/temperature/month" component={TemperatureMonth} />
                            <Route path="/temperature/day" component={TemperatureDay} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;
