import './fonts.css';

import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyle from './styles/GlobalStyle';

const root = document.getElementById('root');
const queryclient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(root as HTMLElement).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryclient}>
				<Global styles={GlobalStyle} />
				<App />
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>,
);
