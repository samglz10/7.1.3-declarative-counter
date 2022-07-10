//imports useState 
import React from 'react'
// A react Hook;  
import {useState} from 'react'
import randomWords from 'random-words'

const App = (props) => {

const [myWord, setMyWord] = useState(randomWords());

const makeNewWord = () => {
  setMyWord(randomWords());
  window.setMyWord = setMyWord;
}
  return (
    <div className="App">
      <h1> { myWord }</h1>
      <h4> { myWord }</h4>
      <button onClick={ makeNewWord }> 
      Get new word
      </button>
    </div>
  )
}

export default App;
