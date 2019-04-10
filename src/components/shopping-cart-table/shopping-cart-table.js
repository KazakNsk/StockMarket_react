import React from 'react';
import {Link} from 'react-router-dom';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
    return (
        <div className='shopping-cart-table'>
            <h3>Вы решили приобрести</h3>
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
                        <td>НеСбербанк</td>
                        <td>34</td>
                        <td>335$</td>
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
                    {34} items (${335})
                </div>
            </Link>
        </div>
    );
};

export default ShoppingCartTable;