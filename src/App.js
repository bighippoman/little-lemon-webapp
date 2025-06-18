// src/App.js
import Header from './components/Header';
import Nav     from './components/Nav';
import Main    from './components/Main';
import Footer  from './components/Footer';

function App() {
  return (
    <> {/* React fragment instead of a non-semantic <div> */}
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;