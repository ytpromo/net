import { Link } from 'react-router-dom'
import type { IconType } from 'react-icons'
import { SiGitlab, SiJenkins } from 'react-icons/si'

import metabaseLogo from '../assets/metabase-logo.svg'
import minioLogo from '../assets/minio-logo.svg'
import moodleLogo from '../assets/moodle-logo.svg'
import nextcloudLogo from '../assets/nextcloud-logo.svg'
import pocketbaseLogo from '../assets/pocketbase-logo.svg'
import hoppscotchLogo from '../assets/hoppscotch-logo.svg'
import grafanaLogo from '../assets/grafana-logo.svg'
import phpMyAdminLogo from '../assets/phpmyadmin-logo.svg'
import rocketChatLogo from '../assets/rocketchat-logo.svg'
import mattermostLogo from '../assets/mattermost-logo.svg'
import postgresLogo from '../assets/postgresql.svg'
import rabbitmqLogo from '../assets/rabbitmq-logo.svg'
import joomlaLogo from '../assets/joomla-logo.svg'
import jellyfinLogo from '../assets/jellyfin-logo.svg'
import githubRunnerLogo from '../assets/github-runner-logo.svg'
import elasticsearchLogo from '../assets/elasticsearch-logo.svg'
import drupalLogo from '../assets/drupal-logo.svg'
import postizLogo from '../assets/postiz-logo.svg'
import wordpressLogo from '../assets/wordpress-logo.svg'
import strapiLogo from '../assets/strapi-logo.svg'


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

const services: Service[] = [
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
    id: 'grafana',
    title: 'Grafana مدیریت‌شده',
    description:
      'داشبوردهای مانیتورینگ و مشاهده‌پذیری با استقرار امن، اتصال به ده‌ها دیتا سورس و پشتیبانی ۲۴/۷ تیم مگان.',
    logo: grafanaLogo,
    highlights: ['Observability کامل', 'امنیت و SSO', 'هشداردهی هوشمند'],
    badge: 'Monitoring',
    accent: 'linear-gradient(135deg, #ffb347 0%, #ff5b2b 100%)',
    ctaLink: '/services/grafana',
  },
  {
    id: 'hoppscotch',
    title: 'Hoppscotch مدیریت‌شده',
    description:
      'پلتفرم تست و دیباگ API با کالکشن‌های اشتراکی، امنیت سازمانی و اتوماسیون CI/CD روی زیرساخت ابری مگان.',
    logo: hoppscotchLogo,
    highlights: ['اشتراک‌گذاری تیمی', 'امنیت و رمزنگاری', 'مانیتورینگ ۲۴/۷'],
    badge: 'API',
    accent: 'linear-gradient(135deg, #ff8a65 0%, #ff3d94 100%)',
    ctaLink: '/services/hoppscotch',
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
    id: 'jellyfin',
    title: 'Jellyfin مدیریت‌شده',
    description:
      'سرویس استریم سازمانی با ترنسکدینگ هوشمند، بکاپ خودکار و امنیت چندلایه روی زیرساخت مگان یا سرور شما.',
    logo: jellyfinLogo,
    highlights: ['ترنسکدینگ بهینه', 'مدیریت کتابخانه رسانه', 'پشتیبانی ۲۴/۷'],
    badge: 'Media',
    accent: 'linear-gradient(135deg, #6f9bff 0%, #8f3fff 100%)',
    ctaLink: '/services/jellyfin',
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
    id: 'mattermost',
    title: 'Mattermost مدیریت‌شده',
    description:
      'پیام‌رسان تیمی امن با استقرار سریع، احراز هویت سازمانی و سفارشی‌سازی کامل روی هر زیرساختی که انتخاب می‌کنید.',
    logo: mattermostLogo,
    highlights: ['احراز هویت سازمانی', 'بکاپ و مانیتورینگ', 'سفارشی‌سازی برندینگ'],
    badge: 'Collaboration',
    accent: 'linear-gradient(135deg, #0f6fff 0%, #1cb5e0 100%)',
    ctaLink: '/services/mattermost',
  },
  {
    id: 'drupal',
    title: 'Drupal + PostgreSQL مدیریت‌شده',
    description:
      'پلتفرم Drupal با دیتابیس PostgreSQL و عملیات DevOps کامل برای سازمان‌هایی که به انعطاف، امنیت و مقیاس بالا نیاز دارند.',
    logo: drupalLogo,
    highlights: ['پشتیبانی ۲۴/۷', 'بکاپ و مانیتورینگ', 'استقرار چندمحیطی'],
    badge: 'CMS',
    accent: 'linear-gradient(135deg, #2dafea 0%, #0c6ab7 100%)',
    ctaLink: '/services/drupal',
  },
  {
    id: 'joomla',
    title: 'Joomla + MariaDB مدیریت‌شده',
    description:
      'سیستم مدیریت محتوای Joomla به همراه دیتابیس MariaDB با استقرار امن، به‌روزرسانی خودکار و پشتیبانی ۲۴/۷.',
    logo: joomlaLogo,
    highlights: ['بهینه‌سازی MariaDB', 'SSL و امنیت کامل', 'بکاپ روزانه'],
    badge: 'CMS',
    accent: 'linear-gradient(135deg, #f37321 0%, #2b8c4f 100%)',
    ctaLink: '/services/joomla',
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
    id: 'postiz',
    title: 'Postiz مدیریت‌شده',
    description:
      'اتوماسیون مدیریت شبکه‌های اجتماعی با انتشار زمان‌بندی‌شده، همکاری تیمی و گزارش‌گیری عمیق روی هر زیرساخت.',
    logo: postizLogo,
    highlights: ['انتشار چندپلتفرمی', 'گزارش‌های Real-time', 'امنیت و کنترل دسترسی'],
    badge: 'Marketing',
    accent: 'linear-gradient(135deg, #7b4dff 0%, #ff4db8 100%)',
    ctaLink: '/services/postiz',
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
    id: 'elasticsearch',
    title: 'Elasticsearch مدیریت‌شده',
    description:
      'موتور جستجو و تحلیل داده با استقرار خودکار، امنیت لایه‌ای و مانیتورینگ ۲۴/۷ توسط تیم مگان.',
    logo: elasticsearchLogo,
    highlights: ['شاخص‌گذاری سریع', 'امنیت و RBAC', 'مانیتورینگ مداوم'],
    badge: 'Search',
    accent: 'linear-gradient(135deg, #00bfb3 0%, #2ec4b6 50%, #fed766 100%)',
    ctaLink: '/services/elasticsearch',
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
    id: 'wordpress',
    title: 'WordPress + MariaDB مدیریت‌شده',
    description:
      'سیستم مدیریت محتوای WordPress همراه با دیتابیس MariaDB و عملیات کاملاً مدیریت‌شده برای سایت‌های محتوایی و فروشگاه‌ها.',
    logo: wordpressLogo,
    highlights: ['امنیت چندلایه', 'به‌روزرسانی خودکار', 'بکاپ ساعتی'],
    badge: 'CMS',
    accent: 'linear-gradient(135deg, #21759b 0%, #0b4a6f 100%)',
    ctaLink: '/services/wordpress',
  },
  {
    id: 'strapi',
    title: 'Strapi Headless CMS مدیریت‌شده',
    description:
      'پلتفرم Headless CMS با APIهای آماده، مدیریت نقش‌ها و عملیات DevOps کامل برای تیم‌های محتوا و توسعه.',
    logo: strapiLogo,
    highlights: ['REST & GraphQL', 'امنیت و IAM', 'انتشار چندکاناله'],
    badge: 'CMS',
    accent: 'linear-gradient(135deg, #7b6cff 0%, #4945ff 100%)',
    ctaLink: '/services/strapi',
  },
  {
    id: 'github-runner',
    title: 'GitHub Runner مدیریت‌شده',
    description:
      'Runnerهای اختصاصی GitHub Actions با امنیت کامل، مقیاس‌پذیری هوشمند و نگهداری ۲۴/۷ روی هر زیرساخت دلخواه شما.',
    logo: githubRunnerLogo,
    highlights: ['اتوماسیون CI/CD', 'امنیت و RBAC', 'مقیاس‌پذیری خودکار'],
    badge: 'DevOps',
    accent: 'linear-gradient(135deg, #2f81f7 0%, #54d3ff 100%)',
    ctaLink: '/services/github-runner',
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
]

const SoftwareServicePage = () => {
  return (
    <section className="services services--saas" aria-labelledby="software-as-a-service-heading">
      <h1 id="software-as-a-service-heading" className="visually-hidden">
        Software as a Service
      </h1>

      <div className="services__grid">
        {services.map(({ id, title, description, icon: Icon, logo, highlights, badge, accent, ctaLink }) => {
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

export default SoftwareServicePage
