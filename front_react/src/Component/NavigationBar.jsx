import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'
import apartment_icon from '../img/apartment_icon.ico';


function NavigationBar() {
    return (
        <div className='navBody'>
            <img className='iconImage' src={apartment_icon} alt='apartmentImage'></img>
            <span className='homeTitle' >
                <Link to ="/">ZIP GAP</Link>
            </span>
            <div className='navBlock' >
                <div className='navElement'>
                    <Link to="/Login">로그인</Link>
                </div>
                <div className='navElement'>
                </div>
                <div className='navElement'>
                    <Link to="/Registration">회원가입</Link>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
