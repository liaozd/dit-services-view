import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const {Header} = Layout;

export class HeaderView extends Component {
  render() {
    return (
      <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{lineHeight: '64px'}}
        >
          <Menu.Item key="1"><Icon type="cloud-download" />Subtitle Cloud</Menu.Item>
        </Menu>
      </Header>
    );
  }
}
