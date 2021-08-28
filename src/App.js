import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import React, { useState } from "react";

export default function App () {
    const [ foods, setFoods ] = useState([]);
    const [ drinks, setDrinks ] = useState([]);
    const [ desserts, setDesserts ] = useState([]);
    const orderList = [ foods, drinks, desserts ];

    return (
        <>
            <Header />
            <Main orderList={orderList} setFoods={setFoods} setDrinks={setDrinks} setDesserts={setDesserts} />
            <Footer orderList={orderList} />
        </>
    );
}