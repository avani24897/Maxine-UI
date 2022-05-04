import './App.css';
import SignIn from './components/Signin';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
}

export default App;
