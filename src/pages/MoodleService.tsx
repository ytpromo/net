import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.png'
import moodleLogo from '../assets/moodle-logo.svg'

const benefits = [
  'راه‌اندازی کامل Moodle روی زیرساخت مگان یا سرور اختصاصی شما تنها در چند ساعت',
  'یکپارچه‌سازی دامنه، SSL و احراز هویت بدون نیاز به تیم فنی داخلی',
  'مدیریت کاربران، نقش‌ها و دوره‌ها با تنظیمات پیش‌فرض بهینه‌شده برای سازمان‌ها',
  'بکاپ‌گیری خودکار روزانه و امکان بازیابی سریع محتوای آموزشی',
  'مانیتورینگ سلامت سرویس و هشداردهی هوشمند برای تیم آموزش',
  'سفارشی‌سازی پوسته و برندینگ مطابق هویت سازمانی شما',
  'اتصال آسان به سرویس‌های ایمیل، پیامک و ابزارهای ارتباطی برای اطلاع‌رسانی دوره‌ها',
  'پشتیبانی ۲۴/۷ توسط تیم متخصص مگان برای نگهداری و بهینه‌سازی',
]

const features = [
  {
    title: 'کلاس‌های آنلاین و آفلاین',
    description:
      'طراحی دوره، آزمون، تکلیف و اتوماسیون مسیرهای یادگیری با رابط کاربری فارسی‌سازی‌شده و آماده استفاده.',
  },
  {
    title: 'مدیریت کاربران و نقش‌ها',
    description:
      'تعریف نقش‌های مدیریتی، استاد، دانشجو و مهمان با کنترل دقیق دسترسی و اتصال SSO یا LDAP.',
  },
  {
    title: 'گزارش‌گیری تحلیلی',
    description:
      'دسترسی به داشبوردهای پیشرفته حضور و مشارکت برای مدیران آموزش و تیم منابع انسانی.',
  },
  {
    title: 'یکپارچه‌سازی سرویس‌ها',
    description:
      'اتصال به BigBlueButton، Jitsi، Zoom و سامانه‌های پرداخت یا CRM برای تجربه آموزشی کامل.',
  },
  {
    title: 'اتوماسیون اعلان‌ها',
    description:
      'ارسال ایمیل و پیامک خودکار برای یادآوری جلسات، اعلام نمرات و اطلاع‌رسانی تغییرات دوره.',
  },
  {
    title: 'زیرساخت امن و مقیاس‌پذیر',
    description:
      'استقرار بر بستر ابری مگان یا سرور شما با فایروال، WAF، محدودیت IP و به‌روزرسانی منظم.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🎓',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب سریع Moodle روی سرور ابری لینوکسی مگان با نگهداری و مانیتورینگ کامل.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور مشتری',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی بر روی سرور لینوکسی تهیه‌شده توسط شما همراه با امن‌سازی و مستندسازی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'تحویل سرویس به صورت اختصاصی روی زیرساخت مگان بدون نیاز به سرور شخصی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'lotr',
    label: 'The Lord of the Rings',
    icon: '🧝‍♂️',
    plans: [
      {
        id: 'lotr-edoras',
        title: 'Edoras (ادوراس)',
        tier: 'گارانتی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی روی سرور ابری مگان با آموزش و انتقال دانش به تیم شما.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-rivendell',
        title: 'Rivendell (ریوندل)',
        tier: 'متوسط',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور سازمانی شما با تنظیمات امنیتی و بکاپ خودکار.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-gondor',
        title: 'Gondor (گاندور)',
        tier: 'اورژانسی',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی و تیم پشتیبانی ۲۴/۷ مگان.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'stranger-things',
    label: 'Stranger Things',
    icon: '⚡',
    plans: [
      {
        id: 'st-hawkins',
        title: 'Hawkins High (هاوکینز)',
        tier: 'گارانتی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع بر روی سرور ابری مگان با مانیتورینگ لحظه‌ای.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'st-starcourt',
        title: 'Starcourt Mall (استارکورت)',
        tier: 'متوسط',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار بر روی سرور شما با پایش امنیتی مستمر و اتوماسیون اعلان‌ها.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'st-upside-down',
        title: 'The Upside Down (دنیای وارونه)',
        tier: 'اورژانسی',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی سلف‌هاستد با مقیاس‌پذیری و پشتیبانی ویژه.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'star-trek',
    label: 'Star Trek',
    icon: '🛸',
    plans: [
      {
        id: 'trek-enterprise',
        title: 'USS Enterprise (یواس‌اس اینترپرایز)',
        tier: 'گارانتی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور ابری مگان با مدیریت کامل به‌روزرسانی‌ها.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'trek-deep-space-nine',
        title: 'Deep Space Nine (دیپ اسپیس ناین)',
        tier: 'متوسط',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور شما با امن‌سازی شبکه و اتصال SSO.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'trek-voyager',
        title: 'USS Voyager (یواس‌اس وویجر)',
        tier: 'اورژانسی',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی و ظرفیت‌سازی سریع برای رشد کاربران.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'چقدر طول می‌کشد تا Moodle آماده استفاده شود؟',
    answer:
      'در کمتر از چند ساعت محیط Moodle شما با دامنه، SSL و تنظیمات فارسی آماده و به تیم آموزش تحویل می‌شود.',
  },
  {
    question: 'آیا می‌توان Moodle را روی سرور خودمان دریافت کرد؟',
    answer:
      'بله، در پلن‌های Rivendell، Starcourt و Deep Space Nine نصب روی سرور لینوکسی شما انجام می‌شود و تیم ما نگهداری را بر عهده می‌گیرد.',
  },
  {
    question: 'پشتیبان‌گیری و امنیت سامانه چگونه مدیریت می‌شود؟',
    answer:
      'بکاپ‌گیری نسخه‌ای روزانه، رمزنگاری ارتباطات با SSL و محدودسازی IP به صورت پیش‌فرض فعال است و می‌توان سیاست‌ها را سفارشی کرد.',
  },
  {
    question: 'آیا امکان اتصال به سرویس‌های ویدئوکنفرانس وجود دارد؟',
    answer:
      'بله، یکپارچه‌سازی با BigBlueButton، Jitsi و سایر سرویس‌های آموزش آنلاین در تمام پلن‌ها در دسترس است.',
  },
]

const MoodleServicePage = () => {
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
    <section className="moodle-service">
      <header className="moodle-hero">
        <div className="moodle-hero__badge">Managed LMS</div>
        <div className="moodle-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Moodle">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={moodleLogo} alt="لوگوی Moodle" />
          </div>
        </div>
        <h1 className="moodle-hero__title">LMS مدیریت‌شده Moodle روی زیرساخت ابری مگان</h1>
        <p className="moodle-hero__subtitle">
          راه‌اندازی Moodle از صفر می‌تواند برای تیم‌های آموزشی زمان‌بر و پرهزینه باشد. با سرویس مدیریت‌شده
          مگان، کلاس‌های آنلاین، آزمون‌ها و محتوای آموزشی خود را بدون دغدغه زیرساختی منتشر کنید.
        </p>
        <div className="moodle-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="moodle-section">
        <div className="moodle-section__content">
          <h2 className="moodle-section__title">چرا Moodle مدیریت‌شده مگان؟</h2>
          <p className="moodle-section__description">
            بسیاری از سازمان‌ها برای پیاده‌سازی Moodle با چالش پیکربندی سرور، امنیت، بکاپ و مقیاس‌پذیری روبه‌رو
            می‌شوند. ما با زیرساخت آماده و تیم متخصص، تمامی این پیچیدگی‌ها را مدیریت می‌کنیم تا شما روی یادگیری
            تمرکز کنید.
          </p>
          <div className="moodle-insight">
            <article className="moodle-insight__card">
              <span className="moodle-insight__label">مشکل</span>
              <h3>پیچیدگی راه‌اندازی و نگهداری</h3>
              <p>
                نصب، فارسی‌سازی، امن‌سازی و به‌روزرسانی Moodle نیاز به تخصص DevOps و تجربه در نگهداری سامانه‌های
                آموزشی دارد و معمولاً زمان زیادی از تیم شما می‌گیرد.
              </p>
            </article>
            <article className="moodle-insight__card">
              <span className="moodle-insight__label moodle-insight__label--solution">راه‌حل</span>
              <h3>زیرساخت آماده و پشتیبانی دائمی</h3>
              <p>
                مگان سرویس Moodle را به صورت مدیریت‌شده تحویل می‌دهد؛ از نصب و بروزرسانی تا مانیتورینگ و بکاپ را ما
                انجام می‌دهیم و تیم شما فقط بر توسعه محتوا و یادگیری تمرکز می‌کند.
              </p>
            </article>
          </div>
          <div className="moodle-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="moodle-benefits__item">
                <span className="moodle-benefits__icon" aria-hidden="true">
                  •
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="moodle-section">
        <h2 className="moodle-section__title">ویژگی‌ها</h2>
        <div className="moodle-features">
          {features.map(({ title, description }) => (
            <article key={title} className="moodle-feature">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="moodle-section" id="pricing">
        <h2 className="moodle-section__title">پلن‌های قیمت‌گذاری</h2>
        <p className="moodle-section__description">
          بسته مناسب را بر اساس زیرساختی که در اختیار دارید انتخاب کنید. همه پلن‌ها شامل پشتیبانی ۲۴/۷،
          مانیتورینگ سلامت سرویس و به‌روزرسانی منظم هستند.
        </p>
        <p className="moodle-section__note">
          می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود و با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ تم‌های قیمتی تنها جنبه
          فان دارند و امکانات هر سناریو یکسان است.
        </p>
        <div className="moodle-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              className={`moodle-pricing__theme ${activeTheme === id ? 'moodle-pricing__theme--active' : ''}`}
              aria-selected={activeTheme === id}
              tabIndex={activeTheme === id ? 0 : -1}
              aria-controls="moodle-pricing-panel"
              onClick={() => handleThemeChange(id)}
            >
              <span className="moodle-pricing__theme-icon" aria-hidden="true">
                {icon}
              </span>
              {label}
            </button>
          ))}
        </div>
        <div className="moodle-pricing" id="moodle-pricing-panel">
          {currentPlans.map(({ id, title, tier, price, description, infra }) => (
            <article
              key={id}
              className={`moodle-plan ${activePlan === id ? 'moodle-plan--active' : ''}`}
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
              <div className="moodle-plan__head">
                <span className="moodle-plan__tier">{tier}</span>
                <h3 className="moodle-plan__title">{title}</h3>
              </div>
              <div className="moodle-plan__price">{price}</div>
              <p className="moodle-plan__description">{description}</p>
              <div className="moodle-plan__meta">{infra}</div>
              <NavLink to="/login" className="moodle-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="moodle-section moodle-section--surface">
        <h2 className="moodle-section__title">سوالات متداول</h2>
        <div className="moodle-faq">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="moodle-faq__item">
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

export default MoodleServicePage
