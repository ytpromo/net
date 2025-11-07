import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { IconType } from 'react-icons'
import { FiActivity, FiGlobe, FiServer } from 'react-icons/fi'
import { SiGitlab, SiJenkins } from 'react-icons/si'
import metabaseLogo from '../assets/metabase-logo.svg'
import minioLogo from '../assets/minio-logo.svg'
import moodleLogo from '../assets/moodle-logo.svg'
import nextcloudLogo from '../assets/nextcloud-logo.svg'
import pocketbaseLogo from '../assets/pocketbase-logo.svg'
import phpMyAdminLogo from '../assets/phpmyadmin-logo.svg'
import rocketChatLogo from '../assets/rocketchat-logo.svg'
import postgresLogo from '../assets/postgresql.svg'
import rabbitmqLogo from '../assets/rabbitmq-logo.svg'

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
        id: 'nextcloud',
        title: 'Nextcloud مدیریت‌شده',
        description:
          'فضای همکاری امن برای اشتراک فایل، تقویم و اسناد با استقرار خودکار روی زیرساخت مگان یا سرور سازمان شما.',
        logo: nextcloudLogo,
        highlights: ['همگام‌سازی چندسکویی', 'امنیت و کنترل دسترسی', 'پشتیبانی ۲۴/۷'],
        badge: 'Collaboration',
        accent: 'linear-gradient(135deg, #6ac8ff 0%, #2e8bff 100%)',
        ctaLink: '/services/nextcloud',
      },
      {
        id: 'moodle',
        title: 'Moodle مدیریت‌شده',
        description:
          'سامانه آموزش آنلاین متن‌باز با میزبانی ایمن، به‌روزرسانی خودکار و پشتیبانی تخصصی برای سازمان‌ها و مراکز آموزشی.',
        logo: moodleLogo,
        highlights: ['نصب و راه‌اندازی سریع', 'دسترسی امن کاربران', 'اتوماسیون پشتیبان‌گیری'],
        badge: 'LMS',
        accent: 'linear-gradient(135deg, #ffb347 0%, #ff7b54 100%)',
        ctaLink: '/services/moodle',
      },
      {
        id: 'minio',
        title: 'MinIO مدیریت‌شده',
        description:
          'ذخیره‌ساز آبجکت سازگار با S3 با کارایی بالا، امنیت سازمانی و استقرار چندمحیطی توسط تیم مگان.',
        logo: minioLogo,
        highlights: ['S3 Compatible', 'امنیت و IAM پیشرفته', 'مقیاس‌پذیری افقی'],
        badge: 'Storage',
        accent: 'linear-gradient(135deg, #5ee2ff 0%, #4b7bff 100%)',
        ctaLink: '/services/minio',
      },
      {
        id: 'metabase',
        title: 'Metabase مدیریت‌شده',
        description:
          'داشبوردهای تحلیلی آماده روی زیرساخت مگان با پشتیبانی ۲۴/۷ و اتصال به هر دیتابیس سازمانی.',
        logo: metabaseLogo,
        highlights: ['تحلیل سریع داده', 'امنیت و بکاپ خودکار', 'راه‌اندازی کمتر از ۵ دقیقه'],
        badge: 'Analytics',
        accent: 'linear-gradient(135deg, #5f5bff 0%, #8c7dff 100%)',
        ctaLink: '/services/metabase',
      },
      {
        id: 'pocketbase',
        title: 'PocketBase مدیریت‌شده',
        description:
          'بک‌اند Real-time آماده با احراز هویت، ذخیره‌سازی و API گرافیکی که روی هر زیرساختی در چند دقیقه در دسترس است.',
        logo: pocketbaseLogo,
        highlights: ['Realtime Database', 'احراز هویت و فایل امن', 'دیپلوی سریع'],
        badge: 'Backend',
        accent: 'linear-gradient(135deg, #4ce0c3 0%, #1b92ff 100%)',
        ctaLink: '/services/pocketbase',
      },
      {
        id: 'rabbitmq',
        title: 'RabbitMQ مدیریت‌شده',
        description:
          'راهکار صف پیام قابل اعتماد با کلاستر مدیریت‌شده، امنیت چندلایه و پشتیبانی ۲۴/۷ روی هر زیرساخت دلخواه شما.',
        logo: rabbitmqLogo,
        highlights: ['کلاستر آماده', 'پایش و هشداردهی', 'SLA سازمانی'],
        badge: 'Messaging',
        accent: 'linear-gradient(135deg, #ff8a3b 0%, #ff4d0d 100%)',
        ctaLink: '/services/rabbitmq',
      },
      {
        id: 'rocketchat',
        title: 'Rocket.Chat مدیریت‌شده',
        description:
          'پلتفرم گفت‌وگوی تیمی ایمن با استقرار سریع، یکپارچگی سازمانی و پشتیبانی ۲۴/۷ توسط تیم مگان.',
        logo: rocketChatLogo,
        highlights: ['چت و کالابریشن امن', 'یکپارچگی با ابزارها', 'پشتیبانی ۲۴/۷'],
        badge: 'Collaboration',
        accent: 'linear-gradient(135deg, #ff4f6d 0%, #c7162c 100%)',
        ctaLink: '/services/rocketchat',
      },
      {
        id: 'phpmyadmin',
        title: 'phpMyAdmin مدیریت‌شده',
        description:
          'مدیریت پایگاه‌داده MySQL و MariaDB با امنیت کامل، بکاپ خودکار و استقرار سریع روی هر زیرساخت.',
        logo: phpMyAdminLogo,
        highlights: ['پیکربندی امن', 'بکاپ‌گیری هوشمند', 'اتصال چند دیتابیس'],
        badge: 'Database Ops',
        accent: 'linear-gradient(135deg, #ffb86c 0%, #ff6f61 100%)',
        ctaLink: '/services/phpmyadmin',
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
        logo: postgresLogo,
        highlights: ['استقرار چندمحیطی', 'پایش ۲۴/۷', 'رمزنگاری در حالت سکون'],
        badge: 'Data',
        accent: 'linear-gradient(135deg, #7d82ff 0%, #b597ff 100%)',
        ctaLink: '/services/postgresql',
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
