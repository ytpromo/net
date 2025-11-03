import type { IconType } from 'react-icons'
import {
  FiDatabase,
  FiHardDrive,
  FiServer,
  FiShare2,
  FiShield,
} from 'react-icons/fi'
import { SiGitlab, SiJenkins, SiJirasoftware, SiTelegram } from 'react-icons/si'
import { TbBrandVisualStudio } from 'react-icons/tb'
import meganLogo from '../assets/megan-logo.svg'

const integrations: { id: string; title: string; description: string; icon: IconType; gradient: string }[] = [
  {
    id: 'storage',
    title: 'Storage',
    description: 'ذخیره‌سازی پایدار و همیشه در دسترس',
    icon: FiHardDrive,
    gradient: 'linear-gradient(135deg, #5f95ff 0%, #8fb8ff 100%)',
  },
  {
    id: 'load-balancer',
    title: 'Load Balancer',
    description: 'توزیع هوشمند ترافیک بر بستر جهانی',
    icon: FiShare2,
    gradient: 'linear-gradient(135deg, #5af0d0 0%, #2fb3ff 100%)',
  },
  {
    id: 'firewall',
    title: 'Firewall',
    description: 'امنیت لایه‌ای با قوانین پویا',
    icon: FiShield,
    gradient: 'linear-gradient(135deg, #ff7cb0 0%, #ffa66c 100%)',
  },
  {
    id: 'gitlab',
    title: 'GitLab',
    description: 'توسعه مداوم برای تیم‌های چابک',
    icon: SiGitlab,
    gradient: 'linear-gradient(135deg, #ff9c6b 0%, #ff4d4d 100%)',
  },
  {
    id: 'database',
    title: 'Database',
    description: 'پایگاه داده مقیاس‌پذیر و مدیریت‌شده',
    icon: FiDatabase,
    gradient: 'linear-gradient(135deg, #7d82ff 0%, #b597ff 100%)',
  },
  {
    id: 'jenkins',
    title: 'Jenkins',
    description: 'خودکارسازی استقرار و تحویل',
    icon: SiJenkins,
    gradient: 'linear-gradient(135deg, #ffce71 0%, #ff9a62 100%)',
  },
  {
    id: 'bharaten',
    title: 'Bharaten',
    description: 'شبکه خصوصی امن برای تیم‌های توزیع‌شده',
    icon: FiServer,
    gradient: 'linear-gradient(135deg, #61d2ff 0%, #6f87ff 100%)',
  },
  {
    id: 'vscode',
    title: 'VS Code',
    description: 'ویرایشگر ابری برای همکاری هم‌زمان',
    icon: TbBrandVisualStudio,
    gradient: 'linear-gradient(135deg, #6cc8ff 0%, #3aa1ff 100%)',
  },
  {
    id: 'jira',
    title: 'Jira & Confluence',
    description: 'هماهنگی پروژه و مستندسازی پیشرفته',
    icon: SiJirasoftware,
    gradient: 'linear-gradient(135deg, #8cf7ff 0%, #4e7fff 100%)',
  },
  {
    id: 'telegram',
    title: 'Telegram Relay',
    description: 'اطلاع‌رسانی امن روی کانال‌های دلخواه',
    icon: SiTelegram,
    gradient: 'linear-gradient(135deg, #64b5ff 0%, #4d9aff 100%)',
  },
]

const HomePage = () => {
  return (
    <>
      <header className="hero">
        <div className="hero__content">
          <div className="hero__badge">
            <img src={meganLogo} alt="لوگوی مگان" className="hero__badge-image" />
            <div className="hero__badge-text">
              <span className="hero__badge-title">MEGAN</span>
              <span className="hero__badge-title hero__badge-title--accent">CLOUD</span>
            </div>
          </div>

          <h1 className="hero__title">جایی که آینده شکل می‌گیرد!</h1>
          <p className="hero__subtitle">
            همه‌چیز برای ساخت زیرساخت ابری مقیاس‌پذیر، امن و سریع در یک پلتفرم یکپارچه گرد
            آمده است.
          </p>
          <div className="hero__actions">
            <button className="button button--secondary" type="button">
              ورود به کنسول مدیریت
            </button>
          </div>
        </div>
      </header>

      <section className="integrations">
        <div className="integrations__grid">
          {integrations.map(({ id, title, description, icon: Icon, gradient }) => (
            <article key={id} className="integration-card">
              <div className="integration-card__icon" style={{ background: gradient }}>
                <Icon />
              </div>
              <div className="integration-card__body">
                <h3 className="integration-card__title">{title}</h3>
                <p className="integration-card__description">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
