import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import wordpressLogo from '../assets/wordpress-logo.svg'

const benefits = [
  'راه‌اندازی کامل WordPress و MariaDB با کانفیگ امنیتی سخت‌گیرانه، WAF و SSL مدیریت‌شده توسط تیم مگان',
  'بکاپ‌گیری ساعتی از دیتابیس و فایل‌ها با امکان نگهداری در فضای ابری مگان یا ذخیره‌سازی اختصاصی شما',
  'به‌روزرسانی خودکار هسته، افزونه‌ها و پوسته‌ها با سناریوهای Rollback تست‌شده برای اطمینان از پایداری سایت',
  'شبکه تحویل محتوا، کش چندلایه و بهینه‌سازی دیتابیس برای بارگذاری سریع صفحات حتی در اوج ترافیک',
  'مانیتورینگ ۲۴/۷، هشداردهی لحظه‌ای و داشبوردهای تحلیلی برای پایش سلامت سرویس و تجربه کاربر',
  'استقرار چندمحیطی (Production، Staging، Development) با گردش کار CI/CD و مدیریت نسخه محتوا',
  'پشتیبانی از مقیاس‌پذیری افقی و افزونگی دیتابیس برای فروشگاه‌ها و پورتال‌های پرترافیک',
  'تیم پشتیبانی فارسی‌زبان با SLA سازمانی، مشاوره معماری و مهاجرت بدون قطعی از سرویس‌های فعلی شما',
]

const features = [
  {
    title: 'MariaDB بهینه‌شده برای WordPress',
    description:
      'کلاسترهای MariaDB با پیکربندی Replication، تنظیمات Performance Schema و شاخص‌های پیشنهادی برای فروشگاه‌ها و پورتال‌های پرترافیک.',
  },
  {
    title: 'امنیت و سخت‌سازی چندلایه',
    description:
      'فعال‌سازی WAF، Fail2ban، محدودیت IP، رمزنگاری KMS و یکپارچه‌سازی با لاگ‌سرور مگان برای رصد کامل فعالیت‌ها.',
  },
  {
    title: 'تحویل محتوا و کش پیشرفته',
    description:
      'پیکربندی Redis Object Cache، Page Cache، CDN مگان و فشرده‌سازی خودکار تصاویر برای کاهش TTFB و افزایش سئو.',
  },
  {
    title: 'اتوماسیون CI/CD محتوا',
    description:
      'استقرار Git-based، محیط‌های Staging و Workflowهای تأیید محتوا برای تیم‌های مارکتینگ و توسعه.',
  },
  {
    title: 'سازگاری افزونه‌ها و تم‌ها',
    description:
      'آزمایش خودکار افزونه‌های حساس، پایش نسخه‌ها و اعمال به‌روزرسانی مرحله‌ای با قابلیت بازگشت آنی.',
  },
  {
    title: 'قابلیت مشاهده و گزارش‌دهی',
    description:
      'داشبوردهای Grafana، هشداردهی Prometheus و گزارش‌های ماهانه SLA برای تیم فنی و مدیریت کسب‌وکار.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🚀',
    plans: [
      {
        id: 'standard-megan-wordpress',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۹۵۰٬۰۰۰ تومان در ماه',
        description: 'WordPress + MariaDB آماده روی کلود مگان با مانیتورینگ، CDN و بکاپ ساعتی.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned-wordpress',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور لینوکسی شما همراه با امن‌سازی، مانیتورینگ و گردش کار به‌روزرسانی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated-wordpress',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۴٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی کاملاً مدیریت‌شده بدون نیاز به سرور شخصی با SLA سازمانی و پشتیبانی ۲۴/۷.',
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
        id: 'strangerthings-hawkins-wordpress',
        title: 'Hawkins Lab (هاوکینز لب)',
        tier: 'پلن اقتصادی',
        price: '۹۵۰٬۰۰۰ تومان در ماه',
        description: 'استقرار سریع روی کلود مگان با لایه‌های محافظتی برای سایت‌های پرترافیک.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'strangerthings-starcourt-wordpress',
        title: 'Starcourt Mall (استارکورت مال)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با کنترل کامل افزونه‌ها، CI/CD و پشتیبان‌گیری پیشرفته.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'strangerthings-uptown-wordpress',
        title: 'Upside Down Command (اپساید داون)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی و تیم واکنش سریع برای کمپین‌های حساس.',
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
        id: 'starwars-rebel-wordpress',
        title: 'Rebel Base (ریبِل بیس)',
        tier: 'پلن اقتصادی',
        price: '۹۵۰٬۰۰۰ تومان در ماه',
        description: 'راه‌اندازی سریع روی کلود مگان با کش چندلایه و CDN برای بارگذاری نورسریع.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'starwars-bespin-wordpress',
        title: 'Bespin Cloud (بسپین کلود)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با امنیت جدای و مانیتورینگ دقیق دیتابیس.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'starwars-coruscant-wordpress',
        title: 'Coruscant Tower (کوروسکانت)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با قابلیت مقیاس‌پذیری افقی و تیم عملیاتی ۲۴/۷.',
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
        id: 'foundation-terminus-wordpress',
        title: 'Terminus (ترمینوس)',
        tier: 'پلن اقتصادی',
        price: '۹۵۰٬۰۰۰ تومان در ماه',
        description: 'محیط آماده روی کلود مگان برای سایت‌های محتوایی و مجلات دیجیتال.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'foundation-trantor-wordpress',
        title: 'Trantor (ترنتور)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با Workflow چندمرحله‌ای و کنترل دسترسی دقیق.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'foundation-vault-wordpress',
        title: 'Seldon Vault (ولْت سل‌دن)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تضمین بازیابی، Geo-Replication و SLA سازمانی.',
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
        id: 'witcher-kaermorhen-wordpress',
        title: 'Kaer Morhen (کر مورهن)',
        tier: 'پلن اقتصادی',
        price: '۹۵۰٬۰۰۰ تومان در ماه',
        description: 'استقرار مدیریت‌شده روی کلود مگان با تمرکز بر امنیت افزونه‌ها و پایداری.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-novigrad-wordpress',
        title: 'Novigrad (نوویگراد)',
        tier: 'پلن حرفه‌ای',
        price: '۲٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با سیاست‌های امنیتی چندلایه و مانیتورینگ ترافیک.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-brotherhood-wordpress',
        title: 'Brotherhood (انجمن جادوگران)',
        tier: 'پلن اینترپرایز',
        price: '۴٬۹۵۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم واکنش سریع و ضمانت دسترسی ۹۹.۹۵٪.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'راه‌اندازی WordPress مدیریت‌شده چقدر زمان می‌برد؟',
    answer:
      'پس از دریافت دسترسی‌ها، محیط تولید و Staging در کمتر از ۲۴ ساعت آماده می‌شود و چک‌لیست امنیتی قبل از تحویل تکمیل خواهد شد.',
  },
  {
    question: 'آیا امکان مهاجرت از هاست فعلی بدون قطعی وجود دارد؟',
    answer:
      'بله، مهاجرت مرحله‌ای با تهیه بکاپ کامل، سنجش کارایی و تست نهایی در محیط Staging انجام می‌شود و سپس با حداقل downtime سوئیچ می‌کنیم.',
  },
  {
    question: 'چگونه از سلامت افزونه‌ها و تم‌ها مطمئن می‌شوید؟',
    answer:
      'آپدیت‌ها ابتدا در محیط Staging بررسی می‌شوند، تست خودکار انجام می‌شود و پس از تایید شما به محیط اصلی منتقل خواهند شد.',
  },
  {
    question: 'برای سایت‌های فروشگاهی پرترافیک چه گزینه‌هایی دارید؟',
    answer:
      'امکان مقیاس‌پذیری افقی، استفاده از Redis Cluster، Geo-Replication دیتابیس و توزیع ترافیک از طریق Load Balancer فراهم است.',
  },
  {
    question: 'آیا دسترسی SSH و Git در اختیار تیم توسعه ما قرار می‌گیرد؟',
    answer:
      'بله، می‌توانید دسترسی محدودشده SSH، Git و ابزارهای CI/CD را دریافت کنید و سیاست‌های RBAC توسط ما مدیریت می‌شود.',
  },
  {
    question: 'سیاست بکاپ و بازیابی چگونه است؟',
    answer:
      'بکاپ‌های ساعتی و روزانه نگهداری می‌شوند، امکان ذخیره در فضای ابری شما یا MinIO وجود دارد و فرایند بازیابی به‌صورت دوره‌ای تست می‌شود.',
  },
  {
    question: 'آیا امکان استفاده از افزونه‌های Premium شخصی وجود دارد؟',
    answer:
      'بله، افزونه‌های Premium پس از بررسی امنیتی و سازگاری نصب می‌شوند و کلیدهای لایسنس در Vault امن نگهداری خواهد شد.',
  },
  {
    question: 'در صورت نیاز به توسعه اختصاصی چه خدماتی ارائه می‌دهید؟',
    answer:
      'تیم ما می‌تواند محیط‌های Development، pipelineهای تست و دسترسی به APIهای مگان را فراهم کند تا توسعه‌دهندگان شما سریع‌تر تغییرات را پیاده کنند.',
  },
  {
    question: 'چگونه SLA و گزارش‌های عملکرد ارائه می‌شود؟',
    answer:
      'گزارش ماهانه شامل uptime، کارایی، وضعیت امنیتی و اقدامات انجام‌شده ارسال می‌شود و SLA بر اساس پلن انتخابی تضمین خواهد شد.',
  },
]

const WordpressServicePage = () => {
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
    <section className="wordpress-service">
      <header className="wordpress-hero">
        <div className="wordpress-hero__badge">Managed CMS</div>
        <div className="wordpress-hero__logo hero-logo-pair" aria-label="لوگوی مگان و WordPress">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={wordpressLogo} alt="لوگوی WordPress" />
          </div>
        </div>
        <h1 className="wordpress-hero__title">WordPress + MariaDB مدیریت‌شده روی زیرساخت مگان</h1>
        <p className="wordpress-hero__subtitle">
          سرویس کاملاً مدیریت‌شده برای WordPress و دیتابیس MariaDB با امنیت چندلایه، بکاپ ساعتی، بهینه‌سازی عملکرد و
          پشتیبانی ۲۴/۷. ما زیرساخت و عملیات DevOps را انجام می‌دهیم تا شما روی تولید محتوا و رشد کسب‌وکار تمرکز کنید.
        </p>
        <div className="wordpress-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="wordpress-section">
        <div className="wordpress-section__content">
          <h2 className="wordpress-section__title">چرا WordPress مدیریت‌شده مگان؟</h2>
          <p className="wordpress-section__description">
            راه‌اندازی WordPress روی زیرساخت‌های مختلف نیاز به تخصص DevOps، امن‌سازی و مانیتورینگ دارد. تیم مگان زیرساختی
            آماده، امن و قابل مقیاس ارائه می‌دهد تا تیم شما بدون دغدغه فنی، تجربه‌ای سریع و پایدار به کاربران ارائه کند.
          </p>
          <div className="wordpress-insight">
            <article className="wordpress-insight__card">
              <span className="wordpress-insight__label">مشکل</span>
              <h3>پیچیدگی عملیات و نگهداری</h3>
              <p>
                مدیریت افزونه‌ها، امنیت سرور، بکاپ‌گیری و مانیتورینگ مستمر برای تیم‌های محتوا زمان‌بر است و ریسک Downtime را
                افزایش می‌دهد.
              </p>
            </article>
            <article className="wordpress-insight__card">
              <span className="wordpress-insight__label wordpress-insight__label--solution">راه‌حل</span>
              <h3>پلتفرم کاملاً مدیریت‌شده</h3>
              <p>
                ما تمام زیرساخت، به‌روزرسانی‌ها، امنیت و مانیتورینگ را مدیریت می‌کنیم تا WordPress شما همیشه پایدار، سریع و آماده
                رشد باشد.
              </p>
            </article>
          </div>
          <div className="wordpress-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="wordpress-benefits__item">
                <span className="wordpress-benefits__icon" aria-hidden="true">✨</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wordpress-section wordpress-section--surface" id="features">
        <div className="wordpress-section__content">
          <h2 className="wordpress-section__title">ویژگی‌های کلیدی WordPress در مگان</h2>
          <p className="wordpress-section__description">
            ترکیب WordPress و MariaDB با مهندسی پلتفرم مگان به شما این امکان را می‌دهد که تجربه‌ای سریع، امن و مقیاس‌پذیر به
            کاربران خود ارائه کنید.
          </p>
        </div>
        <div className="wordpress-features">
          {features.map((feature) => (
            <article key={feature.title} className="wordpress-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wordpress-section" id="pricing">
        <div className="wordpress-section__content">
          <h2 className="wordpress-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="wordpress-section__description">
            می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود و با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ تم‌ها صرفاً برای فان طراحی شده‌اند و
            تفاوتی در سرویس ایجاد نمی‌کنند. سناریوهای استقرار ما ثابت است: سرور ابری مگان، سرور شما یا میزبانی اختصاصی.
          </p>
          <p className="wordpress-section__note">
            نام تم‌ها تنها برای ایجاد حس فان انتخاب شده‌اند و تفاوتی در امکانات یا قیمت نهایی ایجاد نمی‌کنند.
          </p>
        </div>
        <div className="wordpress-pricing">
          <div className="wordpress-pricing__themes">
            {pricingThemes.map((theme) => (
              <button
                key={theme.id}
                type="button"
                className={`wordpress-pricing__theme${theme.id === activeTheme ? ' wordpress-pricing__theme--active' : ''}`}
                onClick={() => handleThemeChange(theme.id)}
              >
                <span aria-hidden="true">{theme.icon}</span>
                {theme.label}
              </button>
            ))}
          </div>
          <div className="wordpress-pricing__plans">
            {currentPlans.map((plan) => (
              <article
                key={plan.id}
                className={`wordpress-plan${plan.id === activePlan ? ' wordpress-plan--active' : ''}`}
                onMouseEnter={() => setActivePlan(plan.id)}
                onFocus={() => setActivePlan(plan.id)}
              >
                <h3>{plan.title}</h3>
                <span className="wordpress-plan__tier">{plan.tier}</span>
                <p className="wordpress-plan__price">{plan.price}</p>
                <p className="wordpress-plan__description">{plan.description}</p>
                <span className="wordpress-plan__meta">{plan.infra}</span>
                <NavLink to="/login" className="wordpress-plan__cta">
                  سفارش دهید
                </NavLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wordpress-section" id="faq">
        <div className="wordpress-section__content">
          <h2 className="wordpress-section__title">سوالات متداول WordPress مدیریت‌شده</h2>
          <p className="wordpress-section__description">
            سوالاتی که مشتریان سازمانی ما پیش از راه‌اندازی WordPress مطرح می‌کنند. اگر سوال دیگری دارید تیم پشتیبانی ما ۲۴/۷ در
            دسترس است.
          </p>
        </div>
        <div className="wordpress-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="wordpress-faq__item">
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

export default WordpressServicePage
