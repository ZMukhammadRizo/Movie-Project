import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Routers from './routes/Routers';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routers />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
