import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {

    return (
        <div>
        <header>
        <h1>Azure Serverless Blog</h1>
      </header>
            <nav>
                <ul>
                    <li><NavLink to="/">Hem</NavLink></li>
                    <li><NavLink to="/bloglist">Se tidigare inlägg</NavLink></li>
                    <li><NavLink to="/createblogitem">Lägg till blogginlägg</NavLink></li>
                    <li><NavLink to="/search">Sök blogginlägg</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;