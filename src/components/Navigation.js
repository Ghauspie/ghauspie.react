import React from 'react';
import { NavLink } from 'react-router-dom';
import me from './../media/me.jpg';

const Navigation = () => {

    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src={me} alt="Picture of Guillaume Hauspie" />  
                    <h3>Guillaume HAUSPIE</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                    <NavLink exact to ="/" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span> Acceuil</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to ="/Speak" activeClassName="navActive">
                    <i class="fas fa-microphone-alt"></i>
                        <span> Speak</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to ="/Passion" activeClassName="navActive">
                    <i class="far fa-heart"></i>
                        <span> Passion</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to ="/Diplome" activeClassName="navActive">
                    <i class="fas fa-user-graduate"></i>
                        <span> Diplome</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to ="/Knowlegdes" activeClassName="navActive">
                        <i className="fas fa-mountain"></i>
                        <span> Compétences</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to ="/Projets" activeClassName="navActive">
                        <i className="fas fa-image"></i>
                        <span> Projets</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to ="/Contact" activeClassName="navActive">
                         <i class="fas fa-street-view"></i>
                        <span> Contactez-moi</span>
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                    <a href="https://www.linkedin.com/in/guillaume-hauspie/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                    <a href="https://github.com/Ghauspie/test-site" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p> Guillaume hauspie - 2021 - 0689656301</p>
                </div>
            </div>
            
        </div>
    );
};

export default Navigation;