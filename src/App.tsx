import { NavLink, Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import HomePage from './pages/Home'
import ServicesPage from './pages/Services'
import PostgreSQLServicePage from './pages/PostgreSQLService'
import MetabaseServicePage from './pages/MetabaseService'
import MinioServicePage from './pages/MinioService'
import MoodleServicePage from './pages/MoodleService'
import NextcloudServicePage from './pages/NextcloudService'
import PhpMyAdminServicePage from './pages/PhpMyAdminService'
import PocketBaseServicePage from './pages/PocketBaseService'
import RabbitMQServicePage from './pages/RabbitMQService'
import RocketChatServicePage from './pages/RocketChatService'
import MattermostServicePage from './pages/MattermostService'
import ChatwootServicePage from './pages/ChatwootService'
import JoomlaServicePage from './pages/JoomlaService'
import JellyfinServicePage from './pages/JellyfinService'
import HoppscotchServicePage from './pages/HoppscotchService'
import GrafanaServicePage from './pages/GrafanaService'
import KibanaServicePage from './pages/KibanaService'
import GitHubRunnerServicePage from './pages/GitHubRunnerService'
import ElasticsearchServicePage from './pages/ElasticsearchService'
import DrupalServicePage from './pages/DrupalService'
import PostizServicePage from './pages/PostizService'
import WordpressServicePage from './pages/WordpressService'
import StrapiServicePage from './pages/StrapiService'
import UptimeKumaServicePage from './pages/UptimeKumaService'
import SupabaseServicePage from './pages/SupabaseService'
import BookStackServicePage from './pages/BookStackService'
import ExcalidrawServicePage from './pages/ExcalidrawService'
import MeilisearchServicePage from './pages/MeilisearchService'
import MatrixServicePage from './pages/MatrixService'
import PassboltServicePage from './pages/PassboltService'
import SoftwareServicePage from './pages/SoftwareService'
import DatabaseServicePage from './pages/DatabaseService'
import LoginPage from './pages/Login'
import DashboardPage from './pages/Dashboard'
import meganLogo from './assets/megan-logo.svg'
import './App.css'

const Navigation = () => {
  const location = useLocation()
  const isServices = location.pathname.startsWith('/services')

  return (
    <nav className="hero__nav">
      <NavLink to="/" className="nav__brand" aria-label="صفحه اصلی">
        <div className="nav__logo" aria-hidden="true">
          <img src={meganLogo} alt="لوگوی مگان" className="nav__logo-image" />
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
          <Route path="/services/software" element={<SoftwareServicePage />} />
          <Route path="/services/database" element={<DatabaseServicePage />} />
          <Route path="/services/postgresql" element={<PostgreSQLServicePage />} />
          <Route path="/services/metabase" element={<MetabaseServicePage />} />
          <Route path="/services/minio" element={<MinioServicePage />} />
          <Route path="/services/moodle" element={<MoodleServicePage />} />
          <Route path="/services/nextcloud" element={<NextcloudServicePage />} />
          <Route path="/services/phpmyadmin" element={<PhpMyAdminServicePage />} />
          <Route path="/services/joomla" element={<JoomlaServicePage />} />
          <Route path="/services/drupal" element={<DrupalServicePage />} />
          <Route path="/services/pocketbase" element={<PocketBaseServicePage />} />
          <Route path="/services/rabbitmq" element={<RabbitMQServicePage />} />
          <Route path="/services/rocketchat" element={<RocketChatServicePage />} />
          <Route path="/services/mattermost" element={<MattermostServicePage />} />
          <Route path="/services/chatwoot" element={<ChatwootServicePage />} />
          <Route path="/services/jellyfin" element={<JellyfinServicePage />} />
          <Route path="/services/hoppscotch" element={<HoppscotchServicePage />} />
          <Route path="/services/grafana" element={<GrafanaServicePage />} />
          <Route path="/services/kibana" element={<KibanaServicePage />} />
          <Route path="/services/elasticsearch" element={<ElasticsearchServicePage />} />
          <Route path="/services/github-runner" element={<GitHubRunnerServicePage />} />
          <Route path="/services/postiz" element={<PostizServicePage />} />
          <Route path="/services/wordpress" element={<WordpressServicePage />} />
          <Route path="/services/strapi" element={<StrapiServicePage />} />
          <Route path="/services/uptime-kuma" element={<UptimeKumaServicePage />} />
          <Route path="/services/supabase" element={<SupabaseServicePage />} />
          <Route path="/services/bookstack" element={<BookStackServicePage />} />
          <Route path="/services/excalidraw" element={<ExcalidrawServicePage />} />
          <Route path="/services/meilisearch" element={<MeilisearchServicePage />} />
          <Route path="/services/matrix" element={<MatrixServicePage />} />
          <Route path="/services/passbolt" element={<PassboltServicePage />} />
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
