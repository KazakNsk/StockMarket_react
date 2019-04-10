import React from 'react';
import MyStockList from '../my-stock-list';
// import {Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';

const HomePage = ({isLoggedIn}) => {

    // if (!isLoggedIn){
    //     return <Redirect to ='/auth'/>
    // }

    return (
        <div>
            <MyStockList />
        </div>
    )
};

// const mapStateToProps = (isLoggedIn) => {
//     return { isLoggedIn }
// }

export default HomePage;

// export default connect(mapStateToProps)(HomePage);