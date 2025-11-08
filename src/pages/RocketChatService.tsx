import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import rocketChatLogo from '../assets/rocketchat-logo.svg'

const benefits = [
  'راه‌اندازی خودکار Rocket.Chat بر روی کلود مگان یا سرور سازمان شما تنها در چند ساعت',
  'یکپارچگی آماده با LDAP، SSO و ابزارهای سازمانی برای مدیریت دسترسی متمرکز',
  'پشتیبان‌گیری زمان‌بندی‌شده و بازیابی سریع جهت تداوم گفت‌وگوهای حیاتی',
  'مانیتورینگ، هشداردهی و داشبورد سلامت سرویس با پشتیبانی ۲۴/۷ تیم مگان',
  'امکان سفارشی‌سازی رابط، دامنه و برندینگ مطابق هویت بصری سازمان',
  'پیاده‌سازی سیاست‌های امنیتی پیشرفته شامل رمزنگاری، محدودسازی IP و Audit Log',
  'قابلیت اتصال به CRM، Service Desk و ربات‌های گفتگو برای اتوماسیون فرآیندها',
  'مقیاس‌پذیری افقی برای تیم‌های بزرگ با کانال‌های متعدد، تماس صوتی و ویدیویی',
]

const features = [
  {
    title: 'ارتباط چندکاناله',
    description:
      'کانال‌های عمومی و خصوصی، چت مستقیم، تماس صوتی و تصویری و اشتراک فایل با کنترل کامل روی مجوزها.',
  },
  {
    title: 'یکپارچگی هویت سازمانی',
    description:
      'پشتیبانی کامل از LDAP، Active Directory، SSO و OAuth برای مدیریت کاربران در مقیاس سازمانی.',
  },
  {
    title: 'اتوماسیون و ربات‌ها',
    description:
      'پشتیبانی از Webhook، ربات‌های سفارشی و اتصال به ابزارهای DevOps برای ایجاد جریان‌های خودکار.',
  },
  {
    title: 'امنیت و تطبیق‌پذیری',
    description:
      'رمزنگاری TLS، لاگ ممیزی، DLP و سیاست‌های نگهداری داده برای پاسخ به الزامات امنیتی و قانونی.',
  },
  {
    title: 'مقیاس‌پذیری و High Availability',
    description:
      'کلاسترینگ مدیریت‌شده، پخش افقی و بالانس بار برای پشتیبانی از هزاران کاربر همزمان.',
  },
  {
    title: 'گزارش‌گیری و آنالیتیکس',
    description:
      'داشبوردهای مصرف منابع، گزارش مشارکت تیم‌ها و خروجی API برای تحلیل‌های پیشرفته.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🚀',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی Rocket.Chat روی زیرساخت مدیریت‌شده مگان با نگهداری کامل و به‌روزرسانی خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور سازمان شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی بر روی سرور لینوکسی خریداری‌شده توسط شما با سیاست‌های امنیتی سفارشی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'تحویل سرویس کاملاً مدیریت‌شده بدون نیاز به سرور شخصی با SLA طلایی و پشتیبانی ۲۴/۷.',
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
        id: 'got-night-watch',
        title: 'Night Watch (نگهبانان شب)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان با نگهبانی دائمی برای کانال‌های حیاتی تیم پشتیبانی و عملیات.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'got-dragonstone',
        title: 'Dragonstone (دراگون‌استون)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با دیوارهای آتشین دراگون‌گلس و دسترسی امن برای مدیران.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'got-iron-throne',
        title: 'Iron Throne (آیرون ثرون)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با شوراهای مدیریتی، مانیتورینگ لحظه‌ای و SLA سلطنتی.',
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
        id: 'lotr-fellowship',
        title: 'Fellowship (یاران حلقه)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'گفت‌وگوی تیمی روی کلود مگان برای سفرهای چابک و همکاری هماهنگ.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-minas-tirith',
        title: 'Minas Tirith (میناس تیریث)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با برج‌های دفاعی و احراز هویت لایه‌ای برای کاربران.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-valinor',
        title: 'Valinor (والینور)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با نور جاودانه SLA و پشتیبانی برای سازمان‌های بزرگ.',
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
        description: 'موتور ارتباطی روی کلود مگان برای تیم‌هایی که آماده پرواز به کهکشان همکاری هستند.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'startrek-deepspace',
        title: 'Deep Space Nine (دیپ‌اسپیس ناین)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور سازمانی شما با پروتکل‌های امنیتی استارفلیت و یکپارچگی سامانه‌ها.',
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
        description: 'کلود مگان با سپر جادویی برای مبارزه با هیولاهای Downtime و Latency.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-novigrad',
        title: 'Novigrad (نوویگراد)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با قوانین امنیتی شهر و اتصال به سیستم‌های داخلی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-brotherhood',
        title: 'Brotherhood (محفل جادوگران)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم پشتیبانی جادویی و SLA ویژه برای پروژه‌های حساس.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'راه‌اندازی Rocket.Chat مدیریت‌شده چقدر زمان می‌برد؟',
    answer:
      'پس از ثبت سفارش، تیم ما در کمتر از یک روز کاری سرویس را روی زیرساخت انتخابی شما راه‌اندازی کرده و دسترسی مدیران را ارسال می‌کند.',
  },
  {
    question: 'آیا امکان مهاجرت از نصب فعلی Rocket.Chat یا ابزارهای مشابه وجود دارد؟',
    answer:
      'بله، ما پیام‌ها، کانال‌ها و فایل‌های شما را از نصب فعلی یا ابزارهایی مانند Slack و Mattermost استخراج و بدون قطعی منتقل می‌کنیم.',
  },
  {
    question: 'برای امنیت و انطباق چه اقداماتی انجام می‌دهید؟',
    answer:
      'گواهی SSL اختصاصی، فایروال چندلایه، ممیزی دسترسی، پشتیبان‌گیری نسخه‌ای و تست بازیابی دوره‌ای بخشی از چک‌لیست امنیتی ماست.',
  },
  {
    question: 'چگونه می‌توان Rocket.Chat را با سامانه‌های داخلی یکپارچه کرد؟',
    answer:
      'با استفاده از REST API، Webhook، و کانکتورهای آماده برای Jira، GitLab، Zammad و سایر سرویس‌ها، اتوماسیون و همگام‌سازی داده ساده می‌شود.',
  },
  {
    question: 'آیا امکان سفارشی‌سازی برندینگ و دامنه وجود دارد؟',
    answer:
      'بله، دامنه سفارشی، تم رنگی، لوگو و پیام‌های خوشامدگویی مطابق هویت بصری سازمان شما پیکربندی می‌شود.',
  },
  {
    question: 'چه نوع پشتیبانی و SLA ارائه می‌شود؟',
    answer:
      'پشتیبانی ۲۴/۷ از طریق تیکت، تماس و پیام‌رسان مگان ارائه می‌شود و SLA بسته به پلن انتخابی شامل تضمین دسترس‌پذیری تا ۹۹٫۹٪ است.',
  },
  {
    question: 'در صورت رشد تعداد کاربران چه اتفاقی می‌افتد؟',
    answer:
      'زیرساخت به‌صورت پویا مقیاس می‌یابد، منابع جدید اضافه می‌شوند و تیم عملیات ظرفیت کانال‌ها و پایگاه‌داده را با رشد سازمان هماهنگ می‌کند.',
  },
  {
    question: 'آیا می‌توان دسترسی مهمان یا مشتری را به صورت کنترل‌شده فراهم کرد؟',
    answer:
      'بله، ما نقش‌های مهمان، کانال‌های محدود و سیاست‌های انقضای دسترسی را فعال می‌کنیم تا تیم‌های پشتیبانی و فروش بتوانند با مشتریان تعامل امن داشته باشند.',
  },
]

const RocketChatServicePage = () => {
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
    <section className="rocketchat-service">
      <header className="rocketchat-hero">
        <div className="rocketchat-hero__badge">Team Collaboration</div>
        <div className="rocketchat-hero__logo hero-logo-pair" aria-label="لوگوی مگان و راکت‌چت">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={rocketChatLogo} alt="لوگوی Rocket.Chat" />
          </div>
        </div>
        <h1 className="rocketchat-hero__title">Rocket.Chat مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="rocketchat-hero__subtitle">
          گفت‌وگوی تیمی، تماس و همکاری را بدون دغدغه زیرساخت تجربه کنید. ما نصب، امن‌سازی، مانیتورینگ و
          مقیاس‌پذیری Rocket.Chat را انجام می‌دهیم تا تیم شما روی ارتباط مؤثر تمرکز کند.
        </p>
        <div className="rocketchat-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده قیمت‌گذاری
          </a>
        </div>
      </header>

      <section className="rocketchat-section">
        <div className="rocketchat-section__content">
          <h2 className="rocketchat-section__title">چرا Rocket.Chat مدیریت‌شده مگان؟</h2>
          <p className="rocketchat-section__description">
            راه‌اندازی Rocket.Chat روی زیرساخت‌های مختلف نیاز به تخصص DevOps، امن‌سازی و مانیتورینگ دارد. تیم
            مگان زیرساخت آماده و مقیاس‌پذیر را فراهم می‌کند تا شما بر تجربه همکاری و ارائه خدمات به مشتریان تمرکز
            کنید.
          </p>
        </div>
        <div className="rocketchat-insight">
          <article className="rocketchat-insight__card">
            <span className="rocketchat-insight__label">مشکل</span>
            <p>
              هماهنگ‌کردن دیتابیس، پروکسی، احراز هویت و مقیاس‌پذیری در نصب‌های سلف‌هاستد Rocket.Chat زمان‌بر و
              مستعد خطاست و نیاز به تیم تخصصی دارد.
            </p>
          </article>
          <article className="rocketchat-insight__card">
            <span className="rocketchat-insight__label rocketchat-insight__label--solution">راه‌حل</span>
            <p>
              با سرویس مدیریت‌شده مگان، نصب خودکار، مانیتورینگ، بکاپ و امنیت توسط تیم ما انجام می‌شود تا شما با
              خیال راحت از پلتفرم همکاری استفاده کنید.
            </p>
          </article>
        </div>
        <div className="rocketchat-benefits">
          {benefits.map((benefit) => (
            <div key={benefit} className="rocketchat-benefits__item">
              <span className="rocketchat-benefits__icon" aria-hidden="true">
                •
              </span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rocketchat-section rocketchat-section--surface">
        <h2 className="rocketchat-section__title">ویژگی‌های کلیدی Rocket.Chat در مگان</h2>
        <div className="rocketchat-features">
          {features.map(({ title, description }) => (
            <article key={title} className="rocketchat-feature">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rocketchat-section" id="pricing">
        <h2 className="rocketchat-section__title">پلن‌های قیمت‌گذاری</h2>
        <p className="rocketchat-section__description">
          می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود با نام‌گذاری سریال‌های محبوب مشاهده کنید. نام‌ها صرفاً جنبه
          سرگرمی دارند و امکانات هر پلن با توجه به زیرساخت انتخابی شما یکسان است.
        </p>
        <p className="rocketchat-section__note">
          سه روش ثبت سفارش وجود دارد: استفاده از سرور ابری مگان، نصب بر روی سرور لینوکسی تهیه‌شده توسط شما یا
          دریافت میزبانی اختصاصی بدون نیاز به سرور شخصی.
        </p>
        <div className="rocketchat-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeTheme === id}
              className={`rocketchat-pricing__theme${activeTheme === id ? ' rocketchat-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(id)}
            >
              <span className="rocketchat-pricing__theme-icon" aria-hidden="true">
                {icon}
              </span>
              {label}
            </button>
          ))}
        </div>
        <div className="rocketchat-pricing" id="rocketchat-pricing-panel">
          {currentPlans.map(({ id, title, tier, price, description, infra }) => (
            <article
              key={id}
              className={`rocketchat-plan${activePlan === id ? ' rocketchat-plan--active' : ''}`}
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
              <div className="rocketchat-plan__head">
                <span className="rocketchat-plan__tier">{tier}</span>
                <h3 className="rocketchat-plan__title">{title}</h3>
              </div>
              <div className="rocketchat-plan__price">{price}</div>
              <p className="rocketchat-plan__description">{description}</p>
              <div className="rocketchat-plan__meta">{infra}</div>
              <NavLink to="/login" className="rocketchat-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="rocketchat-section rocketchat-section--surface">
        <h2 className="rocketchat-section__title">سوالات متداول</h2>
        <div className="rocketchat-faq">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="rocketchat-faq__item">
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

export default RocketChatServicePage
