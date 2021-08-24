export default function Options (props) {
    return (
        <section class={`${props.type} options`}>
            {props.list.map((option,index) => <Option key={index} name={option.name} img={option.img} description={option.description} price={option.price} />)}
        </section>
    );
}

function Option (props) {
    return (
        <div class="option">
            <img src={props.img} />
                <div class="text">
                    <div class="item">
                        <h2 class="name">{props.name}</h2>
                        <p class="description">{props.description}</p>
                    </div>
                    <div class="price">
                        R$ <span>{props.price.toFixed(2)}</span>
                    </div>
                </div>
                <ion-icon class="check hidden" name="checkmark-circle"></ion-icon>
        </div>
    );
}