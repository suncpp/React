import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes/index'
import Head from './page/header/Header.jsx'
import Slid from './page/slider/Slid.jsx'
import Todolist from './page/todolist/index.jsx'
import { Layout} from 'antd';
const { Content } = Layout;
// https://github.com/yezihaohao/react-admin


function App() {
  return (
    <Router>
    <div className="App">
      <Layout>
        <Head></Head>
        <Todolist />
        {/* <Content>
          <Routes></Routes>
        </Content> */}
        {/* <Slid></Slid> */}
      </Layout>
    </div>
    </Router>
  );
}

export default App;