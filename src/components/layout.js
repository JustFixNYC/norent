import React from 'react';
import Helmet from './helmet';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		{children}
	</div>
);

export default Layout;
