import React from 'react';
import './style.scss';

import RentLogo from '../images/rent.svg';

const letterURL = 'https://justfix.app.law/?i=docassemble.playground1:BrQm8N3wh4C8FPDk.yml&reset=1&key=J2NsHXy22cyUyMoTrHq1nujrX';

const Midsection = () => (
	<section className="hero is-primary is-fullheight">
		<div className="hero-body">
			<div className="container has-text-centered">
				<h1 className="title is-size-1 is-spaced is-uppercase has-text-weight-bold has-text-info">
					Can't pay rent?
				</h1>
				<figure className="image rent-logo">
					<img src={RentLogo} alt="rent-logo" />
				</figure>
				<div className="subtitle is-size-5 has-text-info">
					You're not alone. Millions of Americans won't be able to pay rent because of COVID-19
				</div>
				<div className="subtitle is-size-5 has-text-info">
					Take action by writing a letter to your landlord
				</div>
					<br />
				<a className="button is-info is-large is-uppercase" href={letterURL}> 
					Start my letter
				</a>
			</div>
		</div>
	</section>
);

export default Midsection;
