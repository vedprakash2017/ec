import React, { useEffect, useRef } from 'react'
import '../index.css'
import ct from './static/coin-ct.webp'
import t from './static/coin-t.webp'
import bonus from './static/coin-bonus.webp'
const Show = (props) => {
    const coinleft = useRef(null)
    const coinright = useRef(null)
    const scrollToLeft = () => {
        coinleft.current?.scrollIntoView({ behavior: "smooth" })
    }
    const scrollToRight = () => {
        coinright.current?.scrollIntoView({ behavior: "smooth" })
    }
    React.useEffect(() => {

    scrollToRight()
    }, [coinright]);

  return (
    <div>
    <div className='outer'>

    <span ref={coinleft}></span>
    {props.coin.map(function(object, i){
        if (object  === 0) {
            return <span className='inner'><img src={ct} id='imgs'></img></span>;
          }
        else if( object === 1)
        {
            return <span className='inner'><img src={bonus} id='imgs'></img></span>; 
        }
        else
        {
            return <span className='inner'><img src={t} id='imgs'></img></span>;
        }
    })}
    <span ref={coinright}></span>
    </div>
    <div id = "button_css">
    <div id = "button_ button1">
    <button onClick={scrollToLeft} >Left</button>
    </div>
    <div id = "button_">
    </div>
    <div id = "button_">
    </div>
    <div id = "button_ button2">
    <button onClick={scrollToRight}>Right</button>
    </div>
    </div>
    </div>
  )
}

export default Show