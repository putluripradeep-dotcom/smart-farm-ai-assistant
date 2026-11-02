import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import CropsPage from './pages/CropsPage';
import WeatherPage from './pages/WeatherPage';
import AIChatPage from './pages/AIChatPage';
import ExpensesPage from './pages/ExpensesPage';
import DiseasePage from './pages/DiseasePage';

function App() {
  const isLoggedIn = Boolean(localStorage.getItem('smartFarmToken'));

  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="navbar">
          <div>
            <strong>Smart Farm Knowledge Assistant</strong>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/crops">Crops</Link>
            <Link to="/weather">Weather</Link>
            <Link to="/chat">AI Assistant</Link>
            <Link to="/expenses">Expenses</Link>
            <Link to="/disease">Disease Detection</Link>
            {isLoggedIn ? <Link to="/" onClick={() => localStorage.removeItem('smartFarmToken')}>Logout</Link> : null}
          </div>
        </nav>

        <div className="container page">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/crops" element={<CropsPage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/chat" element={<AIChatPage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/disease" element={<DiseasePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
