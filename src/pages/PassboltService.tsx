import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import passboltLogo from '../assets/passbolt-logo.svg'

const benefits = [
  'راه‌اندازی سریع Passbolt با تنظیمات امنیتی، SSL و شبکه خصوصی',
  'مدیریت امن گذرواژه‌های تیمی با اشتراک‌گذاری رمزنگاری‌شده',
  'پشتیبان‌گیری خودکار از داده‌ها و امکان بازیابی سریع',
  'یکپارچگی با LDAP/SSO و سیاست‌های دسترسی سازمانی',
  'مانیتورینگ ۲۴/۷ و هشداردهی لحظه‌ای توسط تیم عملیات مگان',
  'استقرار روی کلود مگان، سرور شما یا دیتاسنتر ثالث',
  'به‌روزرسانی کنترل‌شده نسخه‌ها بدون Downtime',
  'پشتیبانی فارسی‌زبان برای آموزش و مهاجرت تیم‌ها',
]

const features = [
  {
    title: 'اشتراک‌گذاری امن تیمی',
    description:
      'تقسیم دسترسی‌ها بین تیم‌ها با رمزنگاری سرتاسری و کنترل دقیق دسترسی.',
  },
  {
    title: 'مدیریت نقش‌ها و دسترسی‌ها',
    description:
      'تعریف Roleهای سازمانی و سیاست‌های دسترسی برای هر گروه کاری.',
  },
  {
    title: 'گزارش‌گیری و ممیزی',
    description:
      'ثبت فعالیت‌ها و گزارش‌های Audit برای پیگیری امنیتی و انطباق.',
  },
  {
    title: 'افزونه مرورگر',
    description:
      'دسترسی سریع به گذرواژه‌ها از طریق افزونه‌های مرورگر رسمی.',
  },
  {
    title: 'پایداری و بکاپ',
    description:
      'بکاپ منظم، بازیابی سریع و تنظیمات High Availability برای سرویس حیاتی.',
  },
  {
    title: 'امنیت سازمانی',
    description:
      'سخت‌سازی سرور، مدیریت کلیدها و سیاست‌های امنیتی چندلایه.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🔐',
    plans: [
      {
        id: 'standard-megan-passbolt',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۱٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'Passbolt آماده با مانیتورینگ و بکاپ کامل روی کلود مگان.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned-passbolt',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور سازمانی با تنظیمات امنیتی و نگهداری دوره‌ای.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated-passbolt',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۶۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی و تیم عملیات ۲۴/۷.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'vault',
    label: 'Vault',
    icon: '🏦',
    plans: [
      {
        id: 'vault-entry-passbolt',
        title: 'Entry (انتری)',
        tier: 'پلن اقتصادی',
        price: '۱٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع برای تیم‌های محصول و عملیات.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'vault-guard-passbolt',
        title: 'Guard (گارد)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با کنترل دسترسی و SSO.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'vault-core-passbolt',
        title: 'Core (کور)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۶۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با منابع ایزوله و پشتیبانی سازمانی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'signal',
    label: 'Signal',
    icon: '📡',
    plans: [
      {
        id: 'signal-spark-passbolt',
        title: 'Spark (اسپارک)',
        tier: 'پلن اقتصادی',
        price: '۱٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'اشتراک‌گذاری امن برای تیم‌های کوچک.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'signal-pulse-passbolt',
        title: 'Pulse (پالس)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با گزارش‌های Audit.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'signal-zenith-passbolt',
        title: 'Zenith (زنیت)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۶۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی و تیم واکنش سریع.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'citadel',
    label: 'Citadel',
    icon: '🛡️',
    plans: [
      {
        id: 'citadel-keep-passbolt',
        title: 'Keep (کیپ)',
        tier: 'پلن اقتصادی',
        price: '۱٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع برای تیم‌های امنیتی.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'citadel-guard-passbolt',
        title: 'Guard (گارد)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با سیاست‌های امنیتی چندلایه.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'citadel-throne-passbolt',
        title: 'Throne (ترون)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۶۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با پشتیبانی ۲۴/۷.',
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
        id: 'foundation-terminus-passbolt',
        title: 'Terminus (ترمینوس)',
        tier: 'پلن اقتصادی',
        price: '۱٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'Passbolt آماده برای تیم‌های همکاری و عملیات.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'foundation-trantor-passbolt',
        title: 'Trantor (ترنتور)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با گزارش‌های SLA.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'foundation-vault-passbolt',
        title: 'Vault (ولت)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۶۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم پشتیبانی ۲۴/۷.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'آیا Passbolt برای مدیریت گذرواژه‌های سازمانی مناسب است؟',
    answer:
      'بله، Passbolt با رمزنگاری سرتاسری و کنترل دسترسی برای سازمان‌ها مناسب است.',
  },
  {
    question: 'آیا امکان اتصال به LDAP یا SSO وجود دارد؟',
    answer:
      'بله، اتصال به LDAP/SSO طبق نیاز سازمانی شما پیکربندی می‌شود.',
  },
  {
    question: 'زمان آماده‌سازی سرویس چقدر است؟',
    answer:
      'در صورت آماده بودن زیرساخت، سرویس Passbolt معمولاً در کمتر از یک روز کاری آماده می‌شود.',
  },
  {
    question: 'چگونه مانیتورینگ و هشداردهی انجام می‌شود؟',
    answer:
      'داشبورد مانیتورینگ، هشدارهای لحظه‌ای و گزارش‌های SLA برای تمام پلن‌ها فعال است.',
  },
]

const PassboltServicePage = () => {
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
    <section className="passbolt-service">
      <header className="passbolt-hero">
        <div className="passbolt-hero__badge">Passbolt</div>
        <div className="passbolt-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Passbolt">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={passboltLogo} alt="لوگوی Passbolt" />
          </div>
        </div>
        <h1 className="passbolt-hero__title">Passbolt مدیریت‌شده برای مدیریت امن گذرواژه‌ها</h1>
        <p className="passbolt-hero__subtitle">
          با سرویس مدیریت‌شده Passbolt مگان، گذرواژه‌های تیمی را به صورت امن و ساخت‌یافته مدیریت کنید. ما زیرساخت، امنیت
          و عملیات را مدیریت می‌کنیم تا تیم شما روی بهره‌وری تمرکز کند.
        </p>
        <div className="passbolt-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="passbolt-section" id="insight">
        <div className="passbolt-section__content">
          <h2 className="passbolt-section__title">چرا Passbolt مدیریت‌شده مگان؟</h2>
          <p className="passbolt-section__description">
            نگهداری سرویس مدیریت گذرواژه نیازمند امنیت، بکاپ منظم و مانیتورینگ دقیق است. تیم مگان همه بخش‌های استقرار و
            عملیات را مدیریت می‌کند تا دسترسی‌های شما همیشه امن باشد.
          </p>
        </div>
        <div className="passbolt-insight">
          <article className="passbolt-insight__card">
            <span className="passbolt-insight__label">چالش</span>
            <h3>امنیت اطلاعات و مدیریت دسترسی‌ها</h3>
            <p>
              بدون تیم عملیات، مدیریت کلیدها، کنترل دسترسی و بکاپ‌ها می‌تواند زمان‌بر و پرریسک باشد.
            </p>
          </article>
          <article className="passbolt-insight__card">
            <span className="passbolt-insight__label passbolt-insight__label--solution">راه‌حل</span>
            <h3>سرویس مدیریت‌شده مگان</h3>
            <p>
              ما امنیت، مانیتورینگ ۲۴/۷ و بکاپ‌های منظم را فراهم می‌کنیم تا تیم شما بدون دغدغه همکاری کند.
            </p>
          </article>
        </div>
      </section>

      <section className="passbolt-section passbolt-section--surface" id="benefits">
        <div className="passbolt-section__content">
          <h2 className="passbolt-section__title">مزایای استفاده از Passbolt در مگان</h2>
          <p className="passbolt-section__description">
            Passbolt مدیریت‌شده مگان، امنیت دسترسی و مدیریت گذرواژه را برای تیم‌های سازمانی تضمین می‌کند.
          </p>
        </div>
        <div className="passbolt-benefits">
          {benefits.map((benefit) => (
            <div key={benefit} className="passbolt-benefits__item">
              <span className="passbolt-benefits__icon" aria-hidden="true">✔️</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="passbolt-section" id="features">
        <div className="passbolt-section__content">
          <h2 className="passbolt-section__title">ویژگی‌های کلیدی Passbolt مدیریت‌شده</h2>
          <p className="passbolt-section__description">
            سرویس Passbolt مگان تجربه‌ای امن و پایدار برای مدیریت گذرواژه فراهم می‌کند.
          </p>
        </div>
        <div className="passbolt-features">
          {features.map((feature) => (
            <article key={feature.title} className="passbolt-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="passbolt-section" id="pricing">
        <div className="passbolt-section__content">
          <h2 className="passbolt-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="passbolt-section__description">
            تم‌ها صرفاً برای تنوع هستند و سناریوهای استقرار همیشه ثابت باقی می‌ماند: کلود مگان، سرور شما یا میزبانی
            اختصاصی.
          </p>
          <p className="passbolt-section__note">انتخاب تم تفاوتی در امکانات یا قیمت ایجاد نمی‌کند.</p>
        </div>
        <div className="passbolt-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`passbolt-pricing__theme${theme.id === activeTheme ? ' passbolt-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
              tabIndex={theme.id === activeTheme ? 0 : -1}
              aria-controls="passbolt-pricing-panel"
            >
              <span className="passbolt-pricing__theme-icon" aria-hidden="true">
                {theme.icon}
              </span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="passbolt-pricing" id="passbolt-pricing-panel">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`passbolt-plan${activePlan === plan.id ? ' passbolt-plan--active' : ''}`}
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
              <div className="passbolt-plan__head">
                <span className="passbolt-plan__tier">{plan.tier}</span>
                <h3 className="passbolt-plan__title">{plan.title}</h3>
              </div>
              <p className="passbolt-plan__price">{plan.price}</p>
              <p className="passbolt-plan__description">{plan.description}</p>
              <div className="passbolt-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="passbolt-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="passbolt-section passbolt-section--surface" id="faq">
        <div className="passbolt-section__content">
          <h2 className="passbolt-section__title">سوالات پرتکرار</h2>
          <p className="passbolt-section__description">
            اگر سوال دیگری دارید، تیم ما آماده است تا درباره استقرار Passbolt با شما گفتگو کند.
          </p>
        </div>
        <div className="passbolt-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="passbolt-faq__item">
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

export default PassboltServicePage
