import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes/index'
import Head from './page/header/Header.jsx'
import Slid from './page/slider/Slid.jsx'
import { Layout} from 'antd';
import { Pagination } from 'antd';
import { Calendar } from 'antd';
const { Content } = Layout;
// https://github.com/yezihaohao/react-admin


function App() {
  return (
    <Router>
    <div className="App">
      <Layout>
        <Head></Head>
        <Content>
          {/* 存放路由，展示页面 */}
          <Routes></Routes>
          <Calendar />
          <Pagination defaultCurrent={1} total={50} />
        </Content>
        <Slid></Slid>
      </Layout>
    </div>
    </Router>
  );
}

export default App;