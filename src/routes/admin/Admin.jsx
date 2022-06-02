import React, { useState } from 'react';
import './Admin.css';
import axios from 'axios';
import { GrFormClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';


const Admin = () => {
     const[title, setTitle] = useState('');
     const[image, setImage] = useState('');
     const[info, setInfo] = useState('');


     const hundleSubmit = async (e) => {
         e.preventDefault()
         await axios.post("http://localhost:5000/api/product/add", {
             title,
             descr: info,
             image
         })
     }

  return (
    <div className='addproduct'>
        <form onSubmit={hundleSubmit}>
        <div className='product_info'>
            <Link to="/">
            <GrFormClose className='chiqish'/>
            </Link>
            <h3>Product Nomi</h3>
            <input type="text" onChange={e => setTitle(e.target.value)}/>
            <h3>Product Rasmi</h3>
            <input type="text" onChange={e => setImage(e.target.value)}/>
            <h3>Product haqida Malumot</h3>
            <input type="text"  onChange={e => setInfo(e.target.value)}/>
            <button>Yangi qo'shish</button>
        </div>
        </form>
    </div>
  )
}

export default Admin