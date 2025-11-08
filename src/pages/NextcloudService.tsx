import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import nextcloudLogo from '../assets/nextcloud-logo.svg'

const benefits = [
  'استقرار Nextcloud در بستر ابری مگان یا سرور اختصاصی شما تنها در چند ساعت',
  'پیکربندی کامل برای اشتراک‌گذاری فایل، همکاری تیمی و همگام‌سازی امن',
  'یکپارچگی با سرویس‌های ایمیل، پیام‌رسان و اتوماسیون سازمانی',
  'بکاپ‌گیری نسخه‌ای و بازیابی سریع برای حفاظت از فایل‌های حیاتی سازمان',
  'مانیتورینگ سلامت سرویس و هشداردهی بلادرنگ برای تیم‌های فناوری اطلاعات',
  'پشتیبانی از SSO، LDAP و احراز هویت دومرحله‌ای برای دسترسی ایمن',
  'سفارشی‌سازی رابط کاربری و برندینگ مطابق هویت بصری سازمان شما',
  'پشتیبانی ۲۴/۷ و تیم متخصص برای نگهداری، بهینه‌سازی و مقیاس‌پذیری',
]

const features = [
  {
    title: 'فضای ابری اشتراکی امن',
    description:
      'ایجاد Drive مرکزی با رمزنگاری سرتاسری، کنترل دسترسی دقیق و امکان اشتراک لینک‌های محافظت‌شده.',
  },
  {
    title: 'Collabora & OnlyOffice Integration',
    description:
      'ویرایش آنلاین اسناد، صفحات گسترده و پرزنتیشن به صورت همزمان با همکاران و کنترل نسخه کامل.',
  },
  {
    title: 'تقویم و تسک سازمانی',
    description:
      'مدیریت تقویم‌ها، وظایف و اتوماسیون اعلان‌ها برای هماهنگی تیمی بدون نیاز به ابزارهای مجزا.',
  },
  {
    title: 'امنیت و تطبیق‌پذیری سازمانی',
    description:
      'پشتیبانی از MFA، محدودیت IP، فایروال برنامه وب و گزارش‌های ممیزی برای سازمان‌های حساس.',
  },
  {
    title: 'کلاینت‌های چندسکویی',
    description:
      'دسترسی به فایل‌ها از طریق دسکتاپ، موبایل و وب با همگام‌سازی پس‌زمینه و کنترل مصرف پهنای باند.',
  },
  {
    title: 'استقرار هیبرید و On-Premise',
    description:
      'انتخاب بین زیرساخت ابری مگان، سرور شخصی یا دیتاسنتر ثالث با یک تجربه مدیریت‌شده یکپارچه.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '☁️',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب سریع Nextcloud روی سرورهای ابری مگان با مانیتورینگ و همگام‌سازی خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور سازمانی شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور لینوکسی شما با اتصال دامنه، SSO و سیاست‌های امنیتی سفارشی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'تحویل محیط Nextcloud اختصاصی روی زیرساخت مگان با SLA طلایی و مقیاس‌پذیری کامل.',
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
        id: 'got-kings-landing-nextcloud',
        title: "King's Landing (کینگز لندینگ)",
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'فضای همکاری شما روی سرور ابری مگان با اشتراک‌گذاری امن فایل‌ها تنها در چند ساعت.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'got-winterfell-nextcloud',
        title: 'Winterfell (وینترفل)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور سازمانی با یکپارچه‌سازی LDAP و سیاست‌های دسترسی پیشرفته.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'got-the-wall-nextcloud',
        title: 'The Wall (دیوار)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم پشتیبانی کشیک برای نگهداری از داده‌های حیاتی سازمان.',
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
        id: 'lotr-minas-tirith-nextcloud',
        title: 'Minas Tirith (میناس تیریث)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب Nextcloud روی زیرساخت مگان با بکاپ نسخه‌ای و رمزنگاری سرتاسری.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-rivendell-nextcloud',
        title: 'Rivendell (ریوندل)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور شما با همگام‌سازی کلاینت‌ها و گزارش‌های دسترسی دقیق.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-shire-nextcloud',
        title: 'The Shire (شایر)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی و ظرفیت ذخیره‌سازی منعطف برای تیم‌های پرکاربر.',
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
        id: 'witcher-novigrad-nextcloud',
        title: 'Novigrad (نوویگراد)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی روی سرورهای مگان با دسترسی موبایل، دسکتاپ و مرورگر در یک تجربه واحد.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-oxenfurt-nextcloud',
        title: 'Oxenfurt (اگزن‌فورت)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور سازمانی شما همراه با محدودیت IP و گزارش‌های ممیزی کامل.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-kaer-morhen-nextcloud',
        title: 'Kaer Morhen (کائر مورهن)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم پشتیبانی ویژه برای نگهداری و بهینه‌سازی مستمر.',
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
        id: 'vikings-kattegat-nextcloud',
        title: 'Kattegat (کاتگات)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'فضای اشتراک‌گذاری ابری روی سرورهای مگان با دسترسی امن و سریع برای کل تیم.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'vikings-uppsala-nextcloud',
        title: 'Uppsala (اوپسالا)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور شما با احراز هویت چندمرحله‌ای و گزارش‌های حسابرسی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'vikings-paris-nextcloud',
        title: 'Paris (پاریس)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با High Availability و ذخیره‌سازی افزونه برای فایل‌های سازمانی.',
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
        id: 'avatar-fire-nation-nextcloud',
        title: 'Fire Nation Capital (پایتخت ملت آتش)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار Nextcloud روی سرور ابری مگان با رمزنگاری و بکاپ خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'avatar-ba-sing-se-nextcloud',
        title: 'Ba Sing Se (با سینگ سه)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با اتوماسیون بروزرسانی و نظارت ۲۴/۷ تیم مگان.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'avatar-air-temple-nextcloud',
        title: 'Southern Air Temple (معبد هوا جنوبی)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با مقیاس‌پذیری لحظه‌ای برای سازمان‌های چند شعبه.',
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
        id: 'hp-ministry-nextcloud',
        title: 'Ministry of Magic (وزارت جادو)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع روی سرور مگان با سیاست‌های کنترل دسترسی دقیق.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'hp-hogwarts-nextcloud',
        title: 'Hogwarts (هاگوارتز)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با احراز هویت چندعاملی و گزارش‌های ممیزی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'hp-hogsmeade-nextcloud',
        title: 'Hogsmeade (هاگزمید)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA اختصاصی و تیم پشتیبانی شبانه‌روزی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'پیاده‌سازی Nextcloud مدیریت‌شده چقدر زمان می‌برد؟',
    answer:
      'پس از انتخاب پلن، اتصال دامنه و ارائه دسترسی‌ها، تیم مگان در کمتر از چند ساعت فضای همکاری Nextcloud را آماده می‌کند.',
  },
  {
    question: 'آیا می‌توان Nextcloud را روی سرور سازمانی خودمان دریافت کرد؟',
    answer:
      'بله. در پلن‌های Winterfell، Rivendell و Oxenfurt استقرار روی سرور شما انجام و سیاست‌های امنیتی موردنیاز پیاده می‌شود.',
  },
  {
    question: 'مدیریت بکاپ و بازیابی داده‌ها چگونه انجام می‌شود؟',
    answer:
      'بکاپ‌گیری نسخه‌ای روزانه، تست دوره‌ای بازیابی و نظارت سلامت نودها به صورت خودکار انجام می‌شود و سیاست نگهداری قابل تنظیم است.',
  },
  {
    question: 'آیا امکان ادغام با سرویس‌های سازمانی دیگر وجود دارد؟',
    answer:
      'یکپارچه‌سازی با ایمیل، تقویم، SSO، LDAP و ابزارهای اتوماسیون سازمانی در تمام پلن‌ها پشتیبانی می‌شود.',
  },
  {
    question: 'چگونه از امنیت دسترسی کاربران اطمینان حاصل می‌شود؟',
    answer:
      'تمام پلن‌ها شامل SSL مدیریت‌شده، محدودیت IP، احراز هویت دومرحله‌ای و گزارش‌گیری کامل فعالیت کاربران هستند.',
  },
  {
    question: 'آیا می‌توان Nextcloud را با ابزارهای مدیریت پروژه و چت ادغام کرد؟',
    answer:
      'بله، در تمام پلن‌ها می‌توان Nextcloud Talk، ادغام با ابزارهایی مثل Mattermost، Rocket.Chat و ادغام WebDAV با Jira یا Trello را فعال کرد.',
  },
  {
    question: 'آیا می‌توان ظرفیت ذخیره‌سازی را در آینده افزایش داد؟',
    answer:
      'بله، افزودن فضای ذخیره‌سازی یا نود جدید بدون توقف سرویس انجام می‌شود و تیم مگان عملیات را مدیریت می‌کند.',
  },
]
const NextcloudServicePage = () => {
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
    <section className="nextcloud-service">
      <header className="nextcloud-hero">
        <div className="nextcloud-hero__badge">Secure Collaboration</div>
        <div className="nextcloud-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Nextcloud">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={nextcloudLogo} alt="لوگوی Nextcloud" />
          </div>
        </div>
        <h1 className="nextcloud-hero__title">Nextcloud مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="nextcloud-hero__subtitle">
          راه‌اندازی Nextcloud از صفر می‌تواند چالش‌برانگیز باشد: از نصب و پیکربندی تا امنیت، بکاپ و مقیاس‌پذیری.
          تیم مگان همه این موارد را برای شما مدیریت می‌کند تا تیم‌های شما روی همکاری و اشتراک دانش تمرکز کنند.
        </p>
        <div className="nextcloud-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="nextcloud-section">
        <div className="nextcloud-section__content">
          <h2 className="nextcloud-section__title nextcloud-section__title--center">
            چرا Nextcloud مدیریت‌شده مگان؟
          </h2>
          <p className="nextcloud-section__description">
            شرکت‌ها برای ساخت فضای همکاری امن نیاز به ترکیب زیرساخت، امنیت، بکاپ و نگهداری مستمر دارند. ما با
            تجربه پیاده‌سازی سلف‌هاستد، پیچیدگی‌های عملیاتی را برطرف می‌کنیم تا دسترسی به فایل‌ها و همکاری تیمی
            همواره سریع و مطمئن باشد.
          </p>
          <div className="nextcloud-insight">
            <article className="nextcloud-insight__card">
              <span className="nextcloud-insight__label">مشکل</span>
              <h3>پیچیدگی استقرار و تضمین امنیت</h3>
              <p>
                پیکربندی سرور، SSL، اتصال دامنه، تنظیمات بکاپ و هماهنگی با سیاست‌های امنیتی سازمانی می‌تواند هفته‌ها
                زمان ببرد و نیازمند تخصص DevOps باشد.
              </p>
            </article>
            <article className="nextcloud-insight__card">
              <span className="nextcloud-insight__label nextcloud-insight__label--solution">راه‌حل</span>
              <h3>زیرساخت آماده، امن و قابل مقیاس</h3>
              <p>
                تیم مگان Nextcloud را با معماری امن، بکاپ خودکار و مانیتورینگ لحظه‌ای تحویل می‌دهد؛ شما تنها روی
                مدیریت کاربران و همکاری تمرکز می‌کنید و بقیه مراحل به صورت مدیریت‌شده انجام می‌شود.
              </p>
            </article>
          </div>
          <div className="nextcloud-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="nextcloud-benefits__item">
                <span className="nextcloud-benefits__icon" aria-hidden="true">
                  •
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nextcloud-section">
        <h2 className="nextcloud-section__title">ویژگی‌ها</h2>
        <div className="nextcloud-features">
          {features.map(({ title, description }) => (
            <article key={title} className="nextcloud-feature">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="nextcloud-section" id="pricing">
        <h2 className="nextcloud-section__title">پلن‌های قیمت‌گذاری</h2>
        <p className="nextcloud-section__description">
          بسته مناسب را بر اساس زیرساختی که در اختیار دارید انتخاب کنید. تمام پلن‌ها شامل مانیتورینگ، بکاپ نسخه‌ای
          و پشتیبانی ۲۴/۷ هستند.
        </p>
        <p className="nextcloud-section__note">
          می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ این تم‌ها صرفاً جنبه فان
          دارند و امکانات هر سناریو یکسان است.
        </p>
        <div className="nextcloud-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              className={`nextcloud-pricing__theme ${
                activeTheme === id ? 'nextcloud-pricing__theme--active' : ''
              }`}
              aria-selected={activeTheme === id}
              tabIndex={activeTheme === id ? 0 : -1}
              aria-controls="nextcloud-pricing-panel"
              onClick={() => handleThemeChange(id)}
            >
              <span className="nextcloud-pricing__theme-icon" aria-hidden="true">
                {icon}
              </span>
              {label}
            </button>
          ))}
        </div>
        <div className="nextcloud-pricing" id="nextcloud-pricing-panel">
          {currentPlans.map(({ id, title, tier, price, description, infra }) => (
            <article
              key={id}
              className={`nextcloud-plan ${activePlan === id ? 'nextcloud-plan--active' : ''}`}
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
              <div className="nextcloud-plan__head">
                <span className="nextcloud-plan__tier">{tier}</span>
                <h3 className="nextcloud-plan__title">{title}</h3>
              </div>
              <div className="nextcloud-plan__price">{price}</div>
              <p className="nextcloud-plan__description">{description}</p>
              <div className="nextcloud-plan__meta">{infra}</div>
              <NavLink to="/login" className="nextcloud-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="nextcloud-section nextcloud-section--surface">
        <h2 className="nextcloud-section__title">سوالات متداول</h2>
        <div className="nextcloud-faq">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="nextcloud-faq__item">
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

export default NextcloudServicePage
