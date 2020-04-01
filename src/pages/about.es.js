import React from 'react';

import '../scss/style.scss';
import Layout from '../components/layout';
import { useStaticQuery } from 'gatsby';
import { AboutModalPageScaffolding } from './about.en';


const AboutModalPage__en = () => {
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
            <AboutModalPageScaffolding content={data.contentfulPage} />
        </Layout>
    );
}

export default AboutModalPage__en;
