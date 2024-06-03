function BasketItem(props) {

const {
    offerId,
displayName,
price,
quantity,
removeFromBasket=Function.prototype,
incQuantity=Function.prototype,
decQuantity=Function.prototype
} = props

    return (
        <li  className="collection-item">
{displayName} x {price} руб,
 количество:{' '}<button  onClick={()=>decQuantity(offerId)}>-</button> {quantity}{' '}<button  onClick={()=>incQuantity(offerId)}>+</button>{' '},
  общая стоимость: {price*quantity},  
   
   
<span  className="secondary-content" onClick={()=>removeFromBasket(offerId)}>
    <i className="material-icons basket-delete" >clear</i></span>
        </li>
    )
}

export {BasketItem}