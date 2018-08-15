import React from 'react';
import { Icon, Input, Button, Divider } from 'antd';
import "./Header.css";
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const Search = Input.Search;

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
    }

    componentDidMount () {
        axios.get("/users/check")
        .then(response => {
            let res = response.data;
            if(res.status === '0') {
                this.setState({
                    user: res.result
                });
            } else {
                this.props.history.push("/login");
            }
        })
    }

    render () {
        return (
            <div className="header-wpt">
                <div className="pull-left">
                    <Icon type="global" className="logo" style={{ verticalAlign: 'top'}}></Icon>
                    <h3 className="text">MeteoFusion大气气溶胶数据观测</h3>
                </div>
                <div className="pull-right">
                    <span className="welcome-text">你好，{this.state.user}</span>
                    <Search className="search-wpt" placeholder="搜索" style={{ width: 200 }} />
                    <Divider type="verticle" style={{height: 32, margin: '0 20px', color: '#aaa'}} />
                    <Button ghost type="circle" icon="logout" />
                </div>
            </div>
        );
    }
}


export default withRouter(Header);