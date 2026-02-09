import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import uptimeKumaLogo from '../assets/uptime-kuma-logo.svg'

const benefits = [
  'راه‌اندازی سریع Uptime Kuma روی زیرساخت مگان با SSL و شبکه خصوصی آماده',
  'پایش وضعیت سرویس‌ها با اعلان‌های لحظه‌ای در تلگرام، ایمیل و وب‌هوک',
  'داشبوردهای وضعیت سفارشی برای تیم‌های عملیات و مشتریان سازمانی',
  'نگهداری و به‌روزرسانی خودکار نسخه‌های Uptime Kuma بدون Downtime',
  'پشتیبان‌گیری منظم از تنظیمات مانیتورها و داده‌های رخدادها',
  'استقرار روی کلود مگان، سرور سازمانی یا دیتاسنتر ثالث بر اساس نیاز شما',
  'مانیتورینگ ۲۴/۷ و گزارش‌های SLA برای سرویس‌های حیاتی',
  'پشتیبانی فارسی‌زبان و آموزش تیم عملیات برای استفاده بهینه',
]

const features = [
  {
    title: 'مانیتورینگ Multi-Protocol',
    description:
      'پشتیبانی از HTTP(S)، TCP، Ping، DNS و سرویس‌های سفارشی برای پوشش کامل زیرساخت.',
  },
  {
    title: 'هشداردهی پیشرفته',
    description:
      'اتصال به Slack، Telegram، Email و Webhook با سناریوهای Escalation متناسب با تیم شما.',
  },
  {
    title: 'Status Page برندینگ‌شده',
    description:
      'ساخت صفحات وضعیت عمومی یا خصوصی با لوگو، رنگ و SLA اختصاصی.',
  },
  {
    title: 'مانیتورینگ توزیع‌شده',
    description:
      'راه‌اندازی چند نود مانیتورینگ برای کاهش خطاهای false positive و افزایش دقت.',
  },
  {
    title: 'گزارش‌های SLA و رخداد',
    description:
      'دریافت گزارش ماهانه از آپتایم سرویس‌ها و علت رخدادها برای تصمیم‌گیری سریع.',
  },
  {
    title: 'امنیت و دسترسی تیمی',
    description:
      'مدیریت نقش‌ها و دسترسی‌ها با احراز هویت سازمانی و کنترل دقیق فعالیت‌ها.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '✅',
    plans: [
      {
        id: 'standard-megan-uptime',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۶۵۰٬۰۰۰ تومان در ماه',
        description: 'Uptime Kuma آماده با مانیتورینگ، بکاپ و هشداردهی کامل روی کلود مگان.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned-uptime',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور سازمانی شما همراه با کانفیگ امنیتی و پایش مداوم.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated-uptime',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۳٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی و تیم عملیات ۲۴/۷ برای سرویس‌های حساس.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'sherlock',
    label: 'Sherlock',
    icon: '🕵️',
    plans: [
      {
        id: 'sherlock-baker-uptime',
        title: 'Baker Street (بیکر استریت)',
        tier: 'پلن اقتصادی',
        price: '۶۵۰٬۰۰۰ تومان در ماه',
        description: 'پایش دقیق سرویس‌ها با اعلان‌های فوری برای تیم‌های چابک.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'sherlock-scotland-uptime',
        title: 'Scotland Yard (اسکاتلند یارد)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با سناریوهای هشداردهی چندمرحله‌ای.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'sherlock-reichenbach-uptime',
        title: 'Reichenbach (رایشنباخ)',
        tier: 'پلن اینترپرایز',
        price: '۳٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم واکنش سریع برای رخدادهای حیاتی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'mission',
    label: 'Mission Control',
    icon: '🛰️',
    plans: [
      {
        id: 'mission-apollo-uptime',
        title: 'Apollo (آپولو)',
        tier: 'پلن اقتصادی',
        price: '۶۵۰٬۰۰۰ تومان در ماه',
        description: 'نظارت بی‌وقفه بر سرویس‌ها با داشبورد وضعیت آماده.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'mission-orion-uptime',
        title: 'Orion (اوراین)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما همراه با گزارش‌های SLA و بکاپ دوره‌ای.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'mission-voyager-uptime',
        title: 'Voyager (ویجر)',
        tier: 'پلن اینترپرایز',
        price: '۳٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با نودهای مانیتورینگ توزیع‌شده.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'hacker',
    label: 'Hacker Mode',
    icon: '💻',
    plans: [
      {
        id: 'hacker-tmux-uptime',
        title: 'Tmux (تیماکس)',
        tier: 'پلن اقتصادی',
        price: '۶۵۰٬۰۰۰ تومان در ماه',
        description: 'پایش سریع سرویس‌ها با اعلان‌های سبک برای استارتاپ‌ها.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'hacker-kitty-uptime',
        title: 'Kitty (کیتی)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با کنترل دسترسی تیمی و هشداردهی دقیق.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'hacker-arch-uptime',
        title: 'Arch (آرچ)',
        tier: 'پلن اینترپرایز',
        price: '۳٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی برای مانیتورینگ سرویس‌های حیاتی سازمانی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'matrix',
    label: 'Matrix',
    icon: '🟢',
    plans: [
      {
        id: 'matrix-sentinel-uptime',
        title: 'Sentinel (سنتینل)',
        tier: 'پلن اقتصادی',
        price: '۶۵۰٬۰۰۰ تومان در ماه',
        description: 'Uptime Kuma آماده برای پایش سریع و مداوم سرویس‌ها.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'matrix-operator-uptime',
        title: 'Operator (اپراتور)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با سناریوهای هشداردهی قابل سفارشی‌سازی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'matrix-zion-uptime',
        title: 'Zion (زایان)',
        tier: 'پلن اینترپرایز',
        price: '۳٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم پشتیبانی ۲۴/۷ و SLA سازمانی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'آیا می‌توان مانیتورها را از Uptime Kuma فعلی مهاجرت داد؟',
    answer:
      'بله، تیم مگان مهاجرت تنظیمات و مانیتورها را انجام می‌دهد و صحت اعلان‌ها را قبل از تحویل تست می‌کند.',
  },
  {
    question: 'چه کانال‌های اعلان پشتیبانی می‌شود؟',
    answer:
      'تلگرام، ایمیل، Slack، Webhook و هر کانال سفارشی که سازمان شما نیاز داشته باشد قابل پیکربندی است.',
  },
  {
    question: 'آیا امکان ساخت Status Page عمومی وجود دارد؟',
    answer:
      'بله، می‌توانید صفحات وضعیت عمومی یا خصوصی با برندینگ اختصاصی و دسترسی محدود ایجاد کنید.',
  },
  {
    question: 'زمان تحویل سرویس چقدر است؟',
    answer:
      'پس از تایید زیرساخت، سرویس Uptime Kuma معمولاً در کمتر از یک روز کاری آماده می‌شود.',
  },
]

const UptimeKumaServicePage = () => {
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
    <section className="uptime-kuma-service">
      <header className="uptime-kuma-hero">
        <div className="uptime-kuma-hero__badge">Uptime Kuma</div>
        <div className="uptime-kuma-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Uptime Kuma">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={uptimeKumaLogo} alt="لوگوی Uptime Kuma" />
          </div>
        </div>
        <h1 className="uptime-kuma-hero__title">Uptime Kuma مدیریت‌شده برای پایش مداوم سرویس‌ها</h1>
        <p className="uptime-kuma-hero__subtitle">
          با سرویس مدیریت‌شده Uptime Kuma مگان، وضعیت سرویس‌های حیاتی خود را به صورت لحظه‌ای رصد کنید، هشدارهای دقیق
          دریافت کنید و گزارش‌های SLA حرفه‌ای داشته باشید. ما زیرساخت و عملیات را مدیریت می‌کنیم تا تیم شما روی بهبود
          محصول تمرکز کند.
        </p>
        <div className="uptime-kuma-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="uptime-kuma-section" id="insight">
        <div className="uptime-kuma-section__content">
          <h2 className="uptime-kuma-section__title">چرا Uptime Kuma مدیریت‌شده مگان؟</h2>
          <p className="uptime-kuma-section__description">
            نگهداری سرویس مانیتورینگ نیازمند پایداری، هشداردهی دقیق و بکاپ منظم است. تیم مگان با پیاده‌سازی امن و
            مانیتورینگ ۲۴/۷، خیال شما را از سلامت سرویس‌ها راحت می‌کند.
          </p>
        </div>
        <div className="uptime-kuma-insight">
          <article className="uptime-kuma-insight__card">
            <span className="uptime-kuma-insight__label">چالش</span>
            <h3>هشداردهی ناپایدار و عملیات زمان‌بر</h3>
            <p>
              بدون تیم عملیات حرفه‌ای، مدیریت اعلان‌ها و جلوگیری از هشدارهای اشتباه می‌تواند باعث خستگی تیم و کاهش دقت شود.
            </p>
          </article>
          <article className="uptime-kuma-insight__card">
            <span className="uptime-kuma-insight__label uptime-kuma-insight__label--solution">راه‌حل</span>
            <h3>عملیات مدیریت‌شده مگان</h3>
            <p>
              ما پیکربندی صحیح مانیتورها، پایش توزیع‌شده و گزارش‌های SLA را ارائه می‌کنیم تا تیم شما همیشه آماده باشد.
            </p>
          </article>
        </div>
      </section>

      <section className="uptime-kuma-section uptime-kuma-section--surface" id="benefits">
        <div className="uptime-kuma-section__content">
          <h2 className="uptime-kuma-section__title">مزایای استفاده از Uptime Kuma در مگان</h2>
          <p className="uptime-kuma-section__description">
            ترکیب Uptime Kuma با زیرساخت مگان به شما امکان می‌دهد سرویس‌های خود را با خیال راحت و اعلان‌های دقیق مدیریت
            کنید.
          </p>
        </div>
        <div className="uptime-kuma-benefits">
          {benefits.map((benefit) => (
            <div key={benefit} className="uptime-kuma-benefits__item">
              <span className="uptime-kuma-benefits__icon" aria-hidden="true">✔️</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="uptime-kuma-section" id="features">
        <div className="uptime-kuma-section__content">
          <h2 className="uptime-kuma-section__title">ویژگی‌های کلیدی Uptime Kuma مدیریت‌شده</h2>
          <p className="uptime-kuma-section__description">
            سرویس Uptime Kuma مگان تجربه‌ای حرفه‌ای از مانیتورینگ، هشداردهی و گزارش‌گیری را برای تیم‌های فنی فراهم می‌کند.
          </p>
        </div>
        <div className="uptime-kuma-features">
          {features.map((feature) => (
            <article key={feature.title} className="uptime-kuma-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="uptime-kuma-section" id="pricing">
        <div className="uptime-kuma-section__content">
          <h2 className="uptime-kuma-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="uptime-kuma-section__description">
            تم‌ها صرفاً برای تنوع هستند و سناریوهای استقرار همیشه ثابت باقی می‌ماند: کلود مگان، سرور شما یا میزبانی
            اختصاصی.
          </p>
          <p className="uptime-kuma-section__note">
            انتخاب تم تفاوتی در امکانات یا قیمت ایجاد نمی‌کند.
          </p>
        </div>
        <div className="uptime-kuma-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`uptime-kuma-pricing__theme${theme.id === activeTheme ? ' uptime-kuma-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
              tabIndex={theme.id === activeTheme ? 0 : -1}
              aria-controls="uptime-kuma-pricing-panel"
            >
              <span className="uptime-kuma-pricing__theme-icon" aria-hidden="true">
                {theme.icon}
              </span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="uptime-kuma-pricing" id="uptime-kuma-pricing-panel">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`uptime-kuma-plan${activePlan === plan.id ? ' uptime-kuma-plan--active' : ''}`}
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
              <div className="uptime-kuma-plan__head">
                <span className="uptime-kuma-plan__tier">{plan.tier}</span>
                <h3 className="uptime-kuma-plan__title">{plan.title}</h3>
              </div>
              <p className="uptime-kuma-plan__price">{plan.price}</p>
              <p className="uptime-kuma-plan__description">{plan.description}</p>
              <div className="uptime-kuma-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="uptime-kuma-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="uptime-kuma-section uptime-kuma-section--surface" id="faq">
        <div className="uptime-kuma-section__content">
          <h2 className="uptime-kuma-section__title">سوالات پرتکرار</h2>
          <p className="uptime-kuma-section__description">
            برای اطلاعات بیشتر درباره مانیتورینگ، مهاجرت یا گزارش‌گیری SLA با تیم ما در تماس باشید.
          </p>
        </div>
        <div className="uptime-kuma-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="uptime-kuma-faq__item">
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

export default UptimeKumaServicePage
