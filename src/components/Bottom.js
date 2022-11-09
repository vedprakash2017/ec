import React from 'react'

import ct from './static/coin-ct.webp'
import t from './static/coin-t.webp'
import bonus from './static/coin-bonus.webp'

const Bottom = (props) => {
  return (
    <div id='main-bottom'>
        <div id="bottom-out">
            <div id='bottom-coin' >
                {props.coin.map(function(object, i){

                    let len = props.coin.length
                    let ind = len-i-1
                    if (props.coin[ind] == 1){

                        let l = (ind-10)<0?0:ind-10
                        let r = (ind+5) >= len ? len-1: ind+5
                        
                        let coins = props.coin.slice(l,r+1)
                        
                        let el =  coins.map(function(obj , j){
                            
                            if (obj  === 0) {
                                return <span className='inner'><img src={ct} id='imgs'></img></span>;
                            }
                            else if( obj === 1)
                            {
                                return <span className='inner'><img src={bonus} id='imgs'></img></span>; 
                            }
                            else
                            {
                                return <span className='inner'><img src={t} id='imgs'></img></span>;
                            }
                        })
                        return <div className='outer'>{el}</div>
                    }
                    })}
            </div>
            <div id = 'bottom-in'>
                <div id = 'posi'>
                {props.posi.map(function(object, i){
                    return <div id='check'><p id='dist-in'>{object}</p></div>;
                })}
                </div>
                <div id = 'dist'>
                {props.dist.map(function(object, i){
                    return <div id='check'><p id='dist-in'>{object}</p></div>;
                })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bottom