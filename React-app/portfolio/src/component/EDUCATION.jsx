import React from 'react';

function EDUCATION(props) {
    return (
       <>
       <div className='main1 bg-dark'>
       <div className="container education bg-dark">
  <center><h2 className='text-white p-5'>EDUCATION QUALIFICATION</h2></center>
  
  <table className="table table-bordered table-sm text-white tab1">
    <thead>
      <tr>
        <th>Degree</th>
        <th>Institution</th>
        <th>Location</th>
        <th>Passing Year</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr >
        <td>Msc(IT)</td>
        <td>M.K BHAVNAGAR UNIVERSITY</td>
        <td>BOTAD</td>
        <td>2022</td>
        <td>80</td>
      </tr>
      <tr>
        <td>Bca</td>
        <td>M.K BHAVNAGAR UNIVERSITY</td>
        <td>BOTAD</td>
        <td>2020</td>
        <td>80</td>
      </tr>
      <tr>
        <td>12th Pass</td>
        <td>GSHSEB BORD</td>
        <td>BOTAD</td>
        <td>2017</td>
        <td>60%</td>
      </tr>
      <tr>
        <td>10th pass</td>
        <td>GSEB BORD</td>
        <td>BOTAD</td>
        <td>2015</td>
        <td>60%</td>
      </tr>
      
    </tbody>
  </table>
</div>
</div>

       </>
    );
}

export default EDUCATION;