import React from 'react';

import '../scss/style.scss';
import RentLogo from '../images/rent.svg';
import Layout from '../components/layout';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { localizeRoute } from '../components/locales';

export const LandingPageScaffolding = (props) => (
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
                    {documentToReactComponents(props.content.description.json)}
                </div>
                    <br />
                <Link to={localizeRoute('/la',props.content.node_locale)} className="button is-info is-large is-uppercase" > 
                    {props.content.startLetterCta}
                </Link>
            </div>
        </div>
        <div className="container footer-link has-text-centered">
            <Link to={localizeRoute('/about',props.content.node_locale)}>{props.content.modalLinkCta}</Link>
        </div>
    </section>
);

const LandingPage__en = () => {
    const data = useStaticQuery(graphql`
        query { 
            contentfulPage(node_locale:{eq: "en"},location:{eq: "general"} ) {
                node_locale
                title
                description {
                    json
                }
                startLetterCta
                modalLinkCta
                aboutText {
                    json
                }
            }
        }
    `)
    
    return (
        <Layout>
            <LandingPageScaffolding content={data.contentfulPage} />
        </Layout>
    );
}

export default LandingPage__en;
