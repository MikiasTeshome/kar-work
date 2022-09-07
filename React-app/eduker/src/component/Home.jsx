import React from 'react';

function Home(props) {
    return (
       <>
       <div className='container-fluid main p-5'>
        <p className='edu'>Educal University</p>
        <h1 className='tog'>Together We'll Explore New Things</h1>
        <p className='we'>We believe everyone should have the opportunity to create progress through technolog.</p>
        <button className=' bttn'>Find Cources</button>
       </div>

       <div className="container program-work py-5 ">
            <div className="row">
                <div className="col-12 col-lg-4 d-flex border-end">
                    <div className='logo p-4'><p> <i class="fa-solid fa-graduation-cap "></i></p></div>
                   <div> <p className='title1'>Graduation</p>
                    <p className='title2'>Euucal University was established it is recognized.</p>
                    <p className='title3'>Learn More </p></div>
                </div>
                <div className="col-12 col-lg-4  d-flex border-end">
                    <div className='logo p-4'><p><i class="fa-solid fa-building-columns"></i></p></div>
                    <div> <p className='title1'>University Life</p>
                    <p className='title2'>Euucal University was established it is recognized.</p>
                    <p className='title3'>Learn More </p></div>
                </div>
                <div className="col-12 col-lg-4 d-flex border-end">
                <div className='logo p-4' > <p><i class="fa-solid fa-book-open"></i></p></div>
                <div><p className='title1'>Education Services</p>
                    <p className='title2'>Euucal University was established it is recognized.</p>
                    <p className='title3'>Learn More </p></div>
                </div>
            </div>
        </div>


        <div className='container-fluid photo mt-5 '>
            <div className='photos'>
          
           <div> <p><img className='photos-2' src="https://eduker-five.vercel.app/assets/img/about/about-1.jpg" alt="" /></p>
                 <p><img className='photos-3' src="https://eduker-five.vercel.app/assets/img/about/about-3.jpg" alt="" /></p></div>
                 <div> <p><img className='photos-1' src="https://eduker-five.vercel.app/assets/img/about/about-2.jpg" alt="" /></p></div>
            </div>
            
            <div className='contain'>
                <p className='contain-heading'>About Educa</p>
                <p className='contain-title'>Degrees in <br />Various academic<br /> Didciplines</p>
                <p className='contain-info'>Not only can university offer an environment rich in our social an cultural experiences.</p>
                <ul className='contain-li'>
                    <a><i className='fa-solid fa-check'></i> Access to all our courses</a><br />
                    <a><i className='fa-solid fa-check'></i>Learn the latest skills</a><br />
                    <a><i className='fa-solid fa-check'></i>Upskill your organization</a>
                </ul>
                <button className='btn btn-primary'>Read More</button>
            </div>

        </div>


        <div className="container program  ">
            <div className="row">
                <div className="col-12 col-lg-3 border-end four">
                    <div className='logo p-4'><p> <i className="fa-solid fa-globe"></i></p></div>
                   <div> 
                            <h4 className='text-primary'><span className='text-primary counter'>17</span> + </h4>
                            <p className=''>Years of Language<br /> Education Experience</p>
                   </div>
                </div>
                <div className="col-12 col-lg-3  border-end four">
                    <div className='logo p-4'><p> <i className="fa-solid fa-globe"></i></p></div>
                   <div> 
                            <h4 className='text-primary'><span className='text-primary counter'>17</span> + </h4>
                            <p className=''>Innovative Foreign<br /> Online Courses</p>
                   </div>
                </div>
                <div className="col-12 col-lg-3  border-end four">
                    <div className='logo p-4'><p> <i className="fa-solid fa-globe"></i></p></div>
                   <div> 
                            <h4 className='text-primary'><span className='text-primary counter'>17</span> + </h4>
                            <p className=''>Years of Language<br /> Education Experience</p>
                   </div>
                </div>
                <div className="col-12 col-lg-3  border-end four">
                    <div className='logo p-4'><p> <i className="fa-solid fa-globe"></i></p></div>
                   <div> 
                            <h4 className='text-primary'><span className='text-primary counter'>17</span> + </h4>
                            <p className=''>Years of Language<br /> Education Experience</p>
                   </div>
                </div>
               
        </div>
        </div>
        
        <div className='container-fluid spa'>
        <p className='text-primary heading'>Top Courses</p>
        <h1>Our Featured Courses</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing aelit, sed do eiusmod</p>
        <div class="spinner-border mt-5" role="status">
                <span class="visually-hidden">Loading...</span>
         </div>

        </div>


        <div className='container six'>
            <div className="row">
            <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-6 six1 mt-5'>
               <p className="text-primary">Campus Life</p>
               <h2>University Campus</h2>
               <p>Our research has an impact globally join us in tackling the big issues.</p>
               <button className="btn1">More Research</button>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-6 six1 mt-5'>
            <img src="https://eduker-five.vercel.app/assets/img/campus/campus-1.jpg" alt="" />
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-6 six1 mt-5'>
            <img src="https://eduker-five.vercel.app/assets/img/campus/campus-2.jpg" alt="" />
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-6 six1 mt-5'>
            <img src="https://eduker-five.vercel.app/assets/img/campus/campus-3.jpg" alt="" />
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-6 six1 mt-5'>
            <img src="https://eduker-five.vercel.app/assets/img/campus/campus-4.jpg" alt="" />
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-6 six1 mt-5'>
            <img src="https://eduker-five.vercel.app/assets/img/campus/campus-5.jpg" alt="" />
            </div>
            </div>
        </div>

        <div className='container'>
            <p className='text-primary life'>Discover Research</p>
            <p className='text-dark life1'>Life Changing Research</p>

  <div className='card1'>
  <div className="card border-end" >
    <img className="card-img-top images1 " src="https://eduker-five.vercel.app/assets/img/research/research-1.jpg" alt="image" />
    <div className="card-body text-center">
      <h4 className="card-title">Frontier Research</h4>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa lorem aliqua.</p>
     
    </div>
  </div>

  <div className="card border-end" >
    <img className="card-img-top images1 rounded" src="https://eduker-five.vercel.app/assets/img/research/research-2.jpg" alt="image" />
    <div className="card-body text-center">
      <h4 className="card-title">Global Research</h4>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa lorem aliqua.</p>
     
    </div>
  </div>

  <div className="card border-end" >
    <img className="card-img-top images1 " src="https://eduker-five.vercel.app/assets/img/research/research-3.jpg" alt="image" />
    <div className="card-body text-center">
      <h4 className="card-title">Public Engagement</h4>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa lorem aliqua.</p>
     
    </div>
  </div>
  </div>
        </div>


        <div className='container latest'>
        <div className='latest1'>
            <p className='text-primary life'> Latest News</p>
            <p className='text-dark life1'>The latest news from Educal</p>
        </div>
        <div className='latest2 border-top'>
            <div className='latest_1 '>
                <div className='latestfafa'><span><i class="fa fa-users" aria-hidden="true"></i></span></div>
            <div>
                 <h1> Become an Instructor</h1>
                  <p>Teach what you love. Learned gives you neccessary tools to become an instructor.</p>
                  <button className='btn btn-body'>Start Teaching</button>
            </div>
            </div>
            <div className='latest_2 '>
            <div className='latestfafa'><span><i class="fa fa-graduation-cap" aria-hidden="true"></i></span></div>
            <div>
                 <h1> Apply for Admission</h1>
                  <p>Course completed? Then its time apply the certificate Do it in simplesteps with Learned.</p>
                  <button className='btn btn-primary'>Apply Now</button>
            </div>
            </div>

        </div>
        </div>
       


       <div className='container footer'>
       <div className='f1'>
        <img src="https://eduker-five.vercel.app/assets/img/logo/logo.png" height="40px" wigth="80px" alt="img" />
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Nunc maximus, nulla utlaoki comm odo sagittis.</p>

        <p>Follow Us</p>
        <div className='fafai'>
            <div className='ff1'><i class="fa fa-facebook-official" aria-hidden="true"></i></div>
            <div className='ff1'><i class="fa fa-twitter" aria-hidden="true"></i></div>
            <div className='ff1'><i class="fa fa-linkedin" aria-hidden="true"></i></div>
            </div>
        </div>
        <div className='f2'>
            <h4>Explore</h4>
        <ul>
            
            <li>About us</li>
            <li>Success story</li>
            <li>Courses</li>
            <li>About us</li>
            <li>Instructor</li>
            <li>Events</li>
            <li>Contact us</li>
        </ul>
        </div>
        <div className='f3'>
            <h4>Links</h4>
            <ul>
                <li>News & Blogs</li>
                <li>Library</li>
                <li>Gallery</li>
                <li>Terms of service</li>
                <li>Membership</li>
                <li>Career</li>
                <li>Partners</li>
            </ul>
        </div>
        <div className='f4'>
<h4>Sign up for our newsletter</h4>
<p>Receive weekly newsletter with educational materials, popular books and much more!</p>
<div>
    <input type="text" placeholder='Email'/>
    <button className='btn btn-primary'>Subscribe</button>
</div>
</div>


       </div>

       <div className='container last1 border-top'>
        © 2022 Educal. All Rights Reserved
        </div>


        
       </>
    );
}

export default Home;