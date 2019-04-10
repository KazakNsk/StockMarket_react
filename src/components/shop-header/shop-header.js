import React from 'react';
import './shop-header.css';
import {Link} from 'react-router-dom';



const ShopHeader = () => {
    return (
        <header className='shop-header row'>
        <Link to = '/'>
            <div className='logo text-dark' href='#'>StockMarket</div>
        </Link>
        <div className = 'float-rigth'>
            <Link to = '/buy'>
                <button className = 'btn btn-primary button'> Купить </button>
            </Link>
            <Link to = '/sale'>
                <button className = 'btn btn-primary button'> Продать </button>
            </Link>
            <Link to = '/auth'>
                <button className = 'btn btn-primary button'>
                    SignUp
                </button>
            </Link>
        </div>
        </header>
    )
};



export default ShopHeader;