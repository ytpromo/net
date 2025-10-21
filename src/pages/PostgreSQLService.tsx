import { NavLink } from 'react-router-dom'

const featureHighlights = [
  {
    title: 'استقرار روی هر زیرساختی',
    description:
      'مگان PostgreSQL را روی سرور ابری مگان، زیرساخت ابری شما یا دیتاسنتر دلخواه‌تان پیکربندی و مانیتور می‌کند.',
  },
  {
    title: 'پایش و پشتیبان‌گیری مداوم',
    description:
      'بک‌آپ‌گیری زمان‌بندی‌شده، مانیتورینگ سلامت نود و آلارم‌های هوشمند خیال تیم شما را از دسترس‌پذیری راحت می‌کند.',
  },
  {
    title: 'امنیت سازمانی و بهینه‌سازی عملکرد',
    description:
      'رمزنگاری در حالت سکون، سخت‌سازی سطح سیستم‌عامل و تیونینگ پارامترها برای بارهای کاری پرتراکنش.',
  },
]

const pricingPlans = [
  {
    title: 'نصب روی سرور ابری مگان',
    price: '۵۰۰,۰۰۰ تومان',
    subtitle: 'مناسب برای مشتریانی که سرور ابری لینوکسی از مگان تهیه کرده‌اند.',
  },
  {
    title: 'نصب روی سرور مشتری',
    price: '۱,۰۰۰,۰۰۰ تومان',
    subtitle: 'راه‌اندازی روی سرور لینوکسی شما در هر دیتاسنتری که میزبانی می‌شود.',
  },
  {
    title: 'میزبانی اختصاصی روی مگان',
    price: '۲,۵۰۰,۰۰۰ تومان در ماه',
    subtitle: 'سرویس تمام‌مدیریت‌شده روی سرورهای اختصاصی مگان بدون نیاز به زیرساخت شخصی.',
  },
]

const PostgreSQLServicePage = () => {
  return (
    <section className="postgres-service">
      <header className="postgres-hero">
        <div className="postgres-hero__badge">Enterprise Database</div>
        <div className="postgres-hero__logo">
          <div className="postgres-hero__logo-mark" aria-hidden="true">
            <span className="postgres-hero__stripe postgres-hero__stripe--one" />
            <span className="postgres-hero__stripe postgres-hero__stripe--two" />
            <span className="postgres-hero__stripe postgres-hero__stripe--three" />
          </div>
          <div className="postgres-hero__divider" aria-hidden="true" />
          <div className="postgres-hero__pg">
            <span className="postgres-hero__pg-circle" aria-hidden="true">
              <span className="postgres-hero__pg-eye postgres-hero__pg-eye--left" />
              <span className="postgres-hero__pg-eye postgres-hero__pg-eye--right" />
            </span>
            <span className="postgres-hero__pg-title">PostgreSQL</span>
          </div>
        </div>
        <h1 className="postgres-hero__title">PostgreSQL مدیریت‌شده توسط مگان</h1>
        <p className="postgres-hero__subtitle">
          استقرار، مانیتورینگ و نگهداری PostgreSQL با تخصص تیم مگان؛ آماده برای بارهای اینترپرایز،
          بدون دغدغه زیرساخت یا عملیات تکراری DevOps.
        </p>
        <div className="postgres-hero__actions">
          <a className="button button--secondary" href="#pricing">
            قیمت‌گذاری
          </a>
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
        </div>
      </header>

      <section className="postgres-section">
        <h2 className="postgres-section__title">ویژگی‌های کلیدی سرویس</h2>
        <div className="postgres-features">
          {featureHighlights.map(({ title, description }) => (
            <article key={title} className="postgres-feature">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="postgres-section" id="pricing">
        <h2 className="postgres-section__title">قیمت‌گذاری منعطف برای هر سناریو</h2>
        <div className="postgres-pricing">
          {pricingPlans.map(({ title, price, subtitle }) => (
            <article key={title} className="postgres-plan">
              <div className="postgres-plan__header">
                <h3>{title}</h3>
                <span className="postgres-plan__price">{price}</span>
              </div>
              <p className="postgres-plan__subtitle">{subtitle}</p>
              <button type="button" className="postgres-plan__cta">
                سفارش دهید
              </button>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default PostgreSQLServicePage
