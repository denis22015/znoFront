import React, { Component } from 'react'
import About from '../components/StartPage/About'
import Contact from '../components/StartPage/Contact'
import Download from '../components/StartPage/Download'
import Footer from '../components/StartPage/Footer'
import Intro from '../components/StartPage/Intro'
import Header from '../components/StartPage/Header'
import Map from '../components/StartPage/Map'

export default class StartPage extends Component {
  render() {
    return(
		<div>
			<Header />
			<Intro />
			<About />
			<Download />
			<Contact />
			<Map />
			<Footer />
		</div>
     )
  }
}
