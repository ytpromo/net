import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import githubRunnerLogo from '../assets/github-runner-logo.svg'

const benefits = [
  'راه‌اندازی GitHub Runner اختصاصی بدون نیاز به تیم زیرساخت و در کمتر از چند ساعت',
  'پیکربندی امن با جداسازی شبکه، مخازن خصوصی و مدیریت دسترسی مبتنی بر نقش',
  'پشتیبان‌گیری از ایمیج‌ها و Snapshot‌ های Runner برای بازیابی سریع در شرایط بحرانی',
  'مقیاس‌پذیری خودکار برای هندل کردن صف‌های طولانی Workflow و بارهای سنگین CI/CD',
  'پایش سلامت Runner ها، متریک مصرف و هشداردهی خودکار برای جلوگیری از توقف Pipeline',
  'امکان استقرار روی کلود مگان، سرور لینوکسی مشتری یا میزبانی اختصاصی با SLA سازمانی',
  'یکپارچگی با مخازن خصوصی، Secrets سازمانی و ابزارهای امنیتی جهت رعایت Compliance',
  'پشتیبانی ۲۴/۷ تیم عملیات مگان برای رفع خطاهای Build و نگهداری مداوم Runner ها',
]

const features = [
  {
    title: 'مقیاس‌پذیری هوشمند',
    description:
      'قوانین Auto Scaling برای اضافه و حذف Runner بر اساس صف Job، زمان انتظار و محدودیت منابع تعریف می‌شود.',
  },
  {
    title: 'امنیت و شبکه‌سازی',
    description:
      'راه‌اندازی در شبکه‌های خصوصی، با VPN یا اتصال Direct Link به مخازن داخلی و مدیریت کامل Secrets.',
  },
  {
    title: 'تصویرهای سفارشی',
    description:
      'Build Image سفارشی با نسخه‌های دقیق زبان‌ها، SDK ها و ابزارهای خط فرمان برای تیم‌های مختلف تهیه می‌شود.',
  },
  {
    title: 'پایش و مشاهده‌پذیری',
    description:
      'داشبوردهای Grafana، هشدارهای Prometheus و گزارش‌های زمانی برای Job ها، متریک CPU و مصرف دیسک ارائه می‌شود.',
  },
  {
    title: 'مدیریت چرخه عمر',
    description:
      'به‌روزرسانی خودکار Runner، تمیزکاری Workspace، و تست نسخه‌های جدید GitHub Actions پیش از انتشار عمومی.',
  },
  {
    title: 'همگرایی با DevSecOps',
    description:
      'امکان اتصال به ابزارهای اسکن امنیتی، امضای آرتیفکت‌ها و اجرای Policyهای سازمانی در هر Pipeline.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '⚙️',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'Runnerهای آماده بر بستر کلود مگان با مانیتورینگ، به‌روزرسانی و مقیاس‌پذیری خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی سرور لینوکسی خریداری‌شده توسط شما با شبکه‌سازی امن و مدیریت Secrets.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA سازمانی، ظرفیت بالا و تیم عملیات برای هندل کردن Pipelineهای حیاتی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'marvel',
    label: 'Marvel Universe',
    icon: '🦸‍♂️',
    plans: [
      {
        id: 'marvel-stark',
        title: 'Stark Labs (استارک لبز)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'Runnerهای آماده مثل زره‌های تونی استارک برای Build سریع و پایدار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'marvel-hellicarrier',
        title: 'Helicarrier Ops (هلیکریر)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با امنیت سطح شیلد و کنترل کامل Pipelineها.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'marvel-wakanda',
        title: 'Wakanda Prime (واکاندا)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با فناوری وایبرانیوم برای تیم‌های Enterprise.',
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
        title: 'Rebel Forge (شورشیان)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'Runnerهای آماده در کلود مگان برای نبرد با صف‌های طولانی CI.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'starwars-jedi',
        title: 'Jedi Council (جدای)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با محافظت جدای و توازن کامل منابع.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'starwars-empire',
        title: 'Empire Forge (امپراتوری)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با ناوگان کامل و واکنش سریع برای مأموریت‌های بحرانی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'harrypotter',
    label: 'Harry Potter',
    icon: '🪄',
    plans: [
      {
        id: 'harry-hogwarts',
        title: 'Hogwarts Labs (هاگوارتز)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'Runnerهای جادویی در کلود مگان با آماده‌سازی سریع مثل ورد آلوهومورا.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'harry-ministry',
        title: 'Ministry Ops (وزارت سحر و جادو)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با کنترل دقیق مجوزها همانند وزارتخانه.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'harry-order',
        title: 'Order of Phoenix (محفل ققنوس)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با تیم عملیات همیشه بیدار مثل ققنوس‌ها.',
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
        title: 'Kaer Morhen Forge (کر مورهن)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'Runnerهای آماده روی کلود مگان با انعطاف برای شکار باگ‌ها.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'witcher-novigrad',
        title: 'Novigrad Smiths (نوویگراد)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استقرار روی سرور شما با امنیت بالاتر و ابزارهای کامل کارگاه ویچر.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'witcher-brotherhood',
        title: 'Brotherhood Nexus (انجمن)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA طلایی و عملیات ۲۴/۷ برای مأموریت‌های جادویی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'چگونه Runnerها با مخازن خصوصی ما امن می‌مانند؟',
    answer:
      'همه Runnerها در شبکه ایزوله با VPN یا اتصال خصوصی راه‌اندازی می‌شوند، Secrets در Vault امن نگهداری می‌شوند و دسترسی‌ها با RBAC محدود می‌گردد.',
  },
  {
    question: 'آیا امکان مقیاس‌پذیری خودکار وجود دارد؟',
    answer:
      'بله، بر اساس طول صف Workflow، زمان انتظار و محدودیت منابع، Runner جدید Provision شده یا Runnerهای Idle خاموش می‌شوند تا هزینه بهینه شود.',
  },
  {
    question: 'چگونه ایمیج سفارشی برای Runner دریافت کنیم؟',
    answer:
      'تیم ما لیست وابستگی‌ها و ابزارهای مورد نیاز شما را دریافت می‌کند، ایمیج پایه می‌سازد و آن را در Registry اختصاصی با نسخه‌بندی نگهداری می‌کند.',
  },
  {
    question: 'آیا از اجرای Jobهای GPU یا ARM پشتیبانی می‌کنید؟',
    answer:
      'بله، بر اساس نیاز پروژه، Runnerهای GPU یا ARM راه‌اندازی می‌کنیم و در صورت نیاز به دسترسی سخت‌افزاری خاص، سرور اختصاصی پیشنهاد می‌دهیم.',
  },
  {
    question: 'در صورت بروز خطا در Pipeline چه می‌شود؟',
    answer:
      'پشتیبانی ۲۴/۷ ما لاگ‌ها را بررسی می‌کند، Runner مشکل‌دار را جایگزین می‌نماید و در صورت نیاز در کنار تیم شما علت‌یابی می‌کند تا جریان CI/CD پایدار بماند.',
  },
  {
    question: 'چگونه از شوخی بودن نام‌گذاری پلن‌ها مطمئن شویم؟',
    answer:
      'نام پلن‌ها بر اساس فرنچایزهای محبوب انتخاب شده‌اند تا روند انتخاب برای شما سرگرم‌کننده باشد؛ امکانات هر پلن معادل توضیحات اصلی در جدول قیمت‌گذاری است.',
  },
  {
    question: 'آیا امکان استقرار در چند منطقه جغرافیایی وجود دارد؟',
    answer:
      'بله، می‌توانیم Runnerها را در چند دیتاسنتر مگان یا لوکیشن‌های مشتری راه‌اندازی کنیم و هماهنگی بین آن‌ها را با Load Balancer انجام دهیم.',
  },
  {
    question: 'گزارش‌گیری از مصرف و هزینه چگونه ارائه می‌شود؟',
    answer:
      'گزارش‌های ماهانه شامل تعداد Job، ساعت اجرای Runner، مصرف منابع و هزینه تفکیک‌شده ارائه می‌شود و امکان دریافت API برای اتصال به سیستم مالی شما وجود دارد.',
  },
]

const GitHubRunnerServicePage = () => {
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
    <section className="github-runner-service">
      <header className="github-runner-hero">
        <div className="github-runner-hero__badge">CI/CD Automation</div>
        <div className="github-runner-hero__logo hero-logo-pair" aria-label="لوگوی مگان و GitHub Runner">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={githubRunnerLogo} alt="لوگوی GitHub Runner" />
          </div>
        </div>
        <h1 className="github-runner-hero__title">GitHub Runner مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="github-runner-hero__subtitle">
          اجرای Pipelineهای GitHub Actions را با Runnerهای اختصاصی، امن و مقیاس‌پذیر تجربه کنید. تیم مگان تمامی
          عملیات، مانیتورینگ و نگهداری را برعهده می‌گیرد تا شما روی توسعه محصول تمرکز کنید.
        </p>
        <div className="github-runner-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="github-runner-section">
        <div className="github-runner-section__content">
          <h2 className="github-runner-section__title">چرا GitHub Runner مدیریت‌شده مگان؟</h2>
          <p className="github-runner-section__description">
            راه‌اندازی Runnerهای GitHub روی زیرساخت‌های مختلف نیاز به تخصص DevOps، امن‌سازی و مانیتورینگ دقیق دارد.
            تیم مگان زیرساخت آماده و مقیاس‌پذیر را فراهم می‌کند تا شما بر طراحی Pipeline و ارائه ویژگی‌های جدید تمرکز
            کنید.
          </p>
          <div className="github-runner-insight">
            <article className="github-runner-insight__card">
              <span className="github-runner-insight__label">مشکل</span>
              <h3>مدیریت Runnerهای پرهزینه و پیچیده</h3>
              <p>
                تهیه سرور، پیکربندی امنیتی و نگهداری Runnerهای اختصاصی GitHub Actions زمان‌بر است و می‌تواند باعث وقفه در
                تحویل مداوم شود.
              </p>
            </article>
            <article className="github-runner-insight__card">
              <span className="github-runner-insight__label github-runner-insight__label--solution">راه‌حل</span>
              <h3>سرویس کاملاً مدیریت‌شده مگان</h3>
              <p>
                ما Runnerها را با امنیت، مقیاس‌پذیری و مانیتورینگ کامل تحویل می‌دهیم و مسئولیت به‌روزرسانی، پشتیبان‌گیری و
                رفع خطاها را برعهده می‌گیریم.
              </p>
            </article>
          </div>
          <div className="github-runner-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="github-runner-benefits__item">
                <span className="github-runner-benefits__icon" aria-hidden="true">✔️</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="github-runner-section github-runner-section--surface" id="features">
        <div className="github-runner-section__content">
          <h2 className="github-runner-section__title">ویژگی‌های کلیدی GitHub Runner در مگان</h2>
          <p className="github-runner-section__description">
            تمامی قابلیت‌های اصلی Runnerها با کنترل کامل امنیتی، پایش مداوم و سفارشی‌سازی فنی در اختیار تیم‌های شماست تا
            چرخه CI/CD همیشه پایدار بماند.
          </p>
        </div>
        <div className="github-runner-features">
          {features.map((feature) => (
            <article key={feature.title} className="github-runner-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="github-runner-section" id="pricing">
        <div className="github-runner-section__content">
          <h2 className="github-runner-section__title">قیمت‌گذاری GitHub Runner مدیریت‌شده</h2>
          <p className="github-runner-section__description">
            می‌توانید پلن‌ها را بر اساس تم سریال و فرنچایز محبوب خود مشاهده کنید. نام‌گذاری‌ها صرفاً برای جذابیت هستند و
            هر کدام معادل پلن‌های اصلی با امکانات یکسان می‌باشند.
          </p>
          <div className="github-runner-pricing__themes" role="tablist">
            {pricingThemes.map((theme) => (
              <button
                key={theme.id}
                type="button"
                role="tab"
                onClick={() => handleThemeChange(theme.id)}
                className={`github-runner-pricing__theme${theme.id === activeTheme ? ' github-runner-pricing__theme--active' : ''}`}
              >
                <span className="github-runner-pricing__theme-icon" aria-hidden="true">
                  {theme.icon}
                </span>
                {theme.label}
              </button>
            ))}
          </div>
        </div>
        <div className="github-runner-pricing">
          {currentPlans.map((plan) => {
            const isActive = plan.id === activePlan
            return (
              <article
                key={plan.id}
                className={`github-runner-plan${isActive ? ' github-runner-plan--active' : ''}`}
                onMouseEnter={() => setActivePlan(plan.id)}
                onFocus={() => setActivePlan(plan.id)}
              >
                <div className="github-runner-plan__head">
                  <span className="github-runner-plan__tier">{plan.tier}</span>
                  <h3 className="github-runner-plan__title">{plan.title}</h3>
                </div>
                <p className="github-runner-plan__price">{plan.price}</p>
                <p className="github-runner-plan__description">{plan.description}</p>
                <p className="github-runner-plan__meta">{plan.infra}</p>
                <NavLink to="/login" className="github-runner-plan__cta">
                  سفارش دهید
                </NavLink>
              </article>
            )
          })}
        </div>
      </section>

      <section className="github-runner-section github-runner-section--surface" id="faq">
        <div className="github-runner-section__content">
          <h2 className="github-runner-section__title">سوالات متداول GitHub Runner مدیریت‌شده</h2>
          <p className="github-runner-section__description">
            پاسخ رایج‌ترین پرسش‌ها درباره Runnerهای اختصاصی GitHub Actions در زیر آورده شده است. برای جزئیات بیشتر با تیم
            ما در ارتباط باشید.
          </p>
        </div>
        <div className="github-runner-faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="github-runner-faq__item">
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

export default GitHubRunnerServicePage
