import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import strapiLogo from '../assets/strapi-logo.svg'

const benefits = [
  'راه‌اندازی Strapi Headless CMS با کانفیگ امنیتی، SSL و شبکه خصوصی در کمتر از چند ساعت',
  'پشتیبان‌گیری خودکار از دیتابیس، فایل‌ها و تنظیمات محتوا با امکان بازیابی سریع',
  'استقرار چندمحیطی (Dev، Stage، Prod) برای تیم‌های محتوا و توسعه بدون Downtime',
  'بهینه‌سازی عملکرد APIها با کش هوشمند، CDN و مانیتورینگ مداوم توسط تیم عملیات مگان',
  'احراز هویت و مدیریت نقش‌ها به همراه یکپارچه‌سازی با SSO و سرویس‌های سازمانی',
  'پشتیبانی از استقرار روی کلود مگان، سرور اختصاصی شما یا دیتاسنتر ثالث',
  'بروزرسانی نسخه‌های Strapi و افزونه‌ها به‌صورت کنترل‌شده و قابل بازگشت',
  'پشتیبانی فارسی‌زبان ۲۴/۷ برای مهاجرت محتوا و سفارشی‌سازی APIها',
]

const features = [
  {
    title: 'Headless CMS آماده برای چند کاناله',
    description:
      'محتوای یکپارچه برای وب‌سایت، موبایل و اپلیکیشن‌های سازمانی با APIهای REST و GraphQL مدیریت‌شده.',
  },
  {
    title: 'مدیریت نقش و دسترسی پیشرفته',
    description:
      'تعریف Roleهای سازمانی، سیاست‌های مجوزدهی و اتصال به سیستم‌های IAM برای کنترل دقیق داده‌ها.',
  },
  {
    title: 'Pipeline استقرار خودکار',
    description:
      'انتشار سریع تغییرات محتوا و ساختار داده با CI/CD مدیریت‌شده و امکان Rollback مطمئن.',
  },
  {
    title: 'پایگاه‌داده امن و مقیاس‌پذیر',
    description:
      'پشتیبانی از PostgreSQL یا MariaDB با بکاپ افزایشی، Replication و مانیتورینگ Queryها.',
  },
  {
    title: 'مانیتورینگ و گزارش‌گیری',
    description:
      'داشبوردهای Grafana، لاگ متمرکز و هشدارهای لحظه‌ای برای سلامت API و مصرف منابع.',
  },
  {
    title: 'بهینه‌سازی عملکرد API',
    description:
      'کشینگ لایه‌ای، CDN و سیاست‌های Rate Limit برای ارائه پاسخ سریع به اپلیکیشن‌های پرترافیک.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🚀',
    plans: [
      {
        id: 'standard-megan-strapi',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۱٬۱۰۰٬۰۰۰ تومان در ماه',
        description: 'Strapi آماده با مانیتورینگ، بکاپ و امنیت کامل روی زیرساخت ابری مگان.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned-strapi',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۳۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور سازمانی شما با تنظیمات امنیتی، CI/CD و پایش مداوم.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated-strapi',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۴۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی و تیم عملیات ۲۴/۷ برای پروژه‌های حساس.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'dune',
    label: 'Dune',
    icon: '🏜️',
    plans: [
      {
        id: 'dune-arrakis-strapi',
        title: 'Arrakis (آراکیس)',
        tier: 'پلن اقتصادی',
        price: '۱٬۱۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان برای تیم‌هایی که به چابکی و سرعت نیاز دارند.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'dune-caladan-strapi',
        title: 'Caladan (کالادان)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۳۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با حکمرانی داده و کنترل دسترسی پیشرفته.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'dune-giedi-strapi',
        title: 'Giedi Prime (جیدی پرایم)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۴۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با لایه‌های امنیتی چندگانه برای سازمان‌های بزرگ.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'matrix',
    label: 'Matrix',
    icon: '🟩',
    plans: [
      {
        id: 'matrix-neo-strapi',
        title: 'Neo (نئو)',
        tier: 'پلن اقتصادی',
        price: '۱٬۱۰۰٬۰۰۰ تومان در ماه',
        description: 'Strapi آماده روی کلود مگان برای تولید سریع APIهای محتوا.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'matrix-trinity-strapi',
        title: 'Trinity (ترینیتی)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۳۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با مانیتورینگ پیشرفته و بکاپ‌های افزایشی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'matrix-zion-strapi',
        title: 'Zion (زایان)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۴۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی و تیم واکنش سریع.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'cyberpunk',
    label: 'Cyberpunk',
    icon: '🌃',
    plans: [
      {
        id: 'cyberpunk-nightcity-strapi',
        title: 'Night City (نایت سیتی)',
        tier: 'پلن اقتصادی',
        price: '۱٬۱۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان با تمرکز روی سرعت تحویل محتوا و اتصال چندکاناله.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'cyberpunk-badlands-strapi',
        title: 'Badlands (بدلندز)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۳۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با امنیت چندلایه و استقرار کنترل‌شده افزونه‌ها.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'cyberpunk-arasaka-strapi',
        title: 'Arasaka (آراساكا)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۴۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی برای نیازهای سازمانی بزرگ با منابع ایزوله.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'avatar',
    label: 'Avatar',
    icon: '🌊',
    plans: [
      {
        id: 'avatar-metkayina-strapi',
        title: 'Metkayina (متکایینا)',
        tier: 'پلن اقتصادی',
        price: '۱٬۱۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان با تمرکز روی پایداری و نگهداری آسان.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'avatar-omatikaya-strapi',
        title: 'Omatikaya (اوماتیکایا)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۳۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور شما با تنظیمات امنیتی و DevOps اختصاصی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'avatar-ewa-strapi',
        title: 'Ewa (ایوا)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۴۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با نظارت ۲۴/۷ و قابلیت مقیاس‌پذیری افقی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'آیا امکان اتصال Strapi به دیتابیس سازمانی وجود دارد؟',
    answer:
      'بله، تیم مگان می‌تواند Strapi را روی PostgreSQL یا MariaDB سازمان شما با امنیت و پشتیبان‌گیری کامل مستقر کند.',
  },
  {
    question: 'برای مهاجرت از CMS فعلی به Strapi چه کمکی ارائه می‌شود؟',
    answer:
      'ما فرآیند مهاجرت محتوا، ساختار مدل‌ها و تست APIها را به صورت گام‌به‌گام انجام می‌دهیم تا قطعی نداشته باشید.',
  },
  {
    question: 'آیا امکان فعال‌سازی GraphQL و APIهای سفارشی وجود دارد؟',
    answer:
      'بله، GraphQL و APIهای سفارشی بر اساس نیاز شما پیکربندی و مستندسازی می‌شوند.',
  },
  {
    question: 'زمان راه‌اندازی سرویس چقدر است؟',
    answer:
      'با آماده بودن زیرساخت، سرویس Strapi معمولاً ظرف چند ساعت راه‌اندازی و تحویل می‌شود.',
  },
]

const StrapiServicePage = () => {
  const [activeTheme, setActiveTheme] = useState(pricingThemes[0].id)
  const [activePlan, setActivePlan] = useState(pricingThemes[0].plans[0].id)

  const handleThemeChange = (themeId: string) => {
    if (themeId === activeTheme) return
    const theme = pricingThemes.find((item) => item.id === themeId)
    if (theme) {
      setActiveTheme(themeId)
      setActivePlan(theme.plans[0].id)
    }
  }

  const currentTheme = pricingThemes.find((theme) => theme.id === activeTheme) ?? pricingThemes[0]
  const currentPlans = currentTheme.plans

  return (
    <section className="strapi-service">
      <header className="strapi-hero">
        <div className="strapi-hero__badge">Strapi Headless CMS</div>
        <div className="strapi-hero__logo hero-logo-pair" aria-label="لوگوی مگان و استرپی">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={strapiLogo} alt="لوگوی Strapi" />
          </div>
        </div>
        <h1 className="strapi-hero__title">Strapi مدیریت‌شده برای ساخت تجربه‌های محتوایی مدرن</h1>
        <p className="strapi-hero__subtitle">
          با سرویس مدیریت‌شده Strapi مگان، یک CMS منعطف و امن در اختیار دارید که محتوای شما را به سرعت به وب، موبایل و
          کانال‌های دیجیتال منتقل می‌کند. تیم ما زیرساخت، امنیت و عملیات را مدیریت می‌کند تا شما روی رشد محصول تمرکز کنید.
        </p>
        <div className="strapi-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="strapi-section" id="insight">
        <div className="strapi-section__content">
          <h2 className="strapi-section__title">چرا Strapi مدیریت‌شده مگان؟</h2>
          <p className="strapi-section__description">
            راه‌اندازی Strapi به‌صورت حرفه‌ای نیازمند امنیت، پایداری و مانیتورینگ دقیق است. ما تمام بخش‌های زیرساخت،
            دیتابیس و استقرار را مدیریت می‌کنیم تا تیم محتوا و توسعه شما با خیال راحت APIهای قدرتمند بسازد.
          </p>
        </div>
        <div className="strapi-insight">
          <article className="strapi-insight__card">
            <span className="strapi-insight__label">چالش</span>
            <h3>مدیریت زیرساخت و امنیت API</h3>
            <p>
              بدون تیم DevOps، نگهداری Strapi و دیتابیس آن می‌تواند پیچیده باشد و هر به‌روزرسانی ریسک داون‌تایم ایجاد کند.
            </p>
          </article>
          <article className="strapi-insight__card">
            <span className="strapi-insight__label strapi-insight__label--solution">راه‌حل</span>
            <h3>سرویس مدیریت‌شده مگان</h3>
            <p>
              ما امنیت، پایداری، بکاپ و پایش ۲۴/۷ را فراهم می‌کنیم تا شما تنها روی تولید محتوا و توسعه تجربه‌های جدید تمرکز
              کنید.
            </p>
          </article>
        </div>
      </section>

      <section className="strapi-section strapi-section--surface" id="benefits">
        <div className="strapi-section__content">
          <h2 className="strapi-section__title">مزایای استفاده از Strapi در مگان</h2>
          <p className="strapi-section__description">
            ترکیب Strapi با عملیات حرفه‌ای مگان به شما امکان می‌دهد با خیال راحت محتوای سازمانی را مدیریت و در چند کانال
            منتشر کنید.
          </p>
        </div>
        <div className="strapi-benefits">
          {benefits.map((benefit) => (
            <div key={benefit} className="strapi-benefits__item">
              <span className="strapi-benefits__icon" aria-hidden="true">✔️</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="strapi-section" id="features">
        <div className="strapi-section__content">
          <h2 className="strapi-section__title">ویژگی‌های کلیدی Strapi مدیریت‌شده</h2>
          <p className="strapi-section__description">
            سرویس Strapi مگان با تمرکز بر امنیت و سرعت توسعه طراحی شده است تا تجربه‌ای حرفه‌ای برای تیم‌های محتوا و فنی
            ایجاد کند.
          </p>
        </div>
        <div className="strapi-features">
          {features.map((feature) => (
            <article key={feature.title} className="strapi-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="strapi-section" id="pricing">
        <div className="strapi-section__content">
          <h2 className="strapi-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="strapi-section__description">
            تم‌های قیمت‌گذاری برای ایجاد حس فان طراحی شده‌اند، اما در همه پلن‌ها سه سناریو ثابت داریم: استقرار روی کلود
            مگان، نصب روی سرور شما یا میزبانی اختصاصی.
          </p>
          <p className="strapi-section__note">
            انتخاب تم فقط برای سرگرمی است و هیچ تفاوتی در امکانات یا قیمت نهایی ایجاد نمی‌کند.
          </p>
        </div>
        <div className="strapi-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`strapi-pricing__theme${theme.id === activeTheme ? ' strapi-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
              tabIndex={theme.id === activeTheme ? 0 : -1}
              aria-controls="strapi-pricing-panel"
            >
              <span className="strapi-pricing__theme-icon" aria-hidden="true">
                {theme.icon}
              </span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="strapi-pricing" id="strapi-pricing-panel">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`strapi-plan${activePlan === plan.id ? ' strapi-plan--active' : ''}`}
              role="button"
              tabIndex={0}
              aria-pressed={activePlan === plan.id}
              onClick={() => setActivePlan(plan.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActivePlan(plan.id)
                }
              }}
            >
              <div className="strapi-plan__head">
                <span className="strapi-plan__tier">{plan.tier}</span>
                <h3 className="strapi-plan__title">{plan.title}</h3>
              </div>
              <p className="strapi-plan__price">{plan.price}</p>
              <p className="strapi-plan__description">{plan.description}</p>
              <div className="strapi-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="strapi-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="strapi-section strapi-section--surface" id="faq">
        <div className="strapi-section__content">
          <h2 className="strapi-section__title">سوالات پرتکرار</h2>
          <p className="strapi-section__description">
            اگر سوال دیگری دارید، تیم ما آماده است تا درباره معماری محتوا، امنیت یا مهاجرت Strapi با شما گفتگو کند.
          </p>
        </div>
        <div className="strapi-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="strapi-faq__item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <LandingFooter />
    </section>
  )
}

export default StrapiServicePage
