import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'

const benefits = [
  'بدون نیاز به دانش فنی برای نصب و نگهداری',
  'راه‌اندازی بسیار سریع (کمتر از چند دقیقه)',
  'امنیت و بکاپ‌گیری خودکار',
  'اتصال آسان به دیتابیس‌های مختلف (PostgreSQL, MySQL, MongoDB, …)',
  'پشتیبانی ۲۴/۷ توسط تیم مگان',
  'مانیتورینگ سلامت سرویس و هشداردهی هوشمند',
  'دسترسی مبتنی بر نقش و لاگ کامل فعالیت‌ها',
  'امکان شخصی‌سازی برندینگ، دامنه و احراز هویت',
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

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '✨',
    plans: [
      {
        id: 'standard-megan',
        title: 'نسخه ابری مگان',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی روی سرور ابری لینوکسی مگان با کمترین هزینه پیاده‌سازی و نگهداری.',
        infra: 'زیرساخت مگان / Self-Hosted',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار بر روی سرور لینوکسی خریداری‌شده توسط شما با پیکربندی سفارشی.',
        infra: 'سرور متعلق به مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سازمانی',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'سلف‌هاستد اختصاصی روی زیرساخت مگان بدون نیاز به سرور شخصی با SLA سازمانی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'game-of-thrones',
    label: 'Game of Thrones',
    icon: '🐉',
    plans: [
      {
        id: 'got-kings-landing',
        title: "King's Landing (کینگز لندینگ)",
        tier: 'گارانتی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی روی سرور ابری لینوکسی مگان با کمترین هزینه پیاده‌سازی.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'got-winterfell',
        title: 'Winterfell (وینترفل)',
        tier: 'متوسط',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور لینوکسی شما با پشتیبانی و مانیتورینگ ۲۴/۷.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'got-the-wall',
        title: 'The Wall (دیوار)',
        tier: 'اورژانسی',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی، سلف‌هاستد کامل روی زیرساخت مگان بدون نیاز به سرور شخصی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'lotr',
    label: 'The Lord of the Rings',
    icon: '💍',
    plans: [
      {
        id: 'lotr-minas-tirith',
        title: 'Minas Tirith (میناس تیریث)',
        tier: 'گارانتی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی بر روی سرور ابری مگان با بکاپ‌گیری و امنیت مدیریت‌شده.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-rivendell',
        title: 'Rivendell (ریوندل)',
        tier: 'متوسط',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور لینوکسی سازمان شما با تیم DevOps همراه.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-shire',
        title: 'The Shire (شایر)',
        tier: 'اورژانسی',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی و آماده با پشتیبانی ۲۴/۷ برای تیم‌های بزرگ.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'witcher',
    label: 'The Witcher',
    icon: '🗡️',
    plans: [
      {
        id: 'witcher-novigrad',
        title: 'Novigrad (نوویگراد)',
        tier: 'گارانتی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی سرور ابری مگان با پیکربندی کاملاً خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-oxenfurt',
        title: 'Oxenfurt (اگزن‌فورت)',
        tier: 'متوسط',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور اختصاصی شما با مانیتورینگ و نگهداری کامل.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-kaer-morhen',
        title: 'Kaer Morhen (کائر مورهن)',
        tier: 'اورژانسی',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی، پایدار و امن روی زیرساخت مگان با SLA پیشرفته.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'vikings',
    label: 'Vikings',
    icon: '⚔️',
    plans: [
      {
        id: 'vikings-kattegat',
        title: 'Kattegat (کاتگات)',
        tier: 'گارانتی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع و اقتصادی روی سرورهای ابری مگان.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'vikings-uppsala',
        title: 'Uppsala (اوپسالا)',
        tier: 'متوسط',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شخصی شما با آموزش و تحویل مستندات.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'vikings-paris',
        title: 'Paris (پاریس)',
        tier: 'اورژانسی',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی روی زیرساخت مگان با دسترسی کاملاً مدیریت‌شده.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'avatar',
    label: 'Avatar',
    icon: '🌊',
    plans: [
      {
        id: 'avatar-fire-nation',
        title: 'Fire Nation Capital (پایتخت ملت آتش)',
        tier: 'گارانتی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی کامل روی سرور ابری مگان با نظارت مستمر.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'avatar-ba-sing-se',
        title: 'Ba Sing Se (با سینگ سه)',
        tier: 'متوسط',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با پشتیبانی فنی شبانه‌روزی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'avatar-air-temple',
        title: 'Southern Air Temple (معبد هوا جنوبی)',
        tier: 'اورژانسی',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با مقیاس‌پذیری بالا برای تیم‌های تحلیلی بزرگ.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'harry-potter',
    label: 'Harry Potter',
    icon: '🪄',
    plans: [
      {
        id: 'hp-ministry',
        title: 'Ministry of Magic (وزارت جادو)',
        tier: 'گارانتی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی سرور ابری مگان با حداقل پیچیدگی.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'hp-hogwarts',
        title: 'Hogwarts (هاگوارتز)',
        tier: 'متوسط',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با تنظیمات امنیتی پیشرفته.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'hp-hogsmeade',
        title: 'Hogsmeade (هاگزمید)',
        tier: 'اورژانسی',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی روی زیرساخت مگان با SLA طلایی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
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
  const [activeTheme, setActiveTheme] = useState(pricingThemes[0].id)
  const [activePlan, setActivePlan] = useState(pricingThemes[0].plans[0].id)

  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId)
    const theme = pricingThemes.find((item) => item.id === themeId)
    if (theme) {
      setActivePlan(theme.plans[0].id)
    }
  }

  const currentTheme = pricingThemes.find((theme) => theme.id === activeTheme) ?? pricingThemes[0]
  const currentPlans = currentTheme.plans

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
        <p className="metabase-section__note">
          می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود و با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ تم‌های قیمتی
          تنها جنبه فان دارند و امکانات هر سناریو یکسان است.
        </p>
        <div className="metabase-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              className={`metabase-pricing__theme ${activeTheme === id ? 'metabase-pricing__theme--active' : ''}`}
              aria-selected={activeTheme === id}
              tabIndex={activeTheme === id ? 0 : -1}
              aria-controls="metabase-pricing-panel"
              onClick={() => handleThemeChange(id)}
            >
              <span className="metabase-pricing__theme-icon" aria-hidden="true">
                {icon}
              </span>
              {label}
            </button>
          ))}
        </div>
        <div className="metabase-pricing" id="metabase-pricing-panel">
          {currentPlans.map(({ id, title, tier, price, description, infra }) => (
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
                سفارش دهید
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
      <LandingFooter />
    </section>
  )
}

export default MetabaseServicePage
