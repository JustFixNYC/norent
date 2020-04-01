import { graphql } from "gatsby";


/**
 * GraphQL fragment to query page data for any generic site page.
 * Includes two variables: 
 * - locale ("en" or "es", for example)
 * - location ("general" refers to the general landing page, a city like "la" 
 *      refers to that city's internal page)
 */
export const PageFragment = graphql`
    fragment Page on Query {
        contentfulPage(node_locale:{eq: $locale},location:{eq: $location} ) {
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
`;