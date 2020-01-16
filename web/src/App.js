import React, {useState} from 'react';

 function App() {
   const [counter, setCounter] = useState(0);
    function incrementaCounter(){
     setCounter(counter+1);
    }
  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementaCounter}>Incrementar</button>
    </>
  );
}

export default App;
