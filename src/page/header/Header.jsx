import React, { Component } from 'react';
// import './Header.css'
import { Layout } from 'antd';

const { Header} = Layout;

class Head extends Component {

  render() {
    return (
      <div className="Header">
        <Layout>
          <Header style={{"background":"#ffffff"}}>我是头部</Header>
        </Layout>
      </div>
    );
  }
}
export default Head;