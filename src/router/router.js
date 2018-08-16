import React from 'react';
import RouterConfig from './config';
import AllComponents from '../route';
import { Menu, Icon } from 'antd';
import { Link, Route } from 'react-router-dom';

import './router.css';

const SubMenu = Menu.SubMenu;

class Router extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openKeys: [],
        }
        this.onOpenChange = this.onOpenChange.bind(this);
    }
    rootSubmeuKeys = ["2", "7", "8"];

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmeuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    render () {
        return (
            <Menu
                mode="inline"
                theme="dark"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}>
                {
                    RouterConfig.map(r => {
                        const route = r => {
                            return (
                                <Menu.Item key={r.key}>
                                    <Link to={r.path}>
                                    {
                                        r.icon
                                        ? [
                                            <Icon type={r.icon} key={`${r.key}_icon`} />,
                                            <span key={`${r.key}_title`}>{r.title}</span>
                                        ]
                                        : r.title
                                    }
                                    </Link>
                                </Menu.Item>
                            )
                        }
                        return r.children 
                        ? <SubMenu key={ r.key } title={<span><Icon type={r.icon} /><span>{r.title}</span></span>}>{r.children.map(r => route(r))}</SubMenu>
                         : route(r);
                    })
                }
            </Menu>
        );
    }
}

const RouteArr = RouterConfig.map(r => {
    
    const route = r => {
        const Component = AllComponents[r.component];
        return (
            <Route
                key={r.key}
                exact
                path={r.path}
                component={() => <Component />}
             />
        )
    }
    return r.component ? route(r) : r.children.map(r => route(r));
});

export const MyRouter = Router;

export const MyRoute = [].concat.apply([], RouteArr);