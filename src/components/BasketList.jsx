import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const {order = [], handleBasketShow=Function.prototype, removeFromBasket=Function.prototype, incQuantity=Function.prototype, decQuantity=Function.prototype} = props;

const totalPrice = order.reduce((sum, el)=>{
    return sum + el.price * el.quantity
}, 0)


    return (
      <ul className="collection basket-list">
        <li  className="collection-item active">Корзина</li>
        {order.length ? order.map(item =>(
                <BasketItem key={item.mainId} {...item} removeFromBasket= {removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity}/>
            )) : (<li  className="collection-item">Корзина пуста</li>
        )}
        <li  className="collection-item">Общая стоимость: {totalPrice} руб.
        <button  className="secondary-content btn-small">ОФОРМИТЬ</button>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
      </ul>   
    )
   
}

export {BasketList}