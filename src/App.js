import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    const [myData, setMyData] = useState('')

  function inputHandler(event){
    setMyData(event.target.value);
    
  }

  async function sendDataHandler(){
      // event.preventDefault();
      console.log(myData);
      const res = await fetch('https://test-7a2ea-default-rtdb.firebaseio.com/pierwsze_kroki.json',
      {
        method: 'POST',
        body: JSON.stringify(myData),
        headers:{
          'Content-Type': 'application.json'
        }

      }) ;
       const data = await res.json() ;
       console.log(data) ;
  }

  return (
    <div className="App">
      
      <form onSubmit={sendDataHandler}>
        <input type="text"
               onChange={inputHandler}
        />
        <button type="submit"> Prześlij dane do bazy </button>
      </form>
    </div>
  );
}

export default App;
