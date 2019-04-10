import React from 'react';
import {Link} from 'react-router-dom';
import './selling-cart-table.css';

const SellingCartTable = () => {
    return (
        <div className='selling-cart-table'>
            <h3>Вы решили продать</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Наименование</td>
                        <td>Количество</td>
                        <td>Цена</td>
                        <td></td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Сбербанк</td>
                        <td>3</td>
                        <td>36$</td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm float-right">
                                    <i className="fa fa-trash-o" />
                            </button>
                            <button className="btn btn-outline-success btn-sm float-right">
                                    <i className="fa fa-plus-circle" />
                            </button>
                            <button className="btn btn-outline-warning btn-sm float-right">
                                     <i className="fa fa-minus-circle" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Link to = '/transaction'>
                <div className='total'>
                    <i className='cart-icon fa fa-shopping-cart' />
                    {3} items (${108})
                </div>
            </Link>
        </div>
    );
};

export default SellingCartTable;