import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgetPass from './pages/ForgetPass';
import Courses from './components/Courses';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Courses />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/signup' element = {<SignUp />} />
        <Route path='/f-pass' element = {<ForgetPass />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
