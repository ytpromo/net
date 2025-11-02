import { NavLink, Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import HomePage from './pages/Home'
import ServicesPage from './pages/Services'
import PostgreSQLServicePage from './pages/PostgreSQLService'
import MetabaseServicePage from './pages/MetabaseService'
import LoginPage from './pages/Login'
import DashboardPage from './pages/Dashboard'
import './App.css'

const Navigation = () => {
  const location = useLocation()
  const isServices = location.pathname.startsWith('/services')

  return (
    <nav className="hero__nav">
      <NavLink to="/" className="nav__brand" aria-label="صفحه اصلی">
        <div className="nav__logo" aria-hidden="true">
          <span className="nav__logo-stripe nav__logo-stripe--one" />
          <span className="nav__logo-stripe nav__logo-stripe--two" />
          <span className="nav__logo-stripe nav__logo-stripe--three" />
        </div>
        <div className="nav__brand-text">
          <span className="nav__brand-name">مگان</span>
          <span className="nav__brand-tag">MEGAN CLOUD</span>
        </div>
      </NavLink>

      <ul className="nav__links">
        <li className="nav__item">
          <a href="#">مستندات</a>
        </li>
        <li className={`nav__item${isServices ? ' nav__item--active' : ''}`}>
          <NavLink
            to="/services"
            className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}
          >
            سرویس ها
          </NavLink>
        </li>
        <li className="nav__item">
          <a href="#">درباره ما</a>
        </li>
      </ul>

      <div className="nav__actions">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `button button--primary nav__auth${isActive ? ' nav__auth--active' : ''}`
          }
        >
          ورود / ثبت نام
        </NavLink>
      </div>
    </nav>
  )
}

const AppShell = () => {
  return (
    <div className="app" dir="rtl">
      <div className="app__backdrop app__backdrop--one" />
      <div className="app__backdrop app__backdrop--two" />

      <Navigation />

      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/postgresql" element={<PostgreSQLServicePage />} />
          <Route path="/services/metabase" element={<MetabaseServicePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
