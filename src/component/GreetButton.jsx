




const baseUrl = process.env.REACT_APP_SERVER_URL


function GreetBotton() {
    
    
    const handleClick = (event) => {
        event.preventDefault()  
        
        axios.get(baseUrl + '/greeting')
        .then((res) => {
            
            console.log(res)   
        })
        .catch((err) => console.log(err))
    }

    return(
        <div>
        <button onClick={handleClick}>Click</button>
        <div>{}</div>
        </div>       
        )
}


export default GreetBotton