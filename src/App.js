import React from "react";
import { Layout } from "antd";

import { HeaderView } from "./layouts/Header";
import { SubtitleView } from "./components/Subtitle";
import { FooterView } from "./layouts/Footer";


function App() {
  return (
    <Layout className="layout">
      <HeaderView />
      <SubtitleView />
      <FooterView />
    </Layout>
  );
}

export default App;
