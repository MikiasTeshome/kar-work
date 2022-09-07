import React from 'react';

function contact(props) {
    return (
        <>
            <section>
                <div className="container-section">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <h1 className='about-title'>Connect with our Team</h1>
                            <p>OPS Technologies has enough experience and resources to develop software applications that best fit our client needs, budget and quality. More than 10k students trained and placed to top IT companies.</p>
                             <img src="https://image.shutterstock.com/image-photo/antalya-turkey-august-19-2021-260nw-2027444240.jpg" alt="apple" />
                             
                        </div>
                        <div className="col-lg-6 col-12">
                        <form action="/action_page.php">
    <div class="mb-3 mt-3">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
    <div class="mb-3 mt-3">
      <label for="pwd">Name:</label>
      <input type="text" class="form-control" id="Name" placeholder="Enter Name" name="pswd"/>
    </div>
    <div class="mb-3 mt-3">
      <label for="pwd">Mobile no:</label>
      <input type="number" class="form-control" id="number" placeholder="Enter Mobile number" name="pswd"/>
    </div>
    <div class="mb-3 ">
      <label for="comment">Comments:</label>
      <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
    </div>
    <center><button type="submit" class="btn btn-primary">Submit</button></center>
  </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default contact;