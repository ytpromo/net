import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import elasticsearchLogo from '../assets/elasticsearch-logo.svg'

const benefits = [
  'جستجوی تمام‌متن، فیلترینگ و تحلیل بلادرنگ بدون درگیری با مدیریت خوشه',
  'مقیاس‌پذیری افقی برای مدیریت حجم‌های بزرگ لاگ، رویداد و داده‌های تراکنشی',
  'رمزنگاری، کنترل دسترسی مبتنی بر نقش و محافظت در برابر نشت داده',
  'مانیتورینگ دائمی، هشداردهی و به‌روزرسانی بدون قطعی توسط تیم عملیات مگان',
  'پیکربندی Snapshot و بازگردانی سریع برای محافظت از ایندکس‌ها و Templateها',
  'امکان استقرار روی کلود مگان، سرور لینوکسی مشتری یا میزبانی اختصاصی',
  'اتوماسیون Pipelineهای Ingest برای پاک‌سازی، غنی‌سازی و ساخت ایندکس‌های بهینه',
  'پشتیبانی ۲۴/۷ و راهنمایی معماری برای طراحی Query، شاردینگ و تنظیم عملکرد',
]

const features = [
  {
    title: 'مدیریت شاخص هوشمند',
    description:
      'تعریف Lifecycle Policies، Auto Scaling و بهینه‌سازی شاردها برای حفظ کارایی Query در حجم‌های بزرگ.',
  },
  {
    title: 'Ingest Pipeline مدیریت‌شده',
    description:
      'راه‌اندازی Beats، Logstash یا Elastic Agent با فیلترها و پردازش سفارشی برای ورود داده مطمئن و استاندارد.',
  },
  {
    title: 'جستجوی تحلیلی و بصری',
    description:
      'یکپارچگی کامل با Kibana، Canvas و Lens برای ساخت داشبوردهای تحلیلی و کشف الگوهای پنهان.',
  },
  {
    title: 'APM و Observability',
    description:
      'جمع‌آوری متریک، لاگ و Trace در یک پلتفرم واحد با داشبوردهای آماده و هشداردهی پیشگیرانه.',
  },
  {
    title: 'امنیت و انطباق',
    description:
      'راه‌اندازی Elastic Security با SIEM، محافظت در برابر تهدید، Audit Log و یکپارچگی با سیستم‌های هویتی.',
  },
  {
    title: 'انتخاب معماری استقرار',
    description:
      'پشتیبانی از استقرار روی Kubernetes، ماشین مجازی یا Bare Metal با زیرساخت IaC و فرآیند ارتقای مدیریت‌شده.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🔍',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'خوشه Elasticsearch آماده با مانیتورینگ، Snapshot و پشتیبانی کامل روی کلود مگان.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور لینوکسی شما با امن‌سازی شبکه، RBAC و نگهداری مداوم.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی، ظرفیت بالا و تیم عملیات برای سناریوهای حیاتی.',
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
        title: 'The Shire Cluster (شایر)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'خوشه آماده روی کلود مگان برای تیم‌هایی که می‌خواهند بی‌دردسر شروع کنند.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'lotr-gondor',
        title: 'Gondor Ops (گاندور)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با امنیت سطح گوندور و پشتیبان‌گیری خودکار.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'lotr-erebor',
        title: 'Erebor Vault (اربور)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با ظرفیت بالا و نگهبانی مداوم مانند خزانه کوتوله‌ها.',
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
        id: 'starwars-rebel-search',
        title: 'Rebel Search (شورشیان)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان با آماده‌سازی ایندکس برای تیم‌های چابک.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'starwars-jedi-search',
        title: 'Jedi Archive (جدای)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با محافظت جدای، مانیتورینگ و کنترل دسترسی دقیق.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'starwars-empire-search',
        title: 'Empire Vault (امپراتوری)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با ناوگان کامل برای بارهای تحلیلی عظیم و SLA طلایی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'dune',
    label: 'Dune',
    icon: '🏜️',
    plans: [
      {
        id: 'dune-arrakis',
        title: 'Arrakis Index (آراکیس)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان با منابع بهینه مثل کنترل رطوبت در سیاره آراکیس برای داده‌های شما.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'dune-sietch',
        title: 'Sietch Ops (سیچ)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با دفاع چندلایه و مدیریت آب حیاتی داده‌ها.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'dune-imperium',
        title: 'Imperium Vault (امپریوم)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA امپراتوری برای سازمان‌هایی که به حداکثر پایداری نیاز دارند.',
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
        id: 'witcher-kaer',
        title: 'Kaer Morhen Index (کر مورهن)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'خوشه آماده روی کلود مگان با مراقبت استادکاران برای تیم‌های کوچک.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-novigrad-search',
        title: 'Novigrad Ops (نوویگراد)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با جادوگران امنیت و نظارت دائمی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-brotherhood-search',
        title: 'Brotherhood Archive (انجمن)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم عملیات شبانه‌روزی برای حجم‌های عظیم جستجو.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'راه‌اندازی Elasticsearch مدیریت‌شده چقدر زمان می‌برد؟',
    answer:
      'پس از دریافت دسترسی‌ها، خوشه شما در کمتر از چند ساعت آماده است و الگوهای ایندکس به‌صورت سفارشی پیاده می‌شوند.',
  },
  {
    question: 'آیا می‌توانیم از Kibana و سایر ابزارهای Elastic استفاده کنیم؟',
    answer:
      'بله، محیط Kibana، Fleet و Enterprise Search به‌طور کامل پیکربندی و برای شما در دسترس قرار می‌گیرد.',
  },
  {
    question: 'چگونه امنیت داده‌ها تضمین می‌شود؟',
    answer:
      'تمام ارتباطات با TLS رمزنگاری شده، دسترسی‌ها نقش‌محور است و لاگ‌های امنیتی برای انطباق نگهداری می‌شوند.',
  },
  {
    question: 'در صورت رشد سریع داده چه گزینه‌های مقیاس‌پذیری داریم؟',
    answer:
      'افزودن نودهای جدید، متعادل‌سازی شارد و بهینه‌سازی ذخیره‌سازی به‌صورت خودکار توسط تیم مگان مدیریت می‌شود.',
  },
  {
    question: 'آیا امکان مهاجرت از سرویس فعلی وجود دارد؟',
    answer:
      'مهاجرت از نسخه SaaS یا خوشه‌های موجود با Snapshot، Reindex و انتقال امن داده‌ها بدون توقف انجام می‌شود.',
  },
  {
    question: 'مانیتورینگ و هشداردهی چگونه پیاده‌سازی می‌شود؟',
    answer:
      'داشبوردهای Kibana، آلارم‌های Watcher و اتصال به ابزارهایی مثل PagerDuty یا Slack برای شما تنظیم می‌شوند.',
  },
  {
    question: 'آیا می‌توانیم از قابلیت Machine Learning Elastic استفاده کنیم؟',
    answer:
      'بله، ما Jobهای Machine Learning را فعال و منابع مورد نیاز را بر اساس حجم داده شما تنظیم می‌کنیم.',
  },
  {
    question: 'برای سفارشی‌سازی Pipelineها یا پلاگین‌ها چه حمایتی دریافت می‌کنیم؟',
    answer:
      'تیم ما در طراحی و توسعه پلاگین‌های سفارشی، Script Processorها و تست آن‌ها در محیط Staging همراه شماست.',
  },
]

const ElasticsearchServicePage = () => {
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
    <section className="elasticsearch-service">
      <header className="elasticsearch-hero">
        <div className="elasticsearch-hero__badge">Search &amp; Analytics</div>
        <div className="elasticsearch-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Elasticsearch">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={elasticsearchLogo} alt="لوگوی Elasticsearch" />
          </div>
        </div>
        <h1 className="elasticsearch-hero__title">Elasticsearch مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="elasticsearch-hero__subtitle">
          خوشه‌های جستجو و تحلیل داده را بدون پیچیدگی عملیاتی راه‌اندازی کنید. تیم مگان امنیت، مقیاس‌پذیری، بکاپ و
          مانیتورینگ Elasticsearch را مدیریت می‌کند تا شما روی ساخت تجربه‌های داده‌محور تمرکز کنید.
        </p>
        <div className="elasticsearch-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="elasticsearch-section">
        <div className="elasticsearch-section__content">
          <h2 className="elasticsearch-section__title">چرا Elasticsearch مدیریت‌شده مگان؟</h2>
          <p className="elasticsearch-section__description">
            راه‌اندازی Elasticsearch روی زیرساخت‌های مختلف نیاز به تخصص DevOps، امن‌سازی و مانیتورینگ دارد. تیم مگان
            زیرساخت آماده و مقیاس‌پذیر را فراهم می‌کند تا شما بر تحلیل داده و تجربه جستجو تمرکز کنید.
          </p>
          <div className="elasticsearch-insight">
            <article className="elasticsearch-insight__card">
              <span className="elasticsearch-insight__label">مشکل</span>
              <h3>پیچیدگی در مدیریت خوشه</h3>
              <p>
                تنظیم شارد، Replica، مانیتورینگ و بروزرسانی نسخه‌ها می‌تواند وقت‌گیر باشد و خطای انسانی منجر به از دست
                رفتن داده شود.
              </p>
            </article>
            <article className="elasticsearch-insight__card">
              <span className="elasticsearch-insight__label elasticsearch-insight__label--solution">راه‌حل</span>
              <h3>سرویس کاملاً مدیریت‌شده</h3>
              <p>
                تیم مگان عملیات روزمره، امن‌سازی، مقیاس‌پذیری و پشتیبانی را به‌طور کامل بر عهده می‌گیرد تا سرویس شما
                همیشه آماده باشد.
              </p>
            </article>
          </div>
          <div className="elasticsearch-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="elasticsearch-benefits__item">
                <span className="elasticsearch-benefits__icon" aria-hidden="true">✔️</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="elasticsearch-section elasticsearch-section--surface" id="features">
        <div className="elasticsearch-section__content">
          <h2 className="elasticsearch-section__title">ویژگی‌های کلیدی Elasticsearch در مگان</h2>
          <p className="elasticsearch-section__description">
            تمام قابلیت‌های محبوب اکوسیستم Elastic را با لایه‌های امنیتی و عملیاتی مگان ترکیب کنید تا پلتفرم جستجوی شما
            همیشه پایدار و سریع بماند.
          </p>
        </div>
        <div className="elasticsearch-features">
          {features.map((feature) => (
            <article key={feature.title} className="elasticsearch-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="elasticsearch-section" id="pricing">
        <div className="elasticsearch-section__content">
          <h2 className="elasticsearch-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="elasticsearch-section__description">
            می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود و با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ تم‌ها صرفاً برای فان طراحی
            شده‌اند و تفاوتی در سرویس ایجاد نمی‌کنند. سناریوهای استقرار ما ثابت است: سرور ابری مگان، سرور شما یا میزبانی
            اختصاصی کاملاً مدیریت‌شده.
          </p>
          <p className="elasticsearch-section__note">
            نام تم‌ها تنها برای ایجاد حس فان انتخاب شده‌اند و تفاوتی در امکانات یا قیمت نهایی ایجاد نمی‌کنند.
          </p>
        </div>
        <div className="elasticsearch-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`elasticsearch-pricing__theme${
                theme.id === activeTheme ? ' elasticsearch-pricing__theme--active' : ''
              }`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
              tabIndex={theme.id === activeTheme ? 0 : -1}
              aria-controls="elasticsearch-pricing-panel"
            >
              <span className="elasticsearch-pricing__theme-icon" aria-hidden="true">{theme.icon}</span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="elasticsearch-pricing" id="elasticsearch-pricing-panel">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`elasticsearch-plan${activePlan === plan.id ? ' elasticsearch-plan--active' : ''}`}
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
              <div className="elasticsearch-plan__head">
                <span className="elasticsearch-plan__tier">{plan.tier}</span>
                <h3 className="elasticsearch-plan__title">{plan.title}</h3>
              </div>
              <p className="elasticsearch-plan__price">{plan.price}</p>
              <p className="elasticsearch-plan__description">{plan.description}</p>
              <div className="elasticsearch-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="elasticsearch-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="elasticsearch-section elasticsearch-section--surface" id="faq">
        <div className="elasticsearch-section__content">
          <h2 className="elasticsearch-section__title">سوالات پرتکرار</h2>
          <p className="elasticsearch-section__description">
            اگر سوال دیگری دارید، تیم ما همیشه در دسترس است تا درباره استقرار، مهاجرت یا سفارشی‌سازی Elasticsearch با شما
            صحبت کند.
          </p>
        </div>
        <div className="elasticsearch-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="elasticsearch-faq__item">
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

export default ElasticsearchServicePage
