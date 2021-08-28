import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import Header from './components/Header';

import GlobalStyle from './styles/global';

import light from './styles/themes/light';

import usePersistedState from './utils/usePersistedState';

export default function App() {
    const [theme] = usePersistedState('theme', light);

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    );
}
