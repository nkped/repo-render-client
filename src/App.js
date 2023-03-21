import './App.css';
import axios from 'axios';

/*
Code may fail to allow access to prod-server provided by render.com-served env variable
*/



function App() {
  const handleClick = (event) => {
    event.preventDefault()  

    axios.get('/greeting')
    .then((res) => {
      console.log(res)   
    })
      .catch((err) => console.log(err))
    }


  const handleOtherClick = (event) => {
  event.preventDefault()  

  axios.get('/posts')
  .then((res) => {
    console.log(res)   
  })
    .catch((err) => console.log(err))
}



  return (
    <div className="App">
      <h1>React here!!</h1>
     
 <button onClick={handleClick}>Click</button>     
 <button onClick={handleOtherClick}>Click</button>     
    </div>
    
  );
}

export default App;
