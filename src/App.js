import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Routers from './routes/Routers';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routers/>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
