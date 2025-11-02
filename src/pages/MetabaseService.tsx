import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const benefits = [
  'بدون نیاز به دانش فنی برای نصب و نگهداری',
  'راه‌اندازی بسیار سریع (کمتر از چند دقیقه)',
  'امنیت و بکاپ‌گیری خودکار',
  'اتصال آسان به دیتابیس‌های مختلف (PostgreSQL, MySQL, MongoDB, …)',
  'پشتیبانی ۲۴/۷ توسط تیم مگان',
]

const features = [
  {
    title: 'داشبورد آماده',
    description: 'ساخت، شخصی‌سازی و به‌اشتراک‌گذاری داشبوردهای تعاملی تنها با چند کلیک.',
  },
  {
    title: 'مدیریت کاربران',
    description: 'تعریف نقش‌ها، سطح دسترسی، SSO و LDAP در پلن‌های پیشرفته بدون پیچیدگی.',
  },
  {
    title: 'بکاپ خودکار',
    description: 'پشتیبان‌گیری روزانه از داده‌ها و تنظیمات تا خیالتان از دسترس‌پذیری راحت باشد.',
  },
  {
    title: 'SSL و امنیت کامل',
    description: 'گواهی SSL اختصاصی، فایروال مدیریت‌شده و محدودسازی IP برای حفاظت از داده‌ها.',
  },
  {
    title: 'امکان نصب On-Premise یا Cloud',
    description: 'بر اساس نیاز شما، نصب در دیتاسنتر مگان یا زیرساخت اختصاصی سازمان انجام می‌شود.',
  },
  {
    title: 'دسترسی API',
    description: 'API کامل برای استخراج داده و خودکارسازی فرآیندهای تحلیلی.',
  },
]

const pricingPlans = [
  {
    id: 'kings-landing',
    title: "King's Landing",
    tier: 'پلن پایه',
    price: '۱,۰۰۰,۰۰۰ تومان در ماه',
    description: 'راه‌اندازی روی سرور ابری لینوکسی مگان با کمترین هزینه پیاده‌سازی.',
    infra: 'زیرساخت مگان / Self-Hosted',
    ctaLabel: 'سفارش با زیرساخت مگان',
  },
  {
    id: 'winterfell',
    title: 'Winterfell',
    tier: 'پلن حرفه‌ای',
    price: '۳,۰۰۰,۰۰۰ تومان در ماه',
    description: 'استقرار روی سرور لینوکسی شما با پیکربندی سفارشی و مانیتورینگ ۲۴/۷.',
    infra: 'سرور متعلق به مشتری',
    ctaLabel: 'سفارش برای سرور خودم',
  },
  {
    id: 'the-wall',
    title: 'The Wall',
    tier: 'پلن اینترپرایز',
    price: '۵,۰۰۰,۰۰۰ تومان در ماه',
    description: 'میزبانی اختصاصی، سلف‌هاستد کامل روی زیرساخت مگان بدون نیاز به سرور شخصی.',
    infra: 'میزبانی اختصاصی مگان',
    ctaLabel: 'درخواست مشاوره فروش',
  },
]

const faqs = [
  {
    question: 'فرآیند راه‌اندازی متابیس مدیریت‌شده مگان چقدر زمان می‌برد؟',
    answer:
      'پس از تکمیل سفارش و اتصال دیتابیس‌ها، در کمتر از چند دقیقه دسترسی به متابیس برای تیم شما فراهم می‌شود.',
  },
  {
    question: 'آیا امکان اتصال متابیس به دیتابیس‌های سازمانی ما وجود دارد؟',
    answer:
      'بله. تیم فنی ما اتصال امن به PostgreSQL، MySQL، SQL Server، MongoDB و سایر منابع داده شما را تضمین می‌کند.',
  },
  {
    question: 'بکاپ‌گیری و امنیت داده‌ها چگونه مدیریت می‌شود؟',
    answer:
      'بکاپ‌گیری روزانه، رمزنگاری ارتباطات با SSL و محدودسازی دسترسی IP به صورت پیش‌فرض فعال است و سیاست‌های امنیتی قابل سفارشی‌سازی هستند.',
  },
  {
    question: 'آیا می‌توان متابیس را به صورت On-Premise دریافت کرد؟',
    answer:
      'بله، در پلن‌های Winterfell و The Wall امکان استقرار در دیتاسنتر یا سرور اختصاصی شما با پشتیبانی کامل DevOps وجود دارد.',
  },
]

const MetabaseServicePage = () => {
  const [activePlan, setActivePlan] = useState(pricingPlans[0].id)

  return (
    <section className="metabase-service">
      <header className="metabase-hero">
        <div className="metabase-hero__badge">Analytics Platform</div>
        <div className="metabase-hero__logo" aria-hidden="true">
          <div className="metabase-hero__megan">
            <span className="metabase-hero__stripe metabase-hero__stripe--one" />
            <span className="metabase-hero__stripe metabase-hero__stripe--two" />
            <span className="metabase-hero__stripe metabase-hero__stripe--three" />
          </div>
          <span className="metabase-hero__divider" />
          <div className="metabase-hero__mark">
            <span className="metabase-hero__orb" />
            <span className="metabase-hero__title-text">Metabase</span>
          </div>
        </div>
        <h1 className="metabase-hero__title">داشبوردهای تحلیلی Metabase روی زیرساخت ابری ما</h1>
        <p className="metabase-hero__subtitle">
          راه‌اندازی و مدیریت Metabase معمولا زمان‌بر و پیچیده است. با سرویس مدیریت‌شده مگان،
          در کمتر از چند دقیقه داشبوردهای تحلیلی سازمانتان را بدون درگیری با تنظیمات فنی آماده کنید.
        </p>
        <div className="metabase-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="metabase-section">
        <div className="metabase-section__content">
          <h2 className="metabase-section__title">چرا Metabase مدیریت‌شده مگان؟</h2>
          <p className="metabase-section__description">
            راه‌اندازی Metabase از صفر برای تیم‌ها زمان‌بر است، کانفیگ سرور، امنیت، SSL و بکاپ‌گیری
            نیاز به تخصص DevOps دارد. ما زیرساخت آماده، امن و مقیاس‌پذیر ارائه می‌دهیم تا شما فقط
            روی تحلیل داده تمرکز کنید.
          </p>
          <div className="metabase-insight">
            <article className="metabase-insight__card">
              <span className="metabase-insight__label">مشکل</span>
              <h3>راه‌اندازی پیچیده و زمان‌بر</h3>
              <p>
                نصب متابیس شامل پیکربندی سرور، اتصال دیتابیس، تنظیم امنیت و بکاپ است. هر خطایی می‌تواند
                ساعت‌ها زمان تیم فنی را هدر دهد و بهره‌وری تیم تحلیل داده را پایین بیاورد.
              </p>
            </article>
            <article className="metabase-insight__card">
              <span className="metabase-insight__label metabase-insight__label--solution">راه‌حل</span>
              <h3>زیرساخت آماده و مدیریت‌شده</h3>
              <p>
                با مگان، سرویس آماده، امن و مقیاس‌پذیر در اختیار دارید. تیم DevOps ما نگهداری، مانیتورینگ و
                ارتقا را انجام می‌دهد و شما فقط داشبورد می‌سازید و تحلیل می‌کنید.
              </p>
            </article>
          </div>
          <div className="metabase-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="metabase-benefits__item">
                <span className="metabase-benefits__icon" aria-hidden="true">•</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="metabase-section">
        <h2 className="metabase-section__title">ویژگی‌ها</h2>
        <div className="metabase-features">
          {features.map(({ title, description }) => (
            <article key={title} className="metabase-feature">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="metabase-section" id="pricing">
        <h2 className="metabase-section__title">پلن‌های قیمت‌گذاری</h2>
        <p className="metabase-section__description">
          بسته مناسب خود را بر اساس زیرساختی که در اختیار دارید انتخاب کنید. همه پلن‌ها شامل پشتیبانی
          ۲۴/۷ و مانیتورینگ سلامت سرویس هستند.
        </p>
        <div className="metabase-pricing">
          {pricingPlans.map(({ id, title, tier, price, description, infra, ctaLabel }) => (
            <article
              key={id}
              className={`metabase-plan ${activePlan === id ? 'metabase-plan--active' : ''}`}
              role="button"
              tabIndex={0}
              aria-pressed={activePlan === id}
              onClick={() => setActivePlan(id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActivePlan(id)
                }
              }}
            >
              <div className="metabase-plan__head">
                <span className="metabase-plan__tier">{tier}</span>
                <h3 className="metabase-plan__title">{title}</h3>
              </div>
              <div className="metabase-plan__price">{price}</div>
              <p className="metabase-plan__description">{description}</p>
              <div className="metabase-plan__meta">{infra}</div>
              <NavLink to="/login" className="metabase-plan__cta">
                {ctaLabel}
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="metabase-section metabase-section--surface">
        <h2 className="metabase-section__title">سوالات متداول</h2>
        <div className="metabase-faq">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="metabase-faq__item">
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </section>
  )
}

export default MetabaseServicePage
