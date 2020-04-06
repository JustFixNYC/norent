import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default ({children}) => (
	<StaticQuery
		query={graphql`
			query helmetQuery {
				site {
					siteMetadata {
						title
						author
						imageUrl
						description
						keywords
						siteUrl
					}
				}
			}
		`}
		render={data => (
		<>
			<Helmet>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
				/>
				<meta name="description" content={data.site.siteMetadata.description} />
				<meta name="keywords" content={data.site.siteMetadata.keywords} />
				<title>{data.site.siteMetadata.title}</title>
				<html lang="en" />
				{/* Google / Search Engine Meta Tags */}
				<meta itemprop="name" content={data.site.siteMetadata.author} /> />
				<meta
					itemprop="description"
					content={data.site.siteMetadata.description}
				/>
				<meta itemprop="image" content={data.site.siteMetadata.imageUrl} /> />

				<meta name="author" content="JustFix.nyc" />

				<meta property="og:site_name" content={data.site.siteMetadata.title} />
				<meta property="og:title" content={data.site.siteMetadata.title} />
				<meta property="og:description" content={data.site.siteMetadata.description} />
				<meta property="og:url" content={data.site.siteMetadata.siteUrl} />
				<meta property="og:image" content={encodeURI(data.site.siteMetadata.imageUrl)} />
				<meta property="og:type" content="website" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={data.site.siteMetadata.title} />
				<meta name="twitter:description" content={data.site.siteMetadata.description} />
				<meta name="twitter:url" content={data.site.siteMetadata.siteUrl} />
				<meta name="twitter:image" content={encodeURI(data.site.siteMetadata.imageUrl)} />
				<meta name="twitter:image:alt" content={data.site.siteMetadata.title} />
			</Helmet>
			{children}
		</>
		)}
	/>
);
