import React from 'react';
import {ExpProData} from '../../data/ExpProData.js';
const Experience = () => {
    return (
        <div className="experience">
            <h3> Experience</h3>
            <div>
            {
            ExpProData.map((item)=>{
            
            return(
                        <div key={item.id} className="exp">
                            <h4> {item.Title} {item.Lien}</h4>
                            <h5> {item.Date}</h5>
                            <p>{item.Commentaire}</p>
                        </div>
                    )
            })
            }
            </div> 
        </div>
    );
};

export default Experience;