import React from 'react';

import '../scss/style.scss';
import { useStaticQuery, graphql } from 'gatsby';
import CityPage from '../components/city-page';
import Layout from '../components/layout';

const LaPage__en = () => {
        
    const data = useStaticQuery(graphql`
        query ($locale: String! = "en", $location: String! = "la") { ...Page }
    `)
    
    return (
        <Layout>
            <CityPage content={data.contentfulPage} />
        </Layout>
    )
}
    

export default LaPage__en;
