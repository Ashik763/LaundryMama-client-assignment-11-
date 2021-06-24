import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from './Navbar/Navbar';

const Header = () => {
  const  style = {backgroundColor:"#F6F6F6"};
    return (
        <div style={style} className="m-3" >
            {/* <Navbar/> */}
            <HeaderMain/>
        </div>
    );
};

export default Header;