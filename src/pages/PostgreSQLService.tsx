import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import postgresLogo from '../assets/postgresql.svg'

const benefits = [
  'استقرار PostgreSQL روی زیرساخت مگان، سرور مشتری یا دیتاسنتر ثالث تنها در چند ساعت',
  'پیاده‌سازی Replica، مانیتورینگ و هشداردهی خودکار برای جلوگیری از توقف سرویس',
  'بکاپ‌گیری زمان‌بندی‌شده و تست بازیابی منظم با سیاست نگهداری قابل تنظیم',
  'امنیت سازمانی شامل رمزنگاری داده، محدودیت IP و احراز هویت چندعاملی',
  'تیونینگ پارامترها و بهینه‌سازی عملکرد برای بارهای تراکنشی و تحلیلی',
  'دسترسی به داشبورد سلامت، متریک‌های کلیدی و گزارش‌های استفاده برای تیم DBA',
  'پشتیبانی ۲۴/۷ تیم DevOps مگان برای ارتقا، مهاجرت و رفع اشکالات حیاتی',
  'مقیاس‌پذیری عمودی و افقی با افزودن Replica یا ارتقای منابع بدون توقف سرویس',
]

const features = [
  {
    title: 'استقرار چندمحیطی',
    description:
      'انتخاب بین سرورهای ابری مگان، زیرساخت اختصاصی شما یا دیتاسنتر ثالث با مدیریت یکپارچه و تحویل سریع.',
  },
  {
    title: 'High Availability و Replica',
    description:
      'پیکربندی Replica، Failover خودکار و مانیتورینگ مستمر برای اطمینان از دسترس‌پذیری دائمی دیتابیس.',
  },
  {
    title: 'امنیت و Compliance',
    description:
      'رمزنگاری در حالت سکون، فایروال لایه‌ای، محدودیت IP و ممیزی فعالیت‌ها مطابق با استانداردهای سازمانی.',
  },
  {
    title: 'Performance Tuning',
    description:
      'تیونینگ پارامترهای PostgreSQL، ایندکس‌گذاری، تحلیل Query و تنظیم منابع برای رسیدن به کارایی حداکثری.',
  },
  {
    title: 'بکاپ و Disaster Recovery',
    description:
      'بکاپ‌گیری نسخه‌ای، نگهداری چند لایه و سناریوهای بازیابی آزمایش شده برای حفاظت از داده‌های حیاتی.',
  },
  {
    title: 'مدیریت چرخه عمر',
    description:
      'اتوماسیون بروزرسانی، Patch Management، مدیریت کاربران و کنترل دسترسی با استانداردهای DevSecOps.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🛰️',
    plans: [
      {
        id: 'standard-megan-postgres',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن پایه',
        price: '۵۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب PostgreSQL روی سرورهای ابری مگان با مانیتورینگ، بکاپ و پشتیبانی کامل.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned-postgres',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور لینوکسی تهیه‌شده توسط شما با امن‌سازی و مستندسازی کامل.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated-postgres',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۲٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی روی زیرساخت مگان با SLA طلایی و مدیریت کامل عملیات.',
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
        id: 'got-kings-landing-postgres',
        title: "King's Landing (کینگز لندینگ)",
        tier: 'پلن پایه',
        price: '۵۰۰٬۰۰۰ تومان در ماه',
        description: 'تحویل سریع دیتابیس روی سرور مگان با مانیتورینگ خودکار و به‌روزرسانی منظم.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'got-winterfell-postgres',
        title: 'Winterfell (وینترفل)',
        tier: 'پلن حرفه‌ای',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور سازمانی شما با تنظیم Replica، SSL و سیاست‌های امنیتی اختصاصی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'got-the-wall-postgres',
        title: 'The Wall (دیوار)',
        tier: 'پلن اینترپرایز',
        price: '۲٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی، تیم پشتیبانی کشیک و ظرفیت‌سازی آنی.',
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
        id: 'lotr-minas-tirith-postgres',
        title: 'Minas Tirith (میناس تیریث)',
        tier: 'پلن پایه',
        price: '۵۰۰٬۰۰۰ تومان در ماه',
        description: 'PostgreSQL روی مگان با بکاپ نسخه‌ای، پایش سلامت و دسترسی امن.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-rivendell-postgres',
        title: 'Rivendell (ریوندل)',
        tier: 'پلن حرفه‌ای',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با مانیتورینگ متریک‌ها و تیونینگ Query.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-shire-postgres',
        title: 'The Shire (شایر)',
        tier: 'پلن اینترپرایز',
        price: '۲٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با Replica، سیاست‌های نگهداری داده و پشتیبانی ۲۴/۷.',
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
        id: 'witcher-novigrad-postgres',
        title: 'Novigrad (نوویگراد)',
        tier: 'پلن پایه',
        price: '۵۰۰٬۰۰۰ تومان در ماه',
        description: 'تحویل سریع روی سرور مگان با رمزنگاری، مانیتورینگ و بروزرسانی خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-oxenfurt-postgres',
        title: 'Oxenfurt (اگزن‌فورت)',
        tier: 'پلن حرفه‌ای',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با محدودسازی IP، SSO و سیاست‌های نگهداری داده سفارشی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-kaer-morhen-postgres',
        title: 'Kaer Morhen (کائر مورهن)',
        tier: 'پلن اینترپرایز',
        price: '۲٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی، تیم DBA اختصاصی و پشتیبانی مهاجرت.',
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
        id: 'vikings-kattegat-postgres',
        title: 'Kattegat (کاتگات)',
        tier: 'پلن پایه',
        price: '۵۰۰٬۰۰۰ تومان در ماه',
        description: 'دیتابیس آماده روی سرور مگان با تحویل سریع و داشبورد سلامت لحظه‌ای.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'vikings-uppsala-postgres',
        title: 'Uppsala (اوپسالا)',
        tier: 'پلن حرفه‌ای',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با مانیتورینگ Query و هشداردهی هوشمند.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'vikings-paris-postgres',
        title: 'Paris (پاریس)',
        tier: 'پلن اینترپرایز',
        price: '۲٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با High Availability، پشتیبانی ۲۴/۷ و ظرفیت‌سازی آنی.',
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
        id: 'avatar-fire-nation-postgres',
        title: 'Fire Nation Capital (پایتخت ملت آتش)',
        tier: 'پلن پایه',
        price: '۵۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور مگان با مانیتورینگ بلادرنگ و بکاپ روزانه.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'avatar-ba-sing-se-postgres',
        title: 'Ba Sing Se (با سینگ سه)',
        tier: 'پلن حرفه‌ای',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با اتوماسیون بروزرسانی و کنترل دسترسی دقیق.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'avatar-air-temple-postgres',
        title: 'Southern Air Temple (معبد هوا جنوبی)',
        tier: 'پلن اینترپرایز',
        price: '۲٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم پایش پیشگیرانه و قرارداد SLA اختصاصی.',
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
        id: 'hp-ministry-postgres',
        title: 'Ministry of Magic (وزارت جادو)',
        tier: 'پلن پایه',
        price: '۵۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی روی مگان با رمزنگاری، مانیتورینگ و گزارش‌های خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'hp-hogwarts-postgres',
        title: 'Hogwarts (هاگوارتز)',
        tier: 'پلن حرفه‌ای',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با SSO، محدودیت IP و سیاست‌های نقش محور.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'hp-hogsmeade-postgres',
        title: 'Hogsmeade (هاگزمید)',
        tier: 'پلن اینترپرایز',
        price: '۲٬۵۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی، تیم DBA اختصاصی و پشتیبانی مهاجرت.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'چقدر طول می‌کشد تا PostgreSQL مدیریت‌شده مگان آماده شود؟',
    answer:
      'پس از تکمیل سفارش و ارائه دسترسی‌ها، در کمتر از چند ساعت دیتابیس شما روی زیرساخت انتخابی آماده بهره‌برداری است.',
  },
  {
    question: 'آیا امکان مهاجرت از دیتابیس موجود به مگان وجود دارد؟',
    answer:
      'بله، تیم مگان فرآیند مهاجرت، انتقال داده و تست سلامت را مدیریت می‌کند تا بدون downtime به محیط جدید منتقل شوید.',
  },
  {
    question: 'بکاپ‌گیری و بازیابی چگونه مدیریت می‌شود؟',
    answer:
      'بکاپ نسخه‌ای، نگهداری چند لایه و تست بازیابی دوره‌ای فعال است و سیاست‌ها می‌توانند مطابق نیاز شما سفارشی شوند.',
  },
  {
    question: 'آیا می‌توان سرویس را روی سرور اختصاصی خودمان دریافت کرد؟',
    answer:
      'بله، در پلن‌های حرفه‌ای و اینترپرایز نصب روی سرور شما انجام شده و مستندات کامل و مانیتورینگ تحویل داده می‌شود.',
  },
  {
    question: 'چه اقداماتی برای امنیت داده‌ها انجام می‌شود؟',
    answer:
      'رمزنگاری، محدودیت IP، فایروال، نقش‌های مبتنی بر سطح دسترسی و ممیزی کامل فعالیت‌ها بخشی از پکیج امنیتی هستند.',
  },
  {
    question: 'آیا دسترسی به متریک‌ها و مانیتورینگ فراهم است؟',
    answer:
      'بله، داشبورد سلامت، متریک‌های Prometheus و ارسال هشدار به ابزارهای مانیتورینگ شما در همه پلن‌ها در دسترس است.',
  },
  {
    question: 'نام تم‌های قیمت‌گذاری چه معنایی دارند؟',
    answer:
      'تم‌ها صرفاً برای ایجاد تجربه سرگرم‌کننده انتخاب شده‌اند و تفاوتی در سناریوهای زیرساختی یا قیمت واقعی ایجاد نمی‌کنند.',
  },
]

const PostgreSQLServicePage = () => {
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
    <section className="postgres-service">
      <header className="postgres-hero">
        <div className="postgres-hero__badge">Enterprise Database</div>
        <div className="postgres-hero__logo hero-logo-pair" aria-label="لوگوی مگان و PostgreSQL">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" aria-hidden="true" />
          <div className="hero-logo-pair__image">
            <img src={postgresLogo} alt="لوگوی PostgreSQL" />
          </div>
        </div>
        <h1 className="postgres-hero__title">PostgreSQL مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="postgres-hero__subtitle">
          نصب و نگهداری PostgreSQL نیازمند تخصص DevOps، پایش مداوم و امن‌سازی دقیق است. تیم مگان زیرساخت آماده و
          مقیاس‌پذیر را فراهم می‌کند تا شما روی توسعه محصول و تحلیل داده تمرکز کنید.
        </p>
        <div className="postgres-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a className="button button--ghost" href="#pricing">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="postgres-section">
        <div className="postgres-section__content">
          <h2 className="postgres-section__title">چرا PostgreSQL مدیریت‌شده مگان؟</h2>
          <p className="postgres-section__description">
            راه‌اندازی PostgreSQL روی زیرساخت‌های مختلف نیازمند کانفیگ سیستم‌عامل، امنیت، مانیتورینگ و بکاپ است. ما
            همه این مراحل را خودکار کرده‌ایم تا سرویس شما بدون دغدغه عملیاتی و با قابلیت اعتماد بالا در اختیار تیم‌ها
            قرار گیرد.
          </p>
          <div className="postgres-insight">
            <article className="postgres-insight__card">
              <span className="postgres-insight__label">مشکل</span>
              <h3>پیچیدگی عملیاتی و ریسک خطای انسانی</h3>
              <p>
                تنظیم Replica، مانیتورینگ، بکاپ و سخت‌سازی امنیتی در نصب‌های سلف‌هاستد زمان‌بر است و کوچک‌ترین خطا می‌تواند
                باعث از دست رفتن داده یا توقف سرویس شود.
              </p>
            </article>
            <article className="postgres-insight__card">
              <span className="postgres-insight__label postgres-insight__label--solution">راه‌حل</span>
              <h3>زیرساخت مدیریت‌شده با SLA سازمانی</h3>
              <p>
                تیم مگان استقرار، نگهداری، مانیتورینگ و مقیاس‌پذیری PostgreSQL را بر عهده می‌گیرد و با بکاپ‌گیری و پایش
                هوشمند، پایداری سرویس را تضمین می‌کند.
              </p>
            </article>
          </div>
          <div className="postgres-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="postgres-benefits__item">
                <span className="postgres-benefits__icon" aria-hidden="true">
                  •
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="postgres-section postgres-section--surface" id="features">
        <div className="postgres-section__content">
          <h2 className="postgres-section__title">ویژگی‌های کلیدی</h2>
          <p className="postgres-section__description">
            امکانات زیرساختی و عملیاتی ما به گونه‌ای طراحی شده‌اند که دیتابیس PostgreSQL شما همیشه در دسترس، امن و
            بهینه بماند.
          </p>
        </div>
        <div className="postgres-features">
          {features.map(({ title, description }) => (
            <article key={title} className="postgres-feature">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="postgres-section" id="pricing">
        <h2 className="postgres-section__title">پلن‌های قیمت‌گذاری</h2>
        <p className="postgres-section__description">
          سه سناریوی متداول را برای استقرار PostgreSQL پوشش داده‌ایم: زیرساخت ابری مگان، سرور اختصاصی شما یا میزبانی
          اختصاصی بدون نیاز به سخت‌افزار قبلی.
        </p>
        <p className="postgres-section__note">
          می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود و با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ تم‌ها صرفاً جنبه فان دارند
          و امکانات هر سناریو یکسان است.
        </p>
        <div className="postgres-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              className={`postgres-pricing__theme${activeTheme === id ? ' postgres-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(id)}
              role="tab"
              aria-selected={activeTheme === id}
              tabIndex={activeTheme === id ? 0 : -1}
              aria-controls="postgres-pricing-panel"
            >
              <span className="postgres-pricing__theme-icon" aria-hidden="true">
                {icon}
              </span>
              {label}
            </button>
          ))}
        </div>
        <div className="postgres-pricing" id="postgres-pricing-panel">
          {currentPlans.map(({ id, title, tier, price, description, infra }) => (
            <article
              key={id}
              className={`postgres-plan${activePlan === id ? ' postgres-plan--active' : ''}`}
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
              <div className="postgres-plan__head">
                <span className="postgres-plan__tier">{tier}</span>
                <h3 className="postgres-plan__title">{title}</h3>
              </div>
              <p className="postgres-plan__price">{price}</p>
              <p className="postgres-plan__description">{description}</p>
              <div className="postgres-plan__meta">{infra}</div>
              <NavLink to="/login" className="postgres-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="postgres-section postgres-section--faq" id="faq">
        <h2 className="postgres-section__title">سوالات پرتکرار</h2>
        <div className="postgres-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="postgres-faq__item">
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

export default PostgreSQLServicePage
