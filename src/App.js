import React, { useState } from 'react';
import Pizza from "./Pizza.js";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const [orders, newOrder] = useState([]);

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>

      <Router>
      <div>
        <ul>
          <li>
            <Link to="/Pizza">Order pizza</Link>
          </li>
        </ul>

        <hr />

     
        <Switch>
          <Route path="/Pizza">
            <Pizza newOrder={newOrder} orders={orders} />
          </Route>
        </Switch>
      </div>
    </Router>
      
    </>
  );
};
export default App;
