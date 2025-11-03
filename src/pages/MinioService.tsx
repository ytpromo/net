import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'

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
        tier: 'گارانتی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب سریع روی سرور ابری لینوکسی مگان با مانیتورینگ و به‌روزرسانی خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-customer-server',
        title: 'نصب روی سرور مشتری',
        tier: 'متوسط',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی روی سرور لینوکسی شما با تنظیمات امنیتی سازمانی و مستندسازی کامل.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'اورژانسی',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'تحویل سرویس به صورت اختصاصی و مدیریت‌شده روی سرورهای مگان بدون نیاز به زیرساخت.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'star-wars',
    label: 'Star Wars',
    icon: '🚀',
    plans: [
      {
        id: 'star-wars-coruscant',
        title: 'Coruscant (کروسکانت)',
        tier: 'گارانتی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع در هسته مگان با سطح دسترسی مدیریت‌شده برای تیم‌های داده.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'star-wars-naboo',
        title: 'Naboo (نابو)',
        tier: 'متوسط',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی روی سرور شما با پایش امنیتی مستمر و اتصال امن به دیتاسنتر سازمانی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'star-wars-mandalore',
        title: 'Mandalore (ماندالور)',
        tier: 'اورژانسی',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی برای تیم‌هایی که به قابلیت اطمینان نهایت نیاز دارند.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'dune',
    label: 'Dune',
    icon: '🏜️',
    plans: [
      {
        id: 'dune-arrakis',
        title: 'Arrakis (آراکیس)',
        tier: 'گارانتی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرورهای ابری مگان با ذخیره‌سازی بهینه‌شده برای جریان‌های مستمر داده.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'dune-caladan',
        title: 'Caladan (کالادان)',
        tier: 'متوسط',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی زیرساخت شما با تنظیم Replica و مدیریت کلید اختصاصی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'dune-sietch',
        title: 'Sietch Tabr (سیچ تبِر)',
        tier: 'اورژانسی',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'سلف‌هاستد اختصاصی با ظرفیت توسعه آنی و پشتیبانی ۲۴/۷ تیم DevOps مگان.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'foundation',
    label: 'Foundation',
    icon: '🪐',
    plans: [
      {
        id: 'foundation-trantor',
        title: 'Trantor (ترانتور)',
        tier: 'گارانتی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور ابری مگان با مانیتورینگ هوشمند و تحلیل ظرفیت پیش‌بینی‌کننده.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'foundation-terminus',
        title: 'Terminus (ترمینوس)',
        tier: 'متوسط',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی روی سرور شما با مهاجرت داده امن و آزمون‌های کارایی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'foundation-synax',
        title: 'Synax (سایناکس)',
        tier: 'اورژانسی',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با معماری High Availability و قرارداد SLA اختصاصی.',
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
      'بله. در پلن‌های Naboo، Caladan و Terminus سرویس روی سرورهای لینوکسی شما نصب و با سیاست‌های امنیتی سازمانی هماهنگ می‌شود.',
  },
  {
    question: 'سیاست‌های بکاپ و بازیابی چگونه مدیریت می‌شود؟',
    answer:
      'بکاپ‌گیری نسخه‌ای و Replication بین نودها به صورت پیش‌فرض فعال است و می‌توان زمان‌بندی و نگهداری داده را بر اساس سیاست سازمان تنظیم کرد.',
  },
  {
    question: 'آیا امکان افزایش ظرفیت یا مقیاس‌پذیری وجود دارد؟',
    answer:
      'بله. با افزودن نودهای جدید یا افزایش دیسک‌ها می‌توان ظرفیت را بدون توقف سرویس افزایش داد و تیم مگان عملیات را مدیریت می‌کند.',
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
        <div className="minio-hero__logo" aria-hidden="true">
          <div className="minio-hero__megan">
            <span className="minio-hero__stripe minio-hero__stripe--one" />
            <span className="minio-hero__stripe minio-hero__stripe--two" />
            <span className="minio-hero__stripe minio-hero__stripe--three" />
          </div>
          <span className="minio-hero__divider" />
          <div className="minio-hero__mark">
            <span className="minio-hero__orbit" />
            <span className="minio-hero__title-text">MinIO</span>
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
