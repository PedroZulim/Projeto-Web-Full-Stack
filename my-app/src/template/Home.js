import React from 'react';

function Home() {
    return (
        <div className='Main'>
            <section id="hero" className="bg-dark text-light text-center py-5">
                <div className="container">
                    <h1 className="display-4">Home SpaceX</h1>
                    <p className="lead">SpaceX is a leading aerospace manufacturer and space transportation company.</p>
                </div>
            </section>

            <section id="about" className="py-5">
                <div className="container">
                    <h2 className="text-center">Our Mission</h2>
                    <p>At SpaceX, our mission is to enable humans to become a multiplanetary species. We are dedicated to advancing space exploration and making life multiplanetary by developing the technologies needed for human colonization of Mars and beyond.</p>
                </div>
            </section>

            <section id="services" className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center">Our Services</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="rocket.jpg" className="card-img-top" alt="Rocket"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Rocket Launches</h5>
                                        <p className="card-text">We provide reliable and cost-effective rocket launch services for satellites and payloads.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="spacecraft.jpg" className="card-img-top" alt="Spacecraft"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Spacecraft Development</h5>
                                        <p className="card-text">We design and build spacecraft for various missions, including crewed spaceflight and cargo resupply missions to the International Space Station.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="mars.jpg" className="card-img-top" alt="Mars"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Mars Colonization</h5>
                                        <p class="card-text">We are actively working on technologies and plans to enable human colonization of Mars, making life multiplanetary.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
