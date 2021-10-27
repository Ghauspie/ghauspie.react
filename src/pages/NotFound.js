import React from 'react';
import { NavLink } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
            
            <div className="notFound">
                <div className="notFoundContent">
                <h3>Bah alors on c'est perdus ? </h3>
                <li>
                    <NavLink exact to ="/" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span> Acceuil</span>
                    </NavLink>
                    </li>
                </div>
            </div>
            
        </div>
    );
};

export default NotFound;
