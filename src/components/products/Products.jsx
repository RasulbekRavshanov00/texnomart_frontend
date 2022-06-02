import React, { useEffect, useState } from 'react';
import './Products.css';
import axios from "../../apis/products";
import { BiCart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';



const Products = () => {
    const dispatch = useDispatch();
    const [ productData, setProductData ] = useState([])
    const [id, setId] = useState('')

    const fetchData = async () => {
        const { data } = await axios.get("http://localhost:5000/api/product/")
        setProductData(data.product)
    }
    
    const deleteproduct = async (e) => {
        e.preventDefault()
        await axios.delete(`http://localhost:5000/api/product/${id}`)
        fetchData();
    }
    useEffect(() => {
        fetchData()
     }, [])

    return (
        <div className='products-page'>
                    <h1 style={{marginLeft: "200px"}}>Barcha Maxsulotlar</h1>
                <div className="products_container">
           { 
               productData?.map(prod => ( 
                    <div key={prod._id} className='product'>
                        <img src={prod.image}  alt=""/>
                        <h3>{prod.title}</h3>
                        <p>{prod.descr}</p>
                        <div className="icons_product">
                            <BiCart style={{color: "gold"}} onClick={() =>
                                dispatch({
                                    type: "ADD_PRODUCT",
                                    data: prod
                                })
                            }/>
                           <form onSubmit={deleteproduct}>
                           <button className='prod_del' onClick={() => setId(prod._id)} type="submit">o'chirish</button>
                           </form>
                        </div>
                    </div>
          ))
         }
                </div>

        </div>
    )
}

export default Products
