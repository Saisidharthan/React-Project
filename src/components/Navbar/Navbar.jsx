import {React,useContext,useState} from 'react'
import './Navbar.css'
import logo from'../Assets/logo1.webp';
import { Link, useNavigate } from 'react-router-dom';
import cart_icon from '../Assets/cart_icon.png';
import { UserContext } from '../../context/UserProvider';

const Navbar = () => {
  const[menu ,setmenu]=useState("")
  const {isAuthenticated,loggedOut} = useContext(UserContext);

  const Navigate = useNavigate();
  const logout=()=>{
    loggedOut();
    Navigate('/');
  }
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt='img'/>
            <ul className="nav-menu">
                <li onClick={()=>{setmenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
            </ul>
        </div>
        <div className="nav-login-cart">
          {
            isAuthenticated?
            <>
              <button onClick={logout}>Logout</button>
              <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            </>
            :
            <>
              <Link to='/login'><button onClick={()=>{setmenu("login")}}>Login</button></Link>
              <Link to='/signup'><button onClick={()=>{setmenu("register")}}>Sign-Up</button></Link>
            </>
          }
        </div>
    </div>
  );
}

export default Navbar