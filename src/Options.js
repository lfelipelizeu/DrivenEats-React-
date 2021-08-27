import React, { useState } from "react";

export default function Options (props) {
    return (
        <section class={`${props.type} options`}>
            {props.list.map((option,index) => <Option key={index} name={option.name} img={option.img} description={option.description} price={option.price} />)}
        </section>
    );
}

function Option (props) {
    const { img, name, description, price } = props;

    const [classes, setClasses] = useState("option");

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
                <ion-icon class="check" name="checkmark-circle"></ion-icon>
        </div>
    );
}