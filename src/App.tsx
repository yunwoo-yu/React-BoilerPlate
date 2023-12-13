import { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@pages/Home'));
const ChunkTest = lazy(() => import('@pages/ChunkTest'));

const App = () => {
	return (
		<div>
			<h1>라우팅 테스트</h1>
			<Suspense fallback={<div>로딩...</div>}>
				<ul>
					<li>
						<Link to="/">홈 이동</Link>
					</li>
					<li>
						<Link to="/chunk">테스트 페이지 이동</Link>
					</li>
				</ul>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chunk" element={<ChunkTest />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
