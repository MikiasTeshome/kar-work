import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
       
            <>   
              <div class="container aaa" >
             
                <div><img src={this.props.img} class="rounded-circle" width="25" height="25"/> </div>
                <div className='ll3'>{this.props.title}</div>
             
              </div>
 
            
            </>
        );
    }
}

export default Listicon;

function Listicon()
{
//    let navigate = useNavigate();
   return <>
   <div className="l1">
        <div className="container">
                <div className="row">
                  
                    <div>
                        <List img="img/mi.jpg" title="home"> </List>
                        <List img="img/mi.jpg" title="home"> </List>
                    </div> 

                </div>
        </div>
    </div>
   
   </>
}