import React from 'react';
import {ItCompData} from '../../data/ItCompData.js';
const SkillIt = () => {
    return (
            <div className="otherSkillsIt">
                <h3> Compétences IT</h3>
                <div className="list">
                    <ul>
                    {
            ItCompData.map((item)=>{            
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
    );
};

export default SkillIt;
