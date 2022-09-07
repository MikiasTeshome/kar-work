import React, { Component } from "react";

class AnalogClock extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      time : new Date()
    };
  }

  componentDidMount(){
    this.timeId = setInterval(() => {
       this.setState({
         time : new Date()
       })
    }, 1000);
  }

  componentWillMount(){
    clearInterval(this.timeId)
  }

  render() {
    return (
      <>
     
        <div className="clock">
             <div className="hour_hand"
             style={{transform : `rotateZ(${this.state.time.getHours() *30}deg)`}}>

             </div>
             <div className="min_hand"
             style={{transform : `rotateZ(${this.state.time.getMinutes() *6}deg)`}}>

             </div>
             <div className="sec_hand"
             style={{transform : `rotateZ(${this.state.time.getSeconds() *6}deg)`}}>

             </div>

             <span className="twelve"> XII</span>
        <span className="one"> I </span>
        <span className="two"> II </span>
        <span className="three"> III </span>
        <span className="four"> IV </span>
        <span className="five"> V </span>
        <span className="six"> VI </span>
        <span className="seven"> VII </span>
        <span className="eight"> VIII </span>
        <span className="nine"> IX </span>
        <span className="ten"> X </span>
        <span className="eleven"> XI </span>
         </div>
         

      </>
    );
  }
}

export default AnalogClock