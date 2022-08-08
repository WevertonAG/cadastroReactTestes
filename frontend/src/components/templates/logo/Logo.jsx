import './Logo.css'
import Coder from '../../../assets/img/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

function Logo(){
    return(
        <aside className="logo" data-testid='logo-1'>
        <Link to="/" className='logo'>
            <img src={Coder} alt="logo" />
        </Link>
     </aside>
    )
}
export default Logo;
 