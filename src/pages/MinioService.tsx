import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import minioLogo from '../assets/minio-logo.svg'

const benefits = [
  'سازگاری کامل با Amazon S3 و اکوسیستم ابزارهای آن',
  'کارایی بالا برای بارهای حجیم تحلیلی و پردازشی',
  'حفاظت از داده با Erasure Coding و Immutable Buckets',
  'مقیاس‌پذیری افقی با نودهای متعدد بدون وقفه سرویس',
  'رمزنگاری سرتاسری و مدیریت کلید در اختیار مشتری',
  'مانیتورینگ، هشداردهی و گزارش‌گیری جامع برای تیم‌های عملیات',
  'یکپارچگی با Kubernetes، Openshift و پلتفرم‌های کانتینری',
  'پشتیبانی ۲۴/۷ و تیم متخصص برای بهینه‌سازی و Troubleshooting',
]

const features = [
  {
    title: 'Object Storage با عملکرد بالا',
    description:
      'MinIO روی زیرساخت مگان با سخت‌افزار بهینه شده برای I/O بالا اجرا می‌شود تا جریان‌های حجیم داده را با کمترین تأخیر سرویس دهد.',
  },
  {
    title: 'داشبورد مدیریتی و مانیتورینگ',
    description:
      'کنسول مدیریتی پیشرفته با مشاهده سلامت نودها، ظرفیت، ترافیک و رویدادها در اختیار شما قرار می‌گیرد.',
  },
  {
    title: 'امنیت سازمانی',
    description:
      'پشتیبانی از IAM، سیاست‌های دسترسی دقیق، احراز هویت SSO و قابلیت‌های LDAP برای سازمان‌های بزرگ.',
  },
  {
    title: 'بکاپ و بازیابی خودکار',
    description:
      'سناریوهای بکاپ‌گیری نسخه‌ای، Replication بین دیتاسنترها و قفل نگهداری داده برای حفاظت در برابر حذف تصادفی.',
  },
  {
    title: 'استقرار چندمحیطی',
    description:
      'قابلیت پیاده‌سازی روی سرورهای ابری مگان، زیرساخت شما یا دیتاسنتر طرف ثالث با یک تجربه کاربری واحد.',
  },
  {
    title: 'SDK و API کامل',
    description:
      'سازگاری API با AWS S3 و SDK برای زبان‌های پرکاربرد تا توسعه‌دهندگان بدون تغییر کد مهاجرت کنند.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🧊',
    plans: [
      {
        id: 'standard-megan-cloud',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی MinIO روی سرورهای ابری مگان با مانیتورینگ و بروزرسانی خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-customer-server',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور لینوکسی شما با امن‌سازی، IAM و مستندسازی کامل.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'تحویل کلاستر MinIO اختصاصی روی زیرساخت مگان با SLA و مقیاس‌پذیری افقی.',
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
        id: 'got-kings-landing-minio',
        title: "King's Landing (کینگز لندینگ)",
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'فضای ذخیره‌سازی S3-Compatible روی زیرساخت مگان با تحویل سریع و امن.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'got-winterfell-minio',
        title: 'Winterfell (وینترفل)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با تنظیم سیاست‌های دسترسی و مانیتورینگ Prometheus.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'got-the-wall-minio',
        title: 'The Wall (دیوار)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی و پشتیبانی ۲۴/۷ برای بارهای حیاتی داده.',
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
        id: 'lotr-minas-tirith-minio',
        title: 'Minas Tirith (میناس تیریث)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلاستر MinIO روی مگان با بکاپ نسخه‌ای و سیاست‌های نگهداری داده سفارشی.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-rivendell-minio',
        title: 'Rivendell (ریوندل)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور شما با اتصال به Kubernetes و تنظیم چرخه عمر آبجکت.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-shire-minio',
        title: 'The Shire (شایر)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با معماری High Availability و پشتیبانی مهاجرت داده.',
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
        id: 'witcher-novigrad-minio',
        title: 'Novigrad (نوویگراد)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی مگان با SSL مدیریت‌شده و یکپارچه‌سازی با ابزارهای تحلیل داده.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-oxenfurt-minio',
        title: 'Oxenfurt (اگزن‌فورت)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با IAM، محدودسازی IP و مانیتورینگ سلامت نودها.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-kaer-morhen-minio',
        title: 'Kaer Morhen (کائر مورهن)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم DevOps آماده برای رفع سریع چالش‌های ذخیره‌سازی.',
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
        id: 'vikings-kattegat-minio',
        title: 'Kattegat (کاتگات)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'ذخیره‌سازی ابری اقتصادی روی مگان با تحویل سریع و داشبورد نظارتی کامل.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'vikings-uppsala-minio',
        title: 'Uppsala (اوپسالا)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با Replication بین دیتاسنتر و مانیتورینگ بلادرنگ.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'vikings-paris-minio',
        title: 'Paris (پاریس)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی، مقیاس‌پذیری افقی و تیم پشتیبانی اختصاصی.',
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
        id: 'avatar-fire-nation-minio',
        title: 'Fire Nation Capital (پایتخت ملت آتش)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'MinIO روی مگان با رمزنگاری در حالت سکون و بکاپ زمان‌بندی‌شده.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'avatar-ba-sing-se-minio',
        title: 'Ba Sing Se (با سینگ سه)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور شما با هشداردهی هوشمند و مدیریت چرخه عمر آبجکت.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'avatar-air-temple-minio',
        title: 'Southern Air Temple (معبد هوا جنوبی)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با ظرفیت ذخیره‌سازی منعطف و تیم عملیات ۲۴/۷.',
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
        id: 'hp-ministry-minio',
        title: 'Ministry of Magic (وزارت جادو)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی روی مگان با سیاست‌های نسخه‌برداری و گزارش‌گیری خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'hp-hogwarts-minio',
        title: 'Hogwarts (هاگوارتز)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با IAM، محدودسازی IP و اتصال به ابزارهای موجود.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'hp-hogsmeade-minio',
        title: 'Hogsmeade (هاگزمید)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی، پشتیبانی مهاجرت و تست‌های Disaster Recovery.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'فرآیند استقرار MinIO مدیریت‌شده چقدر زمان می‌برد؟',
    answer:
      'پس از انتخاب پلن و اتصال به زیرساخت مورد نظر، تیم مگان در کمتر از چند ساعت محیط MinIO را آماده و تحویل می‌دهد.',
  },
  {
    question: 'آیا می‌توان MinIO را روی زیرساخت خودمان دریافت کنیم؟',
    answer:
      'بله. در پلن‌های Winterfell، Rivendell و Oxenfurt سرویس روی سرورهای لینوکسی شما نصب و با سیاست‌های امنیتی سازمانی هماهنگ می‌شود.',
  },
  {
    question: 'سیاست‌های بکاپ و بازیابی چگونه مدیریت می‌شود؟',
    answer:
      'بکاپ‌گیری نسخه‌ای، Replication بین نودها و تست بازیابی دوره‌ای به صورت خودکار انجام می‌شود و سیاست نگهداری داده قابل تنظیم است.',
  },
  {
    question: 'آیا امکان افزایش ظرفیت یا مقیاس‌پذیری وجود دارد؟',
    answer:
      'بله، افزودن دیسک یا نود جدید بدون توقف سرویس انجام می‌شود و تیم مگان عملیات را مدیریت می‌کند.',
  },
  {
    question: 'چگونه امنیت دسترسی‌ها تضمین می‌شود؟',
    answer:
      'تمام پلن‌ها شامل SSL مدیریت‌شده، محدودیت IP، IAM، لاگ ممیزی و ادغام با SSO یا LDAP هستند.',
  },
  {
    question: 'آیا می‌توان به ابزارهای مانیتورینگ خودمان متصل شویم؟',
    answer:
      'بله، متریک‌های Prometheus، لاگ‌ها و وب‌هوک‌ها برای اتصال به سیستم‌های مانیتورینگ شما در دسترس قرار می‌گیرد.',
  },
  {
    question: 'نام تم‌های قیمت‌گذاری چه معنایی دارند؟',
    answer:
      'تم‌ها صرفاً برای ایجاد تجربه سرگرم‌کننده انتخاب شده‌اند؛ سناریوهای زیرساختی و قیمت‌گذاری واقعی در تمام تم‌ها یکسان است.',
  },
]
const MinioServicePage = () => {
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
    <section className="minio-service">
      <header className="minio-hero">
        <div className="minio-hero__badge">Object Storage Platform</div>
        <div className="minio-hero__logo hero-logo-pair" aria-label="لوگوی مگان و MinIO">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={minioLogo} alt="لوگوی MinIO" />
          </div>
        </div>
        <h1 className="minio-hero__title">MinIO مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="minio-hero__subtitle">
          شیوه‌ای سریع و امن برای ارائه S3-Compatible Object Storage در اختیار تیم‌های دیتا و اپلیکیشن.
          ما تمامی پیچیدگی‌های نصب، مقیاس‌پذیری و امنیت MinIO را مدیریت می‌کنیم تا شما روی سرویس‌های
          حیاتی خود تمرکز کنید.
        </p>
        <div className="minio-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده قیمت‌گذاری
          </a>
        </div>
      </header>

      <section className="minio-section">
        <div className="minio-section__content">
          <h2 className="minio-section__title">چرا MinIO مدیریت‌شده مگان؟</h2>
          <p className="minio-section__description">
            پیاده‌سازی MinIO در مقیاس سازمانی نیازمند آماده‌سازی سرور، هماهنگی امنیتی و مراقبت مداوم از
            داده‌هاست. با سرویس مدیریت‌شده مگان، زیرساخت آماده، امن و قابل مقیاس در اختیار دارید و تیم
            شما فقط روی ساخت محصولات مبتنی بر داده تمرکز می‌کند.
          </p>
          <div className="minio-insight">
            <article className="minio-insight__card">
              <span className="minio-insight__label">مشکل</span>
              <h3>راه‌اندازی پیچیده و نگهداری هزینه‌بر</h3>
              <p>
                تنظیم Erasure Coding، تعریف سیاست‌های امنیتی، نظارت بر سلامت نودها و مدیریت ظرفیت بدون ابزارهای
                مناسب دشوار و زمان‌بر است و می‌تواند تیم شما را از تمرکز بر توسعه باز دارد.
              </p>
            </article>
            <article className="minio-insight__card">
              <span className="minio-insight__label minio-insight__label--solution">راه‌حل</span>
              <h3>زیرساخت آماده و پشتیبانی ۲۴/۷</h3>
              <p>
                مگان زیرساختی مقیاس‌پذیر، امن و مانیتور شده را ارائه می‌دهد؛ تیم DevOps ما نصب، بروزرسانی و
                پایش مداوم را بر عهده دارد تا سرویس شما همیشه در دسترس و پایدار باشد.
              </p>
            </article>
          </div>
          <div className="minio-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="minio-benefits__item">
                <span className="minio-benefits__icon" aria-hidden="true">
                  •
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="minio-section">
        <h2 className="minio-section__title">ویژگی‌ها</h2>
        <div className="minio-features">
          {features.map(({ title, description }) => (
            <article key={title} className="minio-feature">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="minio-section" id="pricing">
        <h2 className="minio-section__title">پلن‌های قیمت‌گذاری</h2>
        <p className="minio-section__description">
          مطابق زیرساخت در اختیار شما، پلنی را انتخاب کنید که هزینه و مدیریت بهینه‌تری برای پروژه‌تان فراهم
          می‌کند. تمامی پلن‌ها شامل مانیتورینگ، بکاپ و پشتیبانی ۲۴/۷ هستند.
        </p>
        <p className="minio-section__note">
          می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ این تم‌ها صرفاً جنبه
          فان دارند و امکانات هر سناریو یکسان است.
        </p>
        <div className="minio-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              className={`minio-pricing__theme ${activeTheme === id ? 'minio-pricing__theme--active' : ''}`}
              aria-selected={activeTheme === id}
              tabIndex={activeTheme === id ? 0 : -1}
              aria-controls="minio-pricing-panel"
              onClick={() => handleThemeChange(id)}
            >
              <span className="minio-pricing__theme-icon" aria-hidden="true">
                {icon}
              </span>
              {label}
            </button>
          ))}
        </div>
        <div className="minio-pricing" id="minio-pricing-panel">
          {currentPlans.map(({ id, title, tier, price, description, infra }) => (
            <article
              key={id}
              className={`minio-plan ${activePlan === id ? 'minio-plan--active' : ''}`}
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
              <div className="minio-plan__head">
                <span className="minio-plan__tier">{tier}</span>
                <h3 className="minio-plan__title">{title}</h3>
              </div>
              <div className="minio-plan__price">{price}</div>
              <p className="minio-plan__description">{description}</p>
              <div className="minio-plan__meta">{infra}</div>
              <NavLink to="/login" className="minio-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="minio-section minio-section--surface">
        <h2 className="minio-section__title">سوالات متداول</h2>
        <div className="minio-faq">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="minio-faq__item">
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

export default MinioServicePage
