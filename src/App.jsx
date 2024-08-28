import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import HomePage from './Components/HomePage/HomePage';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn'; 
import Admin from './Components/AdminPage/Admin';

function App() {
  return (
    <Routes>
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<HomePage />} /> 
      </Route>
    </Routes>
  );
}

export default App;
