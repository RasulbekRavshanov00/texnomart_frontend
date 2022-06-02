import React from 'react';
import './Login.css';
import { IoClose } from 'react-icons/io5'

const Login = (props) => {
    // const [loginOn, setLoginOn] = useState(false)

  return (
    <div className="login_bar"   style={props.onlogin ? { marginTop: "30px" } : { marginTop: "-1000px" }}>
      <p>Kirish <IoClose onClick={() => props.setonlogin(false)}/></p>
      <div className='phone_inp'>
        <p>Nomer</p>
        <input type="number" className="input_phone"/>
        <button>Telefon orqali ro'yxatdan o'tish</button>
      </div>
    </div>
  )
}

export default Login