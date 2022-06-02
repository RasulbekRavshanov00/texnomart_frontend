import React from 'react';
import './Cart.css';
import {GrFormClose} from 'react-icons/gr';
import { useSelector } from 'react-redux';


const Cart = (props) => {
  const data = useSelector(state => state)
  console.log(data);
  
  return (
    <div
        className="card_container"
        style={props.card ? { display: "block" } : { display: "none" }}
      >
        <div className="close_card" onClick={() => props.setCard(false)}>
            <GrFormClose />
          </div>
        
        <div className="card_text_wrapper"><h1>Hozir xarid qilish</h1></div>
        <div className="card_product_wrap">
          <div className="card_product_text">
            <img src="https://texnomart.uz/files/global/new-photo/img/error/shopping-cart.svg" alt="" />
              <div className="card_text_h1">
                <h1>Savatchada hozirda hech nima yo'q</h1>
              </div>
            <button className="card_buy_btn">Xarid qilish</button>
          </div>
        </div>
      </div>
  )
}

export default Cart