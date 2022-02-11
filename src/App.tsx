import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

import Routes from "./routes";
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default App
