import React, { Component } from 'react'


//import Components
import About from '../components/StartPage/About.jsx'
import Contact from '../components/StartPage/Contact.jsx'
import Download from '../components/StartPage/Download.jsx'
import Footer from '../components/StartPage/Footer.jsx'
import Intro from '../components/StartPage/Intro.jsx'
import Header from '../components/StartPage/Header.jsx'
import Map from '../components/StartPage/Map.jsx'



//impost styles
import '../styles/bootstrap/css/bootstrap.min.css'
import './../styles/font-awesome/css/font-awesome.min.css'
import './../styles/lora.css'
import './../styles/cabin.css'
import './../styles/grayscale.css'
 // import 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic'
 // import 'https://fonts.googleapis.com/css?family=Cabin:700'






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



//import js files
// require('script-loader!../js/jquery.min.js');
// require('script-loader!../js/popper.js');
// require('script-loader!../js/bootstrap.min.js');
// require('script-loader!../js/jquery.easing.min.js');


// import 'script-loader!../js/jquery.min.js'
// //import 'script-loader!../js/popper.js'
// import 'script-loader!../js/bootstrap.min.js'
// import 'script-loader!../js/jquery.easing.min.js'
// // import '../js/jquery.easing.min.js'
//import '../js/grayscale.min.js'
