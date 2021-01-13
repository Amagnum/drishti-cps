import React from 'react'

import Carousel from './Carousel/Carousel'
import Updates from './NewsAndUpdates/Updates'
import Stats from './Stats/Stats'

import './Home.css'

function Home() {
    return (
        <div className="container home">
            <div className="row" style={{ marginBottom: "40px" }}>
                <div className="mb-5 col-12 col-md-8">
                    <Carousel />
                </div>
                <div className="mb-5 col-12 col-md-4">
                    <Updates />
                </div>
            </div>
            <div className="row">
                <div className="row-caption">
                    <h3>About Drishti CPS</h3>
                </div>
                <div className="col-12 col-md-10 m-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus perspiciatis quia nam consequuntur, nemo ratione voluptatem maxime labore et officiis aliquid unde aliquam harum. Quidem cum cupiditate, eius sit eveniet, vitae, rerum harum repudiandae nisi consequuntur fugit labore cumque eaque impedit facilis excepturi voluptatibus corrupti dicta dignissimos? Officiis optio odio dignissimos quis accusamus alias perferendis dolore, suscipit consequuntur. Quas atque obcaecati nobis eligendi officiis vero, quis inventore aut voluptatibus doloremque fuga incidunt dignissimos dolores rem exercitationem dolorem sint odit consequatur eos? Asperiores quas temporibus maxime unde nemo. Est illo sunt quod fuga recusandae dignissimos provident iure, voluptas praesentium non.
                </div>
            </div>
            <div className="row row-content">
                <div className="row-caption">
                    <h3>Impact</h3>
                </div>
                <div className="col-12 col-md-3">
                    <Stats src="assets/startups.svg" caption1="100+" caption2="Startups" />
                </div>
                <div className="col-12 col-md-3">
                    <Stats src="assets/employement.svg" caption1="2000+" caption2="Employment" />
                </div>
                <div className="col-12 col-md-3">
                    <Stats src="assets/entrepreneurs.svg" caption1="500+" caption2="Entrepreneurs" />
                </div>
                <div className="col-12 col-md-3">
                    <Stats src="assets/funds.svg" caption1="INR 100 Cr." caption2="Funds Raised" />
                </div>
            </div>
        </div>
    )
}

export default Home
