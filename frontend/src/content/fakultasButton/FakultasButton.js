import React from 'react';
import {Link} from 'react-router-dom';
import {MenuFakultas} from './MenuButton';

const FakultasButton = () => {
	return(
		<div>
			{MenuFakultas.map((item, index) => (
				<div key={index}>
					<Link to={item.url}>{item.title}</Link>
				</div>
			))}
		</div>
	)
}

export default FakultasButton;