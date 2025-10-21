import { useMemo, useState } from 'react'
import type { IconType } from 'react-icons'
import { FiActivity, FiDatabase, FiGlobe, FiServer } from 'react-icons/fi'
import { SiGitlab, SiJenkins } from 'react-icons/si'

type Service = {
  id: string
  title: string
  description: string
  icon: IconType
  highlights: string[]
  badge?: string
  accent: string
}

type CategoryKey = 'enterprise' | 'free'

type ServiceCategory = {
  key: CategoryKey
  title: string
  services: Service[]
}

const categories: ServiceCategory[] = [
  {
    key: 'enterprise',
    title: 'سرویس‌های اینترپرایز',
    services: [
      {
        id: 'gitlab',
        title: 'GitLab as a Service',
        description:
          'پلتفرم DevOps یکپارچه با CI/CD، کنترل نسخه خصوصی و امنیت داخلی برای تیم‌های بزرگ.',
        icon: SiGitlab,
        highlights: ['DevSecOps', 'SAML SSO', 'پشتیبانی ۲۴/۷'],
        badge: 'DevOps',
        accent: 'linear-gradient(135deg, #ff9c6b 0%, #ff4d4d 100%)',
      },
      {
        id: 'database',
        title: 'Database as a Service',
        description:
          'PostgreSQL و MySQL مدیریت‌شده با بک‌آپ خودکار، مقیاس‌پذیری آنی و رمزنگاری سراسری.',
        icon: FiDatabase,
        highlights: ['پشتیبان‌گیری روزانه', 'HA Cluster', 'رمزنگاری داده'],
        badge: 'Data',
        accent: 'linear-gradient(135deg, #7d82ff 0%, #b597ff 100%)',
      },
      {
        id: 'jenkins',
        title: 'Jenkins as a Service',
        description:
          'اکوسیستم Jenkins آماده به کار با ایجنت‌های مدیریت‌شده برای ساخت و استقرار پیوسته.',
        icon: SiJenkins,
        highlights: ['Pipeline Templates', 'Auto Scaling', 'مدیریت لاگ'],
        badge: 'Automation',
        accent: 'linear-gradient(135deg, #ffce71 0%, #ff9a62 100%)',
      },
    ],
  },
  {
    key: 'free',
    title: 'سرویس‌های رایگان',
    services: [
      {
        id: 'uptime',
        title: 'Status & Uptime',
        description: 'پایش ۲۴ ساعته سرویس‌ها با هشدار آنی در تلگرام و وب‌هوک اختصاصی.',
        icon: FiActivity,
        highlights: ['۱۰۰ مانیتور فعال', 'گزارش SLA', 'هشدار بلادرنگ'],
        accent: 'linear-gradient(135deg, #5af0d0 0%, #2fb3ff 100%)',
      },
      {
        id: 'cdn',
        title: 'Global CDN Edge',
        description:
          'تحویل سریع محتوا در ۴۵ نقطه حضور جهانی با کش هوشمند و گواهی رایگان SSL.',
        icon: FiGlobe,
        highlights: ['HTTP/3', 'پوشش جهانی', 'SSL خودکار'],
        accent: 'linear-gradient(135deg, #8cf7ff 0%, #4e7fff 100%)',
      },
      {
        id: 'sandbox',
        title: 'Container Sandbox',
        description: 'محیط محاسباتی سبک برای تست سرویس‌ها با دسترسی موقت و ایزوله.',
        icon: FiServer,
        highlights: ['شبکه خصوصی', 'Log Streaming', 'بازنشانی خودکار'],
        accent: 'linear-gradient(135deg, #6cc8ff 0%, #3aa1ff 100%)',
      },
    ],
  },
]

const ServicesPage = () => {
  const [activeKey, setActiveKey] = useState<CategoryKey>('enterprise')

  const activeCategory = useMemo(
    () => categories.find((category) => category.key === activeKey) ?? categories[0],
    [activeKey],
  )

  return (
    <section className="services">
      <header className="services__header">
        <span className="services__eyebrow">MEGAN CLOUD</span>
        <h1 className="services__title">سرویس‌های ابری مگان</h1>
        <p className="services__subtitle">
          مجموعه کامل سرویس‌های ما برای تسریع در توسعه و استقرار پروژه‌های شما. بسته‌های اینترپرایز
          با SLA اختصاصی و پشتیبانی لحظه‌ای ارائه می‌شوند و سرویس‌های رایگان برای تیم‌های کوچک و
          استارتاپ‌ها آماده‌اند.
        </p>
        <div className="services__tabs" role="tablist">
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              className={`services__tab${category.key === activeKey ? ' services__tab--active' : ''}`}
              onClick={() => setActiveKey(category.key)}
              role="tab"
              aria-selected={category.key === activeKey}
            >
              {category.title}
            </button>
          ))}
        </div>
      </header>

      <div className="services__grid">
        {activeCategory.services.map(({ id, title, description, icon: Icon, highlights, badge, accent }) => (
          <article key={id} className="service-card">
            <div className="service-card__header">
              <div className="service-card__icon" aria-hidden="true" style={{ background: accent }}>
                <Icon />
              </div>
              {badge ? <span className="service-card__badge">{badge}</span> : null}
            </div>
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__description">{description}</p>
            <ul className="service-card__highlights">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <button type="button" className="service-card__cta">
              شروع کنید
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesPage
