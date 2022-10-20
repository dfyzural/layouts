import ShopItem from "./ShopItem";

function ListView({ items }) {
    return (
        <div className='listView'>
            {items.map(item => <ShopItem item={item} />)}
        </div>
    )
}

export default ListView;