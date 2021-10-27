import React from 'react';
import Navigation from '../components/Navigation';
import Diplome from '../components/diplome/Diplome';

const Diplomes = () => {
    return (
        <div className="diplome">
            <Navigation />
            <div className="diplomeContent">
            <Diplome />
            
            </div>
        </div>
    );
};

export default Diplomes;