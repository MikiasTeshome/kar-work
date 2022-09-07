import React from 'react';

function About(props) {
    return (
       <>
       <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-12 text-center d-flex justify-content-center align-items-center about-section">
                    <img src="https://image.shutterstock.com/image-photo/antalya-turkey-august-19-2021-260nw-2027444240.jpg"  alt="apple" />

                </div>
                <div className="col-lg-7 col-12 about-sub">
                    <h1 className='about-title'>Ahemadabad IT </h1>
                    <h3 className='aboutsub-title'>Better Education Better Jobs</h3>
                <p>TOPS Technologies has enough experience and resources to develop software applications that best fit our client needs, budget and quality. More than 10k students trained and placed to top IT companies.</p>
              <center>
                <button className='btn btn-primary'>Download Curriculum</button>
                <button className='btn btn-primary'>Request a callback</button>
              </center>
                </div>
            </div>
        </div>
        </section>  



        <section>
        <div className="container">
            <div className="row">
                
                <div className="col-lg-7 col-12 about-sub">
                    <h1 className='about-title'>Ahemadabad IT </h1>
                    <h3 className='aboutsub-title'>Better Education Better Jobs</h3>
                <p>TOPS Technologies has enough experience and resources to develop software applications that best fit our client needs, budget and quality. More than 10k students trained and placed to top IT companies.</p>
              <center>
                <button className='btn btn-primary'>Download Curriculum</button>
                <button className='btn btn-primary'>Request a callback</button>
              </center>
                </div>

                <div className="col-lg-5 col-12 text-center d-flex justify-content-center align-items-center about-section">
                    <img src="https://image.shutterstock.com/image-photo/antalya-turkey-august-19-2021-260nw-2027444240.jpg"  alt="apple" />

                </div>
            </div>
        </div>
        </section>  
       
       </>
    );
}

export default About;