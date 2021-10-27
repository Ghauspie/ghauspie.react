import React, {Component} from 'react';
import ProgressBar from './ProgressBar';
import {LanguageCompData} from '../../data/LanguageCompData.js';
import {FrameworkCompData} from '../../data/FrameworkCompData.js';

class Languages extends Component {
 render() {
    return (
        <div className="languagesFrameworks">
            <ProgressBar 
           languages={LanguageCompData}
           className="languagesDisplay"
           title="Languages"
           /> 
            <ProgressBar 
           languages={FrameworkCompData}
           className="FrameworkDisplay"
           title="Framework & bibliothèques"
           /> 
        </div>
    );
    }
}

export default Languages;