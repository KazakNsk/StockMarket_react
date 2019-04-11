import React from 'react';
import './personInput.css';

import {connect} from 'react-redux';
import { loginStart, infoStart, stocksStart } from '../../actions'




class PersonInput extends React.Component {
    state = {
        login : '',
        password : ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { login, password } = this.state;

        this.props.dispatch(loginStart({ login, password }));
    };

    handleChangeName = (e) => {
        this.setState({
            login : e.target.value
        });
    }

    handleChangePas = (e) => {
        this.setState({
            password : e.target.value
        });
    }

    clickInfo = () => {
        this.props.dispatch(infoStart());
    }

    clickStocks = () => {
        this.props.dispatch(stocksStart());
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit} className = 'person-input'>
                <h4 className='label'>Зарегистрируйтесь пожалуйста</h4>
                    <div className='login'>
                        Person Name:
                        <input type='text' className = 'text-login'
                        onChange = {this.handleChangeName}
                        value={this.state.login}/>
                    </div>
                    <div className='password'>
                        Password:
                        <input type='password' className = 'text-pass'
                        onChange = {this.handleChangePas}
                        value={this.state.password}/>
                    </div>
                    <button type = 'submit' className = 'btn btn-success'>Регистрация</button>
                </form>
                <button className = 'btn btn-success'
                onClick = {this.clickInfo}>Инфо</button>
                <button className = 'btn btn-success'
                onClick = {this.clickStocks}>Акции</button>
            </div>
        )
    };
}
export default connect()(PersonInput);
