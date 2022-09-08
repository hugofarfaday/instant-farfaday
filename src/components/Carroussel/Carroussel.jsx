import React, { Component } from 'react'
import Card from '../Card/Card';
import Col from '../Col/Col';

export default class Carroussel extends Component {

  render() {
    return (
        <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_Overwatch2WatchpointPack_image1600w.jpg" class="d-block w-100" alt="..." />
    </div>
    <div className='container'>
      <Col />
      </div>
  </div>
</div>
       </>
    )
  }
}
