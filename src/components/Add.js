import React, {useState} from 'react';
import axios from 'axios'


const Add = () => {
  const [error, setError] = useState([])
  const [success, setSuccess] = useState([])
  const[nameState, setName] = useState([""]);
  const[timeState, setTime] = useState([""]);
  const[importantState, setImportant] = useState([false]);
  const sendEvent = (event) => {
    event.preventDefault();
    if (nameState == "" || timeState == "") {
      setError("Täytä kaikki kentät!");
    } else {
      axios.post(`http://localhost:3001/events`, {
            content: nameState,
            date: timeState,
            important: importantState
          }
      ).then()
      setSuccess("Tietojen lähetys onnistui!");
      setName("");
      setImportant(false);
      setTime("");
      document.getElementById("nameField").focus();
      document.getElementById("checkbox").checked = false;
    }
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
  const resetMessages = () => {
    setSuccess(null);
    setError(null);
  }
  return(
        <div className="container">
           <div>
               <p>Lisää tapahtuma: </p>
             <form onSubmit={sendEvent}>
               <label>
                 Tapahtuman nimi:
                 <input id={"nameField"} type="text" name="name" value={nameState} onChange={handleNameChange} onKeyDown={resetMessages}/>
               </label>
               <br/>
               <label>
                 Tapahtuman aika:
                 <input type="text" name="time" value={timeState} onChange={handleTimeChange} onKeyDown={resetMessages}/>
               </label>
                 <br/>
               <label>
                 Onko tapahtuma tärkeä:
                 <input id={"checkbox"} type="checkbox" name="important" value={importantState} onChange={handleImportantChange} onKeyDown={resetMessages}/>
               </label>
               <br/>
               <input type="submit" name="Lähetä"/>
             </form>
           </div>
          <div style={{color: "red", fontSize: "200%"}}>
            {error}
          </div>
          <div style={{color: "green", fontSize: "200%"}}>
            {success}
          </div>
        </div>
    )
}




export default Add