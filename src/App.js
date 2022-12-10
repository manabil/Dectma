import { Home } from "./component/Home";
import { Navigation } from "./component/Navigation";
import { About } from "./component/About";
import { Features } from "./component/Features";
import { Footer } from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default App;
