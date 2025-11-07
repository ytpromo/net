import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import rabbitmqLogo from '../assets/rabbitmq-logo.svg'

const benefits = [
  'راه‌اندازی صف پیام بسیار سریع بدون نیاز به تیم DevOps داخلی',
  'پیکربندی امن با احراز هویت، SSL و تفکیک محیط‌های تولید و تست',
  'مانیتورینگ مستمر صف‌ها، نودها و مصرف‌کنندگان با هشدار خودکار',
  'بکاپ‌گیری منظم از پیام‌های ماندگار و امکان بازیابی سریع',
  'مقیاس‌پذیری افقی با کلاسترینگ، فدراسیون و Shovel مدیریت‌شده',
  'امکان استقرار روی سرور ابری مگان، سرور اختصاصی شما یا دیتاسنتر ثالث',
  'یکپارچگی با زبان‌ها و فریم‌ورک‌های محبوب مانند Node.js، Python و Go',
  'پشتیبانی ۲۴/۷ توسط تیم عملیات برای اطمینان از دسترس‌پذیری بالا',
]

const features = [
  {
    title: 'کلاسترینگ و High Availability',
    description:
      'پیاده‌سازی کلاسترهای چندنودی با Mirrored Queues و پیکربندی Quorum برای تضمین پایداری پیام‌ها.',
  },
  {
    title: 'امنیت و دسترسی',
    description:
      'احراز هویت چندعاملی، مدیریت کاربران و سیاست‌های دقیق مجوزدهی برای کانکشن‌ها و صف‌ها.',
  },
  {
    title: 'پایش و مشاهده‌پذیری',
    description:
      'داشبوردهای لحظه‌ای، متریک‌های Prometheus و هشداردهی خودکار برای مدیریت ترافیک پیام.',
  },
  {
    title: 'مدیریت چرخه عمر',
    description:
      'به‌روزرسانی بدون قطعی، مدیریت پلاگین‌ها و نسخه‌ها، و تست پیش از انتشار در محیط staging.',
  },
  {
    title: 'یکپارچگی آسان',
    description:
      'اتصال ساده به AWS SQS، Kafka، دیتابیس‌ها و سرویس‌های داخلی با استفاده از پل‌های استاندارد.',
  },
  {
    title: 'خودکارسازی عملیات',
    description:
      'Pipeline‌های IaC برای استقرار، اسکریپت‌های Disaster Recovery و گزارش‌های منظم سلامت.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🧡',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی RabbitMQ روی زیرساخت ابری مگان با مانیتورینگ، بکاپ و به‌روزرسانی خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار بر روی سرور لینوکسی خریداری شده توسط شما با تنظیمات امنیتی و مانیتورینگ پیشرفته.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'تحویل سرویس کاملاً مدیریت‌شده بدون نیاز به سرور شخصی با SLA و پشتیبانی ۲۴/۷.',
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
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان برای تیم‌هایی که به اعتماد شمال احتیاج دارند.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'got-dragonstone',
        title: 'Dragonstone (دراگون‌استون)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با محافظت سطح دراگون‌گلس و مانیتورینگ لحظه‌ای.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'got-ironthrone',
        title: 'Iron Throne (آیرون ثرون)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سلطنتی و پشتیبانی ویژه برای سازمان‌های بزرگ.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'lotr',
    label: 'Lord of the Rings',
    icon: '💍',
    plans: [
      {
        id: 'lotr-shire',
        title: 'The Shire (شایر)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان با پیکربندی آرام برای شروع مسیر قهرمانانه شما.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-gondor',
        title: 'Gondor (گاندور)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور سازمانی شما با سپرهای امنیتی چندلایه مانند برج‌های میناس تی‌ریت.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-minasmorgul',
        title: 'Minas Morgul (میناس مورگول)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم عملیات شبانه‌روزی برای نبرد با ترافیک سنگین.',
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
        description: 'سرویس مدیریت‌شده روی کلود مگان برای سفر مطمئن در کهکشان پیام‌ها.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'startrek-deep',
        title: 'Deep Space Nine (دیپ‌اسپیس ناین)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با محافظت کامل و اتصال به سیستم‌های مختلف سازمان.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'startrek-voyager',
        title: 'Voyager (وویاجر)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی برای ماموریت‌های طولانی با گارانتی دسترس‌پذیری بالا.',
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
        id: 'witcher-kaermorhen',
        title: 'Kaer Morhen (کر مورهن)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان برای شکار هیولاهای Latency.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-nilfgaard',
        title: 'Nilfgaard (نیلفگارد)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با سیاست‌های امنیتی امپراتوری نیلفگارد.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-brotherhood',
        title: 'Brotherhood (برادری جادوگران)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم جادوگران مگان برای مقاوم‌سازی کامل سرویس.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'راه‌اندازی RabbitMQ مدیریت‌شده چقدر زمان می‌برد؟',
    answer:
      'پس از ثبت سفارش و دریافت دسترسی‌ها، کلاستر RabbitMQ در کمتر از چند ساعت روی زیرساخت انتخابی شما آماده بهره‌برداری خواهد بود.',
  },
  {
    question: 'آیا امکان مهاجرت از نصب فعلی RabbitMQ وجود دارد؟',
    answer:
      'بله، تیم ما پیام‌های persisted، تنظیمات کاربران و پلاگین‌های فعال شما را منتقل و پس از تست سلامت تحویل می‌دهد.',
  },
  {
    question: 'چگونه از مقیاس‌پذیری سرویس مطمئن می‌شوید؟',
    answer:
      'با طراحی کلاستر، اتوماسیون اضافه‌کردن نود و توزیع بار بین مصرف‌کنندگان تضمین می‌کنیم که در رشد ناگهانی ترافیک نیز عملکرد پایدار بماند.',
  },
  {
    question: 'برای امنیت و رمزنگاری چه اقداماتی انجام می‌دهید؟',
    answer:
      'گواهی SSL مدیریت‌شده، فایروال چندلایه، پیکربندی محدودیت IP و سیاست‌های دسترسی مبتنی بر نقش بخشی از چک‌لیست امنیتی ماست.',
  },
  {
    question: 'آیا امکان نظارت و دسترسی به متریک‌ها را داریم؟',
    answer:
      'بله، داشبورد مدیریتی، متریک‌های Prometheus و ارسال رویدادها به ابزار مانیتورینگ شما فراهم است.',
  },
  {
    question: 'در صورت نیاز به شخصی‌سازی چه می‌شود؟',
    answer:
      'می‌توانید درخواست تنظیمات اختصاصی، پلاگین‌های سفارشی یا اتوماسیون‌های ویژه را ثبت کنید و تیم ما آن‌ها را پیاده‌سازی خواهد کرد.',
  },
  {
    question: 'آیا SLA رسمی ارائه می‌شود؟',
    answer:
      'برای هر پلن، SLA زمان‌بندی‌شده ارائه می‌کنیم و در پلن اینترپرایز توافق‌نامه اختصاصی با اهداف Uptime بالاتر تعریف می‌شود.',
  },
]

const RabbitMQServicePage = () => {
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
    <section className="rabbitmq-service">
      <header className="rabbitmq-hero">
        <div className="rabbitmq-hero__badge">Message Broker</div>
        <div className="rabbitmq-hero__logo hero-logo-pair" aria-label="لوگوی مگان و RabbitMQ">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={rabbitmqLogo} alt="لوگوی RabbitMQ" />
          </div>
        </div>
        <h1 className="rabbitmq-hero__title">RabbitMQ مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="rabbitmq-hero__subtitle">
          صف پیام RabbitMQ را با استقرار، مانیتورینگ و مقیاس‌پذیری خودکار تجربه کنید. تیم مگان عملیات، امنیت و
          نگهداری را انجام می‌دهد تا تیم شما روی معماری سرویس‌ها تمرکز کند.
        </p>
        <div className="rabbitmq-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="rabbitmq-section">
        <div className="rabbitmq-section__content">
          <h2 className="rabbitmq-section__title">چرا RabbitMQ مدیریت‌شده مگان؟</h2>
          <p className="rabbitmq-section__description">
            راه‌اندازی RabbitMQ روی زیرساخت‌های مختلف نیاز به تخصص DevOps، امن‌سازی و مانیتورینگ دارد. تیم مگان
            زیرساخت آماده و مقیاس‌پذیر را فراهم می‌کند تا شما بر طراحی معماری رویدادمحور تمرکز کنید.
          </p>
          <div className="rabbitmq-insight">
            <article className="rabbitmq-insight__card">
              <span className="rabbitmq-insight__label">مشکل</span>
              <h3>تنظیم و نگهداری پیچیده</h3>
              <p>
                هماهنگ‌کردن نودها، سیاست‌های صف و امنیت در نصب‌های سلف‌هاستد RabbitMQ زمان‌بر است و خطای انسانی می‌تواند
                باعث از دست رفتن پیام‌ها شود.
              </p>
            </article>
            <article className="rabbitmq-insight__card">
              <span className="rabbitmq-insight__label rabbitmq-insight__label--solution">راه‌حل</span>
              <h3>سرویس کاملاً مدیریت‌شده</h3>
              <p>
                ما استقرار، مانیتورینگ، بکاپ و مقیاس‌پذیری را برعهده می‌گیریم و محیطی پایدار و امن برای جریان پیام‌های
                حیاتی شما فراهم می‌کنیم.
              </p>
            </article>
          </div>
          <div className="rabbitmq-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="rabbitmq-benefits__item">
                <span className="rabbitmq-benefits__icon" aria-hidden="true">✔️</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rabbitmq-section rabbitmq-section--surface" id="features">
        <div className="rabbitmq-section__content">
          <h2 className="rabbitmq-section__title">ویژگی‌های کلیدی RabbitMQ در مگان</h2>
          <p className="rabbitmq-section__description">
            تمام قابلیت‌های اصلی RabbitMQ را با لایه‌های امنیتی و عملیاتی مگان ترکیب کنید تا پیام‌رسانی توزیع‌شده شما
            همیشه پایدار و قابل اعتماد باشد.
          </p>
        </div>
        <div className="rabbitmq-features">
          {features.map((feature) => (
            <article key={feature.title} className="rabbitmq-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rabbitmq-section" id="pricing">
        <div className="rabbitmq-section__content">
          <h2 className="rabbitmq-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="rabbitmq-section__description">
            می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود و با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ تم‌ها صرفاً برای فان
            طراحی شده‌اند و تفاوتی در سرویس ایجاد نمی‌کنند. سناریوهای استقرار ما ثابت می‌ماند: سرور ابری مگان، سرور شما
            یا میزبانی اختصاصی کاملاً مدیریت‌شده.
          </p>
          <p className="rabbitmq-section__note">
            نام تم‌ها تنها برای ایجاد حس فان انتخاب شده‌اند و تفاوتی در امکانات یا قیمت نهایی ایجاد نمی‌کنند.
          </p>
        </div>
        <div className="rabbitmq-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`rabbitmq-pricing__theme${theme.id === activeTheme ? ' rabbitmq-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
              tabIndex={theme.id === activeTheme ? 0 : -1}
              aria-controls="rabbitmq-pricing-panel"
            >
              <span className="rabbitmq-pricing__theme-icon" aria-hidden="true">
                {theme.icon}
              </span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="rabbitmq-pricing" id="rabbitmq-pricing-panel">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`rabbitmq-plan${activePlan === plan.id ? ' rabbitmq-plan--active' : ''}`}
              role="button"
              tabIndex={0}
              aria-pressed={activePlan === plan.id}
              onClick={() => setActivePlan(plan.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActivePlan(plan.id)
                }
              }}
            >
              <div className="rabbitmq-plan__head">
                <span className="rabbitmq-plan__tier">{plan.tier}</span>
                <h3 className="rabbitmq-plan__title">{plan.title}</h3>
              </div>
              <p className="rabbitmq-plan__price">{plan.price}</p>
              <p className="rabbitmq-plan__description">{plan.description}</p>
              <div className="rabbitmq-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="rabbitmq-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="rabbitmq-section rabbitmq-section--surface" id="faq">
        <div className="rabbitmq-section__content">
          <h2 className="rabbitmq-section__title">سوالات پرتکرار</h2>
          <p className="rabbitmq-section__description">
            اگر سوال دیگری دارید، تیم ما همیشه در دسترس است تا درباره استقرار، مهاجرت یا سفارشی‌سازی RabbitMQ با شما
            صحبت کند.
          </p>
        </div>
        <div className="rabbitmq-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="rabbitmq-faq__item">
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

export default RabbitMQServicePage
