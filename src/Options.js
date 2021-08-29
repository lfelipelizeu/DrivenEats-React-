import React, { useState } from "react";

export default function Options ({ optionsList, typeList, setTypeList }) {
    return (
        <section class="options">
            {optionsList.map((option,index) => <Option key={index} info={option} typeList={typeList} setTypeList={setTypeList} />)}
        </section>
    );
}

function Option ({ info, typeList, setTypeList }) {
    const { img, name, description, price } = info;

    const [classes, setClasses] = useState("option");
    const [quantity, setQuantity] = useState(1);

    function updateTypeList (operation) {
        if (operation === "add") {
            const newTypeList = [...typeList];
            newTypeList.push({name, price, quantity: 1});
            setTypeList(newTypeList);
        } else if (operation === "remove") {
            const newTypeList = typeList.filter((item) => item.name !== name);
            setTypeList(newTypeList);
        } else {
            const newTypeList = [...typeList];
            newTypeList.forEach((item) => {
                if (item.name === name) {
                    if (operation === "increase") {
                        item.quantity++;
                    } else {
                        item.quantity--;
                    }
                }
            });
            setTypeList(newTypeList);
        }
    }

    function select () {
        if (classes !== "option selected") {
            setClasses("option selected");
            updateTypeList("add");
        }
    }

    function reduceQuantity (event) {
        event.stopPropagation();
        if (quantity-1 === 0) {
            setClasses("option");
            updateTypeList("remove");
        } else {
            setQuantity(quantity - 1);
            updateTypeList("reduce");
        }
    }

    function increaseQuantity(event) {
        event.stopPropagation();
        setQuantity(quantity + 1);
        updateTypeList("increase");
    }

    return (
        <div class={classes} onClick={select}>
            <img src={img} />
                <div class="text">
                    <div class="item">
                        <h2 class="name">{name}</h2>
                        <p class="description">{description}</p>
                    </div>
                    <div class="price">
                        R$ <span>{price.toFixed(2)}</span>
                    </div>
                </div>
                <div class="quantity">
                    <span class="less" onClick={reduceQuantity}>-</span>
                    <span class="quantity">{quantity}</span>
                    <span class="more" onClick={increaseQuantity}>+</span>
                </div>
        </div>
    );
}