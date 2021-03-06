 import React, { Component } from 'react'

export default class Intro extends Component {
  render() {

    return (
      <section id='about' className='content-section text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <h2>About Grayscale</h2>
              <p>Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
                <a href='http://startbootstrap.com/template-overviews/grayscale/'>the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
              <p>This theme features stock photos by
                <a href='http://gratisography.com/'>Gratisography</a>
                along with a custom Google Maps skin courtesy of
                <a href='http://snazzymaps.com/'>Snazzy Maps</a>.</p>
              <p>Grayscale includes full HTML, CSS, and custom JavaScript files along with SASS and LESS files for easy customization!</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}