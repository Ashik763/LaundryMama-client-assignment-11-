import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';

const Navbar = () => {
 
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand ml-5" href="/">Mama Laundry</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link mr-5" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link mr-5" to="/userInfo/:id">Dashboard <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link mr-5" to="/laundryService">Laundry Services <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link mr-5" to="/WriteReview">Reviews <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link mr-5" to="/admin">Admin <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
     <Link className="nav-link mr-5" to="/login">Log In <span className="sr-only">(current)</span></Link>
        
      </li>
      

    </ul>
    
  </div>
</nav>
        </div>
    );
};

export default Navbar;