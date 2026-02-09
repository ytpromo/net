import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import kibanaLogo from '../assets/kibana-logo.svg'

const benefits = [
  'راه‌اندازی سریع Kibana روی زیرساخت مگان یا سرور اختصاصی شما بدون پیچیدگی عملیاتی',
  'داشبوردهای آماده برای مشاهده‌پذیری، تحلیل لاگ و ردیابی سرویس‌ها به‌صورت بلادرنگ',
  'امنیت سازمانی با کنترل دسترسی، تفکیک فضاها و ثبت کامل فعالیت کاربران',
  'پشتیبان‌گیری دوره‌ای و ارتقای بدون قطعی برای حفظ دسترس‌پذیری تیم‌ها',
  'هماهنگی کامل با Elasticsearch، Fleet و Elastic Agent برای جمع‌آوری داده‌های غنی',
  'مانیتورینگ ۲۴/۷ و بهینه‌سازی عملکرد داشبوردها توسط تیم مگان',
  'پشتیبانی از چند محیط و چند تیم با فضای کاری جداگانه و گزارش‌گیری دقیق',
  'امکان سفارشی‌سازی گزارش‌ها و خروجی‌های قابل اشتراک برای مدیران و ذی‌نفعان',
]

const features = [
  {
    title: 'داشبوردهای تحلیلی پویا',
    description:
      'ساخت داشبوردهای تعاملی با Lens، TSVB و Canvas برای نمایش شاخص‌های کلیدی کسب‌وکار.',
  },
  {
    title: 'مدیریت دسترسی و فضاها',
    description:
      'تفکیک تیم‌ها و پروژه‌ها با Spaces و نقش‌های سفارشی برای کنترل دقیق دسترسی‌ها.',
  },
  {
    title: 'Alerting و گزارش‌دهی',
    description:
      'هشدارهای هوشمند، زمان‌بندی گزارش‌ها و ارسال خودکار برای تیم‌های عملیات و مدیران.',
  },
  {
    title: 'Observability یکپارچه',
    description:
      'نمایش متریک، لاگ و Trace در یک تجربه واحد برای عیب‌یابی سریع‌تر سرویس‌ها.',
  },
  {
    title: 'Fleet و مدیریت ایجنت‌ها',
    description:
      'مدیریت متمرکز Agentها، سیاست‌ها و ادغام‌ها برای جمع‌آوری داده از منابع مختلف.',
  },
  {
    title: 'بهینه‌سازی عملکرد',
    description:
      'تنظیم Cache، کاهش Latency داشبورد و پیشنهاد ساختار داده به‌صورت مدیریت‌شده.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '📊',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'Kibana آماده با مانیتورینگ، بکاپ و به‌روزرسانی خودکار روی زیرساخت مگان.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور لینوکسی شما با تنظیم امنیت و مانیتورینگ سفارشی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی و تیم عملیات ۲۴/۷ برای سازمان‌های بزرگ.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'got',
    label: 'Game of Thrones',
    icon: '🐺',
    plans: [
      {
        id: 'got-winterfell',
        title: 'Winterfell Dash (وینترفل)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'داشبوردهای آماده روی کلود مگان برای تیم‌هایی که سریع شروع می‌کنند.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'got-dragonstone',
        title: 'Dragonstone Ops (دراگون‌استون)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با امنیت چندلایه و داشبوردهای اختصاصی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'got-iron-throne',
        title: 'Iron Throne (آیرون ثرون)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با نظارت لحظه‌ای و SLA سلطنتی برای تیم‌های سازمانی.',
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
        id: 'lotr-shire',
        title: 'The Shire View (شایر)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نمایش داده‌ها روی کلود مگان با هزینه بهینه و راه‌اندازی سریع.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-minas-tirith',
        title: 'Minas Tirith Guard (میناس تیریث)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با محافظت گوندور و داشبوردهای پیشرفته.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-valinor',
        title: 'Valinor Insight (والینور)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم عملیات همیشه در دسترس و SLA طلایی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'startrek',
    label: 'Star Trek',
    icon: '🖖',
    plans: [
      {
        id: 'startrek-enterprise',
        title: 'USS Enterprise (یواس‌اس اینترپرایز)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'داشبوردهای آماده روی کلود مگان برای ناوبری داده‌محور تیم‌ها.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'startrek-deepspace',
        title: 'Deep Space Nine (دیپ‌اسپیس ناین)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با پروتکل‌های امنیتی استارفلیت.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'startrek-voyager',
        title: 'Voyager Insight (وویاجر)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با پشتیبانی شبانه‌روزی برای ماموریت‌های طولانی.',
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
        id: 'witcher-kaer',
        title: 'Kaer Morhen (کر مورهن)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع با سپر جادویی برای داشبوردهای حیاتی تیم شما.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-novigrad',
        title: 'Novigrad Watch (نوویگراد)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با قوانین امنیتی و نظارت مداوم.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-brotherhood',
        title: 'Brotherhood Vault (انجمن)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم عملیات ویژه برای سازمان‌های بزرگ.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'آیا Kibana به‌تنهایی قابل استفاده است؟',
    answer:
      'Kibana برای نمایش و تحلیل داده‌ها به Elasticsearch متصل می‌شود و ما اتصال امن آن را برای شما پیکربندی می‌کنیم.',
  },
  {
    question: 'آیا می‌توان داشبوردها را برای تیم‌های مختلف جدا کرد؟',
    answer:
      'بله، با Spaces و نقش‌های سفارشی هر تیم داشبوردهای اختصاصی خود را دارد و دسترسی‌ها کاملاً مدیریت می‌شوند.',
  },
  {
    question: 'برای استقرار سلف‌هاستد چه پیش‌نیازهایی لازم است؟',
    answer:
      'ما بر اساس مستندات استقرار خودمدیریتی Elastic عمل می‌کنیم و تمامی پیش‌نیازهای سیستم‌عامل، منابع و شبکه را تنظیم می‌کنیم.',
  },
  {
    question: 'آیا امکان سفارشی‌سازی گزارش‌ها و خروجی‌ها وجود دارد؟',
    answer:
      'بله، گزارش‌های زمان‌بندی‌شده، خروجی PDF/CSV و اشتراک‌گذاری امن برای ذی‌نفعان قابل پیکربندی است.',
  },
]

const KibanaServicePage = () => {
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
    <section className="kibana-service">
      <header className="kibana-hero">
        <div className="kibana-hero__badge">Data Visualization</div>
        <div className="kibana-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Kibana">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={kibanaLogo} alt="لوگوی Kibana" />
          </div>
        </div>
        <h1 className="kibana-hero__title">Kibana مدیریت‌شده برای مشاهده‌پذیری و تحلیل سریع</h1>
        <p className="kibana-hero__subtitle">
          داشبوردهای تحلیلی، گزارش‌دهی و هشدارهای Kibana را بدون دغدغه زیرساخت تجربه کنید. تیم مگان نصب، امنیت و
          نگهداری Kibana را بر عهده می‌گیرد تا شما روی تصمیم‌گیری داده‌محور تمرکز کنید.
        </p>
        <div className="kibana-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده قیمت‌گذاری
          </a>
        </div>
      </header>

      <section className="kibana-section">
        <div className="kibana-section__content">
          <h2 className="kibana-section__title">چرا Kibana مدیریت‌شده مگان؟</h2>
          <p className="kibana-section__description">
            Kibana نیازمند هم‌ترازی دقیق با Elasticsearch، تنظیم امنیت و بهینه‌سازی عملکرد داشبوردها است. تیم مگان
            زیرساخت آماده و مانیتورینگ دائمی را فراهم می‌کند تا تیم شما بدون توقف به داده‌ها دسترسی داشته باشد.
          </p>
        </div>
        <div className="kibana-insight">
          <article className="kibana-insight__card">
            <span className="kibana-insight__label">مشکل</span>
            <p>
              نگهداری Kibana، ارتقاهای سازگار و تضمین عملکرد داشبوردها برای تیم‌های عملیاتی زمان‌بر و پرریسک است.
            </p>
          </article>
          <article className="kibana-insight__card">
            <span className="kibana-insight__label kibana-insight__label--solution">راه‌حل</span>
            <p>
              با سرویس مدیریت‌شده مگان، استقرار، مانیتورینگ و امنیت Kibana به‌صورت کامل مدیریت می‌شود.
            </p>
          </article>
        </div>
        <div className="kibana-benefits">
          {benefits.map((benefit) => (
            <div key={benefit} className="kibana-benefits__item">
              <span className="kibana-benefits__icon" aria-hidden="true">
                •
              </span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="kibana-section kibana-section--surface">
        <h2 className="kibana-section__title">ویژگی‌های کلیدی Kibana در مگان</h2>
        <div className="kibana-features">
          {features.map(({ title, description }) => (
            <article key={title} className="kibana-feature">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kibana-section" id="pricing">
        <h2 className="kibana-section__title">پلن‌های قیمت‌گذاری</h2>
        <p className="kibana-section__description">
          می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود با نام‌گذاری سریال‌های محبوب مشاهده کنید. نام‌ها صرفاً جنبه
          سرگرمی دارند و امکانات هر پلن با توجه به زیرساخت انتخابی شما یکسان است.
        </p>
        <p className="kibana-section__note">
          سه روش ثبت سفارش وجود دارد: استفاده از سرور ابری مگان، نصب بر روی سرور لینوکسی تهیه‌شده توسط شما یا
          دریافت میزبانی اختصاصی بدون نیاز به سرور شخصی.
        </p>
        <div className="kibana-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeTheme === id}
              className={`kibana-pricing__theme${activeTheme === id ? ' kibana-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(id)}
            >
              <span className="kibana-pricing__theme-icon" aria-hidden="true">
                {icon}
              </span>
              {label}
            </button>
          ))}
        </div>
        <div className="kibana-pricing" id="kibana-pricing-panel">
          {currentPlans.map(({ id, title, tier, price, description, infra }) => (
            <article
              key={id}
              className={`kibana-plan${activePlan === id ? ' kibana-plan--active' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => setActivePlan(id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActivePlan(id)
                }
              }}
            >
              <div className="kibana-plan__head">
                <span className="kibana-plan__tier">{tier}</span>
                <h3 className="kibana-plan__title">{title}</h3>
              </div>
              <div className="kibana-plan__price">{price}</div>
              <p className="kibana-plan__description">{description}</p>
              <div className="kibana-plan__meta">{infra}</div>
              <NavLink to="/login" className="kibana-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="kibana-section kibana-section--surface">
        <h2 className="kibana-section__title">سوالات متداول</h2>
        <div className="kibana-faq">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="kibana-faq__item">
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

export default KibanaServicePage
