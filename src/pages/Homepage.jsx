import { Home } from '../components/Home';
import { About } from '../components/About';
import { Features } from '../components/Features';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Homepage = () => {
  return (
    <>
      <div className="App">
        <Navigation />
        <Home />
        <Features />
        <About />
        <Footer />
      </div>
    </>
  );
};
