import React from 'react'
import {Routes, Route} from 'react-router-dom';
<<<<<<< HEAD
import Home from './content/home/home';
import About from './content/about/about';
import Fakultas from './content/fakultas/Fakultas';
=======
import Fakultas from './content/fakultas/Fakultas';
import FakultasButton from './content/fakultasButton/FakultasButton';
import FakultasDetail from './content/fakultasDetail/fakultasDetail';
import Teknik from './content/fakultas/listFakultas/teknik';
import Kedokteran from './content/fakultas/listFakultas/kedokteran';
>>>>>>> ad862e598986e320fca6380de50aa55084039d71

const App = () => {
	return(
		<Routes>
<<<<<<< HEAD
			<Route path='/' element={<Home />}/>
			<Route path='RightWay' element={<About />} />
			<Route path='fakultas' element={<Fakultas />} />
=======
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
>>>>>>> ad862e598986e320fca6380de50aa55084039d71
		</Routes>
	) 
}

export default App;