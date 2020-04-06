import React from 'react';

import '../scss/style.scss';
import { useStaticQuery, graphql } from 'gatsby';
import CityPage from '../components/city-page';
import Helmet from '../components/helmet';

const LaPage__es = () => {
        
    const data = useStaticQuery(graphql`
        query ($locale: String! = "es", $location: String! = "la") { ...Page }
    `)
    
    return (
        <Helmet>
            <CityPage content={data.contentfulPage} />
        </Helmet>
    )
}
    

export default LaPage__es;
