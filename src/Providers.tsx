import { GlobalStyle } from './theming/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { theme } from './theming/Theme';
import { ThemeProvider } from '@mui/material';
import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react';

const Providers: FunctionComponent<PropsWithChildren> = ({ children }): ReactElement => {
	return (
		<Provider store={ store }>
			<ThemeProvider theme={ theme }>
				<GlobalStyle />
				{ children }
			</ThemeProvider>
		</Provider>
	);
};

export { Providers };