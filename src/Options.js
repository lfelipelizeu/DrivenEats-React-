import React, { useState } from "react";

export default function Options ({ optionsList, typeList, setTypeList }) {
    return (
        <section className="options">
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
        <div className={classes} onClick={select}>
            <img src={img} alt={name} />
                <div className="text">
                    <div className="item">
                        <h2 className="name">{name}</h2>
                        <p className="description">{description}</p>
                    </div>
                    <div className="price">
                        R$ <span>{price.toFixed(2).replace(/([.])/gi, ",")}</span>
                    </div>
                </div>
                <div className="quantity">
                    <span className="less" onClick={reduceQuantity}>-</span>
                    <span className="quantity">{quantity}</span>
                    <span className="more" onClick={increaseQuantity}>+</span>
                </div>
        </div>
    );
}