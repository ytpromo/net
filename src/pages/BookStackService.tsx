import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import bookStackLogo from '../assets/bookstack-logo.svg'

const benefits = [
  'راه‌اندازی سریع BookStack با تنظیمات امنیتی، SSL و شبکه خصوصی روی زیرساخت مگان',
  'پشتیبان‌گیری خودکار از دیتابیس و فایل‌ها با امکان بازیابی سریع و امن',
  'مدیریت نقش‌ها و دسترسی‌ها برای تیم‌های محتوا و واحدهای سازمانی',
  'یکپارچگی با SSO و سیستم‌های احراز هویت سازمانی',
  'مانیتورینگ ۲۴/۷ و هشداردهی لحظه‌ای توسط تیم عملیات مگان',
  'استقرار روی کلود مگان، سرور اختصاصی شما یا دیتاسنتر ثالث',
  'به‌روزرسانی کنترل‌شده نسخه‌ها و افزونه‌ها بدون Downtime',
  'پشتیبانی فارسی‌زبان برای مهاجرت محتوا و آموزش کاربران',
]

const features = [
  {
    title: 'مدیریت دانش ساخت‌یافته',
    description:
      'کتاب‌ها، فصل‌ها و صفحات را به صورت ساخت‌یافته مدیریت کنید تا تیم‌ها سریع‌تر به دانش دسترسی داشته باشند.',
  },
  {
    title: 'جستجوی پیشرفته',
    description:
      'جستجوی سریع در محتوا، برچسب‌ها و فایل‌ها برای پیدا کردن اطلاعات حیاتی در چند ثانیه.',
  },
  {
    title: 'کنترل دسترسی دقیق',
    description:
      'تعریف Roleهای سازمانی، دسترسی سطح صفحه و محدودسازی پروژه‌ها بر اساس تیم‌ها.',
  },
  {
    title: 'ویرایشگر ساده و قدرتمند',
    description:
      'ویرایش محتوای غنی با امکان افزودن فایل، تصویر و بلوک‌های سفارشی برای مستندسازی کامل.',
  },
  {
    title: 'پشتیبانی از چند تیم',
    description:
      'ساخت فضای دانش برای تیم‌های مختلف با گزارش‌گیری و نظارت بر فعالیت‌ها.',
  },
  {
    title: 'پایداری و امنیت',
    description:
      'مانیتورینگ، بکاپ و سخت‌سازی سرور برای نگهداری مطمئن از دانش سازمانی.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '📘',
    plans: [
      {
        id: 'standard-megan-bookstack',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۹۵۰٬۰۰۰ تومان در ماه',
        description: 'BookStack آماده با مانیتورینگ، بکاپ و امنیت کامل روی کلود مگان.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned-bookstack',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور سازمانی شما با تنظیمات امنیتی و نگهداری دوره‌ای.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated-bookstack',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۴٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی و تیم عملیات ۲۴/۷.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'library',
    label: 'Library',
    icon: '📚',
    plans: [
      {
        id: 'library-central-bookstack',
        title: 'Central Library (سنترال)',
        tier: 'پلن اقتصادی',
        price: '۹۵۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان برای تیم‌های محتوا و دانش.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'library-archive-bookstack',
        title: 'Archive (آرشیو)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با سیاست‌های امنیتی و کنترل دسترسی دقیق.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'library-vault-bookstack',
        title: 'Vault (ولت)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با منابع ایزوله و پشتیبانی سازمانی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'wizard',
    label: 'Wizarding World',
    icon: '🪄',
    plans: [
      {
        id: 'wizard-hogwarts-bookstack',
        title: 'Hogwarts (هاگوارتز)',
        tier: 'پلن اقتصادی',
        price: '۹۵۰٬۰۰۰ تومان در ماه',
        description: 'BookStack آماده با داشبورد دانش برای تیم‌های چابک.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'wizard-ministry-bookstack',
        title: 'Ministry (وزارت)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با اتصال به SSO سازمانی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'wizard-auror-bookstack',
        title: 'Auror (آروِر)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با سیاست‌های امنیتی سخت‌گیرانه.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'atlas',
    label: 'Atlas',
    icon: '🧭',
    plans: [
      {
        id: 'atlas-north-bookstack',
        title: 'North (نورس)',
        tier: 'پلن اقتصادی',
        price: '۹۵۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع با نظارت کامل و بکاپ‌های دوره‌ای.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'atlas-compass-bookstack',
        title: 'Compass (کامپس)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با بهینه‌سازی امنیتی و نقش‌ها.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'atlas-constellation-bookstack',
        title: 'Constellation (کانستلیشن)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با منابع ایزوله و SLA سازمانی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'foundation',
    label: 'Foundation',
    icon: '🏛️',
    plans: [
      {
        id: 'foundation-terminus-bookstack',
        title: 'Terminus (ترمینوس)',
        tier: 'پلن اقتصادی',
        price: '۹۵۰٬۰۰۰ تومان در ماه',
        description: 'BookStack آماده برای مدیریت دانش سازمانی با سرعت بالا.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'foundation-trantor-bookstack',
        title: 'Trantor (ترنتور)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با کنترل نسخه و گزارش‌های SLA.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'foundation-vault-bookstack',
        title: 'Vault (ولت)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم پشتیبانی ۲۴/۷.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'آیا امکان مهاجرت محتوای فعلی به BookStack وجود دارد؟',
    answer:
      'بله، تیم مگان فرآیند مهاجرت محتوا، ساختاردهی صفحات و تست دسترسی‌ها را انجام می‌دهد.',
  },
  {
    question: 'آیا BookStack از SSO و LDAP پشتیبانی می‌کند؟',
    answer:
      'بله، اتصال به LDAP/SSO طبق نیاز سازمانی شما پیکربندی می‌شود.',
  },
  {
    question: 'زمان راه‌اندازی سرویس چقدر است؟',
    answer:
      'در صورت آماده بودن زیرساخت، سرویس BookStack معمولاً در کمتر از یک روز کاری آماده می‌شود.',
  },
  {
    question: 'چگونه گزارش‌های SLA دریافت می‌کنیم؟',
    answer:
      'گزارش‌های ماهانه SLA و سلامت سرویس از طریق داشبورد مگان در اختیار شما قرار می‌گیرد.',
  },
]

const BookStackServicePage = () => {
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
    <section className="bookstack-service">
      <header className="bookstack-hero">
        <div className="bookstack-hero__badge">BookStack</div>
        <div className="bookstack-hero__logo hero-logo-pair" aria-label="لوگوی مگان و BookStack">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={bookStackLogo} alt="لوگوی BookStack" />
          </div>
        </div>
        <h1 className="bookstack-hero__title">BookStack مدیریت‌شده برای مستندسازی و مدیریت دانش</h1>
        <p className="bookstack-hero__subtitle">
          با سرویس مدیریت‌شده BookStack مگان، مستندات سازمانی خود را ساخت‌یافته و امن مدیریت کنید. ما زیرساخت، امنیت و
          عملیات را مدیریت می‌کنیم تا تیم شما روی تولید دانش تمرکز کند.
        </p>
        <div className="bookstack-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="bookstack-section" id="insight">
        <div className="bookstack-section__content">
          <h2 className="bookstack-section__title">چرا BookStack مدیریت‌شده مگان؟</h2>
          <p className="bookstack-section__description">
            نگهداری سیستم دانش سازمانی نیازمند امنیت، دسترسی‌پذیری و بکاپ منظم است. تیم مگان همه بخش‌های استقرار و
            عملیات را مدیریت می‌کند تا دانش تیم شما همیشه در دسترس باشد.
          </p>
        </div>
        <div className="bookstack-insight">
          <article className="bookstack-insight__card">
            <span className="bookstack-insight__label">چالش</span>
            <h3>پایداری و دسترسی امن</h3>
            <p>
              بدون تیم عملیات، مدیریت دسترسی‌ها و پایداری سرویس می‌تواند پیچیده و پرهزینه باشد.
            </p>
          </article>
          <article className="bookstack-insight__card">
            <span className="bookstack-insight__label bookstack-insight__label--solution">راه‌حل</span>
            <h3>سرویس مدیریت‌شده مگان</h3>
            <p>
              ما امنیت، مانیتورینگ ۲۴/۷ و بکاپ‌های منظم را فراهم می‌کنیم تا تیم شما بدون دغدغه مستندسازی کند.
            </p>
          </article>
        </div>
      </section>

      <section className="bookstack-section bookstack-section--surface" id="benefits">
        <div className="bookstack-section__content">
          <h2 className="bookstack-section__title">مزایای استفاده از BookStack در مگان</h2>
          <p className="bookstack-section__description">
            BookStack مدیریت‌شده مگان، دانش سازمانی را ساخت‌یافته و امن در اختیار همه تیم‌ها قرار می‌دهد.
          </p>
        </div>
        <div className="bookstack-benefits">
          {benefits.map((benefit) => (
            <div key={benefit} className="bookstack-benefits__item">
              <span className="bookstack-benefits__icon" aria-hidden="true">✔️</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bookstack-section" id="features">
        <div className="bookstack-section__content">
          <h2 className="bookstack-section__title">ویژگی‌های کلیدی BookStack مدیریت‌شده</h2>
          <p className="bookstack-section__description">
            سرویس BookStack مگان تجربه‌ای حرفه‌ای برای مستندسازی، جستجو و مدیریت دانش فراهم می‌کند.
          </p>
        </div>
        <div className="bookstack-features">
          {features.map((feature) => (
            <article key={feature.title} className="bookstack-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bookstack-section" id="pricing">
        <div className="bookstack-section__content">
          <h2 className="bookstack-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="bookstack-section__description">
            تم‌ها صرفاً برای تنوع هستند و سناریوهای استقرار همیشه ثابت باقی می‌ماند: کلود مگان، سرور شما یا میزبانی
            اختصاصی.
          </p>
          <p className="bookstack-section__note">انتخاب تم تفاوتی در امکانات یا قیمت ایجاد نمی‌کند.</p>
        </div>
        <div className="bookstack-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`bookstack-pricing__theme${theme.id === activeTheme ? ' bookstack-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
              tabIndex={theme.id === activeTheme ? 0 : -1}
              aria-controls="bookstack-pricing-panel"
            >
              <span className="bookstack-pricing__theme-icon" aria-hidden="true">
                {theme.icon}
              </span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="bookstack-pricing" id="bookstack-pricing-panel">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`bookstack-plan${activePlan === plan.id ? ' bookstack-plan--active' : ''}`}
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
              <div className="bookstack-plan__head">
                <span className="bookstack-plan__tier">{plan.tier}</span>
                <h3 className="bookstack-plan__title">{plan.title}</h3>
              </div>
              <p className="bookstack-plan__price">{plan.price}</p>
              <p className="bookstack-plan__description">{plan.description}</p>
              <div className="bookstack-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="bookstack-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="bookstack-section bookstack-section--surface" id="faq">
        <div className="bookstack-section__content">
          <h2 className="bookstack-section__title">سوالات پرتکرار</h2>
          <p className="bookstack-section__description">
            اگر سوال دیگری دارید، تیم ما آماده است تا درباره مهاجرت محتوا یا معماری BookStack با شما گفتگو کند.
          </p>
        </div>
        <div className="bookstack-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="bookstack-faq__item">
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

export default BookStackServicePage
