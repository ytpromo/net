import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import pocketbaseLogo from '../assets/pocketbase-logo.svg'

const benefits = [
  'راه‌اندازی بک‌اند Realtime تنها در چند دقیقه بدون مدیریت سرور',
  'احراز هویت کامل کاربران با ایمیل، پیامک و ارائه دسترسی نقش‌محور',
  'ذخیره‌سازی فایل ایمن با نسخه‌بندی، محدودیت لینک و CDN مگان',
  'پشتیبان‌گیری خودکار از داده‌ها و بازیابی سریع در صورت نیاز',
  'مقیاس‌پذیری افقی برای اپلیکیشن‌های موبایل و وب پرمصرف',
  'مانیتورینگ ۲۴/۷ و هشداردهی لحظه‌ای توسط تیم عملیات مگان',
  'امکان استقرار روی سرور ابری مگان، سرور شما یا دیتاسنتر ثالث',
  'یکپارچگی با فریم‌ورک‌های محبوب JavaScript، Flutter و Swift',
]

const features = [
  {
    title: 'Realtime Database',
    description:
      'داده‌های ساخت‌یافته را با سرعت بالا و رویدادهای بلادرنگ مدیریت کنید تا هر تغییر بلافاصله به کلاینت‌ها ارسال شود.',
  },
  {
    title: 'Authentication Suite',
    description:
      'ورود کاربران با ایمیل، OAuth، OTP و مدیریت نقش‌ها و دسترسی‌ها با سیاست‌های امنیتی دلخواه شما.',
  },
  {
    title: 'File Storage امن',
    description:
      'مدیریت فایل، تصاویر و اسناد با URL امضا شده، محدودسازی IP و اتصال مستقیم به شبکه تحویل محتوای مگان.',
  },
  {
    title: 'Hooks & Automation',
    description:
      'با استفاده از Webhook، وظایف scheduled و فانکشن‌های اختصاصی فرآیندهای تجاری خود را اتوماسیون کنید.',
  },
  {
    title: 'Observability کامل',
    description:
      'داشبورد لاگ، متریک و تریس برای تشخیص سریع مشکلات و بهینه‌سازی عملکرد اپلیکیشن‌ها.',
  },
  {
    title: 'استقرار انعطاف‌پذیر',
    description:
      'انتخاب میان کلود مگان، سرور سازمانی یا میزبانی اختصاصی بدون تغییر در تجربه توسعه‌دهندگان.',
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
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی PocketBase روی زیرساخت ابری مگان با مانیتورینگ و به‌روزرسانی خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار بر روی سرور لینوکسی که تهیه کرده‌اید با پیکربندی امنیتی و بکاپ مدیریت‌شده.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'تحویل سرویس کاملاً مدیریت‌شده بدون نیاز به سرور شخصی با SLA سازمانی و پشتیبانی ۲۴/۷.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'expanse',
    label: 'The Expanse',
    icon: '🛰️',
    plans: [
      {
        id: 'expanse-rocinante',
        title: 'Rocinante (روسینانته)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان با امنیت طبقاتی برای تیم‌های کوچک فضایی!',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'expanse-ceres',
        title: 'Ceres Station (سرس استیشن)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور شما با مانیتورینگ و تله‌متری پیشرفته برای اپ‌های mission-critical.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'expanse-tycho',
        title: 'Tycho (تایکو)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA بین‌سیاره‌ای، مناسب برای پروژه‌های سازمانی بسیار حساس.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'foundation',
    label: 'Foundation',
    icon: '📚',
    plans: [
      {
        id: 'foundation-terminus',
        title: 'Terminus (ترمینوس)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'زیرساخت مگان با استقرار کاملاً خودکار برای شروع سریع امپراطوری داده شما.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'foundation-trantor',
        title: 'Trantor (ترنتور)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی دیتاسنتر فعلی شما با سیاست‌های امنیتی انطباق‌پذیر و نگهداری مداوم.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'foundation-seldon',
        title: 'Seldon Vault (ولْت سل دون)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تضمین تداوم کسب‌وکار و بازیابی فاجعه‌ای مدیریت‌شده.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'dark',
    label: 'Dark',
    icon: '⏳',
    plans: [
      {
        id: 'dark-winden',
        title: 'Winden (ویندن)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی روی کلود مگان با نظارت زمانی برای رویدادهای بلادرنگ پیچیده.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'dark-sicmundus',
        title: 'Sic Mundus (زیک موندوس)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با امنیت چندلایه و هماهنگی تیم DevOps ما.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'dark-loop',
        title: 'Time Loop (تایم لوپ)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی و همیشه در دسترس با SLA طلایی و بکاپ‌گیری لحظه‌ای.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'mandalorian',
    label: 'The Mandalorian',
    icon: '🛡️',
    plans: [
      {
        id: 'mandalorian-nevarro',
        title: 'Nevarro (نوارو)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار مدیریت‌شده روی کلود مگان با مراقبت ویژه برای استارتاپ‌های در حال رشد.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'mandalorian-razorcrest',
        title: 'Razor Crest (ریزرکرست)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با بهینه‌سازی عملکرد و رمزنگاری انتها به انتها.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'mandalorian-beskar',
        title: 'Beskar Forge (بسکار فورج)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم پشتیبانی اختصاصی و تضمین تداوم سرویس.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'راه‌اندازی PocketBase مدیریت‌شده چقدر زمان می‌برد؟',
    answer:
      'پس از ثبت سفارش و دریافت دسترسی‌ها، سرویس در کمتر از چند ساعت روی زیرساخت انتخابی شما راه‌اندازی می‌شود و آماده اتصال به اپلیکیشن است.',
  },
  {
    question: 'آیا امکان مهاجرت از نصب فعلی PocketBase وجود دارد؟',
    answer:
      'بله، تیم ما دیتابیس، فایل‌ها و تنظیمات فعلی شما را دریافت و به محیط جدید منتقل می‌کند تا بدون قطعی به کار ادامه دهید.',
  },
  {
    question: 'چگونه مقیاس‌پذیری سرویس تضمین می‌شود؟',
    answer:
      'با معماری ماژولار، Replica‌های دیتابیس و افقی‌سازی سرویس، می‌توانیم بر اساس ترافیک شما منابع را افزایش یا کاهش دهیم.',
  },
  {
    question: 'برای امنیت و بکاپ‌گیری چه اقداماتی انجام می‌دهید؟',
    answer:
      'SSL مدیریت‌شده، فایروال چندلایه، پشتیبان‌گیری زمان‌بندی‌شده و تست بازیابی دوره‌ای بخشی از چک‌لیست عملیات امنیتی ماست.',
  },
  {
    question: 'آیا می‌توان دامنه و ایمیل سفارشی متصل کرد؟',
    answer:
      'بله، پیکربندی دامنه سفارشی، رکوردهای DNS، SMTP و Push Notification همگی توسط تیم مگان انجام می‌شود.',
  },
  {
    question: 'دسترسی توسعه‌دهندگان به API و داشبورد چگونه است؟',
    answer:
      'ما دسترسی کامل داشبورد، کلیدهای API و محیط تست جداگانه ارائه می‌دهیم تا توسعه‌دهندگان بتوانند به‌سرعت ویژگی‌های جدید را پیاده‌سازی کنند.',
  },
]

const PocketBaseServicePage = () => {
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
    <section className="pocketbase-service">
      <header className="pocketbase-hero">
        <div className="pocketbase-hero__badge">Realtime Backend</div>
        <div className="pocketbase-hero__logo hero-logo-pair" aria-label="لوگوی مگان و پاکت‌بیس">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={pocketbaseLogo} alt="لوگوی PocketBase" />
          </div>
        </div>
        <h1 className="pocketbase-hero__title">PocketBase مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="pocketbase-hero__subtitle">
          بک‌اند بلادرنگ PocketBase را بدون دغدغه سرور، امنیت و پشتیبان‌گیری تجربه کنید. ما استقرار،
          مانیتورینگ و مقیاس‌پذیری را انجام می‌دهیم تا شما روی محصول تمرکز کنید.
        </p>
        <div className="pocketbase-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="pocketbase-section">
        <div className="pocketbase-section__content">
          <h2 className="pocketbase-section__title">چرا PocketBase مدیریت‌شده مگان؟</h2>
          <p className="pocketbase-section__description">
            راه‌اندازی PocketBase روی زیرساخت‌های مختلف نیاز به تخصص DevOps، امن‌سازی و مانیتورینگ دارد. تیم
            مگان زیرساخت آماده و مقیاس‌پذیر را فراهم می‌کند تا شما بر توسعه تجربه کاربر تمرکز کنید.
          </p>
          <div className="pocketbase-insight">
            <article className="pocketbase-insight__card">
              <span className="pocketbase-insight__label">مشکل</span>
              <h3>کانفیگ پیچیده و نگهداری زمان‌بر</h3>
              <p>
                هماهنگ‌کردن دیتابیس، فایل‌استوریج، احراز هویت و مقیاس‌پذیری در نصب‌های سلف‌هاستد PocketBase زمان و
                انرژی زیادی از تیم محصول می‌گیرد.
              </p>
            </article>
            <article className="pocketbase-insight__card">
              <span className="pocketbase-insight__label pocketbase-insight__label--solution">راه‌حل</span>
              <h3>سرویس آماده با مراقبت ۲۴/۷</h3>
              <p>
                ما استقرار، امنیت، بکاپ و پایش را پوشش می‌دهیم و محیطی آماده برای توسعه‌دهندگان فراهم می‌کنیم تا
                فقط روی ویژگی‌های اپلیکیشن کار کنند.
              </p>
            </article>
          </div>
          <div className="pocketbase-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="pocketbase-benefits__item">
                <span className="pocketbase-benefits__icon" aria-hidden="true">✔️</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pocketbase-section pocketbase-section--surface" id="features">
        <div className="pocketbase-section__content">
          <h2 className="pocketbase-section__title">ویژگی‌های کلیدی PocketBase در مگان</h2>
          <p className="pocketbase-section__description">
            تمامی امکانات اصلی PocketBase را با لایه‌های امنیتی و عملیاتی مگان دریافت کنید تا توسعه سریع،
            مطمئن و مقیاس‌پذیر باشد.
          </p>
        </div>
        <div className="pocketbase-features">
          {features.map((feature) => (
            <article key={feature.title} className="pocketbase-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pocketbase-section" id="pricing">
        <div className="pocketbase-section__content">
          <h2 className="pocketbase-section__title">پلن‌های قیمت‌گذاری و نام‌گذاری سرگرم‌کننده</h2>
          <p className="pocketbase-section__description">
            می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود و با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ تم‌ها صرفاً برای
            فان طراحی شده‌اند و تفاوتی در سرویس ایجاد نمی‌کنند. سه سناریوی استقرار ما ثابت می‌ماند: سرور ابری
            مگان، سرور تحت مدیریت شما یا میزبانی اختصاصی کاملاً مدیریت‌شده.
          </p>
          <p className="pocketbase-section__note">
            نام تم‌ها تنها برای ایجاد حس فان انتخاب شده‌اند و تفاوتی در امکانات یا قیمت نهایی ایجاد نمی‌کنند.
          </p>
        </div>
        <div className="pocketbase-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`pocketbase-pricing__theme${theme.id === activeTheme ? ' pocketbase-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
              tabIndex={theme.id === activeTheme ? 0 : -1}
              aria-controls="pocketbase-pricing-panel"
            >
              <span className="pocketbase-pricing__theme-icon" aria-hidden="true">
                {theme.icon}
              </span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="pocketbase-pricing" id="pocketbase-pricing-panel">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`pocketbase-plan${activePlan === plan.id ? ' pocketbase-plan--active' : ''}`}
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
              <div className="pocketbase-plan__head">
                <span className="pocketbase-plan__tier">{plan.tier}</span>
                <h3 className="pocketbase-plan__title">{plan.title}</h3>
              </div>
              <p className="pocketbase-plan__price">{plan.price}</p>
              <p className="pocketbase-plan__description">{plan.description}</p>
              <div className="pocketbase-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="pocketbase-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="pocketbase-section pocketbase-section--surface" id="faq">
        <div className="pocketbase-section__content">
          <h2 className="pocketbase-section__title">سوالات پرتکرار</h2>
          <p className="pocketbase-section__description">
            اگر سوال دیگری دارید، تیم ما همیشه در دسترس است تا درباره استقرار، مهاجرت یا سفارشی‌سازی PocketBase
            با شما صحبت کند.
          </p>
        </div>
        <div className="pocketbase-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="pocketbase-faq__item">
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

export default PocketBaseServicePage
