import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
           <Navigation />
           <div className="homeContent">
               <div className="content">
                   <h1>Guillaume Hauspie</h1>
                   <h2>Développeur web (spé symfony)</h2>
                   <p>Actuellement à la recherche d'un CDI, CDD ou stage dans les secteurs Dunkerquois, Calaisien, Liloise, St-omer, Hazebrouck et Bailleul. Mais je suis aussi ouvert au full remote</p> 
                   {/* <div className="pdf">
                       <a src="./media/Hauspie-Guillaume.pdf" target="_blank">Télécherger mon C.V</a>
                   </div> */}
               </div>
           </div>
           
        </div>
    );
};

export default Home;
