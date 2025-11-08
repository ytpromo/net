import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
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
        description: 'راه‌اندازی Moodle روی سرورهای ابری مگان با پشتیبان‌گیری و مانیتورینگ کامل.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور لینوکسی سازمان شما همراه با امن‌سازی و تنظیمات فارسی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی Moodle روی زیرساخت مگان با SLA آموزشی و پشتیبانی ۲۴/۷.',
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
        id: 'got-kings-landing-moodle',
        title: "King's Landing (کینگز لندینگ)",
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کالج آنلاین شما روی سرور مگان با راه‌اندازی سریع و یکپارچه‌سازی دامنه.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'got-winterfell-moodle',
        title: 'Winterfell (وینترفل)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور آموزشی شما با تنظیم نقش‌ها، LDAP و سیاست‌های دسترسی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'got-the-wall-moodle',
        title: 'The Wall (دیوار)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی برای دانشگاه‌ها و موسسات پرجمعیت.',
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
        id: 'lotr-minas-tirith-moodle',
        title: 'Minas Tirith (میناس تیریث)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور مگان با کلاس‌های آماده، قالب‌های فارسی و بکاپ خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-rivendell-moodle',
        title: 'Rivendell (ریوندل)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی زیرساخت شما با سفارشی‌سازی پوسته و افزونه‌های درخواستی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-shire-moodle',
        title: 'The Shire (شایر)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم پشتیبانی ویژه برای مدیریت ترم‌ها و آزمون‌های حجیم.',
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
        id: 'witcher-novigrad-moodle',
        title: 'Novigrad (نوویگراد)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع روی سرور مگان با گزارش‌گیری آموزشی و اعلان‌های خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-oxenfurt-moodle',
        title: 'Oxenfurt (اگزن‌فورت)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با ادغام سیستم‌های احراز هویت و سامانه‌های دانشجویی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-kaer-morhen-moodle',
        title: 'Kaer Morhen (کائر مورهن)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA آموزشی، مقیاس‌پذیری آنی و پایش لحظه‌ای.',
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
        id: 'vikings-kattegat-moodle',
        title: 'Kattegat (کاتگات)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلاس‌های آنلاین روی زیرساخت مگان با تحویل سریع و دسترسی دانشجویان در سراسر کشور.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'vikings-uppsala-moodle',
        title: 'Uppsala (اوپسالا)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با زمان‌بندی آزمون‌ها و مانیتورینگ مصرف منابع.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'vikings-paris-moodle',
        title: 'Paris (پاریس)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با ظرفیت بالا، CDN محتوا و پشتیبانی ویژه در ایام امتحانات.',
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
        id: 'avatar-fire-nation-moodle',
        title: 'Fire Nation Capital (پایتخت ملت آتش)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار Moodle روی سرور مگان با بکاپ روزانه و لایه‌های امنیتی پیش‌فرض.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'avatar-ba-sing-se-moodle',
        title: 'Ba Sing Se (با سینگ سه)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی روی سرور شما با اتوماسیون بروزرسانی و مانیتورینگ دائمی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'avatar-air-temple-moodle',
        title: 'Southern Air Temple (معبد هوا جنوبی)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با مقیاس‌پذیری لحظه‌ای و تیم پشتیبانی اختصاصی آموزش.',
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
        id: 'hp-ministry-moodle',
        title: 'Ministry of Magic (وزارت جادو)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع با SSO، قالب‌های درسی و نوتیفیکیشن‌های خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'hp-hogwarts-moodle',
        title: 'Hogwarts (هاگوارتز)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با مدیریت کاربران، لاگ فعالیت و محدودسازی IP.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'hp-hogsmeade-moodle',
        title: 'Hogsmeade (هاگزمید)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA ویژه، پشتیبانی ۲۴/۷ و تضمین بروزرسانی منظم.',
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
      'بله، در پلن‌های Winterfell، Rivendell و Oxenfurt نصب روی سرور لینوکسی شما انجام می‌شود و تیم ما نگهداری را بر عهده می‌گیرد.',
  },
  {
    question: 'پشتیبان‌گیری و امنیت سامانه چگونه مدیریت می‌شود؟',
    answer:
      'بکاپ‌گیری نسخه‌ای روزانه، رمزنگاری ارتباطات و محدودسازی IP به صورت پیش‌فرض فعال است و سیاست‌ها قابل سفارشی‌سازی هستند.',
  },
  {
    question: 'آیا امکان اتصال به سرویس‌های ویدئوکنفرانس وجود دارد؟',
    answer:
      'یکپارچه‌سازی با BigBlueButton، Jitsi، Zoom و سایر سرویس‌ها در تمام پلن‌ها قابل ارائه است.',
  },
  {
    question: 'اگر نیاز به افزونه یا قالب سفارشی داشته باشیم چه می‌شود؟',
    answer:
      'تیم مگان افزونه‌های درخواستی را نصب، به‌روزرسانی و با استانداردهای امنیتی بررسی می‌کند تا تجربه کاربری پایدار باشد.',
  },
  {
    question: 'آیا می‌توان ظرفیت کاربران یا منابع را افزایش داد؟',
    answer:
      'بله، با افزودن نود یا ارتقای منابع، ظرفیت بدون وقفه و در هماهنگی با تیم آموزش شما افزایش داده می‌شود.',
  },
  {
    question: 'نام تم‌های قیمت‌گذاری چه تفاوتی ایجاد می‌کنند؟',
    answer:
      'تم‌ها صرفاً برای ایجاد حس سرگرمی و انتخاب بر اساس علاقه طراحی شده‌اند و قیمت و امکانات هر سناریو ثابت باقی می‌ماند.',
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
