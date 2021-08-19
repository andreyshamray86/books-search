import { Route } from "react-router-dom";
import { BooksContextProvider } from "./context/BooksContext";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import BookDetailed from "./components/BookDetailed/BookDetailed";

import GlobalStyles from './helpers/GlobalStyles'
import AppStyled from "./helpers/App.styles";

function App() {
  return (
    <BooksContextProvider>
      <AppStyled>
        <GlobalStyles/>
        <Header/>
        <Route path='/' exact component={Content}/>
        <Route path='/books/:id' component={BookDetailed}/>
        {/* <Content/> */}
      </AppStyled>
    </BooksContextProvider>
  );
}

export default App;
