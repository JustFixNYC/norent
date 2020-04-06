import React from 'react'
import Helmet from '../components/helmet'

const NotFoundPage = () => (
  <Helmet>
    <section className="hero is-large has-background-light">
      <div className="hero-body has-text-centered">
        <h1 className="title has-text-danger is-uppercase">Not found</h1>
        <p className="subtitle has-text-black">You just found a page that doesn&#39;t exist... the sadness.</p>
      </div>
    </section>
  </Helmet>
)

export default NotFoundPage
