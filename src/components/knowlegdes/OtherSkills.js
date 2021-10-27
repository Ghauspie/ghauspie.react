import React from 'react';
import {OtherCompData } from '../../data/OtherCompData';
const OtherSkills = () => {
    return (
        <div>

            <div className="otherSkills">

                <h3> Autres compétences</h3>
                <div className="list">
                    <ul>
                    {
            OtherCompData.map((item)=>{            
            return(
                        <li key={item.id}>
                            <i className=" fas fa-check-square">{item.Name}</i>
                        </li>
                    )
            })
            }
                      
                    </ul>
                </div>


            </div>
          
        </div>
    );
};

export default OtherSkills;