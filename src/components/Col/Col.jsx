import React, { Component } from 'react'
import Card from '../Card/Card'

export default class Col extends Component {
  render() {
    return (
        <>
        <div className='row'>
      <div className='col-12 col-md-4'>
        <Card />
      </div>
      </div>
      </>
    )
  }
}
