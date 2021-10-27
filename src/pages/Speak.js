import React from 'react';
import Navigation from '../components/Navigation';

const Speak = () => {
    return (
        <div className="speak">
            <Navigation />
            <div className="speakContent">
                <div className="langueid">
                    <h3>Anglais</h3>
                    <p>Niveau A1/A2. Des difficulté pour parler courament l'anglais, mais ok pour le lire ou l'ecrire.</p>
                </div>
                <div className="langueid">
                    <h3>Japonais</h3>
                    <p>Niveau A1. J'ai eu l\'occasion de pouvoir le pratiquer chez un de mes anciens clients et par la même occasion organiser des cours de francais pour les exparts japonais et des cours de japonais pour les employer francais</p>
                </div>
            </div>
        </div>
    );

};

export default Speak;