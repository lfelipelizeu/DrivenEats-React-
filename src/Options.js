import React, { useState } from "react";

export default function Options ({ optionsList, typeList, setTypeList }) {
    return (
        <section class="options">
            {optionsList.map((option,index) => <Option key={index} info={option} typeList={typeList} setTypeList={setTypeList} />)}
        </section>
    );
}

function Option ({ info, typeList, setTypeList, orderList }) {
    const { img, name, description, price } = info;

    const [classes, setClasses] = useState("option");
    const [quantity, setQuantity] = useState(1);

    function select () {
        if (classes !== "option selected") {
            setClasses("option selected");

            const newTypeList = [...typeList];
            newTypeList.push({name, price, quantity: 1});
            setTypeList(newTypeList);
        }
    }

    function reduceQuantity (event) {
        event.stopPropagation();

        if (quantity-1 === 0) {
            setClasses("option");
        } else {
            setQuantity(quantity - 1);
        }
    }

    function increaseQuantity(event) {
        event.stopPropagation();
        setQuantity(quantity + 1);
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