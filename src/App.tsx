import { Navbar, Footer } from './components';
import { Home, About, Portfolio, Contact } from './sections';

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
