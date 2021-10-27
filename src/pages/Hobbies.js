import React from 'react';
import Navigation from '../components/Navigation';

const Passion = () => {
    return (
        <div className="hobbies">
            <Navigation />
            <div className="hobbiesContent">
                <h3>Mes passions ?</h3>
                <p>
                Concernant mes passions. La première est l'informatique entre l'hardware (entre mon pc fixe, le laptop, mon dédie, ainsi que mon routeur cisco et son swith) et software ( les langages de programmation, les cryptomonaie ...).
                <br/>
                Ensuite, viens la culture Asiatique. Entre son histoire en globalité, ces mangas, sa musique.
                <br/>
                Puis la moto, actuellement je suis sur ma bonne vieille honda cbf 600 de 2004 qui fait toujours bien son taff ^^.
                <br/>
                De plus, il a le dessin aussi, les maquettes (bateaux, tank, avion, mais aussi warhammer) et pour finir les JDR (donjon et dragon)
                <br/>
                En ce qui concerne le sport. Je n'en pratique plus en club pour x y raison mais j'aime bien pratiquer entre amie le handball, baseball, billard. Ensuite, je continue de pratiquer mes kata du kendo.
                </p>,
                
                    </div>
        </div>
    );
};

export default Passion;