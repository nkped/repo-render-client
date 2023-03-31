import { useState } from "react"

/* shift + alt + a , will comment something out
 */

const baseUrl = process.env.REACT_APP_SERVER_URL


function GreetBotton() {

    const [ greeting, setGreeting ] = useState('no greeting')

    
    const handleClick = (event) => {
        event.preventDefault()

        setGreeting( greeting + 'hello world')
        /*
        axios.get(baseUrl + '/greeting')
        .then((res) => {
            
            console.log(res)   
        })
        .catch((err) => console.log(err))
        */
    }

    return(
        <div>
        <button onClick={handleClick}>Click</button>
        <div>{greeting}</div>
        </div>       
        )
}


export default GreetBotton