import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import mattermostLogo from '../assets/mattermost-logo.svg'

const benefits = [
  'راه‌اندازی Mattermost مدیریت‌شده بدون نیاز به تیم DevOps داخلی و صرفه‌جویی در زمان',
  'یکپارچگی کامل با LDAP، SSO، OAuth و Active Directory برای احراز هویت سازمانی',
  'کانال‌های امن برای تیم‌های عملیات، توسعه، پشتیبانی و مدیران با کنترل دقیق دسترسی',
  'بکاپ‌گیری نسخه‌ای و بازیابی سریع مکالمات، فایل‌ها و تنظیمات حیاتی سازمان',
  'مانیتورینگ، هشداردهی و گزارش‌گیری لحظه‌ای با داشبوردهای قابل سفارشی‌سازی',
  'پشتیبانی ۲۴/۷ و SLA سازمانی برای اطمینان از دسترس‌پذیری و عملکرد پایدار',
  'امکان استقرار روی کلود مگان، سرور اختصاصی شما یا دیتاسنترهای طرف ثالث',
  'سفارشی‌سازی کامل برندینگ، دامنه، افزونه‌ها و اتوماسیون‌های سازمانی',
]

const features = [
  {
    title: 'ارتباط تیمی چندلایه',
    description:
      'کانال‌های عمومی و خصوصی، مکالمه مستقیم، گروه‌های مأموریت و اشتراک فایل با کنترل کامل روی مجوزها.',
  },
  {
    title: 'امنیت و تطبیق‌پذیری',
    description:
      'رمزنگاری سرتاسری، مدیریت کلید، ممیزی فعالیت و سیاست‌های نگهداری داده جهت پاسخ‌گویی به الزامات امنیتی.',
  },
  {
    title: 'اتوماسیون و DevOps',
    description:
      'وب‌هوک‌ها، ربات‌ها و API REST/GraphQL برای اتصال Mattermost به CI/CD و جریان‌های اتوماسیون سازمان.',
  },
  {
    title: 'مدیریت کاربران پیشرفته',
    description:
      'تعریف نقش‌های سفارشی، قوانین دسترسی، Provisioning خودکار و اتصال به سیستم‌های HR برای همگام‌سازی کاربران.',
  },
  {
    title: 'یکپارچگی با ابزارهای سازمانی',
    description:
      'اتصال آماده به Jira، GitLab، ServiceNow، Zendesk و سایر سرویس‌ها برای اطلاع‌رسانی و همکاری سریع.',
  },
  {
    title: 'مقیاس‌پذیری و High Availability',
    description:
      'کلاسترینگ مدیریت‌شده، Auto Scaling و بالانس بار برای پشتیبانی از هزاران کاربر همزمان و تیم‌های بین‌المللی.',
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
        description: 'نصب Mattermost روی زیرساخت مدیریت‌شده مگان با مانیتورینگ، بکاپ و به‌روزرسانی خودکار.',
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
        description: 'استقرار سریع روی کلود مگان برای تیم‌هایی که به مراقبت ۲۴ ساعته نیاز دارند.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'got-dragonstone',
        title: 'Dragonstone (دراگون‌استون)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با دیواره‌های دفاعی دراگون‌گلس و سیاست‌های امنیتی چندلایه.',
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
        description: 'همکاری تیمی روی کلود مگان برای سفرهای چابک و مأموریت‌های مشترک.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-minas-tirith',
        title: 'Minas Tirith (میناس تیریث)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با برج‌های دفاعی و احراز هویت چندمرحله‌ای.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-valinor',
        title: 'Valinor (والینور)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با نور جاودانه SLA و تیم عملیات همیشه در دسترس.',
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
        description: 'کلود مگان برای سفر مطمئن در کهکشان همکاری تیمی بدون پیچیدگی زیرساخت.',
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
        description: 'میزبانی اختصاصی برای مأموریت‌های طولانی با تضمین دسترس‌پذیری و پشتیبانی ویژه.',
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
        description: 'کلود مگان با سپر جادویی برای نبرد با هیولاهای Downtime و Latency.',
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
        description: 'میزبانی اختصاصی با تیم عملیات شبانه‌روزی برای پروژه‌های حساس و مقیاس بزرگ.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'راه‌اندازی Mattermost مدیریت‌شده مگان چقدر زمان می‌برد؟',
    answer:
      'پس از ثبت سفارش، تیم ما در کمتر از یک روز کاری سرویس را روی زیرساخت انتخابی شما راه‌اندازی کرده و دسترسی مدیران را ارسال می‌کند.',
  },
  {
    question: 'آیا امکان مهاجرت از نصب فعلی Mattermost یا ابزارهای مشابه وجود دارد؟',
    answer:
      'بله، ما پیام‌ها، فایل‌ها و کانال‌های شما را از نصب فعلی یا سرویس‌هایی مانند Slack و Rocket.Chat استخراج و بدون قطعی منتقل می‌کنیم.',
  },
  {
    question: 'چه گزینه‌های استقرار و زیرساختی در دسترس است؟',
    answer:
      'می‌توانید بین کلود مگان، سرور لینوکسی خود یا میزبانی اختصاصی بدون نیاز به زیرساخت شخصی انتخاب کنید و در هر حالت از مدیریت کامل بهره‌مند شوید.',
  },
  {
    question: 'چگونه امنیت و محرمانگی داده‌ها تضمین می‌شود؟',
    answer:
      'گواهی SSL اختصاصی، فایروال چندلایه، ممیزی دسترسی، رمزنگاری داده‌ها در حالت سکون و بکاپ‌گیری نسخه‌ای بخشی از استانداردهای امنیتی ماست.',
  },
  {
    question: 'آیا می‌توان برندینگ و دامنه سرویس را شخصی‌سازی کرد؟',
    answer:
      'بله، دامنه سفارشی، تم رنگی، لوگو، پیام خوشامد و سیاست‌های عضویت مطابق هویت بصری سازمان شما پیکربندی می‌شود.',
  },
  {
    question: 'چگونه Mattermost را با ابزارهای سازمانی یکپارچه می‌کنید؟',
    answer:
      'از طریق کانکتورهای آماده، Webhook، ربات‌ها و API کامل، یکپارچگی با ابزارهایی مانند Jira، GitLab، Zammad و سیستم‌های داخلی انجام می‌شود.',
  },
  {
    question: 'چه نوع پشتیبانی و SLA دریافت می‌کنیم؟',
    answer:
      'پشتیبانی ۲۴/۷ از طریق تیکت، تماس و پیام‌رسان مگان ارائه می‌شود و بسته به پلن انتخابی، SLA تا ۹۹٫۹٪ دسترس‌پذیری تضمین خواهد شد.',
  },
  {
    question: 'اگر تعداد کاربران یا تیم‌ها افزایش پیدا کند چه می‌شود؟',
    answer:
      'زیرساخت به صورت پویا مقیاس می‌یابد، منابع جدید اضافه می‌شود و تیم عملیات ظرفیت کانال‌ها و دیتابیس را با رشد سازمان هماهنگ می‌کند.',
  },
]

const MattermostServicePage = () => {
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
    <section className="mattermost-service">
      <header className="mattermost-hero">
        <div className="mattermost-hero__badge">Team Collaboration</div>
        <div className="mattermost-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Mattermost">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={mattermostLogo} alt="لوگوی Mattermost" />
          </div>
        </div>
        <h1 className="mattermost-hero__title">Mattermost مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="mattermost-hero__subtitle">
          استقرار، نگهداری و مقیاس‌پذیری Mattermost را به تیم مگان بسپارید تا ارتباطات حیاتی سازمان شما همیشه در
          دسترس، ایمن و سریع باقی بماند.
        </p>
        <div className="mattermost-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده قیمت‌گذاری
          </a>
        </div>
      </header>

      <section className="mattermost-section">
        <div className="mattermost-section__content">
          <h2 className="mattermost-section__title">چرا Mattermost مدیریت‌شده مگان؟</h2>
          <p className="mattermost-section__description">
            راه‌اندازی Mattermost روی زیرساخت‌های مختلف نیاز به تخصص DevOps، امن‌سازی و مانیتورینگ دارد. تیم مگان
            زیرساخت آماده و مقیاس‌پذیر را فراهم می‌کند تا شما بر همکاری تیمی و ارائه خدمات به مشتریان تمرکز کنید.
          </p>
        </div>
        <div className="mattermost-insight">
          <article className="mattermost-insight__card">
            <span className="mattermost-insight__label">مشکل</span>
            <p>
              هماهنگ‌کردن پایگاه‌داده، ذخیره‌ساز فایل، احراز هویت و مقیاس‌پذیری در نصب‌های سلف‌هاستد Mattermost زمان‌بر
              و مستعد خطاست و نیاز به تیم تخصصی دارد.
            </p>
          </article>
          <article className="mattermost-insight__card">
            <span className="mattermost-insight__label mattermost-insight__label--solution">راه‌حل</span>
            <p>
              با سرویس مدیریت‌شده مگان، نصب خودکار، مانیتورینگ، بکاپ و امنیت توسط تیم ما انجام می‌شود تا شما با خیال
              راحت از پلتفرم همکاری متن‌باز Mattermost استفاده کنید.
            </p>
          </article>
        </div>
        <div className="mattermost-benefits">
          {benefits.map((benefit) => (
            <div key={benefit} className="mattermost-benefits__item">
              <span className="mattermost-benefits__icon" aria-hidden="true">
                •
              </span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mattermost-section mattermost-section--surface">
        <h2 className="mattermost-section__title">ویژگی‌های کلیدی Mattermost در مگان</h2>
        <div className="mattermost-features">
          {features.map(({ title, description }) => (
            <article key={title} className="mattermost-feature">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mattermost-section" id="pricing">
        <h2 className="mattermost-section__title">پلن‌های قیمت‌گذاری</h2>
        <p className="mattermost-section__description">
          می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود با نام‌گذاری سریال‌های محبوب مشاهده کنید. نام‌ها صرفاً جنبه
          سرگرمی دارند و امکانات هر پلن با توجه به زیرساخت انتخابی شما یکسان است.
        </p>
        <p className="mattermost-section__note">
          سه روش ثبت سفارش وجود دارد: استفاده از سرور ابری مگان، نصب بر روی سرور لینوکسی تهیه‌شده توسط شما یا دریافت
          میزبانی اختصاصی بدون نیاز به سرور شخصی.
        </p>
        <div className="mattermost-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeTheme === id}
              className={`mattermost-pricing__theme${activeTheme === id ? ' mattermost-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(id)}
            >
              <span className="mattermost-pricing__theme-icon" aria-hidden="true">
                {icon}
              </span>
              {label}
            </button>
          ))}
        </div>
        <div className="mattermost-pricing" id="mattermost-pricing-panel">
          {currentPlans.map(({ id, title, tier, price, description, infra }) => (
            <article
              key={id}
              className={`mattermost-plan${activePlan === id ? ' mattermost-plan--active' : ''}`}
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
              <div className="mattermost-plan__head">
                <span className="mattermost-plan__tier">{tier}</span>
                <h3 className="mattermost-plan__title">{title}</h3>
              </div>
              <div className="mattermost-plan__price">{price}</div>
              <p className="mattermost-plan__description">{description}</p>
              <div className="mattermost-plan__meta">{infra}</div>
              <NavLink to="/login" className="mattermost-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="mattermost-section mattermost-section--surface">
        <h2 className="mattermost-section__title">سوالات متداول</h2>
        <div className="mattermost-faq">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="mattermost-faq__item">
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

export default MattermostServicePage
