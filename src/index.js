import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// 引入antd样式
import 'antd/dist/antd.css'

// 引入路由组件
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
// 引入路由配置
import {mainRoutes} from './routes'

// 将App组件渲染到dom元素 root元素在public/index.html
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Switch>
      {/* 进入用户自定义界面 admin界面就跳入App组件 */}
      <Route path="/admin" render={routeProps => <App {...routeProps}/>}/>
      {/* 进入系统级别界面 */}
      {mainRoutes.map(route => {return <Route key={route.path} {...route}></Route>})}
      {/* 以上界面都没有找到，则进入404界面 */}
      <Redirect to="/admin/curnet" />
    </Switch>
  </Router>
);
