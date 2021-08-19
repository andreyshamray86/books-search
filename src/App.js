import { BooksContextProvider } from "./context/BooksContext";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

import GlobalStyles from './helpers/GlobalStyles'
import AppStyled from "./helpers/App.styles";

function App() {
  return (
    <BooksContextProvider>
      <AppStyled>
        <GlobalStyles/>
        <Header/>
        <Content/>
      </AppStyled>
    </BooksContextProvider>
  );
}

export default App;
