import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { IconType } from 'react-icons'
import {
  FiActivity,
  FiCloud,
  FiDatabase,
  FiGlobe,
  FiPieChart,
  FiServer,
  FiBookOpen,
  FiUsers,
} from 'react-icons/fi'
import { SiGitlab, SiJenkins } from 'react-icons/si'

type Service = {
  id: string
  title: string
  description: string
  icon: IconType
  highlights: string[]
  badge?: string
  accent: string
  ctaLink?: string
  ctaLabel?: string
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
        id: 'metabase',
        title: 'Metabase مدیریت‌شده',
        description:
          'داشبوردهای تحلیلی آماده روی زیرساخت مگان با پشتیبانی ۲۴/۷ و اتصال به هر دیتابیس سازمانی.',
        icon: FiPieChart,
        highlights: ['تحلیل سریع داده', 'امنیت و بکاپ خودکار', 'راه‌اندازی کمتر از ۵ دقیقه'],
        badge: 'Analytics',
        accent: 'linear-gradient(135deg, #5f5bff 0%, #8c7dff 100%)',
        ctaLink: '/services/metabase',
        ctaLabel: 'مشاهده جزئیات',
      },
      {
        id: 'minio',
        title: 'MinIO مدیریت‌شده',
        description:
          'ذخیره‌ساز آبجکت سازگار با S3 با کارایی بالا، امنیت سازمانی و استقرار چندمحیطی توسط تیم مگان.',
        icon: FiCloud,
        highlights: ['S3 Compatible', 'امنیت و IAM پیشرفته', 'مقیاس‌پذیری افقی'],
        badge: 'Storage',
        accent: 'linear-gradient(135deg, #5ee2ff 0%, #4b7bff 100%)',
        ctaLink: '/services/minio',
        ctaLabel: 'مشاهده جزئیات',
      },
      {
        id: 'moodle',
        title: 'Moodle مدیریت‌شده',
        description:
          'سامانه آموزش آنلاین متن‌باز با میزبانی ایمن، به‌روزرسانی خودکار و پشتیبانی تخصصی برای سازمان‌ها و مراکز آموزشی.',
        icon: FiBookOpen,
        highlights: ['نصب و راه‌اندازی سریع', 'دسترسی امن کاربران', 'اتوماسیون پشتیبان‌گیری'],
        badge: 'LMS',
        accent: 'linear-gradient(135deg, #ffb347 0%, #ff7b54 100%)',
        ctaLink: '/services/moodle',
        ctaLabel: 'مشاهده جزئیات',
      },
      {
        id: 'nextcloud',
        title: 'Nextcloud مدیریت‌شده',
        description:
          'فضای همکاری امن برای اشتراک فایل، تقویم و اسناد با استقرار خودکار روی زیرساخت مگان یا سرور سازمان شما.',
        icon: FiUsers,
        highlights: ['همگام‌سازی چندسکویی', 'امنیت و کنترل دسترسی', 'پشتیبانی ۲۴/۷'],
        badge: 'Collaboration',
        accent: 'linear-gradient(135deg, #6ac8ff 0%, #2e8bff 100%)',
        ctaLink: '/services/nextcloud',
        ctaLabel: 'مشاهده جزئیات',
      },
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
        id: 'postgresql',
        title: 'PostgreSQL مدیریت‌شده',
        description:
          'راهکار دیتابیس سازمانی با استقرار خودکار، بک‌آپ‌گیری مستمر و مانیتورینگ بلادرنگ روی زیرساخت مگان یا سرور شما.',
        icon: FiDatabase,
        highlights: ['استقرار چندمحیطی', 'پایش ۲۴/۷', 'رمزنگاری در حالت سکون'],
        badge: 'Data',
        accent: 'linear-gradient(135deg, #7d82ff 0%, #b597ff 100%)',
        ctaLink: '/services/postgresql',
        ctaLabel: 'مشاهده جزئیات',
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
        {activeCategory.services.map(
          ({ id, title, description, icon: Icon, highlights, badge, accent, ctaLink, ctaLabel }) => (
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
              {ctaLink ? (
                <Link to={ctaLink} className="service-card__cta">
                  {ctaLabel ?? 'شروع کنید'}
                </Link>
              ) : (
                <button type="button" className="service-card__cta">
                  {ctaLabel ?? 'شروع کنید'}
                </button>
              )}
            </article>
          ),
        )}
      </div>
    </section>
  )
}

export default ServicesPage
