import React from 'react'
import './App.css'; 
import '~antd/dist/antd.css'

import HeaderPage from './components/HeaderPage'

import {Layout } from 'antd'
import Home from './components/Home';
import About from './components/About';
import Feature from './components/Features';
import Works from './components/Works';
import Faq from './components/Faq';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import FooterApp from './components/FooterApp';
const {Header ,Content, Footer} = Layout
function App() {
  return (
   
  <Layout className="mainLayout">
    <Header>
      <HeaderPage />
    </Header>
    <Content>
      <Home />
      <About />
      <Feature />
      <Works />
      <Faq />
      <Pricing />
      <Contact />
    </Content>
    <Footer>
      <FooterApp />
    </Footer>
  </Layout>
  );
}

export default App;
