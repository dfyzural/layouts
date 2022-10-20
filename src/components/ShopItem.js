import './ShopItem.css'

function ShopItem({ item }) {
    return (
        <div className="shopItem">
            <div className='itemImg'>
                <img src={item.img} />
            </div>
            <h2 className="itemName">{item.name}</h2>
            <p className="itemColor">{item.color}</p>
            <span className="itemPrice">${item.price}</span>
            <button className="buttonAdd">ADD TO CART</button>
        </div>
    )
}

export default ShopItem;