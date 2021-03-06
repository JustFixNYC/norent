# NoRent.org

NoRent.org (found at https://www.norent.org) is a web tool that helps tenants notify their landlords of an inability to pay rent during the COVID-19 crisis. Currently for tenants in Los Angeles, it is build in collaboration with the organization [SAJE](https://www.saje.net/).

This codebase is for the NoRent.org "Landing Portal" that directs users to the appropriate web app build with [Community Lawyer](https://community.lawyer/). Site content is stored in [Contentful](https://www.contentful.com/), and
the site is built using [Gatsby](https://next.gatsbyjs.org/). 

We used the [Gatsby Bulma Quickstart](https://www.gatsbyjs.org/starters/amandeepmittal/gatsby-bulma-quickstart/) template as a starting point for building out this tool.

## Quick start

1.  Create an `.env` file by copying `.env.sample`:

    ```
    cp .env.sample .env
    ```

2.  Edit the `.env` file as needed.

3.  Install dependencies:

    ```
    yarn --frozen-lockfile
    ```

4.  Run the development server:

    ```
    yarn develop
    ```

5.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
    Open the the `norent` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## Deployment 

  We deploy our version of the site using [Netlify](https://www.netlify.com/), which links directly to this repo and deploys on commits to the master branch. To use Netlify in deploying your own version, follow this [step-by-step guide](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).
  
## Code of Conduct

  Read about JustFix's code of conduct as an organization on our [Mission page](https://www.justfix.nyc/our-mission/).
