import React from 'react'
import Article from './Components/article/Article'
import Brand from './Components/brand/Brand'
import CTA from './Components/cta/CTA'
import Feature from './Components/feature/Feature'
import Navbar from './Components/navbar/Navbar'

import Blog from './Containers/blog/Blog'
import Features from './Containers/features/Features'
import Footer from './Containers/footer/Footer'
import Header from './Containers/header/Header'
import Possibility from './Containers/possibility/Possibility'
import WhatGPT3 from './Containers/whatGPT3/WhatGPT3'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>

    </div>
  )
}

export default App