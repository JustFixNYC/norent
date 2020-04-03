import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { LandingPageScaffolding } from './index.en';

const LandingPage__es = () => {
    const data = useStaticQuery(graphql`
        query ($locale: String! = "es", $location: String! = "general") { ...Page }
    `)
    
    return (
        <Layout>
            <LandingPageScaffolding content={data.contentfulPage} />
        </Layout>
    );
}

export default LandingPage__es;
