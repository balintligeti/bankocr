import logo from './logo.svg';
import {React, useState} from "react";

import './App.css';
import Upload from './components/Upload';
import { ResultsContext } from './components/contexts/ResultsContext';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ResultsProvider} from './components/contexts/ResultsContext'
import Results from './components/Results';


function App() {

  const [results,setResults] = useState([]);

  return (
    <Router>
    <ResultsContext.Provider value={{results,setResults}}>
      <Route exact path="/" component={Upload}></Route>
      <Route exact path="/results" component={Results}></Route>
    </ResultsContext.Provider>
    </Router>
  );
}

export default App;
