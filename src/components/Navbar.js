import React from 'react';

import { NavLink, Link, useNavigate } from 'react-router-dom';

const NavBar = () => {

    let authToken = sessionStorage.getItem('Auth Token');

    let navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/Web-Dev-Assignment-3')
        navigate(0)
    }

    return (
    <>
       
        <nav>
        <div className='menuitem'>

                <NavLink to='/'>Home</NavLink>    
                <NavLink to='/Pets'>Show Pets</NavLink>
                <NavLink to='/Contact'>Contact Us</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/Donate'>Donate</NavLink>
                {authToken === null ? (<NavLink to='/Login'>Login</NavLink>):(<NavLink to='/Profile'>Profile</NavLink>)}
                {authToken === null ? "" :(<Link onClick={handleLogout}>Logout</Link>)}
                <hr></hr>
        </div>
        </nav>
    </>
    )
}

export default NavBar
