import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Midsection from './midsection';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Midsection />
	</div>
);

export default Layout;
