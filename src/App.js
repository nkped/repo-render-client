import './App.css';
import axios from 'axios';


const baseUrl = process.env.REACT_APP_SERVER_URL

console.log(baseUrl)

function App() {
  const handleClick = (event) => {
    event.preventDefault()
    console.log(process.env.NODE_ENV)
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