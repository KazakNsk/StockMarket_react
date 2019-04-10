import React, {Component} from 'react';
import StockListItem from '../stock-list-item';
import Spinner from '../spinner';
import {connect} from 'react-redux';
import {withStockmarketService} from '../hoc';
import {stocksLoaded, stosksRequested} from '../../actions'

import './my-stock-list.css';

class MyStockList extends Component {

    componentDidMount() {
        const { stockmarketService, stocksLoaded, stosksRequested } = this.props;
        stosksRequested() 
        stockmarketService.getMyStocks()                         
            .then((data) =>stocksLoaded(data));                   
    }                                                              
                                         

    render() {                            // рендерим данные уже из редакса
        const {stocks, loading} = this.props;
        if (loading) {
            return <Spinner />
        }
        return (
            <ul className='stock-list'>
                {  
                stocks.map((stock) => {
                    return (
                      <li key ={stock.id}> <StockListItem stock = {stock}/></li>
                    );
                })   
            }
            </ul>
        );
    }
}



const mapStateToProps = ({ stocks, loading }) => {   // деструктурируем состояние    
    return { stocks, loading };                           
}


const mapDispatchToProps = {    
    stocksLoaded, stosksRequested};                          


export default withStockmarketService()(
    connect(mapStateToProps,mapDispatchToProps)(MyStockList));                                            