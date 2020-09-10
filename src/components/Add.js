import React, {useState} from 'react';
import axios from 'axios'


const Add = () => {
  const[nameState, setName] = useState([""]);
  const[timeState, setTime] = useState([""]);
  const[importantState, setImportant] = useState([false]);
  const sendEvent = () => {
    console.log(nameState, timeState, importantState)
    axios.post(`http://localhost:3001/events`, {
      content: nameState,
      date: timeState,
      important: importantState
    }).then(r => alert("Mennään tänne"))
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }
  const handleImportantChange = (e) => {
    setImportant(e.target.checked);
    console.log(e.target.checked)
  }

  return(
        <div className="container">
           <div>
               <p>Lisää tapahtuma: </p>
             <form onSubmit={sendEvent}>
               <label>
                 Tapahtuman nimi:
                 <input type="text" name="name" value={nameState} onChange={handleNameChange}/>
               </label>
               <br/>
               <label>
                 Tapahtuman aika:
                 <input type="text" name="time" value={timeState} onChange={handleTimeChange}/>
               </label>
                 <br/>
               <label>
                 Onko tapahtuma tärkeä:
                 <input type="checkbox" name="important" value={importantState} onChange={handleImportantChange}/>
               </label>
               <br/>
               <input type="submit" name="Lähetä"/>
             </form>
           </div>
        </div>
    )
}



export default Add