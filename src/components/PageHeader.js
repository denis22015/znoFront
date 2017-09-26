import React, { Component } from 'react'

export default class PageHeader extends Component {
  render() {
    var bannerImage = require('./home-bg.jpg');

var bannerStyle = {
        // = '../images/banners/frontPageBanner.png'
    backgroundImage: 'url(' + bannerImage + ')'
}


    return (

    <header className='masthead' style={bannerStyle}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-md-10 mx-auto'>
            <div className='site-heading'>
              <h1>Clean Blog</h1>
              <span className='subheading'>A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>)
}
}
