import logo from './logo.svg';
import './App.css';
import WelcomePage from './pages/WelcomePage/WelcomePage'
import LoginPage from './pages/LoginPage';
import {Routes, Route, useNavigate} from 'react-router-dom';
import LoginSequence from './pages/LoginSequence';
import LoginFail from './pages/LoginFail';
import StyledAppBar from './components/StyledAppBar';
import Modal from './components/Modal';

function App() {
  const navigate = useNavigate();

  const navigateLogin = () => {
    // navigate to /login
    navigate('/login');
  };

  const navigateHome = () => {
    // navigate to /
    navigate('/');
  };

  return (
    <div className="App">
      <Routes>
          <Route path="/login" element={<LoginSequence />} />
          <Route path="/" element={<WelcomePage onClick={navigateLogin} />} />
          <Route path="/loginfailed" element={<div><StyledAppBar/><LoginFail /></div>} />
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
