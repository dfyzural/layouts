import React from "react";
import ShopCard from "./ShopCard";
import './CardsView.css';

function CardsView({ cards }) {
    return (
        <div className='cardsView'>
            {cards.map(card => <ShopCard card={card} />)}
        </div>
    )
}

export default CardsView;