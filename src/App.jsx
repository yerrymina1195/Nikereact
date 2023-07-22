import React from 'react'
import {FlexContent, Hero,Sales,Stories, Footer, Navbar,Cart} from'./components';

import { highlight, sneaker, heroapi, popularsales,toprateslaes, story,footerAPI } from "./data/data";
const App = () => {
  return (
   <>
   <Navbar/>
   <Cart />
   <main className='flex flex-col gap-16 relative'>
    <Hero heroapi={heroapi}/>
    <Sales endpoint={popularsales}  ifExists/>
    <FlexContent endpoint={highlight} ifExists />
    <Sales endpoint={toprateslaes}   />
    <FlexContent endpoint={sneaker}  />
    <Stories story={story} />

   
   <Footer footerAPI={footerAPI} />
   </main>
   </>
  )
}

export default App