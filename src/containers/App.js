import React, { Component } from 'react'

import HeadNav from '../components/HeadNav'
import PageHeader from '../components/PageHeader'
import MainComponent from '../components/MainComponent'

export default class App extends Component {
  render() {
    return(
      <div>
            <HeadNav />
            <PageHeader />
             <MainComponent /></div>
             )
  }
}
