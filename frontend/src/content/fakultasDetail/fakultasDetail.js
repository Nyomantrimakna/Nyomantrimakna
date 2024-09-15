import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const FakultasDetail = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState('false');
	const [error, setError] = useState(false);
	const {name} = useParams();

	useEffect(() => {
		async function dataProdi() {
			setLoading(true);
			setError(false);
			try {
				const result = await axios.get('http://localhost:3004/' + name);
				setData(result.data);
			}
			catch (err) {
				setError(true);
			}
			setLoading(false);
		}
		dataProdi();
	}, []);

	return(
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error</p>}
			{data.map((item, index) => (
				<div key={index}>
					<h1>{item.title}</h1>
					<p>{item.deskripsi}</p>
				</div>
			))}
		</div>
	)
}

export default FakultasDetail;