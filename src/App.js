import './App.css';
import axios from 'axios';





function App() {
  const handleClick = (event) => {
    event.preventDefault()

    const baseUrl = 'http://localhost:3001'    

    axios.get(baseUrl + '/greeting')
    .then((res) => {
      console.log(res)   
    })
      .catch((err) => console.log(err))
}

  return (
    <div className="App">
      <h1>React here!!</h1>
     
 <button onClick={handleClick}>Click</button>     
    </div>
  );
}

export default App;