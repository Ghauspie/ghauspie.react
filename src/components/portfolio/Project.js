import React, { Component } from 'react';

class Project extends Component {
    // on initiliase l'etat des infos
    state= {
        showInfo: false
    }
    //des qu'on clique sur l'event plus on modifie l'etat de showInfo
    handleinfo= ()=> {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {
        console.log(this.props);
        let {name, languagesIcons, source, info, iframe, prod} =this.props.item;
        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon => <i className={icon} key={icon}></i>)}
                </div>
                <h3 onClick={this.handleinfo}>{name}</h3>
                <iframe src={iframe}/>
                <span className="infos" onClick={this.handleinfo}>
                    <i className="fas fa-plus-circle" ></i>
                </span>
                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                                        </div> 
                                        <div className="sourceCode">
                                        <a href={prod} rel="noopener noreferrer" className="button" target="_blank">Lien production</a>
                                        </div>                                           
                                    </div>
                                    <p className="text">{info}</p>
                                <div className="button return" onClick={this.handleinfo}>Retourner sur la page</div>
                            </div>
                        </div>
                           
                    )
                }
            </div>
        );
    }
}

export default Project;