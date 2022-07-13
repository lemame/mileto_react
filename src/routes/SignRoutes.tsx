import { Routes, Route } from 'react-router-dom';
import Login from '../views/Login';

function SignRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default SignRoutes;
