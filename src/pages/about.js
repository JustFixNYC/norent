import React from 'react';

import '../scss/style.scss';
import Layout from '../components/layout';
import LandingPageScaffolding from './index.js';
import { Link } from 'gatsby';

const AboutModalPage = () => (
    <Layout>
        <LandingPageScaffolding />
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title is-uppercase has-text-weight-medium">
                        Who's behind this?
                    </p>
                </header>
                <section className="modal-card-body">
                    <p>
                        This service is provided by <a href="https://www.saje.net/" target="_blank" rel="noopener noreferrer">SAJE</a> and <a href="https://www.justfix.nyc/" target="_blank" rel="noopener noreferrer">JustFix</a> which are registered 501(c)(3) nonprofit organizations.
                    </p>
                        <br />
                    <p>
                        <a href="https://docs.google.com/document/d/1zROFCK_uAmBif0mUk7BZFyELIiSBsu2UgeXZWuiMdpU/edit?skip_itp2_check=true&amp;pli=1" target="_blank" rel="noopener noreferrer">Read more about Los Angeles' COVID-19 policies</a> | <a href="https://docs.google.com/document/d/1sxRp-v9PRXDcnzWfsPbAlTRcC_MEHDbOQ0LdOenIYFI/edit" target="_blank" rel="noopener noreferrer">Non-payment template letters</a>.
                    </p>
                        <br />
                    <h6 className="is-size 5 has-text-weight-bold">Credits</h6>
                    <p className="italic">
                        Thank you to <a href="https://www.heartla.org/about-us" target="_blank" rel="noopener noreferrer">Dianne Prado</a>, <a href="https://edn.la/" target="_blank" rel="noopener noreferrer">Elena Popp</a>, <a href="https://www.innercitylaw.org/" target="_blank" rel="noopener noreferrer">Rob Reed</a> for their feedback and review.
                    </p>
                    <p className="italic">
                        Banner image created by <a href="https://thenounproject.com/maxim221" target="_blank" rel="noopener noreferrer">Maxim Kulikov</a> from the Noun Project
                    </p>
                        <br />
                    <h6 className="is-size 5 has-text-weight-bold">Disclaimer</h6>
                    <p>
                        1) The information provided on this website does not, and is not intended to, constitute legal advice. 2) Information on this template may not constitute the most up-to-date legal or other information. 3) Users of this letter should contact an attorney to obtain advice with respect to any particular legal matter besides the intended letter template. 4) This service does not suggest that SAJE or JustFix.nyc will represent you.
                    </p>
                </section>
            </div>
            <Link to='/' className="modal-close is-large" aria-label="close"></Link>
        </div>
    </Layout>
);

export default AboutModalPage;
