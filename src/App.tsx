import { Navbar, Footer } from './components';
import { Hero, About, Portfolio, Contact } from './sections';

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
