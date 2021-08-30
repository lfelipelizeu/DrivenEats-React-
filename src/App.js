import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import Confirm from "./Confirm.js";
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

export default function App () {
    const [ foods, setFoods ] = useState([]);
    const [ drinks, setDrinks ] = useState([]);
    const [ desserts, setDesserts ] = useState([]);
    const orderList = [ foods, drinks, desserts ];

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Main orderList={orderList} setFoods={setFoods} setDrinks={setDrinks} setDesserts={setDesserts} />
                    <Footer orderList={orderList} />
                </Route>
                <Route path="/confirm">
                    <Confirm orderList={orderList} />
                </Route>
            </Switch>
        </Router>
    );
}