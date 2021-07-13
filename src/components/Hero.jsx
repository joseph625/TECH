import React from 'react'
import {Button, Carousel} from 'antd'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const items = [
    {
      key: '1',
      title: 'Web and mobile payment built for developers',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '2',
      title: 'Work better together. Schedule meetings',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '3',
      title: 'The best app to increase your productivity',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
  ]

  function Hero() {
    useEffect(()=>{
      Aos.init({duration: 2000})
    })
    return (
<div id="home" className="heroBlock" data-aos='fade-up'>
    <Carousel >
        {items.map((item, index)=>(
            <div key={index} className="container-fluid">
                <div className="content">
                    <h3 data-aos='fade-left'>{item.title}</h3>
                    <p data-aos="fade-up">{item.content}</p>
                    <div className="btnHolder">
                        <Button data-aos="flip-right" type='primary' size="large">Learn More</Button>
                        <Button size="large">Watch a Demo</Button>

                    </div>
                </div>
            </div>
        ))}
    </Carousel>
</div>
)
}

export default Hero