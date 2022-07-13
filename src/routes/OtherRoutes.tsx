import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../views/Home';

function OtherRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
    </BrowserRouter>
  );
}

export default OtherRoutes;
