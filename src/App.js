import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/NavBar/NavBar';
import Banner from './Component/Banner/Banner';
import Menu from './Component/Menu/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Banner />
        <Switch>
          <Route>
            <Menu />
          </Route>
        </Switch>
        <About></About>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
