import React from 'react';
import './Cart.css';
import {GrFormClose} from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';


const Cart = (props) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state)
  console.log(data);
  
 const  deletebuyproduct = (index) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      id: index
    })
  }

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
         {
           data.comments.map((buyproduct, index) => 
             <div key={index} className="buyproduct">
              <img src={buyproduct.image} alt=''/>
              <h1>{buyproduct.title}</h1>
              <p>{buyproduct.descr}</p>
              <RiDeleteBin6Line className='corzina' onClick={() => {deletebuyproduct(index)}}/>
             </div>
           )
         }
        </div>
      </div>
  )
}

export default Cart