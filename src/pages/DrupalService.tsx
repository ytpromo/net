import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import drupalLogo from '../assets/drupal-logo.svg'

const benefits = [
  'راه‌اندازی Drupal + PostgreSQL در کمتر از چند ساعت با پیکربندی کاملاً مدیریت‌شده توسط تیم مگان',
  'بهینه‌سازی سطح زیرساخت برای کارایی بالا، کشینگ و مدیریت جلسه‌ها برای پورتال‌های پرترافیک',
  'امن‌سازی کامل لایه اپلیکیشن و دیتابیس با SSL، WAF و سیاست‌های محدودیت IP',
  'پشتیبان‌گیری زمان‌بندی شده از دیتابیس PostgreSQL و فایل‌های Drupal با تست منظم بازیابی',
  'به‌روزرسانی خودکار هسته Drupal، ماژول‌ها و پایگاه‌داده بدون توقف سرویس',
  'امکان استقرار چندمحیطی (Dev، Stage، Prod) با Workflow گیت و CI/CD مدیریت‌شده',
  'مانیتورینگ ۲۴/۷ با داشبوردهای عملکرد و هشداردهی پیشگیرانه برای جلوگیری از افت سرویس',
  'پشتیبانی تخصصی برای توسعه ماژول‌های سفارشی، مهاجرت داده و یکپارچه‌سازی سامانه‌ها',
]

const features = [
  {
    title: 'معماری بهینه برای Drupal',
    description:
      'پیکربندی Nginx، PHP-FPM و Redis مطابق بهترین پرکتیس‌ها تا سایت‌های محتوامحور شما سریع و مقیاس‌پذیر باقی بمانند.',
  },
  {
    title: 'PostgreSQL مدیریت‌شده',
    description:
      'دیتابیس PostgreSQL با تنظیمات High Availability، بکاپ افزایشی و مانیتورینگ Query برای عملکرد پایدار.',
  },
  {
    title: 'DevOps و CI/CD آماده',
    description:
      'Pipelineهای خودکار برای استقرار تم‌ها و ماژول‌های جدید، با بررسی کیفیت کد و Deployment بدون Downtime.',
  },
  {
    title: 'امنیت چندلایه',
    description:
      'گواهی SSL مدیریت‌شده، فایروال برنامه‌های وب، و جداسازی شبکه‌ای میان لایه اپلیکیشن و دیتابیس.',
  },
  {
    title: 'قابلیت‌های چندزبانه و چندسایت',
    description:
      'راه‌اندازی Multi-site و پشتیبانی از محتوا و کاربر چندزبانه با منابع اختصاصی برای هر دامنه.',
  },
  {
    title: 'تحلیل و گزارش‌گیری',
    description:
      'اتصال به Grafana و ابزارهای تحلیلی برای مشاهده سلامت سرویس، آمار بازدید و رفتار کاربران.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '💧',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'Drupal + PostgreSQL آماده روی سرورهای مگان با مانیتورینگ، بکاپ و به‌روزرسانی منظم.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی بر روی سرور لینوکسی خریداری‌شده توسط شما با امن‌سازی و استقرار CI/CD.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی، تیم عملیات ۲۴/۷ و منابع کاملاً ایزوله.',
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
        id: 'got-kings-landing-drupal',
        title: "King's Landing (کینگز لندینگ)",
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان برای پورتال‌هایی که مثل پایتخت وستروس باید همیشه آماده باشند.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'got-winterfell-drupal',
        title: 'Winterfell (وینترفل)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور سازمانی شما با دیوارهای امنیتی مستحکم و پشتیبانی شوالیه‌های DevOps.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'got-the-wall-drupal',
        title: 'The Wall (دیوار)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم نگهبان شب برای حفاظت از داده‌ها و دسترس‌پذیری مداوم.',
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
        id: 'lotr-minas-tirith-drupal',
        title: 'Minas Tirith (میناس تیریث)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان با نگهبانی گوندور برای سایت‌های محتوامحور و رویدادی.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-rivendell-drupal',
        title: 'Rivendell (ریوندل)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با دانش الف‌ها برای سفارشی‌سازی و توسعه امن.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-shire-drupal',
        title: 'The Shire (شایر)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با آرامش شایر و تیم پشتیبانی مگان برای پروژه‌های بلندمدت.',
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
        id: 'witcher-kaer-morhen-drupal',
        title: 'Kaer Morhen (کائر مورهن)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان با سرعت و چابکی ویچر برای تحویل محتوا.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-oxenfurt-drupal',
        title: 'Oxenfurt (اگزن‌فورت)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با کتابخانه‌ای از ابزارهای امنیتی و خودکارسازی عملیات.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-brotherhood-drupal',
        title: 'Brotherhood (انجمن جادوگران)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم مگان برای مأموریت‌های حیاتی و ترافیک بالا.',
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
        id: 'vikings-kattegat-drupal',
        title: 'Kattegat (کاتگات)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان برای ناوگان دیجیتال شما با آماده‌سازی سریع و امن.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'vikings-uppsala-drupal',
        title: 'Uppsala (اوپسالا)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با حفاظت اساطیری و سفارشی‌سازی کامل.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'vikings-paris-drupal',
        title: 'Paris (پاریس)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با ناوگان پشتیبانی شبانه‌روزی برای مقابله با هر موج ترافیکی.',
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
        id: 'avatar-fire-nation-drupal',
        title: 'Fire Nation Capital (پایتخت ملت آتش)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی سرور مگان با قدرت ملت آتش برای تجربه‌ای پرسرعت.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'avatar-ba-sing-se-drupal',
        title: 'Ba Sing Se (با سینگ سه)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با دیوارهای چندلایه امنیتی و مدیریت دسترسی دقیق.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'avatar-air-temple-drupal',
        title: 'Southern Air Temple (معبد هوا جنوبی)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با انعطاف سبک هوایی برای سازمان‌های چند شعبه.',
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
        id: 'hp-ministry-drupal',
        title: 'Ministry of Magic (وزارت جادو)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان با وردهای جادویی برای امنیت محتوا و داده‌های شما.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'hp-hogwarts-drupal',
        title: 'Hogwarts (هاگوارتز)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با کلاس‌های آموزشی و سحرهای DevOps برای تیم محتوا.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'hp-hogsmeade-drupal',
        title: 'Hogsmeade (هاگزمید)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم نگهبان ققنوس و SLA طلایی برای پروژه‌های حساس.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'راه‌اندازی Drupal مدیریت‌شده مگان چقدر زمان می‌برد؟',
    answer:
      'پس از دریافت دسترسی‌ها و انتخاب پلن، محیط Drupal + PostgreSQL در کمتر از چند ساعت با دامنه، SSL و تنظیمات اولیه تحویل می‌شود.',
  },
  {
    question: 'آیا می‌توان Drupal را روی سرور سازمانی خودمان دریافت کرد؟',
    answer:
      'بله، در پلن‌های Winterfell، Rivendell و Hogwarts استقرار روی سرور شما انجام می‌شود و سیاست‌های امنیتی مطابق استانداردهای سازمان پیاده‌سازی می‌گردد.',
  },
  {
    question: 'بکاپ‌گیری و بازیابی چگونه مدیریت می‌شود؟',
    answer:
      'بکاپ روزانه از PostgreSQL و فایل‌های Drupal گرفته می‌شود، نگهداری نسخه‌ها قابل تنظیم است و تست بازیابی دوره‌ای انجام می‌گیرد.',
  },
  {
    question: 'آیا امکان توسعه ماژول سفارشی یا مهاجرت از پلتفرم دیگر وجود دارد؟',
    answer:
      'تیم مگان مهاجرت از WordPress، Joomla یا سیستم‌های قدیمی را مدیریت می‌کند و ماژول‌های اختصاصی را در محیط‌های Dev/Stage پیاده‌سازی می‌نماید.',
  },
  {
    question: 'چگونه امنیت کاربران و احراز هویت مدیریت می‌شود؟',
    answer:
      'تمام پلن‌ها شامل SSL، محدودیت IP، احراز هویت چندمرحله‌ای و ادغام با SSO یا LDAP برای کنترل دسترسی سازمانی هستند.',
  },
  {
    question: 'آیا می‌توان چند محیط مجزا برای تیم توسعه داشت؟',
    answer:
      'بله، می‌توان محیط‌های Dev، Stage و Prod را با Snapshot و Pipelineهای خودکار مدیریت کرد تا تیم توسعه بدون ایجاد اختلال در محیط اصلی تغییرات را تست کند.',
  },
  {
    question: 'چه ابزارهایی برای مانیتورینگ و گزارش‌گیری ارائه می‌شود؟',
    answer:
      'داشبوردهای Grafana، گزارش‌های لاگ و هشدارهای بلادرنگ برای مصرف منابع، سلامت ماژول‌ها و ترافیک در تمام پلن‌ها فعال است.',
  },
]

const DrupalServicePage = () => {
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
    <section className="drupal-service">
      <header className="drupal-hero">
        <div className="drupal-hero__badge">Drupal + PostgreSQL</div>
        <div className="drupal-hero__logo hero-logo-pair" aria-label="لوگوی مگان و دروپال">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={drupalLogo} alt="لوگوی Drupal" />
          </div>
        </div>
        <h1 className="drupal-hero__title">Drupal مدیریت‌شده با دیتابیس PostgreSQL روی زیرساخت ابری مگان</h1>
        <p className="drupal-hero__subtitle">
          تجربه یک پلتفرم محتوا محور Enterprise را بدون دغدغه زیرساخت، امنیت و نگهداری تجربه کنید. ما کل چرخه
          استقرار، پایگاه‌داده و عملیات DevOps را برای شما مدیریت می‌کنیم تا روی تجربه کاربران تمرکز داشته باشید.
        </p>
        <div className="drupal-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="drupal-section" id="insight">
        <div className="drupal-section__content">
          <h2 className="drupal-section__title">چرا Drupal مدیریت‌شده مگان؟</h2>
          <p className="drupal-section__description">
            راه‌اندازی Drupal همراه با دیتابیس PostgreSQL نیازمند دانش عمیق DevOps، تیونینگ عملکرد و امن‌سازی چندلایه
            است. تیم مگان زیرساخت آماده و مقیاس‌پذیر را فراهم می‌کند تا شما روی استراتژی محتوا و تجربه دیجیتال تمرکز
            کنید.
          </p>
        </div>
        <div className="drupal-insight">
          <article className="drupal-insight__card">
            <span className="drupal-insight__label">مشکل</span>
            <h3>پیچیدگی راه‌اندازی و نگهداری</h3>
            <p>
              هماهنگ‌سازی Drupal با PostgreSQL، امن‌سازی، مانیتورینگ و به‌روزرسانی مستمر ماژول‌ها می‌تواند زمان‌بر و
              پرهزینه باشد و تمرکز تیم شما را از تولید محتوا دور کند.
            </p>
          </article>
          <article className="drupal-insight__card">
            <span className="drupal-insight__label drupal-insight__label--solution">راه‌حل</span>
            <h3>سرویس مدیریت‌شده مگان</h3>
            <p>
              ما استقرار، پشتیبانی و عملیات ۲۴/۷ را برعهده می‌گیریم؛ از تامین زیرساخت تا مانیتورینگ و بکاپ، همه چیز آماده
              است تا تیم شما به رشد کسب‌وکار بپردازد.
            </p>
          </article>
        </div>
      </section>

      <section className="drupal-section drupal-section--surface" id="benefits">
        <div className="drupal-section__content">
          <h2 className="drupal-section__title">مزایای استفاده از Drupal در مگان</h2>
          <p className="drupal-section__description">
            هر آنچه برای یک تجربه محتوایی ایمن، مقیاس‌پذیر و پایدار نیاز دارید در یک بسته مدیریت‌شده ارائه می‌شود؛ از
            لایه زیرساخت تا توسعه و پشتیبانی.
          </p>
        </div>
        <div className="drupal-benefits">
          {benefits.map((benefit) => (
            <div key={benefit} className="drupal-benefits__item">
              <span className="drupal-benefits__icon" aria-hidden="true">✔️</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="drupal-section" id="features">
        <div className="drupal-section__content">
          <h2 className="drupal-section__title">ویژگی‌های کلیدی Drupal مدیریت‌شده</h2>
          <p className="drupal-section__description">
            ترکیب Drupal و PostgreSQL با مهندسی زیرساخت مگان به شما اطمینان می‌دهد که تجربه‌ای سریع، امن و همیشه آماده
            در اختیار دارید.
          </p>
        </div>
        <div className="drupal-features">
          {features.map((feature) => (
            <article key={feature.title} className="drupal-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="drupal-section" id="pricing">
        <div className="drupal-section__content">
          <h2 className="drupal-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="drupal-section__description">
            می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود و با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ تم‌ها صرفاً برای فان طراحی
            شده‌اند و تفاوتی در سرویس ایجاد نمی‌کنند. سناریوهای استقرار ما ثابت می‌ماند: سرور ابری مگان، سرور شما یا
            میزبانی اختصاصی کاملاً مدیریت‌شده.
          </p>
          <p className="drupal-section__note">
            نام تم‌ها تنها برای ایجاد حس فان انتخاب شده‌اند و تفاوتی در امکانات یا قیمت نهایی ایجاد نمی‌کنند.
          </p>
        </div>
        <div className="drupal-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`drupal-pricing__theme${theme.id === activeTheme ? ' drupal-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
              tabIndex={theme.id === activeTheme ? 0 : -1}
              aria-controls="drupal-pricing-panel"
            >
              <span className="drupal-pricing__theme-icon" aria-hidden="true">
                {theme.icon}
              </span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="drupal-pricing" id="drupal-pricing-panel">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`drupal-plan${activePlan === plan.id ? ' drupal-plan--active' : ''}`}
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
              <div className="drupal-plan__head">
                <span className="drupal-plan__tier">{plan.tier}</span>
                <h3 className="drupal-plan__title">{plan.title}</h3>
              </div>
              <p className="drupal-plan__price">{plan.price}</p>
              <p className="drupal-plan__description">{plan.description}</p>
              <div className="drupal-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="drupal-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="drupal-section drupal-section--surface" id="faq">
        <div className="drupal-section__content">
          <h2 className="drupal-section__title">سوالات پرتکرار</h2>
          <p className="drupal-section__description">
            اگر سوال دیگری دارید، تیم ما همیشه در دسترس است تا درباره استقرار، مهاجرت یا سفارشی‌سازی Drupal با شما صحبت
            کند.
          </p>
        </div>
        <div className="drupal-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="drupal-faq__item">
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

export default DrupalServicePage
