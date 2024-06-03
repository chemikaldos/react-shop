import { GoodsItem } from "./GoodsItem";

function GoodList(props){
    const {goods =[], addToBasket = Function.prototype } = props;
    // console.log(goods);

    if(!goods.length){
        return <h3>Nothing here</h3>
    }

return <div className="goods">
    {goods.map(item =>(
        <GoodsItem  key={item.offerId} handleOrder={props.handleOrder} {...item} addToBasket={addToBasket}/>
    ))}
</div>

}

export {GoodList}