import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import matrixLogo from '../assets/matrix-logo.svg'

const benefits = [
  'راه‌اندازی سریع سرور Matrix با تنظیمات امنیتی، SSL و شبکه خصوصی',
  'پشتیبان‌گیری خودکار از داده‌ها و پیام‌ها با امکان بازیابی سریع',
  'ادغام با SSO و سیاست‌های دسترسی سازمانی برای تیم‌های بزرگ',
  'پشتیبانی از کلاینت‌های Element و اپ‌های موبایل و دسکتاپ',
  'مانیتورینگ ۲۴/۷ و هشداردهی لحظه‌ای توسط تیم عملیات مگان',
  'استقرار روی کلود مگان، سرور اختصاصی شما یا دیتاسنتر ثالث',
  'به‌روزرسانی کنترل‌شده نسخه‌ها و افزونه‌ها بدون Downtime',
  'پشتیبانی فارسی‌زبان برای مهاجرت و آموزش تیم‌ها',
]

const features = [
  {
    title: 'ارتباط امن و رمزنگاری‌شده',
    description:
      'پشتیبانی از رمزنگاری سرتاسری برای حفظ حریم خصوصی و امنیت مکاتبات.',
  },
  {
    title: 'فدراسیون و اتصال بین‌سازمانی',
    description:
      'اتصال امن با سرورهای دیگر و ایجاد شبکه ارتباطی بین تیم‌ها و سازمان‌ها.',
  },
  {
    title: 'مدیریت نقش‌ها و دسترسی‌ها',
    description:
      'تعریف Roleها، محدودسازی دسترسی و سیاست‌های مدیریتی پیشرفته.',
  },
  {
    title: 'پشتیبانی از Element',
    description:
      'اتصال کامل به Element Web/Desktop/Mobile برای تجربه کاربری یکپارچه.',
  },
  {
    title: 'مانیتورینگ و گزارش‌گیری',
    description:
      'داشبورد لاگ و متریک برای پایش سلامت سرور و کیفیت ارتباط.',
  },
  {
    title: 'پایداری و مقیاس‌پذیری',
    description:
      'تنظیمات HA و منابع مقیاس‌پذیر برای سرویس‌های پرترافیک.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🟩',
    plans: [
      {
        id: 'standard-megan-matrix',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۱٬۱۰۰٬۰۰۰ تومان در ماه',
        description: 'Matrix آماده با مانیتورینگ و بکاپ کامل روی کلود مگان.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned-matrix',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور سازمانی با تنظیمات امنیتی و نگهداری دوره‌ای.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated-matrix',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی و تیم عملیات ۲۴/۷.',
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
        id: 'signal-node-matrix',
        title: 'Node (نود)',
        tier: 'پلن اقتصادی',
        price: '۱٬۱۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع برای تیم‌های محصول و عملیات.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'signal-grid-matrix',
        title: 'Grid (گرید)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با کنترل دسترسی و SSO.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'signal-core-matrix',
        title: 'Core (کور)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با منابع ایزوله و پشتیبانی سازمانی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'nebula',
    label: 'Nebula',
    icon: '🌌',
    plans: [
      {
        id: 'nebula-orbit-matrix',
        title: 'Orbit (اوربیت)',
        tier: 'پلن اقتصادی',
        price: '۱٬۱۰۰٬۰۰۰ تومان در ماه',
        description: 'ارتباط امن و سریع برای تیم‌های چابک.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'nebula-pulse-matrix',
        title: 'Pulse (پالس)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با پایش و گزارش SLA.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'nebula-zenith-matrix',
        title: 'Zenith (زنیت)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی و تیم واکنش سریع.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'citadel',
    label: 'Citadel',
    icon: '🏰',
    plans: [
      {
        id: 'citadel-keep-matrix',
        title: 'Keep (کیپ)',
        tier: 'پلن اقتصادی',
        price: '۱٬۱۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع برای ارتباطات امن سازمانی.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'citadel-guard-matrix',
        title: 'Guard (گارد)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با سیاست‌های امنیتی چندلایه.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'citadel-throne-matrix',
        title: 'Throne (ترون)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۲۰۰٬۰۰۰ تومان در ماه',
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
        id: 'foundation-terminus-matrix',
        title: 'Terminus (ترمینوس)',
        tier: 'پلن اقتصادی',
        price: '۱٬۱۰۰٬۰۰۰ تومان در ماه',
        description: 'Matrix آماده برای تیم‌های همکاری و عملیات.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'foundation-trantor-matrix',
        title: 'Trantor (ترنتور)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با گزارش‌های SLA.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'foundation-vault-matrix',
        title: 'Vault (ولت)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم پشتیبانی ۲۴/۷.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'آیا Matrix برای ارتباطات سازمانی امن مناسب است؟',
    answer:
      'بله، Matrix با رمزنگاری سرتاسری و کنترل دسترسی پیشرفته برای سازمان‌ها مناسب است.',
  },
  {
    question: 'آیا امکان استفاده از Element با این سرویس وجود دارد؟',
    answer:
      'بله، Element Web/Desktop/Mobile به صورت کامل با سرور Matrix مدیریت‌شده مگان سازگار است.',
  },
  {
    question: 'زمان آماده‌سازی سرویس چقدر است؟',
    answer:
      'در صورت آماده بودن زیرساخت، سرویس Matrix معمولاً در کمتر از یک روز کاری آماده می‌شود.',
  },
  {
    question: 'چگونه مانیتورینگ و هشداردهی انجام می‌شود؟',
    answer:
      'داشبورد مانیتورینگ، هشدارهای لحظه‌ای و گزارش‌های SLA برای تمام پلن‌ها فعال است.',
  },
]

const MatrixServicePage = () => {
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
    <section className="matrix-service">
      <header className="matrix-hero">
        <div className="matrix-hero__badge">Matrix Server</div>
        <div className="matrix-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Matrix">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={matrixLogo} alt="لوگوی Matrix" />
          </div>
        </div>
        <h1 className="matrix-hero__title">Matrix مدیریت‌شده برای ارتباطات امن سازمانی</h1>
        <p className="matrix-hero__subtitle">
          با سرویس مدیریت‌شده Matrix مگان، یک پلتفرم ارتباطی امن و مقیاس‌پذیر برای تیم‌ها داشته باشید. ما زیرساخت، امنیت
          و عملیات را مدیریت می‌کنیم تا تیم شما روی همکاری تمرکز کند.
        </p>
        <div className="matrix-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="matrix-section" id="insight">
        <div className="matrix-section__content">
          <h2 className="matrix-section__title">چرا Matrix مدیریت‌شده مگان؟</h2>
          <p className="matrix-section__description">
            نگهداری سرور Matrix نیازمند امنیت، پایداری و بکاپ منظم است. تیم مگان همه بخش‌های استقرار و عملیات را مدیریت
            می‌کند تا ارتباطات شما همیشه پایدار باشد.
          </p>
        </div>
        <div className="matrix-insight">
          <article className="matrix-insight__card">
            <span className="matrix-insight__label">چالش</span>
            <h3>پایداری ارتباطات و امنیت داده</h3>
            <p>
              بدون تیم عملیات، مدیریت به‌روزرسانی‌ها، بکاپ و کنترل دسترسی‌ها می‌تواند زمان‌بر و پرریسک باشد.
            </p>
          </article>
          <article className="matrix-insight__card">
            <span className="matrix-insight__label matrix-insight__label--solution">راه‌حل</span>
            <h3>سرویس مدیریت‌شده مگان</h3>
            <p>
              ما امنیت، مانیتورینگ ۲۴/۷ و بکاپ‌های منظم را فراهم می‌کنیم تا تیم شما بدون دغدغه ارتباط برقرار کند.
            </p>
          </article>
        </div>
      </section>

      <section className="matrix-section matrix-section--surface" id="benefits">
        <div className="matrix-section__content">
          <h2 className="matrix-section__title">مزایای استفاده از Matrix در مگان</h2>
          <p className="matrix-section__description">
            Matrix مدیریت‌شده مگان، ارتباطات امن و قابل اعتماد را برای تیم‌های سازمانی فراهم می‌کند.
          </p>
        </div>
        <div className="matrix-benefits">
          {benefits.map((benefit) => (
            <div key={benefit} className="matrix-benefits__item">
              <span className="matrix-benefits__icon" aria-hidden="true">✔️</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="matrix-section" id="features">
        <div className="matrix-section__content">
          <h2 className="matrix-section__title">ویژگی‌های کلیدی Matrix مدیریت‌شده</h2>
          <p className="matrix-section__description">
            سرویس Matrix مگان تجربه‌ای امن و پایدار برای ارتباطات تیمی فراهم می‌کند.
          </p>
        </div>
        <div className="matrix-features">
          {features.map((feature) => (
            <article key={feature.title} className="matrix-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="matrix-section" id="pricing">
        <div className="matrix-section__content">
          <h2 className="matrix-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="matrix-section__description">
            تم‌ها صرفاً برای تنوع هستند و سناریوهای استقرار همیشه ثابت باقی می‌ماند: کلود مگان، سرور شما یا میزبانی
            اختصاصی.
          </p>
          <p className="matrix-section__note">انتخاب تم تفاوتی در امکانات یا قیمت ایجاد نمی‌کند.</p>
        </div>
        <div className="matrix-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`matrix-pricing__theme${theme.id === activeTheme ? ' matrix-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
              tabIndex={theme.id === activeTheme ? 0 : -1}
              aria-controls="matrix-pricing-panel"
            >
              <span className="matrix-pricing__theme-icon" aria-hidden="true">
                {theme.icon}
              </span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="matrix-pricing" id="matrix-pricing-panel">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`matrix-plan${activePlan === plan.id ? ' matrix-plan--active' : ''}`}
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
              <div className="matrix-plan__head">
                <span className="matrix-plan__tier">{plan.tier}</span>
                <h3 className="matrix-plan__title">{plan.title}</h3>
              </div>
              <p className="matrix-plan__price">{plan.price}</p>
              <p className="matrix-plan__description">{plan.description}</p>
              <div className="matrix-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="matrix-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="matrix-section matrix-section--surface" id="faq">
        <div className="matrix-section__content">
          <h2 className="matrix-section__title">سوالات پرتکرار</h2>
          <p className="matrix-section__description">
            اگر سوال دیگری دارید، تیم ما آماده است تا درباره استقرار Matrix با شما گفتگو کند.
          </p>
        </div>
        <div className="matrix-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="matrix-faq__item">
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

export default MatrixServicePage
