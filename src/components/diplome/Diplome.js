import React from 'react';
import { DiplomeData } from '../../data/DiplomeData';

const Diplome = () => {
    return (
        <div  className="diplomeId">      
            { DiplomeData.map((currentobjet)=>{
                return (
                    <div>
                    <h3 key={currentobjet.id}>{currentobjet.Title} {currentobjet.Lien}</h3>
                    <h4>{currentobjet.Date}</h4>
                    <p>{currentobjet.Commentaire}</p>
                    </div>
                );
                })}
        </div>
    );
};

export default Diplome;