import React from 'react'
import { Navbar, Home, Properties, About, Gallery, Companies } from './components'
import {Footer, Map} from './containers'
import './App.css'

const App = () => {
    return (
        <div>
            <div scale-up-center>
                <Navbar />
            </div>
            <Home />
            <Companies />
            <Properties />
            <About />
            <Gallery />
            <Map />
            <Footer />
        </div>
    )
}

export default App