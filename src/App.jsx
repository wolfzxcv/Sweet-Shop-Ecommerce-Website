import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import SharedProvider from './contexts/SharedContext';
import theme from './theme/theme';
import Layout from '../src/components/layout/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SharedProvider>
        <>
          <GlobalStyle />
          <Layout />
        </>
      </SharedProvider>
    </ThemeProvider>
  );
}

export default App;
