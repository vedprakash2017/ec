import React, { useEffect, useRef } from 'react'
import '../index.css'
import ct from './static/coin-ct.webp'
import t from './static/coin-t.webp'
import bonus from './static/coin-bonus.webp'
const Show = (props) => {
    const coinend = useRef(null)
    const scrollToBottom = () => {
      coinend.current?.scrollIntoView({ behavior: "smooth" })
    }
    React.useEffect(() => {

    scrollToBottom()
    }, [coinend]);

  return (
    <div>

    <button onClick={scrollToBottom}>scroll</button>
    <div className='outer'>
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
    <span ref={coinend}></span>
    </div>
    </div>
  )
}

export default Show