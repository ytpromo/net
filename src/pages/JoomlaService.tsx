import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import joomlaLogo from '../assets/joomla-logo.svg'

const benefits = [
  'استقرار کامل Joomla به همراه MariaDB تنها در چند دقیقه روی زیرساخت انتخابی شما',
  'پیکربندی ایمن دیتابیس، بهینه‌سازی کش و تنظیمات PHP توسط تیم متخصص مگان',
  'بکاپ‌گیری روزانه از فایل‌ها و دیتابیس با امکان بازیابی در لحظه',
  'مانیتورینگ ۲۴/۷، هشداردهی هوشمند و داشبورد سلامت سرویس برای تیم‌های عملیاتی',
  'امکان اتصال به سرویس‌های ایمیل سازمانی، LDAP و Single Sign-On',
  'خودکارسازی گواهی SSL، فایروال و محدودسازی IP برای حفاظت از داده‌ها',
  'امکان استقرار Hybrid: بخشی روی کلود مگان و بخشی روی سرور مشتری',
  'پشتیبانی مستمر برای به‌روزرسانی افزونه‌ها، قالب‌ها و هسته Joomla',
]

const features = [
  {
    title: 'راه‌اندازی چندسایته و مولتی‌لینگوال',
    description:
      'ساخت و مدیریت چندین سایت و زبان در یک نصب واحد با تنظیمات کش و CDN برای تحویل سریع محتوا.',
  },
  {
    title: 'بهینه‌سازی MariaDB',
    description:
      'تنظیم پارامترهای MariaDB، ایندکس‌گذاری و مانیتورینگ کوئری‌ها برای کارایی بالا در بارهای پرترافیک.',
  },
  {
    title: 'امنیت و کنترل دسترسی پیشرفته',
    description:
      'فعال‌سازی MFA، محدودسازی نقش‌ها، ثبت لاگ دقیق و محافظت در برابر حملات رایج وب.',
  },
  {
    title: 'DevOps و CICD برای Joomla',
    description:
      'روند دیپلوی خودکار افزونه‌ها و قالب‌ها با محیط Stage و Production برای تیم‌های توسعه.',
  },
  {
    title: 'مقیاس‌پذیری و High Availability',
    description:
      'استفاده از کانتینر و کلاستر دیتابیس برای تحمل خطا و مقیاس‌پذیری افقی در رویدادهای پرترافیک.',
  },
  {
    title: 'یکپارچگی با اکوسیستم سازمانی',
    description:
      'اتصال امن به سرویس‌های ایمیل، پیامک، درگاه پرداخت و سیستم‌های داخلی از طریق API.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🧩',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description:
          'نصب Joomla و MariaDB روی کلود مدیریت‌شده مگان با نگهداری کامل، SSL و بکاپ روزانه.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور سازمان شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description:
          'دیپلوی روی سرور لینوکسی تهیه‌شده توسط شما با بهینه‌سازی امنیتی و مانیتورینگ یکپارچه.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description:
          'تحویل سرویس کاملاً مدیریت‌شده بدون نیاز به زیرساخت قبلی با SLA سازمانی و تیم عملیات اختصاصی.',
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
        id: 'got-winterfell',
        title: 'Winterfell (وینترفِل)',
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان با دیواره‌های دفاعی شمال برای حفاظت از محتوای شما.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'got-dragonstone',
        title: 'Dragonstone (دراگون‌استون)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با سپرهای آتشین و دسترسی کنترل‌شده برای مدیران.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'got-iron-throne',
        title: 'Iron Throne (آیرون ثرون)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با شورای استراتژی، SLA طلایی و مانیتورینگ ۲۴/۷.',
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
        description: 'راه‌اندازی سریع روی کلود مگان با همکاری هماهنگ تیم‌های محتوا.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-minas',
        title: 'Minas Tirith (میناس تیریث)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با برج‌های دفاعی و کنترل کامل دسترسی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-valinor',
        title: 'Valinor (والینور)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با پشتیبانی بی‌وقفه و زیرساخت مقیاس‌پذیر.',
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
        description: 'کلود مگان برای ماموریت‌های کشف محتوا با سرعت Warp.',
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
        title: 'Voyager (وویاجر)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با پشتیبانی دائمی برای سفرهای دور.',
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
        tier: 'پلن پایه',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان با سپر جادویی برای مقابله با هیولاهای Downtime.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-novigrad',
        title: 'Novigrad (نوویگراد)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با قوانین امنیتی شهر و کنترل دسترسی دقیق.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-brotherhood',
        title: 'Brotherhood (محفل جادوگران)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم عملیات جادویی و SLA سطح قهرمان.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'راه‌اندازی Joomla مدیریت‌شده مگان چقدر زمان می‌برد؟',
    answer:
      'پس از ثبت سفارش و تایید دسترسی‌ها، در کمتر از چند ساعت محیط Joomla + MariaDB شما آماده بهره‌برداری خواهد بود.',
  },
  {
    question: 'آیا می‌توان از نسخه فعلی Joomla یا MariaDB مهاجرت کرد؟',
    answer:
      'بله، تیم ما بکاپ کامل از محیط فعلی می‌گیرد، تست مهاجرت انجام می‌دهد و بدون Downtime اطلاعات را منتقل می‌کند.',
  },
  {
    question: 'امکان استفاده از افزونه‌ها و قالب‌های دلخواه وجود دارد؟',
    answer:
      'تمام افزونه‌ها و قالب‌های مورد تایید شما نصب و در محیط Stage تست می‌شوند تا بدون ریسک در محیط اصلی فعال گردند.',
  },
  {
    question: 'چگونه امنیت دیتابیس MariaDB تضمین می‌شود؟',
    answer:
      'محدودسازی شبکه، رمزنگاری ارتباط، مدیریت کاربر و مانیتورینگ کوئری‌ها به صورت پیش‌فرض فعال است و سیاست‌ها قابل سفارشی‌سازی هستند.',
  },
  {
    question: 'آیا می‌توان سرویس را به صورت On-Premise تحویل گرفت؟',
    answer:
      'بله، در پلن‌های حرفه‌ای و اینترپرایز امکان استقرار روی سرور سازمان شما یا دیتاسنتر ثالث وجود دارد و مستندات کامل تحویل داده می‌شود.',
  },
  {
    question: 'پشتیبان‌گیری با چه دوره‌ای انجام می‌شود؟',
    answer:
      'بکاپ روزانه از فایل‌ها و دیتابیس به همراه نگهداری نسخه‌های تاریخی انجام می‌شود و امکان بازیابی نقطه‌ای فراهم است.',
  },
  {
    question: 'در صورت افزایش ترافیک ناگهانی چه می‌شود؟',
    answer:
      'با مانیتورینگ بلادرنگ، مقیاس‌پذیری افقی و تنظیمات کش، سرویس به سرعت متناسب با بار جدید تنظیم می‌شود.',
  },
  {
    question: 'اگر سوال دیگری داشته باشم چگونه با شما در ارتباط باشم؟',
    answer:
      'از طریق تیکت، تماس تلفنی یا کنسول مگان می‌توانید با تیم ما در ارتباط باشید و راهنمایی دریافت کنید.',
  },
]

const JoomlaServicePage = () => {
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
    <section className="joomla-service">
      <header className="joomla-hero">
        <div className="joomla-hero__badge">CMS Platform</div>
        <div className="joomla-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Joomla">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={joomlaLogo} alt="لوگوی Joomla" />
          </div>
        </div>
        <h1 className="joomla-hero__title">Joomla + MariaDB مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="joomla-hero__subtitle">
          ساخت و نگهداری Joomla همراه با MariaDB می‌تواند پیچیده و زمان‌بر باشد. تیم مگان با ارائه زیرساخت امن،
          مانیتورینگ دائمی و بهینه‌سازی پایگاه‌داده به شما کمک می‌کند تا روی تولید محتوا و رشد سرویس تمرکز کنید.
        </p>
        <div className="joomla-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده قیمت‌گذاری
          </a>
        </div>
      </header>

      <section className="joomla-section">
        <div className="joomla-section__content">
          <h2 className="joomla-section__title">چرا Joomla مدیریت‌شده مگان؟</h2>
          <p className="joomla-section__description">
            راه‌اندازی Joomla با MariaDB روی زیرساخت‌های مختلف نیاز به تخصص DevOps، امنیت و مانیتورینگ دارد. با سرویس
            مدیریت‌شده مگان، همه این مسئولیت‌ها بر عهده ماست و شما تنها از یک محیط آماده و پایدار بهره‌مند می‌شوید.
          </p>
          <div className="joomla-insight">
            <article className="joomla-insight__card">
              <span className="joomla-insight__label">مشکل</span>
              <h3>پیچیدگی استقرار و نگهداری</h3>
              <p>
                هماهنگ کردن وب‌سرور، PHP، MariaDB، امنیت و بکاپ در نصب‌های سازمانی Joomla زمان زیادی می‌طلبد و هر خطا می‌تواند
                باعث از دست رفتن داده یا توقف سرویس شود.
              </p>
            </article>
            <article className="joomla-insight__card">
              <span className="joomla-insight__label joomla-insight__label--solution">راه‌حل</span>
              <h3>زیرساخت آماده بهره‌برداری</h3>
              <p>
                ما استقرار را خودکار کرده‌ایم: از تنظیم سرور و دیتابیس تا SSL، بکاپ، مانیتورینگ و مقیاس‌پذیری. شما تنها وارد
                کنسول می‌شوید و سایت‌های خود را مدیریت می‌کنید.
              </p>
            </article>
          </div>
          <div className="joomla-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="joomla-benefits__item">
                <span className="joomla-benefits__icon" aria-hidden="true">
                  •
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="joomla-section">
        <h2 className="joomla-section__title">ویژگی‌ها</h2>
        <div className="joomla-features">
          {features.map(({ title, description }) => (
            <article key={title} className="joomla-feature">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="joomla-section" id="pricing">
        <h2 className="joomla-section__title">پلن‌های قیمت‌گذاری</h2>
        <p className="joomla-section__description">
          بر اساس زیرساخت موجود خود یکی از سناریوهای زیر را انتخاب کنید. تمام پلن‌ها شامل مانیتورینگ، پشتیبان‌گیری،
          به‌روزرسانی و پشتیبانی ۲۴/۷ هستند.
        </p>
        <p className="joomla-section__note">
          می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود و با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ تم‌ها صرفاً جنبه فان دارند و
          تفاوتی در امکانات و قیمت واقعی پلن‌ها ایجاد نمی‌کنند.
        </p>
        <div className="joomla-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              role="tab"
              aria-selected={activeTheme === theme.id}
              className={`joomla-pricing__theme${activeTheme === theme.id ? ' joomla-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
            >
              <span className="joomla-pricing__theme-icon" aria-hidden="true">
                {theme.icon}
              </span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="joomla-pricing">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`joomla-plan${activePlan === plan.id ? ' joomla-plan--active' : ''}`}
              onMouseEnter={() => setActivePlan(plan.id)}
              onFocus={() => setActivePlan(plan.id)}
              tabIndex={0}
            >
              <div className="joomla-plan__head">
                <span className="joomla-plan__tier">{plan.tier}</span>
                <h3 className="joomla-plan__title">{plan.title}</h3>
              </div>
              <p className="joomla-plan__price">{plan.price}</p>
              <p className="joomla-plan__description">{plan.description}</p>
              <p className="joomla-plan__meta">{plan.infra}</p>
              <NavLink to="/login" className="joomla-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="joomla-section joomla-section--surface" id="faq">
        <h2 className="joomla-section__title">سوالات متداول</h2>
        <div className="joomla-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="joomla-faq__item">
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

export default JoomlaServicePage
