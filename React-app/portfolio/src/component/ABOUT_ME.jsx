import React from 'react';

function ABOUT(props) {
    return (
        <>
        <div className='main bg-dark'>
<div className='container About_me bg-dark'>
<center><h1 className='text-white p-5'>ABOUT_ME</h1></center>
<p className='about1 text-white'>Hello! I'm Digal Patel</p>
          <p className='about2 text-white'>I'm a Web developer based in Ahamedabad and I'm very passionate and dedicated to my work .With 3 months training as a professional web developer, I have acquired the skills necessary to build great and premium websites.</p>

            <table className="table table-bordered table-sm text-white About3 ">
            <tbody>
            <tr>
                <td colSpan={2}>FOR MORE INFORMATION</td>
            </tr>
                <tr>
                    <td  className="fa1"> <i class="fa fa-mobile" aria-hidden="true"></i> </td>
                    <td> +91 9409929179 </td>
                </tr>
                <tr>
                    <td  className="fa1"> <i class="fa fa-envelope" aria-hidden="true"></i> </td>
                    <td> digalpatel2000@gmailcom </td>
                </tr>
                <tr>
                    <td  className="fa1"> <i class="fa fa-map-marker" aria-hidden="true"></i></td>
                    <td>  21,FF Sunshine Tenaments opp sarvodayanagar-3 opp gyanda school,Ghatlodia Ahmedabad, Gujarat 380061,India Landmark: ghatlodiya </td>
                </tr>
                <tr>
                    <td  className="fa1"> <i class="fa fa-map-marker" aria-hidden="true"></i></td>
                    <td> 07,TORANPARK-2, mirapark ni taki pachhal,pachapada,paliyad road,botad,botad-364710 </td>
                </tr>
            </tbody>
         </table>
</div>
</div>
       </>
    );
}

export default ABOUT;