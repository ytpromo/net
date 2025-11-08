import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import grafanaLogo from '../assets/grafana-logo.svg'

const benefits = [
  'راه‌اندازی Grafana مدیریت‌شده بدون نیاز به تیم DevOps و با تحویل کمتر از چند ساعت',
  'پیکربندی امن با احراز هویت SSO، OAuth و مدیریت نقش‌ها برای تیم‌های بزرگ',
  'مانیتورینگ سلامت زیرساخت و داشبوردها با هشداردهی خودکار و واکنش ۲۴/۷',
  'بکاپ‌گیری منظم از داشبوردها، داده‌های متریک و تنظیمات برای بازیابی سریع',
  'یکپارچگی آماده با Prometheus، Loki، Elastic و صدها دیتا سورس دیگر',
  'قابلیت استقرار روی کلود مگان، سرور مشتری یا میزبانی اختصاصی کاملاً مدیریت‌شده',
  'اتوماسیون به‌روزرسانی نسخه‌ها و افزونه‌ها بدون قطعی سرویس یا از دست رفتن داده',
  'مشاوره طراحی داشبورد و بهینه‌سازی Query برای تیم‌های عملیات و محصول',
]

const features = [
  {
    title: 'Observability Stack کامل',
    description:
      'اتصال آماده به Prometheus، Loki، Tempo و دیتا سورس‌های محبوب برای ساخت داشبوردهای یکپارچه.',
  },
  {
    title: 'امنیت و کنترل دسترسی',
    description:
      'پشتیبانی از SSO، LDAP، RBAC و ممیزی فعالیت کاربران با نگهداری امن توکن‌ها و رمزنگاری.',
  },
  {
    title: 'هشداردهی هوشمند',
    description:
      'تنظیم Alert Rule، مدیریت تماس‌ها و ارسال هشدار از طریق ایمیل، Slack، PagerDuty و وب‌هوک.',
  },
  {
    title: 'بکاپ و Disaster Recovery',
    description:
      'بکاپ‌گیری زمان‌بندی‌شده از داشبوردها و تنظیمات با امکان بازیابی در محیط آزمایشی یا تولید.',
  },
  {
    title: 'مقیاس‌پذیری پیشرفته',
    description:
      'قابلیت توزیع بار با کلاسترهای Grafana، پشتیبانی از High Availability و ذخیره‌سازی توزیع‌شده.',
  },
  {
    title: 'پشتیبانی تخصصی',
    description:
      'آنالیز عملکرد، بهینه‌سازی کوئری‌ها و مانیتورینگ SLA با تیم عملیات مگان در تمام پلن‌ها.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '📊',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'Grafana آماده روی کلود مگان با مانیتورینگ، بکاپ و به‌روزرسانی خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور لینوکسی شما با امن‌سازی، اتصال به دیتا سورس‌ها و مانیتورینگ پیشرفته.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی و مدیریت کامل با SLA سازمانی و پاسخ‌گویی ۲۴/۷ تیم عملیات.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'dark',
    label: 'The Dark Knight',
    icon: '🦇',
    plans: [
      {
        id: 'dark-gotham',
        title: 'Gotham Watch (گاتهام)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان با مراقبت شبانه‌روزی مثل محافظان گاتهام.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'dark-wayne',
        title: 'Wayne Tower (برج وین)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با امنیت لایه‌ای، رمزنگاری و مانیتورینگ همچون بت‌کیو.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'dark-knightfall',
        title: 'Knightfall Ops (نایت‌فال)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA قهرمانانه و تیم واکنش سریع برای رویدادهای بحرانی.',
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
        title: 'Arrakis Pulse (آراکیش)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان با مانیتورینگ روان مثل حرکت شن‌های سیاره آراکیش.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'dune-sietch',
        title: 'Sietch Tabr (سیچ تَبر)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با محافظت همچون سپر فریمن‌ها و هشداردهی بلادرنگ.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'dune-atreides',
        title: 'House Atreides (آترایدیز)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA اشرافی و تیم عملیات برای ماموریت‌های حیاتی.',
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
        id: 'mandalorian-razor',
        title: 'Razor Crest (ریزر کرست)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی کلود مگان با سرعت و چابکی شکارچیان ماندالورین.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'mandalorian-nehvarro',
        title: 'Nevarro Outpost (ناوارو)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با محافظت چندلایه و مانیتورینگ بین کهکشانی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'mandalorian-grogu',
        title: 'Grogu Sanctuary (گروگو)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA ویژه و تیم پشتیبانی همیشگی مثل همراهی ماندو.',
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
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'کلود مگان با استقرار سریع برای شکار هیولاهای دیتای سرکش.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-novigrad',
        title: 'Novigrad Watch (نوویگراد)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با سپر جادوگران و مانیتورینگ لحظه‌ای.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-brotherhood',
        title: 'Brotherhood Council (انجمن جادوگران)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA جادویی و پشتیبانی ویژه برای ماموریت‌های حساس.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'آیا می‌توان Grafana را به ابزارهای موجود متصل کرد؟',
    answer:
      'بله، اتصال آماده به بیش از ۱۰۰ دیتا سورس شامل Prometheus، Loki، Elastic، InfluxDB، CloudWatch و دیتابیس‌های SQL را فراهم می‌کنیم.',
  },
  {
    question: 'چه گزینه‌هایی برای احراز هویت وجود دارد؟',
    answer:
      'پشتیبانی کامل از OAuth، SAML، LDAP، Azure AD و اکانت‌های محلی به همراه MFA و سیاست‌های رمز عبور ارائه می‌دهیم.',
  },
  {
    question: 'آیا امکان استقرار در شبکه خصوصی وجود دارد؟',
    answer:
      'بله، می‌توانیم سرویس را درون شبکه خصوصی سازمان یا روی سرورهای بدون دسترسی اینترنت عمومی با تونل امن پیاده‌سازی کنیم.',
  },
  {
    question: 'بکاپ‌ها چگونه نگهداری می‌شوند؟',
    answer:
      'بکاپ روزانه از داشبوردها، فولدرها و تنظیمات می‌گیریم و در مکان جداگانه رمزنگاری‌شده با سیاست نگهداری قابل تنظیم ذخیره می‌کنیم.',
  },
  {
    question: 'در صورت نیاز به مقیاس‌پذیری چه اقداماتی انجام می‌دهید؟',
    answer:
      'کلاسترهای Grafana، لایه کش، افزایش منابع و افقی‌سازی دیتاسورس‌ها را مدیریت می‌کنیم تا تجربه مشاهده‌پذیری پایدار بماند.',
  },
  {
    question: 'چه سطحی از پشتیبانی ارائه می‌شود؟',
    answer:
      'تمام پلن‌ها شامل پشتیبانی ۲۴/۷ هستند و در پلن اینترپرایز مدیر موفقیت مشتری اختصاصی و گزارش‌های سلامت دوره‌ای دریافت می‌کنید.',
  },
]

const GrafanaServicePage = () => {
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
    <section className="grafana-service">
      <header className="grafana-hero">
        <div className="grafana-hero__badge">Observability</div>
        <div className="grafana-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Grafana">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={grafanaLogo} alt="لوگوی Grafana" />
          </div>
        </div>
        <h1 className="grafana-hero__title">Grafana مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="grafana-hero__subtitle">
          داشبوردهای تحلیلی، هشداردهی و مشاهده‌پذیری را بدون پیچیدگی زیرساخت تجربه کنید. ما استقرار، امنیت و
          نگهداری Grafana را بر عهده می‌گیریم تا تیم شما روی تحلیل داده و بهبود محصول تمرکز داشته باشد.
        </p>
        <div className="grafana-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="grafana-section">
        <div className="grafana-section__content">
          <h2 className="grafana-section__title">چرا Grafana مدیریت‌شده مگان؟</h2>
          <p className="grafana-section__description">
            راه‌اندازی Grafana روی زیرساخت‌های مختلف نیاز به تخصص DevOps، امن‌سازی و مانیتورینگ دارد. تیم مگان زیرساخت
            آماده و مقیاس‌پذیر را فراهم می‌کند تا شما بر ایجاد بینش و تصمیم‌گیری داده‌محور تمرکز کنید.
          </p>
          <div className="grafana-insight">
            <article className="grafana-insight__card">
              <span className="grafana-insight__label">مشکل</span>
              <h3>پیچیدگی در مدیریت مشاهده‌پذیری</h3>
              <p>
                نگهداری Grafana، هماهنگی با دیتا سورس‌های متعدد و تضمین امنیت در استقرارهای سلف‌هاستد دشوار و زمان‌بر
                است و اغلب باعث کندی تیم‌ها می‌شود.
              </p>
            </article>
            <article className="grafana-insight__card">
              <span className="grafana-insight__label grafana-insight__label--solution">راه‌حل</span>
              <h3>سرویس کاملاً مدیریت‌شده</h3>
              <p>
                ما استقرار، مانیتورینگ، بکاپ و مقیاس‌پذیری Grafana را مدیریت می‌کنیم و محیطی امن و پایدار برای داشبوردهای
                حیاتی شما می‌سازیم.
              </p>
            </article>
          </div>
          <div className="grafana-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="grafana-benefits__item">
                <span className="grafana-benefits__icon" aria-hidden="true">✔️</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grafana-section grafana-section--surface" id="features">
        <div className="grafana-section__content">
          <h2 className="grafana-section__title">ویژگی‌های کلیدی Grafana در مگان</h2>
          <p className="grafana-section__description">
            تمام قابلیت‌های اصلی Grafana را با لایه‌های امنیتی و عملیاتی مگان ترکیب کنید تا مشاهده‌پذیری پایدار و مقیاس‌پذیر
            داشته باشید.
          </p>
        </div>
        <div className="grafana-features">
          {features.map((feature) => (
            <article key={feature.title} className="grafana-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grafana-section" id="pricing">
        <div className="grafana-section__content">
          <h2 className="grafana-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="grafana-section__description">
            می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود و با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ تم‌ها صرفاً برای فان طراحی
            شده‌اند و تفاوتی در سرویس ایجاد نمی‌کنند. سناریوهای استقرار ما ثابت می‌ماند: سرور ابری مگان، سرور شما یا
            میزبانی اختصاصی کاملاً مدیریت‌شده.
          </p>
          <p className="grafana-section__note">
            نام تم‌ها تنها برای ایجاد حس فان انتخاب شده‌اند و تفاوتی در امکانات یا قیمت نهایی ایجاد نمی‌کنند.
          </p>
        </div>
        <div className="grafana-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
          {pricingThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`grafana-pricing__theme${theme.id === activeTheme ? ' grafana-pricing__theme--active' : ''}`}
              onClick={() => handleThemeChange(theme.id)}
              role="tab"
              aria-selected={theme.id === activeTheme}
            >
              <span className="grafana-pricing__theme-icon" aria-hidden="true">{theme.icon}</span>
              {theme.label}
            </button>
          ))}
        </div>
        <div className="grafana-pricing">
          {currentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`grafana-plan${plan.id === activePlan ? ' grafana-plan--active' : ''}`}
              onClick={() => setActivePlan(plan.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActivePlan(plan.id)
                }
              }}
            >
              <header className="grafana-plan__head">
                <span className="grafana-plan__tier">{plan.tier}</span>
                <h3 className="grafana-plan__title">{plan.title}</h3>
              </header>
              <p className="grafana-plan__price">{plan.price}</p>
              <p className="grafana-plan__description">{plan.description}</p>
              <div className="grafana-plan__meta">{plan.infra}</div>
              <NavLink to="/login" className="grafana-plan__cta">
                سفارش دهید
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="grafana-section" id="faq">
        <div className="grafana-section__content">
          <h2 className="grafana-section__title">سوالات متداول Grafana</h2>
          <p className="grafana-section__description">
            اگر پاسخ سوال خود را پیدا نکردید با تیم ما تماس بگیرید تا راه‌حل مناسب سازمان شما را طراحی کنیم.
          </p>
        </div>
        <div className="grafana-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="grafana-faq__item">
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

export default GrafanaServicePage
