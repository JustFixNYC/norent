import React from 'react';

import '../scss/style.scss';
import Helmet from '../components/helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { AboutModalPageScaffolding } from './about.en';


const AboutModalPage__es = () => {
    const data = useStaticQuery(graphql`
        query ($locale: String! = "es", $location: String! = "general") { ...Page }
    `)
    
    return (
        <Helmet>
            <AboutModalPageScaffolding content={data.contentfulPage} />
        </Helmet>
    );
}

export default AboutModalPage__es;
