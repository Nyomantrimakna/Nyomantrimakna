import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Outlet, Link} from 'react-router-dom';

const App = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			setError(false);
			try {
				const result = await axios.get('http://localhost:3004/fakultas');
				setData(result.data);
			}
			catch (err) {
				setError(true);
			}
			setLoading(false);
		}
		fetchData();
	}, []);

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error</p>}
			{data.map((item, index) => (
				<div key={index}>
					<h3>{item.title}</h3>
					<Link to={`/fakultas/${item.to}`}>{item.author}</Link>
				</div>
			))}
			<Outlet />
		</div>
	)
}

export default App;