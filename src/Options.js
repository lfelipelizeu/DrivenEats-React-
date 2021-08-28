import React, { useState } from "react";

export default function Options ({ list }) {
    return (
        <section class={`${list.type} options`}>
            {list.map((option,index) => <Option key={index} name={option.name} img={option.img} description={option.description} price={option.price} />)}
        </section>
    );
}

function Option (props) {
    const { img, name, description, price } = props;

    const [classes, setClasses] = useState("option");
    const [quantity, setQuantity] = useState(1);

    function reduceQuantity(event) {
        event.stopPropagation();

        if (quantity-1 === 0) {
            setClasses("option");
        } else {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div class={classes} onClick={() => setClasses("option selected")}>
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
                    <span class="more" onClick={() => setQuantity(quantity + 1)}>+</span>
                </div>
        </div>
    );
}