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
    title: 'King\'s Landing',
    tier: 'پلن پایه',
    price: '۱,۰۰۰,۰۰۰ تومان در ماه',
    description: 'راه‌اندازی روی سرور ابری لینوکسی مگان با کمترین هزینه پیاده‌سازی.',
  },
  {
    title: 'Winterfell',
    tier: 'پلن حرفه‌ای',
    price: '۳,۰۰۰,۰۰۰ تومان در ماه',
    description: 'استقرار روی سرور لینوکسی شما با پیکربندی سفارشی و مانیتورینگ ۲۴/۷.',
  },
  {
    title: 'The Wall',
    tier: 'پلن اینترپرایز',
    price: '۵,۰۰۰,۰۰۰ تومان در ماه',
    description: 'میزبانی اختصاصی، سلف‌هاستد کامل روی زیرساخت مگان بدون نیاز به سرور شخصی.',
  },
]

const MetabaseServicePage = () => {
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
          {pricingPlans.map(({ title, tier, price, description }) => (
            <article key={title} className="metabase-plan">
              <div className="metabase-plan__head">
                <span className="metabase-plan__tier">{tier}</span>
                <h3 className="metabase-plan__title">{title}</h3>
              </div>
              <div className="metabase-plan__price">{price}</div>
              <p className="metabase-plan__description">{description}</p>
              <button type="button" className="metabase-plan__cta">
                سفارش دهید
              </button>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default MetabaseServicePage
