import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Fakultas from './content/fakultas/Fakultas';
import FakultasButton from './content/fakultasButton/FakultasButton';
import FakultasDetail from './content/fakultasDetail/fakultasDetail';
import Teknik from './content/fakultas/listFakultas/teknik';
import Kedokteran from './content/fakultas/listFakultas/kedokteran';

const App = () => {
	return(
		<Routes>
			<Route path='/' element={<FakultasButton />} />
			<Route path='fakultas'>
				<Route index element={<Fakultas />} />
				<Route path='teknik'>
					<Route index element={<Teknik />} />
					<Route path=':name' element={<FakultasDetail />} />
				</Route>
				<Route path='kedokteran'>
					<Route index element={<Kedokteran />} />
					<Route path=':name' element={<FakultasDetail />} />
				</Route>
			</Route>
		</Routes>
	) 
}

export default App;