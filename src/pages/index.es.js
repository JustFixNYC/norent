import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { LandingPageScaffolding } from './index.en';

const LandingPage__es = () => {
    const data = useStaticQuery(graphql`
        query { 
            contentfulPage(node_locale:{eq: "es"},location:{eq: "general"} ) {
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

export default LandingPage__es;
