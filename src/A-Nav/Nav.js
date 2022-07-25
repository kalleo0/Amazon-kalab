import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../Stateprovider';
import { auth } from '../firebase';
function Nav() {
  const [{ basket,user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className='nav'>
      <Link to="/">
      <img
          className="nav__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=''
        />
      </Link>
        
        <div className="nav__search">
        <input className="nav__searchInput" type="text" />
        < SearchIcon className="nav__searchIcon"/>
        </div>
        <Link to={!user && "/login"} className="nav__clearlink">
        <div onClick={handleAuthenticaton} className="nav__option">
         <span className="nav__optionLineOne"> Hello {!user ? "Guest" : user.email}</span>
          <span  className="nav__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
          </Link>
          <Link to="/orders" className='nav__clearlink'>
          <div className="nav__option">
          <span className="nav__optionLineOne">Returns</span>
          <span className="nav__optionLineTwo">& Orders</span>
        </div>
          </Link>
        
        <div className="nav__option">
          <span className="nav__optionLineOne">Your</span>
          <span className="nav__optionLineTwo">Prime</span>
          
        </div>
        <Link to="/checkout" className="nav__clearlink">
          <div className="nav__optionBasket">
            <ShoppingBasketIcon />
            <span className="nav__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        
    </div>
  )
}

export default Nav