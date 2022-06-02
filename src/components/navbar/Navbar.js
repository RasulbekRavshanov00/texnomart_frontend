import React, {useState} from 'react';
import './Navbar.css';
import { IoLocationOutline, IoSearch } from 'react-icons/io5';
import { HiOutlineGlobe, HiChevronDown } from 'react-icons/hi';
import { BiMicrophone, BiHeart, BiCart, BiAnalyse, BiChevronRight } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
// import { RiScalesLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { AiFillFire } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr'
import Login from '../login/Login';
import Cart from '../cart/Cart';
 
const Navbar = () => {
  const [catalog, setCatalog] = useState(false);
  const [onLogin, setOnLogin] = useState(false)
  const [card, setCard] = useState(false)
  return (
    <>
    <div className='top_navbar'>
        <div className='top_navbar_container'>
            <p className='location_text'><IoLocationOutline className='location_icon'/> Toshkent</p>
            <p>Bizning do'konlarimiz</p>
            <p>B2B savdosi</p>
            <p>Muddatli to'lovga sotib olish</p>
            <p>To'lov usullari</p>
            <p>Mahsulotlar uchun kafolat</p>
            <div className='phonenumber_bar'>
              <p>Qo'ng'iroq qilish:</p>
              <h3 className='phonenumber'>+99871 209 99 44</h3>
             <div className='select_languageBar'>
                <p><HiOutlineGlobe/></p>
                <p className='language'>O'z</p>
                <HiChevronDown/>
             </div>
            </div>
        </div>
    </div>
    <div className='middle_part_navbar'> 
      <div className='middle_part_navbar_container'>
      <p>texnomart*</p>
      <div className='nav_input_bar'>
        <div className="internal_navInpBar">
        <div className='categorys_bar'>
          <p className='categorys_text'>Barcha katagoriyalar <HiChevronDown/></p>
        </div>
          <input type="text" className='nav_input'/>
          <BiMicrophone  className='navbar_microphone'/>
        </div>
        <IoSearch className='navbar_searchIcon'/>
      </div>
      <div className='allSections'>
        <p onClick={() => setOnLogin(true)}><FaRegUser className='user_icon'/> Kirish</p>
        <Link to="/admin" className="admin-page">
        <p><FaRegUser className="comparison_icon"/> Admin</p>
        </Link>
        <p><BiHeart className="favorites_icon"/> Sevimlilar</p>
        <p><BiCart onClick={() => setCard(true)} className="basket_icon"/> Savatcha </p>
      </div>
      </div>
    </div>
    <div className="navbar_bottom_part">
      <div className="navbar_bottom_part_container">
        <div className='katalog_bar' onMouseOut={() => setCatalog(false)} onMouseOver={() => setCatalog(true)}><MdOutlineDashboardCustomize/> Katalog</div>
        
        <p className='aksiya_text'><AiFillFire className="fire_icon"/> Aksiyalar</p>
        <p>SMARTFONLAR</p>
        <p>MUZLATGICHLAR</p>
        <p>СHANGYUTGICHLAR</p>
        <p>XAVO SOVUTGICHLAR</p>
        <p>KIR YUVISH MASHINALARI</p>
        <p>TELEVIZORLAR</p>
        <p>BARCHA KATEGORIYALAR</p>
      </div>
    </div>
    <div className="catalogs" onMouseOut={() => setCatalog(false)} onMouseOver={() => setCatalog(true)}  style={catalog === true ? {display: "block"} : {display: "none"}}>
    <div className='catalogs_container'>
    <div className="catalogs_sidebar">
    <div className='catalog'>
            <BiAnalyse/>
            <p>Maishiy Texnika</p>
            <BiChevronRight className="left_chevron_catalog"/>
          </div><div className='catalog'>
            <BiAnalyse/>
            <p>Maishiy Texnika</p>
            <BiChevronRight className="left_chevron_catalog"/>
          </div><div className='catalog'>
            <BiAnalyse/>
            <p>Maishiy Texnika</p>
            <BiChevronRight className="left_chevron_catalog"/>
          </div><div className='catalog'>
            <BiAnalyse/>
            <p>Maishiy Texnika</p>
            <BiChevronRight className="left_chevron_catalog"/>
          </div><div className='catalog'>
            <BiAnalyse/>
            <p>Maishiy Texnika</p>
            <BiChevronRight className="left_chevron_catalog"/>
          </div><div className='catalog'>
            <BiAnalyse/>
            <p>Maishiy Texnika</p>
            <BiChevronRight className="left_chevron_catalog"/>
          </div><div className='catalog'>
            <BiAnalyse/>
            <p>Maishiy Texnika</p>
            <BiChevronRight className="left_chevron_catalog"/>
          </div><div className='catalog'>
            <BiAnalyse/>
            <p>Maishiy Texnika</p>
            <BiChevronRight className="left_chevron_catalog"/>
          </div><div className='catalog'>
            <BiAnalyse/>
            <p>Maishiy Texnika</p>
            <BiChevronRight className="left_chevron_catalog"/>
          </div><div className='catalog'>
            <BiAnalyse/>
            <p>Maishiy Texnika</p>
            <BiChevronRight className="left_chevron_catalog"/>
          </div><div className='catalog'>
            <BiAnalyse/>
            <p>Maishiy Texnika</p>
            <BiChevronRight className="left_chevron_catalog"/>
          </div>
    </div>
    </div>
    </div>
    {
      onLogin === true ? <Login onlogin={onLogin}  setonlogin={setOnLogin}/> : <></>
    }
    {
      onLogin === true ? <div className='fade' onClick={() => setOnLogin(false)}></div> : <></>
    }
    {
      card === true ? <div className='fade' onClick={() => setCard(false)}></div> : <></>
    }
    {
      card === true ? <Cart card={card} setCard={setCard}/> : <></>
    }
    </>
  )
}

export default Navbar     