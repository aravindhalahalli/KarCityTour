import React, { Component } from 'react';
import "./Tourlist.scss";
import Tour from '../Tour/Tour';
import {tourData} from '../tourData';


export default class indexTourList extends Component {
  state = {
      tours:tourData
  };
  render() {
    console.log(this.state.tours)
    const {tours} = this.state;

    return (
      <section className="tourlist">
          {tours.map(tour =>{
              return <Tour key={tour.id} tour= {tour} />;    
          })}
      </section>
    );
  }
}
