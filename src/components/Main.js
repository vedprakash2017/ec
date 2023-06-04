import React, {useRef} from 'react'
import Header  from './header'; 
import Show from './Show'
import axios from 'axios';

const url = "https://trigger-1-h4763065.deta.app/"
const headers = {
 'Content-Type': 'application/json; charset=utf-8',
 'Access-Control-Allow-Origin':'*',
 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
 ''
 }

 const Main = () => {

  const [coin, setPost] = React.useState(null);  
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
        <Show coin = {coin} />
    </div>
  )
}

export default Main
