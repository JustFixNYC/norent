import React from 'react';

import '../scss/style.scss';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';
import { AboutModalPageScaffolding } from './about.en';


const AboutModalPage__es = () => {
    const data = useStaticQuery(graphql`
        query ($locale: String! = "es", $location: String! = "general") { ...Page }
    `)
    
    return (
        <Layout>
            <AboutModalPageScaffolding content={data.contentfulPage} />
        </Layout>
    );
}

export default AboutModalPage__es;
