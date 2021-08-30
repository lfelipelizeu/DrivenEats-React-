import { Link } from "react-router-dom";

export default function Footer ({ orderList }) {
    const [ foods, drinks, desserts ] = orderList;

    if ( foods.length > 0 && drinks.length > 0 && desserts.length > 0 ) {
        return (
            <footer>
                <Link to="/confirm">
                    <button className="enabled">Fechar pedido</button>
                </Link>
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