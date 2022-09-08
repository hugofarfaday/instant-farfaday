import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from '../Col/Col';

export default class Card extends Component {
  render() {
    return (
        <>
        <div className='row'>
        <div className='card bg-light border-dark' style={{width: '18rem'}}>
    <img src='https://www.residentevil.com/village/ge/assets/images/common/share-gl.png' class="card-img-top" alt="..." />
    <div className='card-body'>
      <h3 className='card-text'>Resident Evil Village</h3>
      <p>18.56$</p>
      <a href="#" class="btn btn-dark">Acheter</a>
    </div>
  </div>
  <div className='card bg-light border-dark' style={{width: '18rem'}}>
    <img src='https://cdn.akamai.steamstatic.com/steam/apps/1583230/capsule_616x353.jpg?t=1661277736' class="card-img-top" alt="..." />
    <div className='card-body'>
      <h3 className='card-text'>High On Life</h3>
      <p>59.99$</p>
      <a href="#" class="btn btn-dark">Acheter</a>
    </div>
  </div>
  <div className='card bg-light border-dark' style={{width: '18rem'}}>
    <img src='https://bnetcmsus-a.akamaihd.net/cms/blog_header/ck/CKVBTJLOOMIU1656284468947.png' class="card-img-top" alt="..." />
    <div className='card-body'>
      <h3 className='card-text'>Overwatch 2 : Edition Collector</h3>
      <p>69.99$</p>
      <a href="#" class="btn btn-dark">Acheter</a>
    </div>
  </div>
  </div>
  </>
    )
  }
}
