import React from 'react';

import '../scss/style.scss';
import RentLogo from '../images/rent.svg';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const letterURL = 'https://justfix.app.law/?i=docassemble.playground1:BrQm8N3wh4C8FPDk.yml&reset=1&key=J2NsHXy22cyUyMoTrHq1nujrX';

const CityPage = (props) => (
    <Layout>
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title has-text-black is-size-1 is-spaced is-uppercase has-text-weight-bold">
                        {props.content.title}
                    </h1>
                    <figure className="image is-2by1 rent-logo">
                        <img src={RentLogo} alt="rent-logo" />
                    </figure>
                    <div className="subtitle has-text-black is-size-5" >
                        You're not alone. Millions of Americans won't be able to pay rent because of COVID-19
                    </div>
                    <div className="subtitle has-text-black is-size-5">
                        Take action by writing a letter to your landlord
                    </div>
                        <br />
                    <a className="button is-info is-large is-uppercase" href={letterURL}> 
                        Start my letter
                    </a>
                </div>
            </div>
            <div className="container footer-link has-text-centered">
                <Link to='/about'>Who's behind this?</Link>
            </div>
        </section>
    </Layout>
)

export default CityPage;