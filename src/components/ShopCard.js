import './ShopCard.css';

function ShopCard({ card }) {
    return (
        <div className="shopCard">
            <h2 className="cardName">{card.name}</h2>
            <p className="cardColor">{card.color}</p>
            <img src={card.img} />
            <div className="cart">
                <span className="cardPrice">${card.price}</span>
                <button className="buttonAdd">ADD TO CART</button>
            </div>
        </div>
    )
}

export default ShopCard;