import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import chatwootLogo from '../assets/chatwoot-logo.svg'

const benefits = [
  'راه‌اندازی سریع Chatwoot روی کلود مگان یا سرور اختصاصی شما بدون نیاز به تیم DevOps داخلی',
  'کانال‌های ارتباطی یکپارچه شامل وب‌چت، ایمیل، واتساپ و شبکه‌های اجتماعی در یک داشبورد واحد',
  'پشتیبان‌گیری منظم، مانیتورینگ ۲۴/۷ و بازیابی سریع برای حفظ تجربه مشتری',
  'امنیت سازمانی با کنترل نقش‌ها، لاگ ممیزی و سیاست‌های نگهداری داده',
  'قابلیت سفارشی‌سازی کامل ویجت چت، دامنه و برندینگ مطابق هویت بصری سازمان',
  'یکپارچگی آماده با CRM، ابزارهای تیکتینگ و اتوماسیون برای افزایش بهره‌وری تیم پشتیبانی',
  'تحلیل عملکرد تیم پشتیبانی با داشبوردهای KPI و گزارش‌گیری لحظه‌ای',
  'مقیاس‌پذیری افقی برای تیم‌های بزرگ و مراکز تماس چندسایتی',
]

const features = [
  {
    title: 'ارتباط چندکاناله با مشتری',
    description:
      'پشتیبانی از چت زنده، ایمیل، شبکه‌های اجتماعی و پیام‌رسان‌ها با صف‌بندی هوشمند مکالمات.',
  },
  {
    title: 'اتوماسیون و پاسخ‌گویی سریع',
    description:
      'Ruleهای هوشمند، پاسخ‌های آماده و ربات‌ها برای کاهش زمان پاسخ‌دهی و افزایش رضایت مشتری.',
  },
  {
    title: 'امنیت و کنترل دسترسی',
    description:
      'تعریف نقش‌های سفارشی، محدودسازی دسترسی و ثبت کامل فعالیت‌ها برای رعایت الزامات سازمانی.',
  },
  {
    title: 'داشبوردهای تحلیلی',
    description:
      'نمایش لحظه‌ای KPIها، SLA، عملکرد اپراتورها و گزارش‌های دوره‌ای برای مدیریت تیم.',
  },
  {
    title: 'قابلیت چندبرندی',
    description:
      'مدیریت چند برند یا محصول در یک پنل با تنظیمات مستقل و تجربه مشتری هماهنگ.',
  },
  {
    title: 'مقیاس‌پذیری و پایداری',
    description:
      'کلاسترینگ مدیریت‌شده، بالانس بار و پایش پیشگیرانه برای پاسخ‌گویی به حجم بالای تیکت.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '💬',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی Chatwoot روی زیرساخت مدیریت‌شده مگان با مانیتورینگ و به‌روزرسانی خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور سازمان شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی بر روی سرور لینوکسی شما با سیاست‌های امنیتی و اتصال به سامانه‌های داخلی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی و تیم عملیات ۲۴/۷ برای مراکز تماس حیاتی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'got',
    label: 'Game of Thrones',
    icon: '🐉',
    plans: [
      {
        id: 'got-keep',
        title: 'Winterfell (وینترفل)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان برای پشتیبانی پایدار و امنیت چندلایه در چت‌های آنلاین.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'got-dragonstone',
        title: 'Dragonstone (دراگون‌استون)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با دیوارهای دفاعی و احراز هویت سازمانی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'got-iron-throne',
        title: 'Iron Throne (آیرون ثرون)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با نظارت لحظه‌ای و SLA سلطنتی برای تیم‌های بزرگ.',
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
        title: 'The Shire (شایر)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پشتیبانی مشتری روی کلود مگان با راه‌اندازی سریع و امنیت پایدار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-minas-tirith',
        title: 'Minas Tirith (میناس تیریث)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با برج‌های دفاعی و اتصال به CRM داخلی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-valinor',
        title: 'Valinor (والینور)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم عملیات همیشه در دسترس برای مراکز تماس سازمانی.',
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
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پلتفرم پشتیبانی مشتری روی کلود مگان با تنظیمات آماده و مقیاس‌پذیری سریع.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'startrek-deepspace',
        title: 'Deep Space Nine (دیپ‌اسپیس ناین)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با پروتکل‌های امنیتی استارفلیت و داده‌های ایمن.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'startrek-voyager',
        title: 'Voyager (وویاجر)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم عملیات شبانه‌روزی برای ماموریت‌های طولانی مدت.',
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
        id: 'witcher-kaer-morhen',
        title: 'Kaer Morhen (کر مورهن)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان با سپر جادویی برای کاهش زمان پاسخ‌گویی و افزایش رضایت مشتری.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-novigrad',
        title: 'Novigrad (نوویگراد)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با قوانین امنیتی و اتصال به سیستم‌های مدیریت دانش.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-brotherhood',
        title: 'Brotherhood (محفل جادوگران)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با پشتیبانی جادویی و SLA ویژه برای سازمان‌های بزرگ.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'راه‌اندازی Chatwoot مدیریت‌شده چقدر زمان می‌برد؟',
    answer:
      'پس از ثبت سفارش، تیم مگان در کمتر از یک روز کاری سرویس را راه‌اندازی کرده و دسترسی مدیران را ارسال می‌کند.',
  },
  {
    question: 'آیا امکان انتقال داده‌ها از ابزارهای دیگر وجود دارد؟',
    answer:
      'بله، ما اطلاعات مکالمات، مخاطبین و تنظیمات شما را از ابزارهایی مانند Zendesk یا Intercom منتقل می‌کنیم.',
  },
  {
    question: 'چگونه امنیت داده‌های مشتری تضمین می‌شود؟',
    answer:
      'رمزنگاری TLS، محدودسازی IP، احراز هویت چندمرحله‌ای و سیاست‌های نگهداری داده توسط تیم مگان فعال می‌شوند.',
  },
  {
    question: 'آیا می‌توان چند تیم یا برند را در یک پنل مدیریت کرد؟',
    answer:
      'بله، Chatwoot از چنداین‌باکس و چندبرندی پشتیبانی می‌کند و ما برای هر برند تنظیمات مستقل اعمال می‌کنیم.',
  },
]

const ChatwootServicePage = () => {
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
    <section className="chatwoot-service">
      <header className="chatwoot-hero">
        <div className="chatwoot-hero__badge">Customer Engagement</div>
        <div className="chatwoot-hero__logo hero-logo-pair" aria-label="لوگوی مگان و چت‌ووت">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={chatwootLogo} alt="لوگوی Chatwoot" />
          </div>
        </div>
        <h1 className="chatwoot-hero__title">Chatwoot مدیریت‌شده برای تجربه پشتیبانی بی‌وقفه</h1>
        <p className="chatwoot-hero__subtitle">
          همه کانال‌های پشتیبانی مشتری را در یک داشبورد یکپارچه مدیریت کنید. تیم مگان نصب، امنیت و نگهداری
          Chatwoot را بر عهده می‌گیرد تا شما روی رضایت مشتری و رشد کسب‌وکار تمرکز کنید.
        </p>
        <div className="chatwoot-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده قیمت‌گذاری
          </a>
        </div>
      </header>

      <section className="chatwoot-section">
        <div className="chatwoot-section__content">
          <h2 className="chatwoot-section__title">چرا Chatwoot مدیریت‌شده مگان؟</h2>
          <p className="chatwoot-section__description">
            راه‌اندازی Chatwoot بدون تیم فنی می‌تواند زمان‌بر باشد. مگان با زیرساخت آماده، مانیتورینگ و پشتیبانی
            ۲۴/۷، تجربه‌ای پایدار و امن برای تیم‌های پشتیبانی شما فراهم می‌کند.
          </p>
        </div>
        <div className="chatwoot-insight">
          <article className="chatwoot-insight__card">
            <span className="chatwoot-insight__label">مشکل</span>
            <p>
              هماهنگ‌سازی کانال‌های مختلف و نگهداری از زیرساخت Chatwoot نیازمند دانش تخصصی و زمان زیاد است.
            </p>
          </article>
          <article className="chatwoot-insight__card">
            <span className="chatwoot-insight__label chatwoot-insight__label--solution">راه‌حل</span>
            <p>
              با سرویس مدیریت‌شده مگان، راه‌اندازی، مانیتورینگ و پشتیبان‌گیری توسط تیم ما انجام می‌شود تا شما فقط
              روی تعامل با مشتری تمرکز کنید.
            </p>
          </article>
        </div>
        <div className="chatwoot-benefits">
          {benefits.map((benefit) => (
            <div key={benefit} className="chatwoot-benefits__item">
              <span className="chatwoot-benefits__icon" aria-hidden="true">
                •
              </span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="chatwoot-section chatwoot-section--surface">
        <h2 className="chatwoot-section__title">ویژگی‌های کلیدی Chatwoot در مگان</h2>
        <div className="chatwoot-features">
          {features.map(({ title, description }) => (
            <article key={title} className="chatwoot-feature">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="chatwoot-section" id="pricing">
        <h2 className="chatwoot-section__title">پلن‌های قیمت‌گذاری</h2>
        <p className="chatwoot-section__description">
          می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود با نام‌گذاری سریال‌های محبوب مشاهده کنید. نام‌ها صرفاً جنبه
          سرگرمی دارند و امکانات هر پلن با توجه به زیرساخت انتخابی شما یکسان است.
        </p>
        <p className="chatwoot-section__note">
          سه روش ثبت سفارش وجود دارد: استفاده از سرور ابری مگان، نصب بر روی سرور لینوکسی تهیه‌شده توسط شما یا
          دریافت میزبانی اختصاصی بدون نیاز به سرور شخصی.
        </p>
        <div className="chatwoot-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeTheme === id}
              className={`chatwoot-pricing__theme${activeTheme === id ? ' chatwoot-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(id)}
            >
              <span className="chatwoot-pricing__theme-icon" aria-hidden="true">
                {icon}
              </span>
              {label}
            </button>
          ))}
        </div>
        <div className="chatwoot-pricing" id="chatwoot-pricing-panel">
          {currentPlans.map(({ id, title, tier, price, description, infra }) => (
            <article
              key={id}
              className={`chatwoot-plan${activePlan === id ? ' chatwoot-plan--active' : ''}`}
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
              <div className="chatwoot-plan__head">
                <span className="chatwoot-plan__tier">{tier}</span>
                <h3 className="chatwoot-plan__title">{title}</h3>
              </div>
              <div className="chatwoot-plan__price">{price}</div>
              <p className="chatwoot-plan__description">{description}</p>
              <div className="chatwoot-plan__meta">{infra}</div>
              <NavLink to="/login" className="chatwoot-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="chatwoot-section chatwoot-section--surface">
        <h2 className="chatwoot-section__title">سوالات متداول</h2>
        <div className="chatwoot-faq">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="chatwoot-faq__item">
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

export default ChatwootServicePage
