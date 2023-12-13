import React from 'react';
import {useNavigate} from "react-router-dom";

import mars from "../images/mars.png";
import rocket from "../images/rocket.png";
import spacecraft from "../images/spacecraft.png";

function Home(props) {
	const {loggedIn, email} = props
	const navigate = useNavigate();

	const onButtonClick = () => {
		if (loggedIn) {
			localStorage.removeItem("user")
			props.setLoggedIn(false)
		} else {
			navigate("/login")
		}
	}

	return (
		<div className='Main'>
			<section id="hero" className="bg-dark text-light text-center py-5">
				<div className="container">
					<h1 className="display-4">Home SpaceX</h1>
					<p className="lead">SpaceX is a leading aerospace manufacturer and space transportation company.</p>
				</div>
			</section>


			{(loggedIn ? <div>
						<h2> You are logged!!! Your email address is {email}
						</h2>
					</div> :

					<div className={"buttonContainer"}>
						<input
							className={"inputButton"}
							type="button"
							onClick={onButtonClick}
							value={loggedIn ? "Log out" : "Log in"}/>
					</div>
			)}

			<section id="about" className="py-5">
				<div className="container">
					<h2 className="text-center mb-3">SpaceX's Mission: Revolutionizing Space Exploration</h2>
					<p>SpaceX, short for Space Exploration Technologies Corp., stands at the forefront of modern space
						exploration with a mission that is both ambitious and transformative. Founded in 2002 by Elon
						Musk, SpaceX is driven by a fundamental goal: to make space exploration more accessible,
						sustainable, and ultimately multiplanetary.</p>
					<p>One of the primary pillars of SpaceX's mission is to reduce the exorbitant costs associated with
						space access. The company has tirelessly worked on achieving this goal by pioneering the concept
						of reusable rockets, exemplified by the Falcon 9 and Falcon Heavy. The reuse of space hardware
						is a game-changing innovation that holds the potential to democratize space exploration, making
						it feasible for businesses and governments worldwide.</p>
					<p>Elon Musk's vision of colonizing Mars as a "plan B" for humanity is another critical aspect of
						SpaceX's mission. The development of the Interplanetary Transport System (ITS), now known as
						Starship, represents a significant milestone. Starship is designed to carry large numbers of
						people and cargo to Mars, laying the foundation for the eventual colonization of the Red Planet.
						SpaceX believes that this is vital for the long-term survival of the human race.</p>
					<p>In addition to Mars, SpaceX also aims to play a prominent role in lunar exploration. The company
						is working on the Starship as a reusable lunar vehicle, capable of transporting astronauts to
						the Moon. This endeavor signifies SpaceX's commitment to participating in lunar missions and
						contributing to the broader exploration of our celestial neighbor.</p>
					<p>Furthermore, SpaceX is actively involved in enhancing global connectivity through the Starlink
						project. This initiative involves the deployment of a vast constellation of low Earth orbit
						satellites to deliver high-speed internet access worldwide. Beyond improving global
						connectivity, Starlink serves as a revenue source to fund SpaceX's ambitious space projects.</p>
					<p>SpaceX's commitment to innovation is evident through its continuous development of advanced space
						technologies. These innovations encompass cutting-edge propulsion systems, autonomous flight
						control systems, and much more, all aimed at making space missions safer and more efficient.</p>
					<p>In conclusion, SpaceX's mission is nothing short of revolutionizing space exploration. By making
						it more accessible, sustainable, and by enabling the expansion of humanity's presence beyond
						Earth, SpaceX is leading the way towards an exciting future in space exploration. The company's
						relentless pursuit of its goals is a testament to human ingenuity and the boundless potential of
						the space frontier.</p>
				</div>
			</section>

			<section id="services" className="bg-light py-5">
				<div className="container">
					<h2 className="text-center mb-4">Services</h2>
					<div className="row">
						<div className="col-md-4">
							<div className="card">
								<img src={rocket} className="card-img-top" alt="Rocket"/>
								<div className="card-body">
									<h5 className="card-title">Rocket Launches</h5>
									<p className="card-text">We provide reliable and cost-effective rocket launch
										services for satellites and payloads.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<img src={spacecraft} className="card-img-top" alt="Spacecraft"/>
								<div className="card-body">
									<h5 className="card-title">Spacecraft Development</h5>
									<p className="card-text">We design and build spacecraft for various missions,
										including crewed spaceflight and cargo resupply missions to the International
										Space Station.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<img src={mars} className="card-img-top" alt="Mars"/>
								<div className="card-body">
									<h5 className="card-title">Mars Colonization</h5>
									<p class="card-text">We are actively working on technologies and plans to enable
										human colonization of Mars, making life multiplanetary.</p>
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
