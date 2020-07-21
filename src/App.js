import React, { useState } from 'react';
import Pizza from "./Pizza.js";
import Home from "./Home.js";

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {

  const [orders, newOrder] = useState([]);

  console.log(orders)

  return (
    <>
      <h1>Lambda Eats</h1>

      <Router>
      <div>
        <ul>
          <li>
          <Link id="nav" to="/">Home</Link>
          </li>
          <li>
            <Link id="nav"  to="/Pizza">Order pizza</Link>
          </li>
        </ul>

        <hr />

     
        <Switch>
          <Route path="/Pizza">
            <Pizza newOrder={newOrder} orders={orders} />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>

    <div className="order-list">
          {orders.map((order) => (
            <div className="control1" >
              <h2>{order.Name}</h2>
              <p>{order.instructions}</p>
            </div>
          ))}
        </div>
      
    </>
  );
};
export default App;
