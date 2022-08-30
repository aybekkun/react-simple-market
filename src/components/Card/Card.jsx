import React from "react";
import "./Card.scss";
const Card = ({id, price, name, img, onClickBuy}) => {
  const onClickBuyItem = ()=>{
    onClickBuy({name, id});
  }
  return (
    <div className="wrap">
      <div className="contain">
        <div className="top" style={{backgroundImage:`url(https://shop.bookie.uz/uploads/${img})`}}></div>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h4>{name}</h4>
              <p>{new Intl.NumberFormat('ru-RU').format(price)} UZS</p>
            </div>
            <div onClick={onClickBuyItem} className="buy">
            <p>Buyırtpa beriw</p>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Card;
