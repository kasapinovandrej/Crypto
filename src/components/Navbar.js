import React from 'react';
import Button from './Button';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {


    return (
        <div className="nav__wrap">
            <nav className='nav'>
                <Link to="/" className='nav__logo'><h2 className='nav__logo--h2'>Navbar</h2></Link>
                <div className="nav__linkbox">
                    <ul className="nav__list">
                        <NavLink to='/' exact className="nav__pages">Home</NavLink >
                        {props.login ? <NavLink to='/profile' className="nav__pages">Profile</NavLink > : null}
                    </ul>
                    {props.login ? null : <Button color='#0775ff' name='Login' func={props.loginFunc} />}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
