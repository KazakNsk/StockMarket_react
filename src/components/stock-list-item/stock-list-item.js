import React from 'react';
import './stock-list-item.css';

const StockLisItem = ({ stock }) => {
    const {name, group, prise, coverImage} = stock;

    return (
        <div className='stock-list-item'>
            <div className='stock-cover'>
                <img src = {coverImage} alt='cover' />
            </div>
            <div className='stock-details'>
                <span className='stock-name'>{name}</span> 
                <div className = 'stock-group'>{group}</div>
                <div className = 'stock-prise'>${prise}</div>
                <button className = 'btn btn-secondary add-to-cart'>
                    Добавить в корзину
                </button>
            </div>
        </div>
        );
};

export default StockLisItem;