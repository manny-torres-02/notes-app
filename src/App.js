import logo from './logo.svg';
import { useState, useEffect } from 'react';
import Record from './components/record'
import './App.css';

function App() {
// Functional Component set it up where notes is the component 
// props is input, and the array is iterated over. 
// const Notes = props => props.data.map(note => <div>{note.text}</div>);

const initialData = ["hello", " there,", "ICE CREAM ", "haiudsfh"];
// https://flexiple.com/react/react-hooks-learn-by-building-a-notes-app/
const [data, setData]= useState(initialData)

function submitNewNote () {
  const text=document.querySelector('#takeThis').value
    // setData((prevData)=> prevData.push(text))
  
    if(text) {
      const nextState = data.push(document.querySelector('#takeThis').value)
      // console.log(text)
      setData( prevData => [...prevData])
      // console.log(data)
    }
}

let deleteNote =() => {
  console.log(useState)
}

useEffect(()=> {
// return (data)
})

  return (
    <div className="App">
      <input id="takeThis" placeholder="enter note" ></input>
      <button onClick={submitNewNote}>Add Note</button>
      {/* <Notes data={data} /> */}
      <Record users={data}/>
    </div>
  );
}

export default App;
