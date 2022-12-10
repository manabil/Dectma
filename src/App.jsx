import { Classify } from './pages/Classify';
import { Homepage } from './pages/Homepage';

function App() {
  let component = null;

  switch (window.location.pathname) {
    case '/':
      component = <Homepage />;
      break;
    case '/classify':
      component = <Classify />;
      break;
    default:
      component = <Homepage />;
      break;
  }
  return <div>{component}</div>;
}

export default App;
