import React from 'react';
import './App.css';
import Login from './pages/Login';


function App() {
  return (
    <div className="app">
      <Login aoEnviar={aoEnviarForm}/>
    </div>
  );
}

const aoEnviarForm = (dados) => {
console.log(dados)
}

export default App;
