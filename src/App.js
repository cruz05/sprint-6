import { useState, useEffect } from 'react';
import { Button } from './components/StyledButton';
import Scene from './components/Scene';
import './App.css'

function App() {
  const [story, setStory] = useState([])
  const [counter, setCounter] = useState(0)

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
  
  return (
    <main className="App">
      <div className='buttons'>
        <Button onClick={selectPreviousScene}>Anterior</Button>
        <Button onClick={selectNextScene}>Següent</Button>
      </div>
      <section>
      { 
      story.map((scene, index) => <Scene key={index} status={index === counter && true} text={scene} />) 
      }
      </section>
    </main>
  );
}

export default App;
