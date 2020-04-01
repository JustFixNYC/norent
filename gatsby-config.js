module.exports = {
	siteMetadata: {
		title: 'Can’t Pay Rent in LA? Send a letter to your landlord.',
		author: 'JustFix.nyc',
		imageUrl: 'https://i.imgur.com/eMDyUOe.png',
		description: 'Millions of Americans won’t be able to pay rent because of COVID-19. Take action by writing a letter to your landlord.',
		keywords: `rent payment, rent due, help paying rent, pay rent, pay my rent, can’t pay rent, april 1st, rent strike`,
		siteUrl: `https://www.norent.org`,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
			  siteUrl: 'https://www.norent.org',
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'COVID Letter App',
				short_name: 'COVID Letter App',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/rent.svg',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
			  id: "GTM-NMPT5JP",
		
			  // Include GTM in development.
			  // Defaults to false meaning GTM will only be loaded in production.
			  includeInDevelopment: false,
		
			  // datalayer to be set before GTM is loaded
			  // should be an object or a function that is executed in the browser
			  // Defaults to null
			  defaultDataLayer: { platform: "gatsby" },
			},
		  },
	]
};
