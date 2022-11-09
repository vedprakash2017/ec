import React, {useRef} from 'react'
import Header  from './header'; 
import Show from './Show'
import Bottom  from './Bottom';
import axios from 'axios';

const url = "https://iidq4k.deta.dev/"
const headers = {
 'Content-Type': 'application/json; charset=utf-8',
 'Access-Control-Allow-Origin':'*',
 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
 }

 const Main = () => {

  const [coin, setPost] = React.useState(null);  
  const [curr, setCurr] = React.useState(null);  
  const [prev_time, setPrev] = React.useState(0);
    
    React.useEffect(() => {
      const timer = window.setInterval(() => {

    let    x = new Date()
    let UTCseconds = Math.floor((x.getTime() + x.getTimezoneOffset()*60*1000)/1000);
    // console.log(UTCseconds , prev_time)
    if(prev_time < UTCseconds)
    {
      axios.get(url,{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
      },
  ).then((response) => {
      let date = new Date(response.data.time);
      let seconds = Math.floor(date.getTime() / 1000);
      setPost(response.data.coins);   
      setPrev(seconds+28);
      let temp = response.data
      delete temp.coin
      setCurr(temp)
      // console.log('hello' , prev_time)  
      });
    }
    }, 3000);
      return () => { 
        window.clearInterval(timer);
      }
    }, [prev_time]);
    if (!coin) 
    return  
  return (
    <div>
        <Header/>
        <div id = "today_">
          <p id='show_p'>{curr.index}</p>
          <p id='show_p' >{curr.dist_}</p>
          <p id='show_p' >{curr.c100}</p>
          <p id='show_p' >{curr.ct}</p>
          <p id='show_p' >{curr.bonus}</p>
          <p id='show_p' >{curr.t}</p>
        </div>
        <Show coin = {coin} />
        <Bottom coin = {coin} dist = {curr.dist} posi = {curr.posi}/>
    </div>
  )
}

export default Main