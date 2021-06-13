import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "../../context/state-context";
import {auth} from "../../firebase";
import "./Header.css";

function Header() {
    const [{basket,user},dispatch] =useStateValue();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <div  className="header__logo">
                <Link to="/">
                    <img
                        src="https://static.businessworld.in/article/article_extra_large_image/1597056012_CNRvas_amazon_dkblue_noto_email_v2016_us_main_CB468775337_.png" 
                        alt="amazon logo"/>
                </Link>
            </div>
            <div className="header__search">
                <input className="header__search-input" type="text"/>
                <SearchIcon className="header__search-icon"/>
            </div>
            <div className="header__nav">
                    <Link 
                        to={!user ?"/login":"/"}
                        className="header__option header__link"
                        onClick={handleAuthentication}
                        >
                        <span className="header__option-line-one">Hello {!user ?"Guest":user.email}</span>
                        <span className="header__option-line-two">{user ? "Sign Out":"Sign In"}</span>
                    </Link>
                    <Link to="/orders" className="header__option header__link">
                        <span className="header__option-line-one">Returns</span>
                        <span className="header__option-line-two">&amp; Orders</span>
                    </Link>
                <div className="header__option">
                    <span className="header__option-line-one">Your</span>
                    <span className="header__option-line-two">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__option-basket">
                        <ShoppingBasket className="header__shopping-basket"/>
                        <span className="header__option-line-two header__basket-count">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
