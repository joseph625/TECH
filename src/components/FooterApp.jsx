import React from 'react'
import { BackTop } from 'antd';

function FooterApp() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Tech</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/yusf.jasm.3"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://github.com/joseph625"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/yousif-jasm-76b31b1b8/"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
        <div className="copyright">Webdev@Yousif 2021</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default FooterApp
