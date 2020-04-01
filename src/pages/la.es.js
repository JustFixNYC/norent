import React from 'react';

import '../scss/style.scss';
import { useStaticQuery } from 'gatsby';
import CityPage from '../components/city-page';

const LaPage = (props) => {
        
    const data = useStaticQuery(graphql`
        query { 
            contentfulPage(node_locale:{eq: "es"},location:{eq: "la"} ) {
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

    const content = data.contentfulPage;
    return <CityPage content={content} />
}
    

export default LaPage;
