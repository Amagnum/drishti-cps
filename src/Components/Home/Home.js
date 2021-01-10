import React from 'react'

import Carousel from './Carousel/Carousel'
import Updates from './NewsAndUpdates/Updates'

import './Home.css'

function Home() {
    return (
        <div className="container home">
            <div className="row">
                <div className="mb-5 col-12 col-md-8">
                    <Carousel />
                </div>
                <div className="mb-5 col-12 col-md-4">
                    <Updates />
                </div>
            </div>

        </div>
    )
}

export default Home
