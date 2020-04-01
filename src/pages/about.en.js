import React from 'react';

import '../scss/style.scss';
import Layout from '../components/layout';
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
            <AboutModalPageScaffolding content={data.contentfulPage} />
        </Layout>
    );
}

export default AboutModalPage__en;
