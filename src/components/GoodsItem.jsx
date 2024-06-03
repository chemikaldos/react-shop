function GoodsItem(props){
    const {
      offerId,
        displayType,
        displayName,
        price,
        displayAssets,
        addToBasket = Function.prototype,
    }= props;

    // const handleBuyClick = () => {
    //     handleOrder(mainId);
    //     console.log(mainId, "что в йв");
    // };

   return  <div className="card" >
<div className="card-image">
  <img src={displayAssets[0]?.background} alt={displayName}/>
  <span className="card-title">{displayName}</span>
</div>
<div className="card-content">
  <p>{displayType}</p>
</div>
<div className="card-action">
          <button 
          className="btn" 
          onClick={()=> 
            addToBasket({
                offerId,
                price: price.finalPrice,
                displayType:displayType,
                displayName
          })}>Купить</button>
          <span className="right" style={{fontSize:'1.8rem'}}>{price.finalPrice} руб.</span>
        </div>
</div> 
}



export {GoodsItem}