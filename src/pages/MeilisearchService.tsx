import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import meilisearchLogo from '../assets/meilisearch-logo.svg'

const benefits = [
  'راه‌اندازی سریع Meilisearch با تنظیمات امنیتی و SSL روی زیرساخت مگان',
  'پشتیبان‌گیری خودکار از ایندکس‌ها و داده‌ها با امکان بازیابی سریع',
  'پایداری و مقیاس‌پذیری برای جستجوی پرسرعت محصولات و محتوا',
  'مانیتورینگ ۲۴/۷ و هشداردهی لحظه‌ای توسط تیم عملیات مگان',
  'استقرار روی کلود مگان، سرور شما یا دیتاسنتر ثالث',
  'به‌روزرسانی کنترل‌شده نسخه‌ها بدون Downtime',
  'پشتیبانی فارسی‌زبان برای تنظیم ایندکس‌ها و بهینه‌سازی جستجو',
  'تنظیمات رتبه‌بندی و فیلترهای سفارشی برای تجربه جستجوی بهتر',
]

const features = [
  {
    title: 'جستجوی فوق سریع',
    description:
      'نتایج جستجو در چند میلی‌ثانیه با تجربه کاربری روان برای محصولات و محتوا.',
  },
  {
    title: 'فیلترها و مرتب‌سازی پیشرفته',
    description:
      'تعریف Facetها، فیلترهای چندبعدی و مرتب‌سازی پویا برای نتایج دقیق‌تر.',
  },
  {
    title: 'آپدیت لحظه‌ای ایندکس‌ها',
    description:
      'همگام‌سازی سریع داده‌ها با APIهای ساده برای به‌روزرسانی مداوم محتوا.',
  },
  {
    title: 'امنیت API',
    description:
      'مدیریت کلیدها، محدودسازی دسترسی و اتصال امن به سرویس‌های سازمانی.',
  },
  {
    title: 'مانیتورینگ و گزارش‌گیری',
    description:
      'داشبورد لاگ و متریک برای بررسی وضعیت ایندکس‌ها و سلامت سرویس.',
  },
  {
    title: 'یکپارچه‌سازی سریع',
    description:
      'سازگاری با فریم‌ورک‌های محبوب و پشتیبانی از SDKهای رسمی.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🔎',
    plans: [
      {
        id: 'standard-megan-meilisearch',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۹۰۰٬۰۰۰ تومان در ماه',
        description: 'Meilisearch آماده با مانیتورینگ و بکاپ کامل روی کلود مگان.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned-meilisearch',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور سازمانی با تنظیمات امنیتی و نگهداری دوره‌ای.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated-meilisearch',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۴٬۶۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی و تیم عملیات ۲۴/۷.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'navigator',
    label: 'Navigator',
    icon: '🧭',
    plans: [
      {
        id: 'navigator-scout-meilisearch',
        title: 'Scout (اسکات)',
        tier: 'پلن اقتصادی',
        price: '۹۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع برای تیم‌های محصول و فروش.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'navigator-orbit-meilisearch',
        title: 'Orbit (اوربیت)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با کنترل دسترسی و فیلترهای سفارشی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'navigator-horizon-meilisearch',
        title: 'Horizon (هارایزن)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۶۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با منابع ایزوله و پشتیبانی سازمانی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'pulse',
    label: 'Pulse',
    icon: '💗',
    plans: [
      {
        id: 'pulse-spark-meilisearch',
        title: 'Spark (اسپارک)',
        tier: 'پلن اقتصادی',
        price: '۹۰۰٬۰۰۰ تومان در ماه',
        description: 'جستجوی سریع برای کاتالوگ‌های متوسط.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'pulse-vibe-meilisearch',
        title: 'Vibe (وایب)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با مانیتورینگ پیشرفته.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'pulse-surge-meilisearch',
        title: 'Surge (سرج)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۶۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی و تیم واکنش سریع.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'stellar',
    label: 'Stellar',
    icon: '✨',
    plans: [
      {
        id: 'stellar-core-meilisearch',
        title: 'Core (کور)',
        tier: 'پلن اقتصادی',
        price: '۹۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع برای جستجوی سازمانی.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'stellar-prime-meilisearch',
        title: 'Prime (پرایم)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با امنیت چندلایه.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'stellar-apex-meilisearch',
        title: 'Apex (اپکس)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۶۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با منابع ایزوله و پشتیبانی ۲۴/۷.',
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
        id: 'foundation-terminus-meilisearch',
        title: 'Terminus (ترمینوس)',
        tier: 'پلن اقتصادی',
        price: '۹۰۰٬۰۰۰ تومان در ماه',
        description: 'Meilisearch آماده برای تیم‌های داده و محصول.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'foundation-trantor-meilisearch',
        title: 'Trantor (ترنتور)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با گزارش‌های SLA.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'foundation-vault-meilisearch',
        title: 'Vault (ولت)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۶۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم پشتیبانی ۲۴/۷.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'آیا Meilisearch برای جستجوی فروشگاه آنلاین مناسب است؟',
    answer:
      'بله، Meilisearch برای جستجوی سریع محصولات و فیلترهای پیشرفته طراحی شده است و در مگان بهینه‌سازی می‌شود.',
  },
  {
    question: 'آیا امکان تنظیم رتبه‌بندی و اولویت نتایج وجود دارد؟',
    answer:
      'بله، می‌توانید قوانین رتبه‌بندی و سینونیم‌ها را بر اساس نیاز کسب‌وکار تنظیم کنید.',
  },
  {
    question: 'زمان آماده‌سازی سرویس چقدر است؟',
    answer:
      'در صورت آماده بودن زیرساخت، سرویس Meilisearch معمولاً در کمتر از یک روز کاری آماده می‌شود.',
  },
  {
    question: 'چگونه مانیتورینگ و هشداردهی انجام می‌شود؟',
    answer:
      'داشبورد مانیتورینگ، هشدارهای لحظه‌ای و گزارش‌های SLA برای تمام پلن‌ها فعال است.',
  },
]

const MeilisearchServicePage = () => {
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
    <section className="meilisearch-service">
      <header className="meilisearch-hero">
        <div className="meilisearch-hero__badge">Meilisearch</div>
        <div className="meilisearch-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Meilisearch">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={meilisearchLogo} alt="لوگوی Meilisearch" />
          </div>
        </div>
        <h1 className="meilisearch-hero__title">Meilisearch مدیریت‌شده برای جستجوی فوق سریع</h1>
        <p className="meilisearch-hero__subtitle">
          با سرویس مدیریت‌شده Meilisearch مگان، جستجوی سریع و دقیق را برای محصولات و محتوا فراهم کنید. ما زیرساخت، امنیت
          و عملیات را مدیریت می‌کنیم تا تیم شما روی تجربه کاربر تمرکز کند.
        </p>
        <div className="meilisearch-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="meilisearch-section" id="insight">
        <div className="meilisearch-section__content">
          <h2 className="meilisearch-section__title">چرا Meilisearch مدیریت‌شده مگان؟</h2>
          <p className="meilisearch-section__description">
            نگهداری سرویس جستجو نیازمند تنظیمات دقیق، بکاپ منظم و مانیتورینگ لحظه‌ای است. تیم مگان همه بخش‌های استقرار و
            عملیات را مدیریت می‌کند تا جستجوی شما همیشه پایدار باشد.
          </p>
        </div>
        <div className="meilisearch-insight">
          <article className="meilisearch-insight__card">
            <span className="meilisearch-insight__label">چالش</span>
            <h3>کیفیت نتایج و پایداری سرویس</h3>
            <p>
              بدون تیم عملیات، بهینه‌سازی رتبه‌بندی و نگهداری سرویس جستجو می‌تواند زمان‌بر و پرریسک باشد.
            </p>
          </article>
          <article className="meilisearch-insight__card">
            <span className="meilisearch-insight__label meilisearch-insight__label--solution">راه‌حل</span>
            <h3>سرویس مدیریت‌شده مگان</h3>
            <p>
              ما امنیت، مانیتورینگ ۲۴/۷ و بکاپ‌های منظم را فراهم می‌کنیم تا جستجوی شما همیشه سریع و دقیق باشد.
            </p>
          </article>
        </div>
      </section>

      <section className="meilisearch-section meilisearch-section--surface" id="benefits">
        <div className="meilisearch-section__content">
          <h2 className="meilisearch-section__title">مزایای استفاده از Meilisearch در مگان</h2>
          <p className="meilisearch-section__description">
            Meilisearch مدیریت‌شده مگان، جستجوی سریع و قابل اعتماد را برای تیم‌های محصول فراهم می‌کند.
          </p>
        </div>
        <div className="meilisearch-benefits">
          {benefits.map((benefit) => (
            <div key={benefit} className="meilisearch-benefits__item">
              <span className="meilisearch-benefits__icon" aria-hidden="true">✔️</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="meilisearch-section" id="features">
        <div className="meilisearch-section__content">
          <h2 className="meilisearch-section__title">ویژگی‌های کلیدی Meilisearch مدیریت‌شده</h2>
          <p className="meilisearch-section__description">
            سرویس Meilisearch مگان تجربه‌ای سریع و دقیق برای جستجو و فیلترهای پیشرفته فراهم می‌کند.
          </p>
        </div>
        <div className="meilisearch-features">
          {features.map((feature) => (
            <article key={feature.title} className="meilisearch-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="meilisearch-section" id="pricing">
        <div className="meilisearch-section__content">
          <h2 className="meilisearch-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="meilisearch-section__description">
            تم‌ها صرفاً برای تنوع هستند و سناریوهای استقرار همیشه ثابت باقی می‌ماند: کلود مگان، سرور شما یا میزبانی
            اختصاصی.
          </p>
          <p className="meilisearch-section__note">انتخاب تم تفاوتی در امکانات یا قیمت ایجاد نمی‌کند.</p>
        </div>
        <div className="meilisearch-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`meilisearch-pricing__theme${theme.id === activeTheme ? ' meilisearch-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
              tabIndex={theme.id === activeTheme ? 0 : -1}
              aria-controls="meilisearch-pricing-panel"
            >
              <span className="meilisearch-pricing__theme-icon" aria-hidden="true">
                {theme.icon}
              </span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="meilisearch-pricing" id="meilisearch-pricing-panel">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`meilisearch-plan${activePlan === plan.id ? ' meilisearch-plan--active' : ''}`}
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
              <div className="meilisearch-plan__head">
                <span className="meilisearch-plan__tier">{plan.tier}</span>
                <h3 className="meilisearch-plan__title">{plan.title}</h3>
              </div>
              <p className="meilisearch-plan__price">{plan.price}</p>
              <p className="meilisearch-plan__description">{plan.description}</p>
              <div className="meilisearch-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="meilisearch-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="meilisearch-section meilisearch-section--surface" id="faq">
        <div className="meilisearch-section__content">
          <h2 className="meilisearch-section__title">سوالات پرتکرار</h2>
          <p className="meilisearch-section__description">
            اگر سوال دیگری دارید، تیم ما آماده است تا درباره معماری جستجو یا مهاجرت داده با شما گفتگو کند.
          </p>
        </div>
        <div className="meilisearch-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="meilisearch-faq__item">
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

export default MeilisearchServicePage
