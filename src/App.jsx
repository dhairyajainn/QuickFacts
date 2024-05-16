import React, {useState} from 'react';
import './App.scss'

const App = () => {

  const [fact, setFact] = useState('')

const key = 'SvDe08WhA6l/mcM03sx7kA==mGHDOubDtyXJBg8o';
const apiReq = async () => {
  const url = 'https://api.api-ninjas.com/v1/facts';
  const requestedUrl = await fetch(url, {
    method: 'GET',
    headers: { 'X-Api-Key': key},
  })
  const response = await requestedUrl.json()
  console.log(response);
  const [{fact}] = response;
  console.log(fact);
  setFact(fact)
}

  
  return (
    <>
    <div className="main">
      <div className="container">
      <p>Press the button to reveal a fact</p>
      <button onClick={apiReq}>Hit me dude</button>
      <h3>{fact}</h3>
      </div>
    </div>
      
    </>
    
  )
}

export default App