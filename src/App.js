import { useState, useEffect } from 'react';
import { Button } from './components/StyledButton';
import Scene from './components/Scene';
import Modal from './components/Modal';
import {Image} from './components/StyledImage'
import { scenes } from './data';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [modal, setModal] = useState(true)
  const [image, setImage] = useState('')

  useEffect(() => {
    setImage(scenes[counter].img)
  }, [counter])
  
  const selectPreviousScene = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }

  const selectNextScene = () => {
    if(counter < scenes.length - 1) {
      setCounter(counter + 1)
    }
  }

  const onClose = () => {setModal(false)}
  
  return (
    <>
      {modal && <Modal closeModal={onClose}/>} 
      <main className="App">
        <div className='buttons'>
          <Button onClick={selectPreviousScene}>Anterior</Button>
          <Button onClick={selectNextScene}>Següent</Button>
        </div>
        <section>
        { 
          scenes.map((scene, index) => <Scene key={index} status={index === counter && true} text={scene.txt} />) 
        }
          <Image src={image} alt={`Ilustration of scene ${counter}`}/>
        </section>
      </main>
    </>
  );
}

export default App;
