export default function Footer ({ orderList }) {
    const [ foods, drinks, desserts ] = orderList;

    if ( foods.length > 0 && drinks.length > 0 && desserts.length > 0 ) {
        return (
            <footer>
                <button class="enabled">Fechar pedido</button>
            </footer>
        );
    } else {
        return (
            <footer>
                <button class="disabled">Selecione os 3 itens para fechar o pedido</button>
            </footer>
        );
    }
}