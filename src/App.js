import {useHistory} from "react-router-dom"
import './App.css';
import "bulma/css/bulma.css";



function App() {
let history = useHistory()

  function handleClick(){
      history.push('/users')
  }

  return (
    <div className="App ">
     <h1> Hello</h1>
    <p className="button"onClick={handleClick}> Please Click here!</p>
    </div>
  );
}

export default App;
