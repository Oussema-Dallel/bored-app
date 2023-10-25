import App from './App.tsx';
import { Providers } from './Providers.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
/* eslint-disable import/no-unassigned-import */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
/* eslint-enable import/no-unassigned-import */

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<Providers>
			<App />
		</Providers>
	</React.StrictMode>,
);
