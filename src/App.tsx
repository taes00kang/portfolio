import { Navbar } from './components';
import { Hero, About, Portfolio, Contact } from './sections';

export function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* About  */}
      <About />
      {/* Portfolio  */}
      <Portfolio />
      {/* Contact  */}
      <Contact />
      {/* Footer */}
    </>
  );
}

export default App;
