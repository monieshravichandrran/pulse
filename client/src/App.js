import React from "react";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import View from "./pages/View";
import {BrowserRouter as Router,Route} from "react-router-dom"
const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/update" component={Update} />
        <Route exact path="/delete" component={Delete} />
        <Route exact path="/view" component={View}/>
      </Router>
    </>
  )
}

export default App;