import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { IconType } from 'react-icons'
import {
  FiActivity,
  FiAperture,
  FiCloud,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiServer,
  FiZap,
} from 'react-icons/fi'
import databaseLogo from '../assets/database-service-logo.svg'

type Service = {
  id: string
  title: string
  description: string
  icon?: IconType
  logo?: string
  highlights: string[]
  badge?: string
  accent: string
  ctaLink?: string
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
        id: 'database',
        title: 'Database as a Service',
        description:
          'هشت دیتابیس محبوب (MySQL، PostgreSQL، MariaDB، Redis، KeyDB، Dragonfly، MongoDB و ClickHouse) را انتخاب کنید و جزئیات هر کدام را به صورت زنده ببینید.',
        logo: databaseLogo,
        highlights: ['۸ دیتابیس محبوب', 'تعویض آنی جزئیات', 'پشتیبانی DevOps اختصاصی'],
        badge: 'Data Platform',
        accent: 'linear-gradient(135deg, #4f46e5 0%, #22d3ee 100%)',
        ctaLink: '/services/database',
      },
      {
        id: 'ai-service',
        title: 'AI as a Service',
        description:
          'دسترسی به مدل‌های هوش مصنوعی آماده برای پردازش زبان، بینایی ماشین و اتوماسیون فرایندها با استقرار امن روی زیرساخت مگان.',
        icon: FiCpu,
        highlights: ['مدل‌های آماده سازمانی', 'API یکپارچه', 'مقیاس‌پذیری آنی'],
        badge: 'Intelligence',
        accent: 'linear-gradient(135deg, #7c3aed 0%, #22d3ee 100%)',
      },
      {
        id: 'apranik',
        title: 'apranik',
        description:
          'آپرانیک یک موتور استقرار خودکار وب‌اپلیکیشن است که می‌تواند از هر منبعی مانند گیت‌هاب نرم‌افزار شما را با استفاده از Dockerfile و منبع کد مستقر کند.',
        icon: FiAperture,
        highlights: ['استقرار از هر ریپازیتوری', 'جریان CI/CD یکپارچه', 'پایش و بازبینی خودکار'],
        badge: 'Automation',
        accent: 'linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)',
      },
      {
        id: 'kubernetes',
        title: 'Kubernetes as a Service',
        description:
          'کلاستر Kubernetes آماده با استقرار خودکار، مانیتورینگ کامل و پشتیبانی تیم مگان برای محیط‌های تولیدی.',
        icon: FiCloud,
        highlights: ['استقرار خودکار', 'مانیتورینگ و هشدار', 'پشتیبانی ۲۴/۷'],
        badge: 'Containers',
        accent: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)',
      },
      {
        id: 'iaas',
        title: 'Infrastructure as a Service',
        description:
          'زیرساخت ابری اختصاصی با سرورهای قدرتمند، شبکه امن و مدیریت چرخه عمر کامل توسط تیم مگان.',
        icon: FiLayers,
        highlights: ['زیرساخت اختصاصی', 'شبکه امن', 'مقیاس‌پذیری آنی'],
        badge: 'Cloud',
        accent: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
      },
      {
        id: 'saas',
        title: 'Software as a Service',
        description:
          'راهکارهای نرم‌افزاری آماده برای تیم‌ها با میزبانی امن، به‌روزرسانی خودکار و سفارشی‌سازی سریع.',
        icon: FiCpu,
        highlights: ['راه‌اندازی سریع', 'امنیت سازمانی', 'سفارشی‌سازی آسان'],
        badge: 'Applications',
        accent: 'linear-gradient(135deg, #f97316 0%, #fb7185 100%)',
        ctaLink: '/services/software',
      },
      {
        id: 'noops',
        title: 'NoOps',
        description:
          'تیم مگان کل عملیات اجرایی، مانیتورینگ و نگهداری سرویس‌های شما را مدیریت می‌کند تا تیم توسعه روی محصول تمرکز کند.',
        icon: FiZap,
        highlights: ['عملیات تمام‌مدیریت‌شده', 'پایش پیوسته', 'SLA اختصاصی'],
        badge: 'Ops',
        accent: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
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
        <div className="services__insights">
          <div className="services__insight">
            <strong>استقرار در چند دقیقه</strong>
            <span>زیرساخت آماده روی سرور مگان یا محیط‌های مشتری</span>
          </div>
          <div className="services__insight">
            <strong>پشتیبانی ۲۴/۷</strong>
            <span>تیم عملیات همیشه کنار شماست</span>
          </div>
          <div className="services__insight">
            <strong>انعطاف در میزبانی</strong>
            <span>از کلود مگان تا دیتاسنتر اختصاصی شما</span>
          </div>
        </div>
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
        {activeCategory.services.map(({ id, title, description, icon: Icon, logo, highlights, badge, accent, ctaLink }) => {
          const cardContent = (
            <>
              <div className="service-card__header">
                {logo ? (
                  <div className="service-card__logo" aria-hidden="true" style={{ background: accent }}>
                    <img src={logo} alt="" />
                  </div>
                ) : (
                  <div className="service-card__icon" aria-hidden="true" style={{ background: accent }}>
                    {Icon ? <Icon /> : null}
                  </div>
                )}
                {badge ? <span className="service-card__badge">{badge}</span> : null}
              </div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__description">{description}</p>
              <ul className="service-card__highlights">
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </>
          )

          return ctaLink ? (
            <Link key={id} to={ctaLink} className="service-card service-card--link" aria-label={`مشاهده سرویس ${title}`}>
              {cardContent}
            </Link>
          ) : (
            <article key={id} className="service-card" role="article">
              {cardContent}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesPage
