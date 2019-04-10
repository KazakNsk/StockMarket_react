import React from 'react';
import PersonInput from '../person-input';
// import {Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';

const Auth = ({isLoggedIn}) => {

    // if (isLoggedIn) {
    //     return <Redirect to='/'/>
    // }

    return (
        <div>
            <PersonInput /> 
        </div>
    )
};

// const mapStateToProps = (isLoggedIn) => {
//     return { isLoggedIn }
// }

export default Auth;

// export default connect(mapStateToProps)(Auth);