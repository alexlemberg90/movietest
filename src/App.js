import React from 'react'
import './App.css';
import {Baselayout} from "./layouts";
import {Home} from "./pages";
import {Switch, Route, useHistory} from 'react-router-dom'


function App() {
    const history = useHistory();
  return (
    <Baselayout>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/movie/:id">
            </Route>
            <Route>
                <h1>PAGE NOT FOUND <button onClick={
                    history.push('/')
                }>Home page</button></h1>
            </Route>
        </Switch>
    </Baselayout>
  );
}

export default App;
