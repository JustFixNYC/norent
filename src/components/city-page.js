import React from 'react';

import '../scss/style.scss';
import RentLogo from '../images/rent.svg';
import Helmet from '../components/helmet';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const widont = require('widont');

const CityPage = (props) => (
    <Helmet>
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-black is-size-2 is-spaced is-uppercase has-text-weight-bold">
                        {widont(props.content.title)}
                    </h1>
                    <figure className="image is-3by1 nr-rent-logo">
                        <img src={RentLogo} alt="rent-logo" />
                    </figure>
                    <div className="subtitle has-text-black is-size-5" >
                        {documentToReactComponents(props.content.description.json)}
                    </div>
                    <a className="button is-info is-large is-uppercase" href={props.content.buttonLink}> 
                        {props.content.startLetterCta}
                    </a>
                    <div className="is-divider" />
                    <div className="subtitle has-text-black is-size-5" >
                        {documentToReactComponents(props.content.aboutText.json)}
                    </div>
                </div>
            </div>
        
        </section>
    </Helmet>
)

export default CityPage;