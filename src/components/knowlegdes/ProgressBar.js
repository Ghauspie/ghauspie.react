import React from 'react';

const ProgressBar = (props) => {
    
    return (
        <div className={props.className}>
           <h3>{props.title}</h3>
           <div className="years">
               <span>Années d'expériences</span>
               <span>1 an</span>
               <span>2 ans</span>
               <span>3 ans</span>
               <span>4 ans</span>
               <span>5 ans et +</span>
            </div>

            <div>
               {
                   props.languages.map((item)=>{
                   let xpYears=5;
                   let progressBar= item.year / xpYears *100 +'%';

                    return(
                        <div key={item.id} className="languagesList">
                            <li className="li languagesList">{item.Name}</li>
                            <div className="progressBar" style={{width:progressBar}}></div>
                        </div>
                    )
                    })
               }
           </div>
        </div>
    );
};

export default ProgressBar;