import './App.css';
import axios from 'axios';
import { useState } from 'react';
import GreetBotton from './component/GreetButton';
import Header from './component/Header';
/*
Code may fail to allow access to prod-server provided by render.com-served env variable
*/


const baseUrl = process.env.REACT_APP_SERVER_URL


function App() {

  const [ posts, setPosts ] = useState('no posts selected')
  
  const handleClick = (event) => {
  event.preventDefault()

      
    axios.get(baseUrl + '/posts')
    .then((res) => {
      console.log(res)   
    })
    .catch((err) => console.log(err))
  }
  
  
  return (
    <div className="App">
      <h1>React here!!</h1>
     
     
 <button onClick={handleClick}>Click</button>
 <div>{posts}</div>
 <GreetBotton />
 <Header />
    </div>
    
  );
}

export default App
