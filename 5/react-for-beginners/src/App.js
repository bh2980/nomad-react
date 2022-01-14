import Button from "./Button"
import styles from "./App.module.css"
import { useState } from "react"

function App() {
  const [toDo, setToDO] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDO(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDO("");
  }
  console.log(toDos)
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>))
  return (
    <div>
      <h1>My To DOs({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="write to do"
        />
        <button>ADD To DO</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App;
