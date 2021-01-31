import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/NavBar/NavBar';
import Banner from './Component/Banner/Banner';
import Menu from './Component/Menu/Menu';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import { firebaseConfig } from './Firebase.Config';
import FoodDetails from './Component/FoodDetails/FoodDetails';
import CheckOutDetails from './Component/CheckOutDetails/CheckOutDetails';
import { addToDatabaseCart } from './Component/utilities/databaseManager';
import Login from './Component/Login/Login';


firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.analytics().logEvent('notification_received');

function App() {

  const [cart, setCart] = useState([]);

  const handleAddProduct = product => {
    console.log('food item added', product, product.id);
    const newCart = [...cart, product];
    setCart(newCart);
  }

  // const handleAddProduct = product => {

  //   // const newCart = [...cart, product]
  //   // setCart(newCart);
  //   const alreadyAdded = cart.find(crt => crt.id === product.id );
  //   console.log('alreadyAdded', alreadyAdded);
  //   if(alreadyAdded){
  //     const remainingCarts = cart.filter(crt => crt.id !== product);
  //     setCart(remainingCarts);
  //     console.log('alreadyAdded1', remainingCarts);
  //   }
  //   else{
  //     const newCart = [...cart,product]
  //     setCart(newCart);
  //     console.log('alreadyAdded2', newCart);
  //   }
  // }





  return (
    <div className="App">
      <Router>
        <NavBar cart={cart} />
        <Switch>

          <Route path="/home">
            <Banner />
            <Menu cart={cart} handleAddProduct={handleAddProduct} />
            <About></About>
            <Footer></Footer>
          </Route>
          <Route exact path="/">
            <Banner />
            <Menu />
            <About></About>

          </Route>

          <Route path="/food/:foodId">
            <FoodDetails handleAddProduct={handleAddProduct}></FoodDetails>
          </Route>

          <Route path='/checkOutDetails'>
            <CheckOutDetails></CheckOutDetails>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path="*">
            <h3>Nothing found</h3>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
