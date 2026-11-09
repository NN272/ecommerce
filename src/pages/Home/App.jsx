import { useState } from 'react'
import '../../styles/App.css'
import Header from '../../components/layout/Header/Header'
import Landing from '../../components/layout/Landing/Landing'
import NewItems from '../../components/layout/NewItems/NewItems'
import NewCollections from '../../components/layout/NewCollections/NewCollections'
import Gallery from '../../components/layout/Gallery/Gallery'
import Footer from '../../components/layout/Footer/Footer'

function App() {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Header></Header>
      <Landing></Landing>
      <NewItems />
      <NewCollections />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
