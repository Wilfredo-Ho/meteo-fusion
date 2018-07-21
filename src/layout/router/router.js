import React from 'react';
import RouterConfig from '../../app/router';
import { Menu, Icon } from 'antd';
import { Link, Route, Redirect } from 'react-router-dom';
import Home from '../../route/Home';
import Page404 from '../../route/exception/Page404';
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

    generateRouter (arr) {
        arr || ( arr = RouterConfig );
        return arr.map(item => {
            let firstLevelChild = null;
            if (item.children && item.children.length > 0) {
                return (
                    <SubMenu key={ item.key } title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                        {
                            this.generateRouter(item.children)
                        }
                    </SubMenu>
                ); 
            }
            if (item.icon) {
                firstLevelChild = <Menu.Item key={item.key}>
                    <Link to={item.path}>
                        <Icon type={item.icon} />
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
            } else {
                firstLevelChild = <Menu.Item key={item.key}><Link to={item.path}>{item.title}</Link></Menu.Item>;
            }
            return firstLevelChild;
        })
    }

    render () {
        const router = this.generateRouter();
        return (
            <Menu
                mode="inline"
                theme="dark"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}>
                { router }
            </Menu>
        );
    }
}

let RouteArr = [];
const generateRoute = (arr) => {
    arr || ( arr = RouterConfig );
    arr.map(item => {
        if (item.children && item.children.length > 0) {
            return generateRoute(item.children);
        }
        let pathStr = "";
        if (item.path == '/'){
            pathStr = "Home";
        } else {
            let pathArr = item.path.split("/");
            pathStr = pathArr.map(item => item.substring(0,1).toUpperCase()+item.substring(1)).join("");
        }
        let component = () => import(`${pathStr}.js`);
        console.log(pathStr);
        if (item.path == '/'){ 
            RouteArr.push(<Route {...item} component={Home}/>);
        } else {
            RouteArr.push(<Route {...item} />);
        }
    })
};
generateRoute();
// RouteArr.unshift(<Route path="/" component={Home} key="home" exact />);
RouteArr.push(<Redirect to='/404' component={Page404} key="404" />);
console.log(RouteArr);

export const MyRouter = Router;
export const MyRoute = RouteArr;