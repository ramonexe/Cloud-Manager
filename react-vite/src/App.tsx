import { Footer } from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from "./routes";
import FullScreenDiv from './components/FullscreenDiv'; // Certifique-se de importar o FullScreenDiv

function App() {
  return (
    <FullScreenDiv>
      <BrowserRouter>
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </FullScreenDiv>
  );
}

export default App;
