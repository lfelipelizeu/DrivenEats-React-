import { Link } from "react-router-dom";

export default function Confirm ({ orderList }) {
    const [ foods, drinks, desserts ] = orderList;

    function sendOrder () {
        const foodsMessage = foods.map((food) => `- Prato: ${food.name} (${food.quantity}x)\n`);
        const drinksMessage = drinks.map((drink) => `- Bebida: ${drink.name} (${drink.quantity}x)\n`);
        const dessertsMessage = desserts.map((desserts) => `- Sobremesa: ${desserts.name} (${desserts.quantity}x)\n`);
        const number = "5511999999999"
        let total = 0;
        orderList.forEach((order) => order.forEach((item) => {total += item.price*item.quantity}));
        const message = `Olá, gostaria de fazer o pedido:\n${foodsMessage}${drinksMessage}${dessertsMessage}Total: R$ ${total.toFixed(2)}`;

        window.open(`https://wa.me/${number}?text=${encodeURIComponent(message.replace(/,/gi, ""))}`);
    }

    return (
        <section className="confirm">
                <h1>Revise seu pedido</h1>
                <div className="order-box">
                    <Order typeList={foods}  />
                    <Order typeList={drinks} />
                    <Order typeList={desserts} />
                    <Total orderList={orderList} />
                </div>
                <button className="send-order" onClick={sendOrder}>Tudo certo, pode pedir!</button>
                <Link to="/">
                    <button className="cancel">Cancelar</button>
                </Link>
        </section>
    );
}

function Order ({ typeList }) {
    return (
        <>
            {typeList.map((type) => {
                const itemTotal = type.price*type.quantity;
                return (
                    <div className="row">
                        <p>{`${type.quantity} ${type.name}`}</p>
                        <p>{itemTotal.toFixed(2).replace(/([.])/gi, ",")}</p>
                    </div>
                );
            })}
        </>
    );
}

function Total ({ orderList }) {
    function calculateTotal () {
        let total = 0;
        
        for (let i = 0; i < orderList.length; i++) {
            for (let j = 0; j < orderList[i].length; j++) {
                total += orderList[i][j].price*orderList[i][j].quantity;
            }
        }

        return total.toFixed(2).replace(/([.])/gi, ",");
    }

    return (
        <div className="row total">
            <p>TOTAL</p>
            <p>{calculateTotal()}</p>
        </div>
    );
}