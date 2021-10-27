import React, { Component } from 'react';
import {ProjectData} from '../../data/ProjectData'
import Project from './Project';

class ProjectList extends Component {
    state = {
        projects:ProjectData,
        radios: [
            {id:1, value:"CSS"},
            {id:2, value:"Symfony"},
            {id:3, value:"React"},
            {id:4, value:"PHP"},
            {id:5, value:"JS"},
            {id:6, value:"WP"},
            {id:7, value:"NodeJS"},
            
        ],
        selectedRadio: 'CSS' 
    };

    handleRadio = (event) => {
        let radio= event.target.value;
        this.setState({selectedRadio: radio});
    }
    
    render() {
        let {projects, radios, selectedRadio} =this.state;

        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radio)=> {
                            return (
                                <li key={radio.id}>
                                    <input type="radio" name="radio" 
                                    checked={radio.value === selectedRadio} value={radio.value} 
                                    id={radio.value} onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="projects">
                    {
                        projects.filter(item => item.Languages.includes(selectedRadio)).map(item => {
                            return(
                                <Project
                                key={item.id}
                                item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;