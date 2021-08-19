import { BooksContextProvider } from "./context/BooksContext";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

import GlobalStyles from './helpers/GlobalStyles'

function App() {
  return (
    <BooksContextProvider>
      <div>
        <GlobalStyles/>
        <Header/>
        <Content/>
      </div>
    </BooksContextProvider>
  );
}

export default App;
