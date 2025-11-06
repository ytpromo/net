import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import phpMyAdminLogo from '../assets/phpmyadmin-logo.svg'

const benefits = [
  'راه‌اندازی آماده برای MySQL و MariaDB تنها در چند دقیقه',
  'پیکربندی کامل کاربران، نقش‌ها و دسترسی‌ها با امنیت بالا',
  'بکاپ‌گیری خودکار و تست بازیابی دوره‌ای برای آسودگی خاطر',
  'مانیتورینگ سلامت سرویس و هشداردهی هوشمند برای تیم فنی',
  'امکان استقرار روی سرورهای ابری مگان یا زیرساخت فعلی سازمان شما',
  'بهینه‌سازی عملکرد و تنظیمات PHP توسط تیم متخصص مگان',
  'مدیریت نسخه‌های PHP و افزونه‌ها بدون نگرانی از ناسازگاری',
  'پشتیبانی ۲۴/۷ و مشاوره برای بهینه‌سازی دیتابیس‌های پرترافیک',
]

const features = [
  {
    title: 'مدیریت چندین دیتابیس در یک پنل',
    description:
      'اتصال همزمان به چند سرور MySQL و MariaDB و مدیریت جداول، کاربران و کوئری‌ها از یک محیط امن.',
  },
  {
    title: 'دسترسی مبتنی بر نقش و احراز هویت امن',
    description:
      'تعریف نقش‌های مختلف، فعال‌سازی احراز هویت دومرحله‌ای و محدود کردن دسترسی IP برای تیم‌های مختلف.',
  },
  {
    title: 'بکاپ‌گیری و بازیابی خودکار',
    description:
      'زمان‌بندی بکاپ روزانه، ذخیره‌سازی رمزنگاری شده و بازیابی سریع در صورت بروز خطا یا حذف ناخواسته.',
  },
  {
    title: 'گزارش‌گیری و لاگ کامل فعالیت‌ها',
    description:
      'دریافت لاگ‌های دقیق از تغییرات دیتابیس، فعالیت کاربران و تحلیل عملکرد برای تصمیم‌گیری بهتر.',
  },
  {
    title: 'SSL، فایروال و محافظت از داده',
    description:
      'اتصال امن با گواهی SSL، فایروال برنامه وب و محدودیت دسترسی شبکه برای جلوگیری از نفوذ.',
  },
  {
    title: 'استقرار انعطاف‌پذیر در Cloud یا On-Premise',
    description:
      'انتخاب میان میزبانی در زیرساخت مگان، سرور اختصاصی شما یا دیتاسنتر ثالث بر اساس نیاز سازمان.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🧩',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۲۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی phpMyAdmin روی سرور ابری لینوکسی مگان با مانیتورینگ و بکاپ خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۴۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور لینوکسی که از جای دیگری تهیه کرده‌اید به همراه سخت‌افزار تنظیم‌شده.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۶۰۰٬۰۰۰ تومان در ماه',
        description: 'تحویل سرویس کاملاً مدیریت‌شده بدون نیاز به سرور قبلی با SLA سازمانی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'starwars',
    label: 'Star Wars',
    icon: '🌌',
    plans: [
      {
        id: 'starwars-coruscant',
        title: 'Coruscant (کروسکانت)',
        tier: 'پلن اقتصادی',
        price: '۲۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب سریع روی سرور ابری مگان با دسترسی ایمن برای شوالیه‌های داده.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'starwars-mustafar',
        title: 'Mustafar (موستافار)',
        tier: 'پلن حرفه‌ای',
        price: '۴۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور خودتان با پیکربندی امنیتی و مانیتورینگ پیوسته.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'starwars-falcon',
        title: 'Millennium Falcon (فالکن)',
        tier: 'پلن اینترپرایز',
        price: '۶۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی و پشتیبانی ۲۴/۷ برای تیم‌های حساس.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'harrypotter',
    label: 'Harry Potter',
    icon: '🪄',
    plans: [
      {
        id: 'harrypotter-hogwarts',
        title: 'Hogwarts (هاگوارتز)',
        tier: 'پلن اقتصادی',
        price: '۲۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار جادویی روی زیرساخت مگان با پشتیبان‌گیری خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'harrypotter-azkaban',
        title: 'Azkaban (آزکابان)',
        tier: 'پلن حرفه‌ای',
        price: '۴۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور سازمان شما با محافظت امنیتی قدرتمند.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'harrypotter-phoenix',
        title: 'Order of the Phoenix (محفل ققنوس)',
        tier: 'پلن اینترپرایز',
        price: '۶۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم پشتیبانی همیشه بیدار برای ماموریت‌های حیاتی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'strangerthings',
    label: 'Stranger Things',
    icon: '🧬',
    plans: [
      {
        id: 'strangerthings-hawkins',
        title: 'Hawkins (هاوکینز)',
        tier: 'پلن اقتصادی',
        price: '۲۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی فوری بر روی سرور ابری مگان با دسترسی کنترل‌شده.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'strangerthings-upside',
        title: 'The Upside Down (دنیای وارونه)',
        tier: 'پلن حرفه‌ای',
        price: '۴۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با مراقبت امنیتی در برابر تهدیدهای پنهان.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'strangerthings-eleven',
        title: 'Eleven (الِوِن)',
        tier: 'پلن اینترپرایز',
        price: '۶۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سطح قهرمان و تیم عملیات اختصاصی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'راه‌اندازی phpMyAdmin مدیریت‌شده چقدر زمان می‌برد؟',
    answer:
      'پس از ثبت سفارش و تعیین دسترسی‌ها، سرویس در کمتر از چند ساعت روی سرور انتخابی شما راه‌اندازی و آماده استفاده می‌شود.',
  },
  {
    question: 'آیا می‌توان چند دیتابیس مختلف را در یک داشبورد مدیریت کرد؟',
    answer:
      'بله، ما امکان اتصال امن به چند سرور MySQL و MariaDB را فراهم می‌کنیم تا همه آن‌ها را از یک پنل مدیریت کنید.',
  },
  {
    question: 'در صورت بروز خطا یا حذف ناخواسته داده چه می‌شود؟',
    answer:
      'بکاپ‌گیری خودکار و تست بازیابی منظم انجام می‌شود. در صورت بروز مشکل، تیم پشتیبانی عملیات بازگردانی را به سرعت انجام می‌دهد.',
  },
  {
    question: 'آیا امکان ادغام با سیستم احراز هویت سازمانی وجود دارد؟',
    answer:
      'در پلن‌های حرفه‌ای و اینترپرایز، یکپارچه‌سازی با SSO، LDAP و محدودسازی دسترسی IP به صورت کامل ارائه می‌شود.',
  },
  {
    question: 'تفاوت قیمت‌ها در تم‌های مختلف چیست؟',
    answer:
      'نام‌گذاری تم‌ها صرفاً برای سرگرمی است. هر تم همان سناریوهای زیرساختی (سرور مگان، سرور مشتری یا میزبانی اختصاصی) را با قیمت‌های ثابت نمایش می‌دهد.',
  },
  {
    question: 'آیا می‌توان سرویس را به صورت On-Premise تحویل گرفت؟',
    answer:
      'بله، در صورت تمایل نصب بر روی سرور داخلی یا دیتاسنتر ثالث شما انجام می‌شود و مستندات کامل تحویل داده خواهد شد.',
  },
]

const PhpMyAdminServicePage = () => {
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
    <section className="phpmyadmin-service">
      <header className="phpmyadmin-hero">
        <div className="phpmyadmin-hero__badge">Database Management</div>
        <div className="phpmyadmin-hero__logo hero-logo-pair" aria-label="لوگوی مگان و phpMyAdmin">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={phpMyAdminLogo} alt="لوگوی phpMyAdmin" />
          </div>
        </div>
        <h1 className="phpmyadmin-hero__title">phpMyAdmin مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="phpmyadmin-hero__subtitle">
          نصب و پیکربندی phpMyAdmin برای تیم‌های دیتابیس زمان‌بر است. ما همه مراحل را انجام می‌دهیم تا
          در فضایی امن، با دسترسی کنترل‌شده و بکاپ خودکار دیتابیس‌های MySQL و MariaDB خود را مدیریت کنید.
        </p>
        <div className="phpmyadmin-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده قیمت‌گذاری
          </a>
        </div>
      </header>

      <section className="phpmyadmin-section">
        <div className="phpmyadmin-section__content phpmyadmin-section__content--center">
          <h2 className="phpmyadmin-section__title phpmyadmin-section__title--center">چرا phpMyAdmin مدیریت‌شده مگان؟</h2>
          <p className="phpmyadmin-section__description phpmyadmin-section__description--center">
            راه‌اندازی phpMyAdmin روی زیرساخت‌های مختلف نیاز به تخصص DevOps، امن‌سازی و مانیتورینگ دارد.
            تیم مگان زیرساخت آماده و مقیاس‌پذیر را فراهم می‌کند تا شما بر مدیریت دیتابیس تمرکز کنید.
          </p>
          <div className="phpmyadmin-insight">
            <article className="phpmyadmin-insight__card">
              <span className="phpmyadmin-insight__label">مشکل</span>
              <h3>راه‌اندازی پیچیده و پرریسک</h3>
              <p>
                تنظیم سرور، SSL، نقش‌های کاربری و بکاپ‌گیری برای phpMyAdmin می‌تواند ساعت‌ها زمان تیم
                فنی را بگیرد و در صورت خطای انسانی، داده‌های حساس در معرض خطر قرار گیرند.
              </p>
            </article>
            <article className="phpmyadmin-insight__card">
              <span className="phpmyadmin-insight__label phpmyadmin-insight__label--solution">راه‌حل</span>
              <h3>زیرساخت امن و آماده بهره‌برداری</h3>
              <p>
                ما همه مراحل را خودکار کرده‌ایم: از استقرار و اتصال به دیتابیس تا مانیتورینگ و بکاپ.
                شما تنها وارد کنسول می‌شوید و دیتابیس‌هایتان را بدون دغدغه نگهداری مدیریت می‌کنید.
              </p>
            </article>
          </div>
          <div className="phpmyadmin-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="phpmyadmin-benefits__item">
                <span className="phpmyadmin-benefits__icon" aria-hidden="true">
                  •
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="phpmyadmin-section">
        <h2 className="phpmyadmin-section__title">ویژگی‌ها</h2>
        <div className="phpmyadmin-features">
          {features.map(({ title, description }) => (
            <article key={title} className="phpmyadmin-feature">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="phpmyadmin-section" id="pricing">
        <h2 className="phpmyadmin-section__title">پلن‌های قیمت‌گذاری</h2>
        <p className="phpmyadmin-section__description">
          بر اساس زیرساختی که در اختیار دارید، یکی از سناریوهای زیر را انتخاب کنید. همه پلن‌ها شامل
          مانیتورینگ، به‌روزرسانی و پشتیبانی ۲۴/۷ هستند.
        </p>
        <p className="phpmyadmin-section__note">
          می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود و با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ تم‌ها صرفاً
          جنبه فان دارند و تفاوتی در امکانات و قیمت واقعی پلن‌ها ایجاد نمی‌کنند.
        </p>
        <div className="phpmyadmin-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              className={`phpmyadmin-pricing__theme ${
                activeTheme === id ? 'phpmyadmin-pricing__theme--active' : ''
              }`}
              aria-selected={activeTheme === id}
              tabIndex={activeTheme === id ? 0 : -1}
              aria-controls="phpmyadmin-pricing-panel"
              onClick={() => handleThemeChange(id)}
            >
              <span className="phpmyadmin-pricing__theme-icon" aria-hidden="true">
                {icon}
              </span>
              {label}
            </button>
          ))}
        </div>
        <div className="phpmyadmin-pricing" id="phpmyadmin-pricing-panel">
          {currentPlans.map(({ id, title, tier, price, description, infra }) => (
            <article
              key={id}
              className={`phpmyadmin-plan ${activePlan === id ? 'phpmyadmin-plan--active' : ''}`}
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
              <div className="phpmyadmin-plan__head">
                <span className="phpmyadmin-plan__tier">{tier}</span>
                <h3 className="phpmyadmin-plan__title">{title}</h3>
              </div>
              <div className="phpmyadmin-plan__price">{price}</div>
              <p className="phpmyadmin-plan__description">{description}</p>
              <div className="phpmyadmin-plan__meta">{infra}</div>
              <NavLink to="/login" className="phpmyadmin-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="phpmyadmin-section phpmyadmin-section--surface">
        <h2 className="phpmyadmin-section__title">سوالات متداول</h2>
        <div className="phpmyadmin-faq">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="phpmyadmin-faq__item">
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

export default PhpMyAdminServicePage
