import React from 'react'
import logo from './logo.svg';
import './App.css';
import {moviesService} from "./services";


function App() {
  React.useEffect(() => {
    moviesService.getMovies().then(console.log)
  },[])
  return (
    <div>

    </div>
  );
}

export default App;
