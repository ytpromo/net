import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import supabaseLogo from '../assets/supabase-logo.svg'

const benefits = [
  'راه‌اندازی Supabase مدیریت‌شده با PostgreSQL امن و تنظیمات پیشنهادی عملکرد',
  'پشتیبان‌گیری خودکار از دیتابیس، استوریج و تنظیمات پروژه با قابلیت بازیابی سریع',
  'احراز هویت، مجوزدهی و Row Level Security مطابق نیازهای سازمانی',
  'APIهای آماده REST و Realtime برای اپلیکیشن‌های وب و موبایل',
  'مانیتورینگ ۲۴/۷ و هشداردهی لحظه‌ای توسط تیم عملیات مگان',
  'قابلیت استقرار روی کلود مگان، سرور اختصاصی شما یا دیتاسنتر ثالث',
  'به‌روزرسانی نسخه‌ها و افزونه‌ها به‌صورت کنترل‌شده و بدون Downtime',
  'پشتیبانی فارسی‌زبان برای مهاجرت داده و آموزش تیم فنی',
]

const features = [
  {
    title: 'PostgreSQL بهینه‌شده',
    description:
      'دیتابیس PostgreSQL با تنظیمات HA، بکاپ افزایشی و مانیتورینگ Query برای پایداری و کارایی بالا.',
  },
  {
    title: 'Realtime و Streaming',
    description:
      'سوکت‌های بلادرنگ برای همگام‌سازی داده‌ها و ارائه تجربه سریع در کلاینت‌ها.',
  },
  {
    title: 'Auth و مدیریت کاربران',
    description:
      'SSO، OAuth، Magic Link و مدیریت نقش‌ها برای کنترل دقیق دسترسی‌ها.',
  },
  {
    title: 'Storage امن',
    description:
      'فضای ذخیره‌سازی فایل با لینک امضا شده، محدودیت دسترسی و اتصال به CDN مگان.',
  },
  {
    title: 'Observability کامل',
    description:
      'داشبورد لاگ و متریک، هشداردهی و گزارش‌های SLA برای تیم فنی.',
  },
  {
    title: 'استقرار چندمحیطی',
    description:
      'راه‌اندازی محیط‌های Dev/Stage/Prod با CI/CD و ابزارهای مهاجرت داده.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🌿',
    plans: [
      {
        id: 'standard-megan-supabase',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۱٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'Supabase آماده با امنیت، مانیتورینگ و بکاپ کامل روی زیرساخت مگان.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned-supabase',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور سازمانی شما همراه با تنظیمات امنیتی و نگهداری.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated-supabase',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۶٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی و تیم عملیات ۲۴/۷.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'legend',
    label: 'Legend of Zelda',
    icon: '🗡️',
    plans: [
      {
        id: 'zelda-hyrule-supabase',
        title: 'Hyrule (هایرول)',
        tier: 'پلن اقتصادی',
        price: '۱٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان برای ساخت APIهای سریع و پایدار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'zelda-kakariko-supabase',
        title: 'Kakariko (کاکاریکو)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با کنترل دسترسی پیشرفته و تنظیمات امنیتی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'zelda-master-supabase',
        title: 'Master Sword (مستر سوورد)',
        tier: 'پلن اینترپرایز',
        price: '۶٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با منابع ایزوله و تیم DevOps اختصاصی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'totoro',
    label: 'Totoro',
    icon: '🌳',
    plans: [
      {
        id: 'totoro-forest-supabase',
        title: 'Forest (فارست)',
        tier: 'پلن اقتصادی',
        price: '۱٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع با مانیتورینگ کامل و بکاپ‌های دوره‌ای.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'totoro-catbus-supabase',
        title: 'Catbus (کت‌باس)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با دسترسی تیمی و گزارش‌های SLA.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'totoro-kusakabe-supabase',
        title: 'Kusakabe (کوساکابه)',
        tier: 'پلن اینترپرایز',
        price: '۶٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با پشتیبانی ۲۴/۷ و نگهداری پیشگیرانه.',
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
        id: 'matrix-neo-supabase',
        title: 'Neo (نئو)',
        tier: 'پلن اقتصادی',
        price: '۱٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'Supabase آماده برای تولید سریع محصولات دیجیتال.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'matrix-trinity-supabase',
        title: 'Trinity (ترینیتی)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با مانیتورینگ پیشرفته و بکاپ افزایشی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'matrix-zion-supabase',
        title: 'Zion (زایان)',
        tier: 'پلن اینترپرایز',
        price: '۶٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی و تیم واکنش سریع.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'inception',
    label: 'Inception',
    icon: '🌀',
    plans: [
      {
        id: 'inception-limbo-supabase',
        title: 'Limbo (لیمبو)',
        tier: 'پلن اقتصادی',
        price: '۱٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان با امنیت داده و RLS فعال.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'inception-ariadne-supabase',
        title: 'Ariadne (آریادنه)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۸۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با کنترل کامل شبکه و دسترسی‌ها.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'inception-totem-supabase',
        title: 'Totem (توتم)',
        tier: 'پلن اینترپرایز',
        price: '۶٬۲۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با منابع ایزوله و تیم عملیات اختصاصی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'آیا Supabase با دیتابیس‌های موجود سازمانی سازگار است؟',
    answer:
      'بله، تیم مگان می‌تواند مهاجرت داده‌ها و اتصال Supabase به PostgreSQL سازمانی را با امنیت کامل انجام دهد.',
  },
  {
    question: 'آیا امکان فعال‌سازی Realtime و Edge Functions وجود دارد؟',
    answer:
      'بله، Realtime و فانکشن‌ها بر اساس نیاز شما پیکربندی و تست می‌شوند.',
  },
  {
    question: 'چه زمانی سرویس آماده تحویل است؟',
    answer:
      'پس از آماده بودن زیرساخت، سرویس Supabase معمولاً در کمتر از یک روز کاری آماده می‌شود.',
  },
  {
    question: 'پشتیبانی و SLA چگونه ارائه می‌شود؟',
    answer:
      'تمام پلن‌ها شامل مانیتورینگ ۲۴/۷، گزارش‌های SLA و پشتیبانی فارسی‌زبان هستند.',
  },
]

const SupabaseServicePage = () => {
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
    <section className="supabase-service">
      <header className="supabase-hero">
        <div className="supabase-hero__badge">Supabase</div>
        <div className="supabase-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Supabase">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={supabaseLogo} alt="لوگوی Supabase" />
          </div>
        </div>
        <h1 className="supabase-hero__title">Supabase مدیریت‌شده برای ساخت اپلیکیشن‌های داده‌محور</h1>
        <p className="supabase-hero__subtitle">
          با سرویس مدیریت‌شده Supabase مگان، یک پلتفرم Backend سریع و امن در اختیار دارید که دیتابیس، احراز هویت و
          ذخیره‌سازی را یکپارچه ارائه می‌کند. تیم ما زیرساخت و عملیات را مدیریت می‌کند تا تیم شما روی محصول تمرکز کند.
        </p>
        <div className="supabase-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="supabase-section" id="insight">
        <div className="supabase-section__content">
          <h2 className="supabase-section__title">چرا Supabase مدیریت‌شده مگان؟</h2>
          <p className="supabase-section__description">
            Supabase یک پلتفرم قدرتمند برای ساخت Backend است، اما نگهداری آن نیازمند تخصص دیتابیس، امنیت و مقیاس‌پذیری
            است. تیم مگان همه این موارد را مدیریت می‌کند تا شما با سرعت بیشتری محصول بسازید.
          </p>
        </div>
        <div className="supabase-insight">
          <article className="supabase-insight__card">
            <span className="supabase-insight__label">چالش</span>
            <h3>مدیریت زیرساخت و امنیت داده</h3>
            <p>
              نگهداری PostgreSQL، تنظیمات RLS و بکاپ‌های منظم می‌تواند پیچیده باشد و تیم شما را از توسعه محصول دور کند.
            </p>
          </article>
          <article className="supabase-insight__card">
            <span className="supabase-insight__label supabase-insight__label--solution">راه‌حل</span>
            <h3>سرویس مدیریت‌شده مگان</h3>
            <p>
              ما زیرساخت امن، مانیتورینگ ۲۴/۷ و به‌روزرسانی‌های کنترل‌شده را ارائه می‌کنیم تا شما با خیال راحت توسعه دهید.
            </p>
          </article>
        </div>
      </section>

      <section className="supabase-section supabase-section--surface" id="benefits">
        <div className="supabase-section__content">
          <h2 className="supabase-section__title">مزایای استفاده از Supabase در مگان</h2>
          <p className="supabase-section__description">
            ترکیب Supabase با عملیات مگان به شما امکان می‌دهد سریع‌تر محصول بسازید و از امنیت داده‌ها مطمئن باشید.
          </p>
        </div>
        <div className="supabase-benefits">
          {benefits.map((benefit) => (
            <div key={benefit} className="supabase-benefits__item">
              <span className="supabase-benefits__icon" aria-hidden="true">✔️</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="supabase-section" id="features">
        <div className="supabase-section__content">
          <h2 className="supabase-section__title">ویژگی‌های کلیدی Supabase مدیریت‌شده</h2>
          <p className="supabase-section__description">
            سرویس Supabase مگان با تمرکز بر امنیت، کارایی و توسعه سریع طراحی شده است.
          </p>
        </div>
        <div className="supabase-features">
          {features.map((feature) => (
            <article key={feature.title} className="supabase-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="supabase-section" id="pricing">
        <div className="supabase-section__content">
          <h2 className="supabase-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="supabase-section__description">
            تم‌ها صرفاً برای تنوع هستند و سناریوهای استقرار همیشه ثابت باقی می‌ماند: کلود مگان، سرور شما یا میزبانی
            اختصاصی.
          </p>
          <p className="supabase-section__note">
            انتخاب تم تفاوتی در امکانات یا قیمت ایجاد نمی‌کند.
          </p>
        </div>
        <div className="supabase-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`supabase-pricing__theme${theme.id === activeTheme ? ' supabase-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
              tabIndex={theme.id === activeTheme ? 0 : -1}
              aria-controls="supabase-pricing-panel"
            >
              <span className="supabase-pricing__theme-icon" aria-hidden="true">
                {theme.icon}
              </span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="supabase-pricing" id="supabase-pricing-panel">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`supabase-plan${activePlan === plan.id ? ' supabase-plan--active' : ''}`}
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
              <div className="supabase-plan__head">
                <span className="supabase-plan__tier">{plan.tier}</span>
                <h3 className="supabase-plan__title">{plan.title}</h3>
              </div>
              <p className="supabase-plan__price">{plan.price}</p>
              <p className="supabase-plan__description">{plan.description}</p>
              <div className="supabase-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="supabase-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="supabase-section supabase-section--surface" id="faq">
        <div className="supabase-section__content">
          <h2 className="supabase-section__title">سوالات پرتکرار</h2>
          <p className="supabase-section__description">
            اگر سوال دیگری دارید، تیم ما آماده است تا درباره مهاجرت داده یا معماری Supabase شما گفتگو کند.
          </p>
        </div>
        <div className="supabase-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="supabase-faq__item">
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

export default SupabaseServicePage
