import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Card/Card';
import Carroussel from '../Carroussel/Carroussel';
import Col from '../Col/Col';

export default class HomeScreen extends Component {
  render() {
    return (
        <>
      <Navbar />
      <Carroussel />
      </>
    )
  }
}
