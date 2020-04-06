import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default ({customMetadata, children}) => (
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
		render={data => {
			const defaultContent = data?.site?.siteMetadata;

			const author = defaultContent?.author || '';
			const siteUrl = defaultContent?.siteUrl || '';

			var title, description, keywords, imageUrl;

			if (defaultContent) {
				title = customMetadata?.title || defaultContent.title;
				description = customMetadata?.description || defaultContent.description;
				keywords = customMetadata?.keywords || defaultContent.keywords;
				imageUrl = customMetadata?.imageUrl || defaultContent.imageUrl;
			}

			return (<>
					<Helmet>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
						/>
						<meta name="description" content={description} />
						<meta name="keywords" content={keywords} />
						<title>{title}</title>
						<html lang="en" />
						{/* Google / Search Engine Meta Tags */}
						<meta itemprop="name" content={author} /> />
						<meta
							itemprop="description"
							content={description}
						/>
						<meta itemprop="image" content={imageUrl} /> />

						<meta name="author" content="JustFix.nyc" />

						<meta property="og:site_name" content={title} />
						<meta property="og:title" content={title} />
						<meta property="og:description" content={description} />
						<meta property="og:url" content={siteUrl} />
						<meta property="og:image" content={encodeURI(imageUrl)} />
						<meta property="og:type" content="website" />

						<meta name="twitter:card" content="summary_large_image" />
						<meta name="twitter:title" content={title} />
						<meta name="twitter:description" content={description} />
						<meta name="twitter:url" content={siteUrl} />
						<meta name="twitter:image" content={encodeURI(imageUrl)} />
						<meta name="twitter:image:alt" content={title} />
					</Helmet>
					{children}
				</>
			)}
		}
	/>
);
