import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import SharedProvider from './contexts/SharedContext';
import theme from './theme/theme';
import Routes from './components/Routes/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SharedProvider>
        <>
          <GlobalStyle />
          <Routes />
        </>
      </SharedProvider>
    </ThemeProvider>
  );
}

export default App;
