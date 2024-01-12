import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [name, setName] = useState("Piro");
  const [age, setAge] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const fetchData = () => {
    axios.get(`https://api.agify.io?name=${name}`)
      .then((res) => {
        setAge(res.data.age);
      })
      .catch(err => console.log(err));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode} className='mode-btn'>Change Mode</button>
      <input
        type="text"
        placeholder='Piro'
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <br />
      <button onClick={fetchData}>Predict age</button>
      <h1>Predicted age: {age}</h1>

    </div>
  );
}

export default App;
