import React from 'react'
import './App.css';
import {Baselayout} from "./layouts";
import {Home, MovieDetails} from "./pages";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";


function App() {
    const history = useHistory();
  return (
    <Baselayout>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/movie/:id" exact>
                <MovieDetails/>
            </Route>
            <Route>
                <h1>PAGE NOT FOUND <button onClick={()=>{
                    history.push('/')}
                }>home page</button></h1><div></div>
            </Route>

        </Switch>
    </Baselayout>
  );
}

export default App;
