import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Project from './ProjectList';
import Skills from './SkillList';
import {Route, Switch} from "react-router-dom"
// import { useEffect, useState } from 'react';
function App() {

// const[images, setImages]=useState([]);
// useEffect(()=>{
//   fetch('http://localhost:3001/profile')
//   .then(res=>res.json())
//   .then(data=>setImages(data))
// },[])


  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/about"  >
          <About/>
        </Route>
        <Route exact path="/projects">
          <Project/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/skills">
          <Skills/>
        </Route>
        <Route exact path="/" >
          <Home />
        </Route>
      </Switch>
        

      
    </div>
  );
}

export default App;
