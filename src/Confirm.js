export default function Confirm (props) {
    return (
        <section className="confirm hidden">
            <div className="box">
                <h2>Confirme seu pedido</h2>
                <div className="row food">
                    <p className="name">Prato</p>
                    <p className="price">0</p>
                </div>
                <div className="row drink">
                    <p className="name">Bebida</p>
                    <p className="price">0</p>
                </div>
                <div className="row dessert">
                    <p className="name">Sobremesa</p>
                    <p className="price">0</p>
                </div>
                <div className="row total">
                    <p>TOTAL</p>
                    <p className="price">0</p>
                </div>
                <button className="send-order">Tudo certo, pode pedir!</button>
                <button className="cancel">Cancelar</button>
            </div>
        </section>
    );
}