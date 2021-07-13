import React, { useState } from 'react'
import { Button, Drawer, Anchor } from 'antd';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const {Link} = Anchor

function HeaderPage() {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };

    useEffect(()=>[
        Aos.init({duration: 2500})
    ])
    return (
        <div className="container-fluid">
      <div className="header">
        <div data-aos="fade-right" className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Tech</a>
        </div>
        <div className="mobileHidden" data-aos="fade-left" >
          <Anchor targetOffset="65">
            <Link href="#home" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Features" />
            <Link href="#works" title="How it works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div data-aos="fade-left"  className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <div data-aos="fade-left" >
                <Anchor targetOffset="65">
                <Link href="#hero" title="Home" />
                <Link href="#about" title="About" />
                <Link href="#feature" title="Features" />
                <Link href="#works" title="How it works" />
                <Link href="#faq" title="FAQ" />
                <Link href="#pricing" title="Pricing" />
                <Link href="#contact" title="Contact" />
                </Anchor>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
            
    )
}

export default HeaderPage
