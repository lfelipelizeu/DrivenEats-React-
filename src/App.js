import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

export default function App () {
    return (
        <>
            <Header />
            <Main />
            <Footer />
            <Confirm />
        </>
    );
}

function Confirm () {
    return (
        <section class="confirm hidden">
            <div class="box">
                <h2>Confirme seu pedido</h2>
                <div class="row food">
                    <p class="name">Prato</p>
                    <p class="price">0</p>
                </div>
                <div class="row drink">
                    <p class="name">Bebida</p>
                    <p class="price">0</p>
                </div>
                <div class="row dessert">
                    <p class="name">Sobremesa</p>
                    <p class="price">0</p>
                </div>
                <div class="row total">
                    <p>TOTAL</p>
                    <p class="price">0</p>
                </div>
                <button class="send-order">Tudo certo, pode pedir!</button>
                <button class="cancel">Cancelar</button>
            </div>
        </section>
    );
}