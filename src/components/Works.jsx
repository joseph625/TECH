import React, { useState } from 'react'
import { Button, Modal } from 'antd';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function Works() {


    const [modal, setModal] = useState(false)

    const showModal = () => {
        setModal(true);
    }
      
    
    const handleCancel = () => {
        setModal(false);
    }

    useEffect(()=>{
      Aos.init({duration: 1550})
    })

    return (
            <div data-aos="fade-up" id="works" className="block worksBlock">
              <div className="container-fluid">
                <div className="titleHolder">
                  <h2 data-aos="flip-right">How it works</h2>
                  <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                </div>
                <div className="contentHolder">
                  <Button size="large" onClick={showModal}><i className="fas fa-play"></i></Button>
                </div>
                <Modal
                  title="Woocommerce Tutorial"
                  visible={modal}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <iframe data-aos="flip-left" title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/zOjov-2OZ0E" ></iframe>
                </Modal>
              </div>
            </div>
          );

}

export default Works
