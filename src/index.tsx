import './fonts.css';

import { Global } from '@emotion/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyle from './styles/GlobalStyle';

const root = document.getElementById('root');

ReactDOM.createRoot(root as HTMLElement).render(
	<StrictMode>
		<BrowserRouter>
			<Global styles={GlobalStyle} />
			<App />
		</BrowserRouter>
	</StrictMode>,
);
