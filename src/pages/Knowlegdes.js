import React from 'react';
import Experience from '../components/knowlegdes/Experience';
import Languages from '../components/knowlegdes/Languages';
import OtherSkills from '../components/knowlegdes/OtherSkills';
import SkillIt from '../components/knowlegdes/SkillIt';
import Navigation from '../components/Navigation';


const Knowlegdes = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experience />
                <OtherSkills />
                <SkillIt/>
            </div>
        </div>
    );
};

export default Knowlegdes;