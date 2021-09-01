import React, {useState} from 'react'
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Modal from './components/Modal'

function App() {
  const [modal, setModal] = useState(false)


  return (
    <div className="App">
      <Header className="caio"/>

      <Button onClick={()=> setModal(true)} color="blue">Abra a modal</Button>
      <br />
      <br />
      <Button onClick={setModal} color="blue">Abra a uma porta</Button>
      <br />
      <br />
      <Button color="blue">Abra qqer coisa</Button>

      {modal && <Modal visible={modal} onClose={()=> setModal(false)} />}
    </div>
  );
}

export default App;
