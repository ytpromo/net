import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import excalidrawLogo from '../assets/excalidraw-logo.svg'

const benefits = [
  'راه‌اندازی سریع Excalidraw با SSL و تنظیمات امنیتی روی زیرساخت مگان',
  'تجربه وایت‌بورد همکاری با امکان اشتراک‌گذاری امن لینک‌ها',
  'پشتیبان‌گیری خودکار از داده‌ها و بوم‌های طراحی',
  'پشتیبانی از استقرار روی کلود مگان، سرور شما یا دیتاسنتر ثالث',
  'مانیتورینگ ۲۴/۷ و هشداردهی لحظه‌ای برای سرویس‌های حیاتی',
  'به‌روزرسانی کنترل‌شده نسخه‌ها بدون Downtime',
  'قابلیت یکپارچگی با SSO و سیاست‌های دسترسی سازمانی',
  'پشتیبانی فارسی‌زبان و آموزش تیم‌ها برای استفاده سریع‌تر',
]

const features = [
  {
    title: 'وایت‌بورد همکاری Real-time',
    description:
      'طراحی مشترک همزمان برای تیم‌های محصول، فنی و عملیات با همگام‌سازی لحظه‌ای.',
  },
  {
    title: 'کتابخانه شکل‌ها و اجزا',
    description:
      'ساخت سریع فلوچارت، دیاگرام معماری و وایرفریم با کتابخانه آماده.',
  },
  {
    title: 'اشتراک‌گذاری امن',
    description:
      'لینک‌های امن با دسترسی زمان‌دار و کنترل سطح دسترسی برای پروژه‌ها.',
  },
  {
    title: 'حالت ارائه و خروجی‌ها',
    description:
      'خروجی PNG/SVG، اسلاید و حالت ارائه برای جلسات آنلاین.',
  },
  {
    title: 'عملکرد پایدار',
    description:
      'بهینه‌سازی کش و شبکه برای بوم‌های بزرگ و تیم‌های پرتعداد.',
  },
  {
    title: 'امنیت و حریم خصوصی',
    description:
      'استقرار خصوصی با کنترل داده‌ها و سخت‌سازی امنیتی سمت سرور.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '✏️',
    plans: [
      {
        id: 'standard-megan-excalidraw',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۸۵۰٬۰۰۰ تومان در ماه',
        description: 'Excalidraw آماده با مانیتورینگ و بکاپ کامل روی کلود مگان.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned-excalidraw',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۷۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور سازمانی با تنظیمات امنیتی و نگهداری دوره‌ای.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated-excalidraw',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۴٬۴۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی و تیم عملیات ۲۴/۷.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'atelier',
    label: 'Atelier',
    icon: '🎨',
    plans: [
      {
        id: 'atelier-sketch-excalidraw',
        title: 'Sketch (اسکچ)',
        tier: 'پلن اقتصادی',
        price: '۸۵۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع برای تیم‌های طراحی و محصول.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'atelier-studio-excalidraw',
        title: 'Studio (استودیو)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۷۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با کنترل دسترسی تیمی و SSO.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'atelier-gallery-excalidraw',
        title: 'Gallery (گالری)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۴۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با منابع ایزوله و پشتیبانی سازمانی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'cosmos',
    label: 'Cosmos',
    icon: '🪐',
    plans: [
      {
        id: 'cosmos-orbit-excalidraw',
        title: 'Orbit (اوربیت)',
        tier: 'پلن اقتصادی',
        price: '۸۵۰٬۰۰۰ تومان در ماه',
        description: 'همکاری سریع برای جلسات ایده‌پردازی تیمی.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'cosmos-pulsar-excalidraw',
        title: 'Pulsar (پالسار)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۷۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با کنترل نسخه و بکاپ منظم.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'cosmos-supernova-excalidraw',
        title: 'Supernova (سوپرنوا)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۴۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی و تیم واکنش سریع.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'matrix',
    label: 'Matrix',
    icon: '🟣',
    plans: [
      {
        id: 'matrix-neo-excalidraw',
        title: 'Neo (نئو)',
        tier: 'پلن اقتصادی',
        price: '۸۵۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع برای تیم‌های چابک و جلسات طراحی.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'matrix-trinity-excalidraw',
        title: 'Trinity (ترینیتی)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۷۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با سیاست‌های امنیتی سازمانی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'matrix-zion-excalidraw',
        title: 'Zion (زایان)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۴۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم پشتیبانی ۲۴/۷.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'mythic',
    label: 'Mythic',
    icon: '⚡️',
    plans: [
      {
        id: 'mythic-spark-excalidraw',
        title: 'Spark (اسپارک)',
        tier: 'پلن اقتصادی',
        price: '۸۵۰٬۰۰۰ تومان در ماه',
        description: 'Excalidraw آماده برای جلسات ایده‌پردازی پرانرژی.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'mythic-flash-excalidraw',
        title: 'Flash (فلش)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۷۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با مدیریت دسترسی و گزارش‌های SLA.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'mythic-thunder-excalidraw',
        title: 'Thunder (تاندر)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۴۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با منابع ایزوله و تیم عملیات اختصاصی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'آیا Excalidraw از همکاری همزمان پشتیبانی می‌کند؟',
    answer:
      'بله، نسخه مدیریت‌شده مگان امکان همکاری همزمان با همگام‌سازی لحظه‌ای را فراهم می‌کند.',
  },
  {
    question: 'آیا امکان استقرار خصوصی و محدودسازی دسترسی وجود دارد؟',
    answer:
      'بله، می‌توان Excalidraw را در شبکه خصوصی یا با دسترسی محدود و SSO پیاده‌سازی کرد.',
  },
  {
    question: 'زمان آماده‌سازی سرویس چقدر است؟',
    answer:
      'در صورت آماده بودن زیرساخت، سرویس Excalidraw معمولاً در کمتر از یک روز کاری آماده می‌شود.',
  },
  {
    question: 'چگونه از بوم‌ها نسخه پشتیبان تهیه می‌شود؟',
    answer:
      'بکاپ‌های منظم از داده‌ها و فایل‌ها تهیه می‌شود و امکان بازیابی سریع وجود دارد.',
  },
]

const ExcalidrawServicePage = () => {
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
    <section className="excalidraw-service">
      <header className="excalidraw-hero">
        <div className="excalidraw-hero__badge">Excalidraw</div>
        <div className="excalidraw-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Excalidraw">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={excalidrawLogo} alt="لوگوی Excalidraw" />
          </div>
        </div>
        <h1 className="excalidraw-hero__title">Excalidraw مدیریت‌شده برای همکاری تصویری تیم‌ها</h1>
        <p className="excalidraw-hero__subtitle">
          با سرویس مدیریت‌شده Excalidraw مگان، بوم‌های همکاری بصری را برای جلسات طراحی، محصول و عملیات به صورت امن و
          پایدار راه‌اندازی کنید. ما زیرساخت و عملیات را مدیریت می‌کنیم تا تیم شما روی خلاقیت تمرکز کند.
        </p>
        <div className="excalidraw-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="excalidraw-section" id="insight">
        <div className="excalidraw-section__content">
          <h2 className="excalidraw-section__title">چرا Excalidraw مدیریت‌شده مگان؟</h2>
          <p className="excalidraw-section__description">
            نگهداری ابزارهای همکاری تصویری نیازمند پایداری، امنیت و بکاپ منظم است. تیم مگان همه بخش‌های استقرار و
            عملیات را مدیریت می‌کند تا بوم‌های تیمی همیشه در دسترس باشند.
          </p>
        </div>
        <div className="excalidraw-insight">
          <article className="excalidraw-insight__card">
            <span className="excalidraw-insight__label">چالش</span>
            <h3>پایداری جلسات و امنیت داده</h3>
            <p>
              بدون تیم عملیات، مدیریت دسترسی‌ها، به‌روزرسانی‌ها و بکاپ‌ها می‌تواند زمان‌بر و پرریسک باشد.
            </p>
          </article>
          <article className="excalidraw-insight__card">
            <span className="excalidraw-insight__label excalidraw-insight__label--solution">راه‌حل</span>
            <h3>سرویس مدیریت‌شده مگان</h3>
            <p>
              ما امنیت، مانیتورینگ ۲۴/۷ و بکاپ‌های منظم را فراهم می‌کنیم تا تیم شما بدون دغدغه طراحی کند.
            </p>
          </article>
        </div>
      </section>

      <section className="excalidraw-section excalidraw-section--surface" id="benefits">
        <div className="excalidraw-section__content">
          <h2 className="excalidraw-section__title">مزایای استفاده از Excalidraw در مگان</h2>
          <p className="excalidraw-section__description">
            Excalidraw مدیریت‌شده مگان، همکاری تصویری را سریع‌تر و ایمن‌تر برای تیم‌ها فراهم می‌کند.
          </p>
        </div>
        <div className="excalidraw-benefits">
          {benefits.map((benefit) => (
            <div key={benefit} className="excalidraw-benefits__item">
              <span className="excalidraw-benefits__icon" aria-hidden="true">✔️</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="excalidraw-section" id="features">
        <div className="excalidraw-section__content">
          <h2 className="excalidraw-section__title">ویژگی‌های کلیدی Excalidraw مدیریت‌شده</h2>
          <p className="excalidraw-section__description">
            سرویس Excalidraw مگان تجربه‌ای روان و امن برای طراحی‌های تیمی فراهم می‌کند.
          </p>
        </div>
        <div className="excalidraw-features">
          {features.map((feature) => (
            <article key={feature.title} className="excalidraw-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="excalidraw-section" id="pricing">
        <div className="excalidraw-section__content">
          <h2 className="excalidraw-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="excalidraw-section__description">
            تم‌ها صرفاً برای تنوع هستند و سناریوهای استقرار همیشه ثابت باقی می‌ماند: کلود مگان، سرور شما یا میزبانی
            اختصاصی.
          </p>
          <p className="excalidraw-section__note">انتخاب تم تفاوتی در امکانات یا قیمت ایجاد نمی‌کند.</p>
        </div>
        <div className="excalidraw-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`excalidraw-pricing__theme${theme.id === activeTheme ? ' excalidraw-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
              tabIndex={theme.id === activeTheme ? 0 : -1}
              aria-controls="excalidraw-pricing-panel"
            >
              <span className="excalidraw-pricing__theme-icon" aria-hidden="true">
                {theme.icon}
              </span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="excalidraw-pricing" id="excalidraw-pricing-panel">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`excalidraw-plan${activePlan === plan.id ? ' excalidraw-plan--active' : ''}`}
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
              <div className="excalidraw-plan__head">
                <span className="excalidraw-plan__tier">{plan.tier}</span>
                <h3 className="excalidraw-plan__title">{plan.title}</h3>
              </div>
              <p className="excalidraw-plan__price">{plan.price}</p>
              <p className="excalidraw-plan__description">{plan.description}</p>
              <div className="excalidraw-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="excalidraw-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="excalidraw-section excalidraw-section--surface" id="faq">
        <div className="excalidraw-section__content">
          <h2 className="excalidraw-section__title">سوالات پرتکرار</h2>
          <p className="excalidraw-section__description">
            اگر سوال دیگری دارید، تیم ما آماده است تا درباره استقرار و امنیت Excalidraw با شما گفتگو کند.
          </p>
        </div>
        <div className="excalidraw-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="excalidraw-faq__item">
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

export default ExcalidrawServicePage
