export default function Footer ({ orderList }) {
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

    if ( foods.length > 0 && drinks.length > 0 && desserts.length > 0 ) {
        return (
            <footer>
                <button className="enabled" onClick={sendOrder}>Fechar pedido</button>
            </footer>
        );
    } else {
        return (
            <footer>
                <button className="disabled">Selecione os 3 itens para fechar o pedido</button>
            </footer>
        );
    }
}