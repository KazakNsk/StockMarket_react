import React from 'react';
import axios from 'axios';
import './person-input.css';

import {connect} from 'react-redux';
import {withStockmarketService} from '../hoc';
import {signUp} from '../../actions'




class PersonInput extends React.Component {
    state = {
        login : '',
        password : ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            login: this.state.login,
            password: this.state.password
        }

        this.setState({
            login : '',
            password : ''
        });

        axios.post(
            'https://jsonplaceholder.typicode.com/users',
            {user})
        .then((data) => {
            console.log(data.status)
            signUp(data);
            })
    }

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

    render() {
        return (
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
        )
    };  
}

const mapStateToProps = ({ tokens }) => {
    return { tokens };
}

const mapDispatchToProps = {signUp};

export default withStockmarketService()(
    connect(mapStateToProps,mapDispatchToProps)(PersonInput));