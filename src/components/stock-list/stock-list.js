import React, {Component} from 'react';
import StockListItem from '../stock-list-item';
import Spinner from '../spinner';
import {connect} from 'react-redux';
import {withStockmarketService} from '../hoc';
import {stocksLoaded, stosksRequested} from '../../actions'

import './stock-list.css';

class StockList extends Component {

    componentDidMount() {
        const { stockmarketService, stocksLoaded, stosksRequested } = this.props;   // получает данные с сервиса
        stosksRequested();  
        stockmarketService.getStocks()                             // используя hoc
            .then((data) => stocksLoaded(data));                    // stocks: action.payload, payload : data,
    }                                                              // а data получаем с сервиса 
                                         

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

// передаем в компонент св-во stocks,
// с значением деструктурированного 
// состояния из store


const mapDispatchToProps = {                 // если у connect  2 значение-объект, то 
    stocksLoaded, stosksRequested            // redux оборачивает actionscreater в bindActionCreators
};                                           // его даже не надо импортировать

// добавляем с помощью hoc connect новые свойства
// и подключаем компонент к редаксу.
// После mapDispatchToProps  у компонента появилось новое свойство-stocksLoaded

export default withStockmarketService()(
    connect(mapStateToProps,mapDispatchToProps)(StockList));                                            