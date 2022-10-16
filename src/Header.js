import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='header'>
      <div className='header_logo'>
      <Link to="/">
      <img src="images/logo.jpg" className="header_logo" alt="logo" />
      </Link>
      </div>
      <div className='header_search'>
            <input className='header_searchInput'/>
            <SearchIcon className='header_searchIcon'/>    
      </div>

      <div className='header_nav'>
        <div className='header_option'>
        <CallIcon className='header_optionLineOne'/>
        <Link to="/Prescribe">
        <span className='header_optionLineTwo'>Call Us</span>
        </Link>
        </div>

        
        <div className='header_option'>
        <MyLocationIcon className='header_optionLineOne'/>
        <span className='header_optionLineTwo'>Locate Us</span>
        </div>

      <Link to="/Checkout">
        <div className='header_optionBasket'>
        <ShoppingCartIcon className='header_optionLineOne'/>
        <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
        </div>
        </Link>
    

        <div className='header_option'>
        
        <AssignmentIndIcon className='header_optionLineOne'/>
        <Link to="/About">
        <span className='header_optionLineTwo'>About Us</span>
        </Link>
        </div>

    </div>
    </div>
  )
}

export default Header
