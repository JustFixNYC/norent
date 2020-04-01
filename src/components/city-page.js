import React from 'react';

import '../scss/style.scss';
import RentLogo from '../images/rent.svg';
import Layout from '../components/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const letterURL = 'https://justfix.app.law/interview?i=docassemble.playground1%3ABrQm8N3wh4C8FPDk.yml#page2';

const CityPage = (props) => (
    <Layout>
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-black is-size-2 is-spaced is-uppercase has-text-weight-bold">
                        {props.content.title}
                    </h1>
                    <figure className="image is-3by1 nr-rent-logo">
                        <img src={RentLogo} alt="rent-logo" />
                    </figure>
                    <div className="subtitle has-text-black is-size-5" >
                        {documentToReactComponents(props.content.description.json)}
                    </div>
                        <br />
                    <a className="button is-info is-large is-uppercase" href={letterURL}> 
                        {props.content.startLetterCta}
                    </a>
                    <div className="is-divider" />
                    <div className="subtitle has-text-black is-size-5" >
                        {documentToReactComponents(props.content.aboutText.json)}
                    </div>
                </div>
            </div>
        
        </section>
    </Layout>
)

export default CityPage;