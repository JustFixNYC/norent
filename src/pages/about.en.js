import React from 'react';

import '../scss/style.scss';
import Helmet from '../components/helmet';
import LandingPageScaffolding from './index.en.js';
import { localizeRoute } from '../components/i18n';
import { useStaticQuery, Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const AboutModalPageScaffolding = (props) => (
    <>
        <LandingPageScaffolding content={props.content}/>
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title" />
                    <Link to={localizeRoute('', props.content.node_locale)} className="delete" aria-label="close" />
                </header>
                <section className="modal-card-body">
                    <div className="container">
                        {documentToReactComponents(props.content.aboutText.json)}
                    </div>
                </section>
            </div>
        </div>
    </>
);

const AboutModalPage__en = () => {
    const data = useStaticQuery(graphql`
        query ($locale: String! = "en", $location: String! = "general") { ...Page }
    `)
    
    return (
        <Helmet>
            <AboutModalPageScaffolding content={data.contentfulPage} />
        </Helmet>
    );
}

export default AboutModalPage__en;
