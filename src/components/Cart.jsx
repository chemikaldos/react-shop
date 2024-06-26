function Cart (props){
    const {quantity = 0, handleBasketShow = Function.prototype,}= props;
console.log(quantity);
    return(
        <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
            <i className="material-icons">local_grocery_store</i>
            {quantity ? (<span className="cart-quantity">{quantity}</span>) : null}
            
        </div>
        
    )
}

export {Cart}