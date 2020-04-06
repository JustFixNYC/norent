import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from '../components/helmet';
import { LandingPageScaffolding } from './index.en';

const LandingPage__es = () => {
    const data = useStaticQuery(graphql`
        query ($locale: String! = "es", $location: String! = "general") { ...Page }
    `)
    
    return (
        <Helmet>
            <LandingPageScaffolding content={data.contentfulPage} />
        </Helmet>
    );
}

export default LandingPage__es;
