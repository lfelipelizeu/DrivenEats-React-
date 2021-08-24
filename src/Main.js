import Options from "./Options.js";

const options = [
    {
        name: "X-Burguer",
        img: "assets/imagens/pratos/x_burger.jpg",
        description: "Apenas carne e queijo",
        price: 11,
        type: "food"
    },
    {
        name: "X-Salada",
        img: "assets/imagens/pratos/x_salada.jpg",
        description: "Carne, queijo, alface e tomate",
        price: 14,
        type: "food"
    },
    {
        name: "X-Bacon",
        img: "assets/imagens/pratos/x_bacon.jpg",
        description: "Carne, queijo e bacon",
        price: 16.5,
        type: "food"
    },
    {
        name: "X-Bacon Duplo",
        img: "assets/imagens/pratos/x_bacon_duplo.jpg",
        description: "2 carnes, queijo e bacon",
        price: 19.5,
        type: "food"
    },
    {
        name: "Coca lata",
        img: "assets/imagens/bebidas/coca_lata.jpg",
        description: "Lata 350ml",
        price: 3.9,
        type: "drink"
    },
    {
        name: "Guaraná lata",
        img: "assets/imagens/bebidas/guarana_lata.jpg",
        description: "Lata 350ml",
        price: 3.9,
        type: "drink"
    },
    {
        name: "Pepsi lata",
        img: "assets/imagens/bebidas/pepsi_lata.jpg",
        description: "Lata 350ml",
        price: 3.9,
        type: "drink"
    },
    {
        name: "Dr. Pepper lata",
        img: "assets/imagens/bebidas/dr_pepper_lata.jpeg",
        description: "Lata 350ml",
        price: 10,
        type: "drink"
    },
    {
        name: "Coquinha",
        img: "assets/imagens/bebidas/coquinha.jpg",
        description: "Garrafa não sei quantos ml",
        price: 2.5,
        type: "drink"
    },
    {
        name: "H2O",
        img: "assets/imagens/bebidas/h2o.jpg",
        description: "Garrafa 500ml",
        price: 5,
        type: "drink"
    },
    {
        name: "Coca 2L",
        img: "assets/imagens/bebidas/coca_2l.jpg",
        description: "Garrafa 2 litros",
        price: 9.9,
        type: "drink"
    },
    {
        name: "Bolo de chocolate",
        img: "assets/imagens/sobremesas/bolo_de_chocolate.jpg",
        description: "1 fatia de bolo de chocolate",
        price: 2.5,
        type: "dessert"
    },
    {
        name: "Mousse",
        img: "assets/imagens/sobremesas/mousse_de_maracuja.jpeg",
        description: "1 pote de mousse de maracujá",
        price: 3.5,
        type: "dessert"
    },
    {
        name: "Picolé",
        img: "assets/imagens/sobremesas/picole.jpg",
        description: "1 picolé docinho",
        price: 1,
        type: "dessert"
    },
    {
        name: "Pudim",
        img: "assets/imagens/sobremesas/pudim.png",
        description: "1 fatia de pudim de leite condensado",
        price: 2.5,
        type: "dessert"
    }
];

export default function Main() {
    const foods = options.filter((option) => option.type === "food");
    const drinks = options.filter((option) => option.type === "drink");
    const desserts = options.filter((option) => option.type === "dessert");

    return (
        <main>
            <h1>Primeiro, seu prato</h1>
            <Options type="food" list={foods} />

            <h1>Agora, sua bebida</h1>
            <Options type="drink" list={drinks} />

            <h1>Por fim, sua sobremesa</h1>
            <Options type="dessert" list={desserts} />
        </main>
    );
}