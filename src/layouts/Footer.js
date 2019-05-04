import React, { Component } from "react";
import { Layout, Icon } from "antd";

const {Footer} = Layout;

export class FooterView extends Component {
  render() {
    return (
      <Footer style={{textAlign: "center"}}>
        Copyright <Icon type="copyright" /> liao.zd@gmail.com
      </Footer>
    );
  }
}
