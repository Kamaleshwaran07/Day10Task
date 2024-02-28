import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className='container-fluid'>
                    <NavLink to={'/'} className={"navbarBrand rounded "}>User</NavLink>
                    <NavLink className={"navbar-brand rounded"} to={'/body'}><span className='textDisplay'>List</span> <span className='gifDisplay'><img src='https://cdn.discordapp.com/attachments/1018124413176135700/1212378202803146752/list.gif?ex=65f19e30&is=65df2930&hm=0c78374deac47780f3450746c9fa35fd0ad5769f59d301a551a10f8e1b5baa64&' className='gif rounded' alt='gif' /></span> </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;