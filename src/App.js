import { useState, useEffect } from 'react';
import { Button } from './components/StyledButton';
import Scene from './components/Scene';
import './App.css'
import Modal from './components/Modal';

function App() {
  const [story, setStory] = useState([])
  const [counter, setCounter] = useState(0)
  const [modal, setModal] = useState(true)

  useEffect(() => {
    fetch("./story.json")
      .then(res => res.json())
      .then(data => {
        const { scenes } = data
        setStory(scenes)
      })
  }, [])

  const selectPreviousScene = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }

  const selectNextScene = () => {
    if(counter < story.length - 1) {
      setCounter(counter + 1)
    }
  }

  const onClose = () => {setModal(false)}
  
  return (
    <>
      {modal && <Modal closeModal={onClose}/>} 
      <main className="App">
        <div className='buttons'>
          <Button bgColor='black' onClick={selectPreviousScene}>Anterior</Button>
          <Button bgColor='black' onClick={selectNextScene}>Següent</Button>
        </div>
        <section>
        { 
        story.map((scene, index) => <Scene key={index} status={index === counter && true} text={scene} />) 
        }
        </section>
      </main>
    </>
  );
}

export default App;
