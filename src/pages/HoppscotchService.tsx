import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import hoppscotchLogo from '../assets/hoppscotch-logo.svg'

const benefits = [
  'راه‌اندازی Hoppscotch سلف‌هاستد بدون نیاز به تیم DevOps داخلی و در کوتاه‌ترین زمان',
  'پیکربندی امن با مدیریت توکن، SSL و محدودسازی دسترسی برای محیط‌های سازمانی',
  'ذخیره‌سازی امن کالکشن‌ها و تاریخچه درخواست‌ها با بکاپ‌گیری خودکار روزانه',
  'یکپارچگی ساده با Git برای همگام‌سازی کالکشن‌ها بین تیم‌های توسعه',
  'مانیتورینگ سلامت سرویس، منابع و هشداردهی پیشگیرانه توسط تیم عملیات مگان',
  'استقرار قابل انعطاف روی کلود مگان، سرور تهیه‌شده توسط شما یا میزبانی اختصاصی',
  'خودکارسازی CI/CD برای به‌روزرسانی نسخه‌ها و افزونه‌های Hoppscotch بدون قطعی',
  'پشتیبانی ۲۴/۷ برای رفع خطاها، مهاجرت داده و راهنمایی بهترین پرکتیس‌ها',
]

const features = [
  {
    title: 'Collaboration Hub',
    description:
      'مدیریت تیمی کالکشن‌ها با اشتراک‌گذاری امن، نقش‌های سفارشی و تاریخچه تغییرات برای هر درخواست API.',
  },
  {
    title: 'Env & Secrets Management',
    description:
      'تعریف محیط‌های متعدد، مدیریت متغیرها و توکن‌ها با رمزنگاری در حالت سکون و گردش خودکار کلیدها.',
  },
  {
    title: 'Automated Testing',
    description:
      'راه‌اندازی تست‌های خودکار API، اجرای زمان‌بندی‌شده و گزارش‌دهی ایمیلی برای بررسی سلامت سرویس‌ها.',
  },
  {
    title: 'Realtime Monitoring',
    description:
      'نمایش لحظه‌ای لاگ‌ها، زمان پاسخ و آمار مصرف به کمک داشبوردهای مانیتورینگ متصل به Hoppscotch.',
  },
  {
    title: 'Workflow Integrations',
    description:
      'اتصال به GitHub، GitLab، Slack و ابزارهای مدیریت وظایف برای اتوماسیون چرخه توسعه API.',
  },
  {
    title: 'Flexible Deployment',
    description:
      'انتخاب میان Docker، Kubernetes یا VM با پیکربندی IaC و پایپ‌لاین استقرار مدیریت‌شده توسط مگان.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🧪',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'سرویس Hoppscotch آماده روی کلود مگان با مانیتورینگ، بکاپ و به‌روزرسانی مداوم.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی بر روی سرور لینوکسی شما با امن‌سازی، CI/CD و مانیتورینگ پیشرفته.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی کاملاً مدیریت‌شده بدون نیاز به سرور شخصی همراه با SLA و پشتیبانی ۲۴/۷.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'strangerthings',
    label: 'Stranger Things',
    icon: '⚡️',
    plans: [
      {
        id: 'strangerthings-hawkins',
        title: 'Hawkins Lab (هاوکینز لب)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان برای تیم‌هایی که می‌خواهند روی تجربه توسعه تمرکز کنند.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'strangerthings-starcourt',
        title: 'Starcourt Mall (استارکورت مال)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با امنیت لایه‌ای و مانیتورینگ مانند شبکه مخفی هاوکینز.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'strangerthings-uptown',
        title: 'Upside Down Command (اپساید داون)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA فوق‌العاده برای سازمان‌هایی که به پایداری ماورایی نیاز دارند.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'starwars',
    label: 'Star Wars',
    icon: '🌌',
    plans: [
      {
        id: 'starwars-rebel',
        title: 'Rebel Base (ریبِل بیس)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی کلود مگان با حمایت نیروهای مقاومت برای تیم‌های چابک.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'starwars-bespin',
        title: 'Bespin Cloud (بسپین کلود)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با امنیت جدای و اتصال یکپارچه به ابزارهای سازمانی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'starwars-coruscant',
        title: 'Coruscant Tower (کوروسکانت)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سطح سنا و پشتیبانی ویژه برای امپراطوری داده شما.',
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
        id: 'foundation-terminus-hop',
        title: 'Terminus (ترمینوس)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان با استقرار خودکار برای تیم‌هایی که می‌خواهند سریع شروع کنند.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'foundation-trantor-hop',
        title: 'Trantor (ترنتور)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با سیاست‌های امنیتی سطح امپراطوری و نگهداری دقیق.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'foundation-vault-hop',
        title: 'Seldon Vault (ولْت سل دون)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با پشتیبانی ۲۴/۷ و تضمین بازیابی در صورت رخدادهای بحرانی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'witcher',
    label: 'The Witcher',
    icon: '⚔️',
    plans: [
      {
        id: 'witcher-kaermorhen',
        title: 'Kaer Morhen (کر مورهن)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار مدیریت‌شده روی کلود مگان با تمرکز بر امنیت و کارایی شکارچیان API.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-novigrad',
        title: 'Novigrad (نوویگراد)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با محافظت چندلایه و مانیتورینگ مداوم مانند شبکه جادوگران.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-brotherhood',
        title: 'Brotherhood (انجمن جادوگران)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی و تیم پشتیبانی شبانه‌روزی برای ماموریت‌های حساس.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'راه‌اندازی Hoppscotch مدیریت‌شده چقدر زمان می‌برد؟',
    answer:
      'پس از دریافت دسترسی‌ها، محیط شما در کمتر از چند ساعت آماده است و کالکشن‌های اولیه برای تیم شما بارگذاری می‌شود.',
  },
  {
    question: 'آیا امکان مهاجرت از نسخه SaaS یا نصب فعلی وجود دارد؟',
    answer:
      'بله، کالکشن‌ها، متغیرها و حساب‌های کاربری شما استخراج، پاک‌سازی و در محیط جدید ایمپورت می‌شوند بدون از دست دادن داده.',
  },
  {
    question: 'چگونه امنیت توکن‌ها و متغیرهای محیط تضمین می‌شود؟',
    answer:
      'تمام متغیرها با KMS مگان رمزنگاری می‌شوند، دسترسی‌ها نقش‌محور است و گردش کلیدها طبق برنامه زمان‌بندی‌شده انجام می‌گیرد.',
  },
  {
    question: 'آیا می‌توانیم Hoppscotch را با Git یکپارچه کنیم؟',
    answer:
      'بله، همگام‌سازی دوطرفه با GitLab و GitHub فراهم است و تیم ما پایپلاین‌های Merge خودکار را برای شما پیکربندی می‌کند.',
  },
  {
    question: 'در صورت رشد تیم چگونه مقیاس‌پذیری انجام می‌شود؟',
    answer:
      'با مانیتورینگ مصرف منابع، گسترش عمودی یا افقی به صورت خودکار انجام می‌شود و اطلاع‌رسانی کامل به تیم شما ارسال خواهد شد.',
  },
  {
    question: 'آیا قابلیت مانیتورینگ و گزارش‌گیری در دسترس است؟',
    answer:
      'داشبوردهای متریک، گزارش‌های دوره‌ای و هشداردهی لحظه‌ای به ابزارهایی مانند Slack و PagerDuty متصل می‌شوند.',
  },
  {
    question: 'برای شخصی‌سازی برندینگ یا دامنه اختصاصی چه گزینه‌هایی داریم؟',
    answer:
      'از دامنه اختصاصی تا سفارشی‌سازی تم و صفحه لاگین قابل اعمال است و تیم ما این تغییرات را در محیط‌های شما پیاده می‌کند.',
  },
  {
    question: 'اگر به افزونه‌ها یا اسکریپت‌های اختصاصی نیاز داشته باشیم چه می‌شود؟',
    answer:
      'می‌توانید درخواست توسعه افزونه بدهید؛ ما آن را در محیط staging بررسی و پس از تست امنیتی در تولید مستقر می‌کنیم.',
  },
]

const HoppscotchServicePage = () => {
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
    <section className="hoppscotch-service">
      <header className="hoppscotch-hero">
        <div className="hoppscotch-hero__badge">API Collaboration</div>
        <div className="hoppscotch-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Hoppscotch">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={hoppscotchLogo} alt="لوگوی Hoppscotch" />
          </div>
        </div>
        <h1 className="hoppscotch-hero__title">Hoppscotch مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="hoppscotch-hero__subtitle">
          محیط کامل تست و همکاری روی APIها با استقرار خودکار، امنیت چندلایه و مانیتورینگ ۲۴/۷. تیم مگان تمام عملیات را
          مدیریت می‌کند تا تیم‌های مهندسی شما روی طراحی تجربه توسعه‌دهندگان تمرکز کنند.
        </p>
        <div className="hoppscotch-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="hoppscotch-section">
        <div className="hoppscotch-section__content">
          <h2 className="hoppscotch-section__title">چرا Hoppscotch مدیریت‌شده مگان؟</h2>
          <p className="hoppscotch-section__description">
            راه‌اندازی Hoppscotch روی زیرساخت‌های مختلف نیاز به تخصص DevOps، امن‌سازی و مانیتورینگ دارد. تیم مگان زیرساخت
            آماده و مقیاس‌پذیر را فراهم می‌کند تا شما بر تجربه توسعه و تحویل APIها تمرکز کنید.
          </p>
          <div className="hoppscotch-insight">
            <article className="hoppscotch-insight__card">
              <span className="hoppscotch-insight__label">مشکل</span>
              <h3>پیچیدگی در نصب و نگهداری</h3>
              <p>
                هماهنگی بین Docker، پایگاه‌داده، بکاپ و امنیت برای Hoppscotch می‌تواند وقت‌گیر باشد و خطای انسانی هزینه‌ساز
                است.
              </p>
            </article>
            <article className="hoppscotch-insight__card">
              <span className="hoppscotch-insight__label hoppscotch-insight__label--solution">راه‌حل</span>
              <h3>سرویس کاملاً مدیریت‌شده</h3>
              <p>
                تیم مگان استقرار، مانیتورینگ، بکاپ و به‌روزرسانی‌های شما را انجام می‌دهد و محیطی پایدار برای تیم‌های توسعه
                فراهم می‌کند.
              </p>
            </article>
          </div>
          <div className="hoppscotch-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="hoppscotch-benefits__item">
                <span className="hoppscotch-benefits__icon" aria-hidden="true">✔️</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hoppscotch-section hoppscotch-section--surface" id="features">
        <div className="hoppscotch-section__content">
          <h2 className="hoppscotch-section__title">ویژگی‌های کلیدی Hoppscotch در مگان</h2>
          <p className="hoppscotch-section__description">
            تمام قابلیت‌های محبوب Hoppscotch را با لایه‌های امنیتی و عملیاتی مگان ترکیب کنید تا تجربه تست و توسعه API شما
            همیشه آماده باشد.
          </p>
        </div>
        <div className="hoppscotch-features">
          {features.map((feature) => (
            <article key={feature.title} className="hoppscotch-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hoppscotch-section" id="pricing">
        <div className="hoppscotch-section__content">
          <h2 className="hoppscotch-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="hoppscotch-section__description">
            می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود و با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ تم‌ها صرفاً برای فان طراحی
            شده‌اند و تفاوتی در سرویس ایجاد نمی‌کنند. سناریوهای استقرار ما ثابت می‌ماند: سرور ابری مگان، سرور شما یا
            میزبانی اختصاصی کاملاً مدیریت‌شده.
          </p>
          <p className="hoppscotch-section__note">
            نام تم‌ها تنها برای ایجاد حس فان انتخاب شده‌اند و تفاوتی در امکانات یا قیمت نهایی ایجاد نمی‌کنند.
          </p>
        </div>
        <div className="hoppscotch-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`hoppscotch-pricing__theme${theme.id === activeTheme ? ' hoppscotch-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
              tabIndex={theme.id === activeTheme ? 0 : -1}
              aria-controls="hoppscotch-pricing-panel"
            >
              <span className="hoppscotch-pricing__theme-icon" aria-hidden="true">
                {theme.icon}
              </span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="hoppscotch-pricing" id="hoppscotch-pricing-panel">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`hoppscotch-plan${activePlan === plan.id ? ' hoppscotch-plan--active' : ''}`}
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
              <div className="hoppscotch-plan__head">
                <span className="hoppscotch-plan__tier">{plan.tier}</span>
                <h3 className="hoppscotch-plan__title">{plan.title}</h3>
              </div>
              <p className="hoppscotch-plan__price">{plan.price}</p>
              <p className="hoppscotch-plan__description">{plan.description}</p>
              <div className="hoppscotch-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="hoppscotch-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="hoppscotch-section hoppscotch-section--surface" id="faq">
        <div className="hoppscotch-section__content">
          <h2 className="hoppscotch-section__title">سوالات پرتکرار</h2>
          <p className="hoppscotch-section__description">
            اگر سوال دیگری دارید، تیم ما همیشه در دسترس است تا درباره استقرار، مهاجرت یا سفارشی‌سازی Hoppscotch با شما صحبت
            کند.
          </p>
        </div>
        <div className="hoppscotch-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="hoppscotch-faq__item">
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

export default HoppscotchServicePage
