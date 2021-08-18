import React from 'react'
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Modal from './components/Modal'
import logoImg from './logo.png'

function App() {

  return (
    <div className="App">
      <Header className="caio"/>

      <Button color="blue">Abra a modal</Button>
      <br />
      <br />
      <Button color="blue">Abra a uma porta</Button>
      <br />
      <br />
      <Button color="blue">Abra qqer coisa</Button>

      <Modal/>
    </div>
  );
}

export default App;
