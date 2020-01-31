import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header'
import Books from './pages/Books'
import Footer from './components/Footer'

import Create from './pages/Create'
import Edit from './pages/Edit'
import Show from './pages/Show'

function App() {
  
  return (
    <Router>
      <Header/>

      <div className="container">
        <Switch>
          <Route path="/" exact component={Books}/>
          <Route path="/books/create" component={Create}/>
          <Route path="/books/:id/" component={Show}/>
          <Route path="/:id/edit" component={Edit}/>
        </Switch>
      </div>

      <Footer/>
    </Router>
    );
}

export default App;
