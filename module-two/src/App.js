import React from 'react'
import './App.css';
import Button from './components/Button';

function App() {

  return (
    <div className="App">
      <Button color="blue" size="large" />
      <Button color="red" size="medium" />
      <Button color="blue" size="small" />
    </div>
  );
}

export default App;
