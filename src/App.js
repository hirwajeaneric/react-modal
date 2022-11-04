import { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = ()=> {
    setShowModal(prev => !prev)
  };

  return (
    <>
    
    </>
  );
}

export default App;
