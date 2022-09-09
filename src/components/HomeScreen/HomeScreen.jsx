import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Card/Card';
import Background from '../Background/Background';
import "./HomeScreen.css";

export default class HomeScreen extends Component {
  render() {

    const categoryInits = [
        { id: "1", title: "High On Life", prix: "60", pricebare: "65.99", video:"./assets/video/high.mp4" , image: "./assets/images/highonlife.jpg" },
        { id: "2", title: "Overwatch 2 : Legendary Edition", prix: "60", pricebare: "62.99", video:"./assets/video/overwatch.mp4" , image: "./assets/images/overwatch.jpg" },
        { id: "3", title: "Call Of Duty Modern Warfare 2", prix: "59", pricebare: "60", video:"./assets/video/callof.mp4" , image: "./assets/images/callof.jpg" },
        { id: "4", title: "Bioshock", prix: "3", pricebare: "10", video:"./assets/video/bioshock.mp4" , image: "./assets/images/bioshock.jpg" },
        { id: "5", title: "Bioshock Infinite", prix: "10", pricebare: "20", video:"./assets/video/bioshock2.mp4" , image: "./assets/images/bioshock2.jpg" },
        { id: "6", title: "Resident Evil Village", prix: "20", pricebare: "45.99", video:"./assets/video/resident.mp4" , image: "./assets/images/resident.png" },
        { id: "7", title: "Doom", prix: "5", pricebare: "15", video:"./assets/video/doom.mp4" , image: "./assets/images/doomjpg.jpg" },
        { id: "8", title: "Stray", prix: "13", pricebare: "20", video:"./assets/video/stray.mp4" , image: "./assets/images/stray.jpg" },
        { id: "9", title: "Train Sim World 3", prix: "25", pricebare: "30", video:"./assets/video/train.mp4" , image: "./assets/images/train.jpg" },
        { id: "10", title: "Hogwarts Legacy : L'Héritage de Poudlard", prix: "45", pricebare: "59.99",  video:"./assets/video/legacy.mp4" , image: "./assets/images/potter.jpg" },
        { id: "11", title: "Forspoken", prix: "45", pricebare: "59.99", video:"./assets/video/forspoken.mp4" , image: "./assets/images/forspoken.jpg" },
        { id: "12", title: "Half life 3", prix: "65", pricebare: "79.99", video:"./assets/video/half.mp4" , image: "./assets/images/half.png" },
        { id: "13", title: "Dragon Ball : The Breakers", prix: "14", pricebare: "19.99", video:"./assets/video/dragon.mp4" , image: "./assets/images/dragon.webp" },
        { id: "14", title: "Borderlands 3", prix: "18", pricebare: "25", video:"./assets/video/borderlands.mp4" , image: "./assets/images/borderlands.jpeg" },
        { id: "15", title: "Gotham Knights", prix: "50", pricebare: "55.99", video:"./assets/video/knights.mp4" , image: "./assets/images/knights.jpg" },
        { id: "16", title: "Farcry WTF", prix: "70", pricebare: "79.99",  video:"./assets/video/farcry7.mp4" , image: "./assets/images/farcry7.webp" },
        { id: "17", title: "The Outlast Trials", prix: "55", pricebare: "63.99", video:"./assets/video/outlast.mp4" , image: "./assets/images/outlast.jpg" },
        { id: "18", title: "Skull and Bones", prix: "40", pricebare: "55.99", video:"./assets/video/skull.mp4" , image: "./assets/images/skull.jpg" },
        { id: "19", title: "The Lord of the Rings : Gollum", prix: "19", pricebare: "35.99", video:"./assets/video/gollum.mp4" , image: "./assets/images/gollum.jpg" },
        { id: "20", title: "S.T.A.L.K.E.R. 2 : Heart of Chornobyl", prix: "80", pricebare: "89.99", video:"./assets/video/stalker.mp4" , image: "./assets/images/stalker.jpg" },
        { id: "21", title: "Laurent le Gardien de la Galaxie", prix: "68", pricebare: "100", video:"./assets/video/split.mp4" , image: "./assets/images/laurent.jpg" },
        { id: "22", title: "Volt : Star Malgré Lui", prix: "1", pricebare: "8", video:"./assets/video/volt.mp4" , image: "./assets/images/volt.jpg" }
      ];
    
      const categoryElements = categoryInits.map((category) => (
        <div className="col-md-6 col-lg-4 col-xl-3" key={category.id}>
          <Card
            title={category.title}
            prix={category.prix}
            image={category.image}
            pricebare={category.pricebare}
            video={category.video}
          />
        </div>
      ));

    return (
        <>
      <Navbar />
      <div className='color'>
      <Background />
      <hr className='d-none d-md-block'/>
      <div className='container row cardperso'>{categoryElements}</div>
      </div>
      </>
    )
  }
}
