import React, { useState } from 'react';
import ProgramAPI from './API/ProgramAPI';

function Programs(props) {
    const [ProgramData,setProgramData] = useState(ProgramAPI);
    console.log(ProgramData);
    return (
        <>
          <section>
            <div className="container program-work">
                <h1 className="main-heading text-center">Cources available at tops </h1>
                    <div className="row">
                        {ProgramData.map((curEle)=>{
                            const{id,logo,title,info}=curEle;
                            return(
                                <>
                                  <div className="col-12 col-lg-4 text-center program-subdiv">
                                      <i className={`font-icon ${logo}`}></i>
                                      <h2 className='program-title'>{title}</h2>
                                      <p>{info}</p>
                                  </div>
                                </>
                            )
                        })}
                    </div>
               
            </div>
          </section>
        </>
    );
}

export default Programs;