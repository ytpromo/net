import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LandingFooter from '../components/LandingFooter'
import meganLogo from '../assets/megan-logo.svg'
import jellyfinLogo from '../assets/jellyfin-logo.svg'

const benefits = [
  'استریم روان محتوا روی وب، موبایل، تلویزیون‌های هوشمند و کلاینت‌های خانگی بدون مدیریت زیرساخت',
  'سازمان‌دهی خودکار آرشیو فیلم، سریال و موسیقی با بازیابی پوستر، متادیتا و زیرنویس',
  'ترنسکدینگ هوشمند GPU/CPU با تنظیمات اختصاصی برای اینترنت‌های مختلف',
  'کنترل دسترسی دقیق با پروفایل‌های خانوادگی، محدودیت سنی و احراز هویت یکپارچه',
  'پشتیبان‌گیری زمان‌بندی‌شده از پایگاه‌داده Jellyfin و رسانه‌های حیاتی همراه با نسخه‌سازی',
  'مانیتورینگ ۲۴/۷ مصرف منابع، پهنای‌باند و استریم‌های فعال با هشدار بلادرنگ',
  'اتصال آسان به فضای ذخیره‌سازی ابری مگان، NAS سازمانی یا شبکه داخلی شما',
  'امکان استقرار روی کلود مگان، سرور لینوکسی خریداری‌شده یا دیتاسنتر دلخواه مشتری',
]

const features = [
  {
    title: 'Transcoding بهینه',
    description:
      'پروفایل‌های ترنسکدینگ مبتنی بر سخت‌افزار با پشتیبانی از Intel Quick Sync، NVENC و نرم‌افزار FFMPEG برای ارائه بهترین کیفیت.',
  },
  {
    title: 'کتابخانه هوشمند رسانه',
    description:
      'خودکارسازی جمع‌آوری متادیتا از منابع معتبر، مدیریت فصل‌ها و زیرنویس‌ها و امکان برچسب‌گذاری سفارشی برای تیم محتوای شما.',
  },
  {
    title: 'مدیریت کاربران و SSO',
    description:
      'یکپارچگی با SSO سازمانی، OAuth و LDAP به همراه تعریف نقش‌ها، سهمیه‌ها و محدودیت دسترسی به پوشه‌ها.',
  },
  {
    title: 'پایش و مشاهده‌پذیری',
    description:
      'داشبورد Grafana، لاگ مرکزی و ارسال متریک به ابزارهای مانیتورینگ برای تشخیص سریع گلوگاه‌ها.',
  },
  {
    title: 'اتوماسیون و یکپارچگی',
    description:
      'Webhook، اسکریپت‌های post-processing و API رسمی Jellyfin برای اتصال به دانلود منیجرها و CI/CD.',
  },
  {
    title: 'انعطاف در استقرار',
    description:
      'پشتیبانی از دیپلوی در Kubernetes، سرور Bare Metal یا ماشین مجازی با سیاست‌های امنیتی سخت‌گیرانه.',
  },
]

const pricingThemes = [
  {
    id: 'standard',
    label: 'حالت استاندارد',
    icon: '🎬',
    plans: [
      {
        id: 'standard-megan',
        title: 'استقرار روی سرور ابری مگان',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'Jellyfin مدیریت‌شده با ذخیره‌سازی ابری مگان، ترنسکدینگ بهینه و مانیتورینگ ۲۴/۷.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'standard-owned',
        title: 'نصب روی سرور شما',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی بر روی سرور یا دیتاسنتر فعلی شما به همراه سخت‌سازی امنیتی و بکاپ مدیریت‌شده.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'standard-dedicated',
        title: 'میزبانی اختصاصی سلف‌هاستد',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'تحویل سرویس کاملاً مدیریت‌شده با SLA طلایی و ذخیره‌سازی اختصاصی بدون نیاز به سرور شخصی.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'strangerthings',
    label: 'Stranger Things',
    icon: '🧇',
    plans: [
      {
        id: 'strangerthings-hawkins',
        title: 'Hawkins (هاوکینز)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استریم خانوادگی روی کلود مگان با مانیتورینگ هوشمند برای جلوگیری از Upside Down latency.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'strangerthings-starcourt',
        title: 'Starcourt (استارکورت)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با ایمن‌سازی در برابر Mind Flayer و دسترسی چندکاربره.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'strangerthings-eleven',
        title: 'Project Eleven (پروژه الون)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA قهرمانانه و بکاپ‌های چندلایه برای آرشیوهای حساس.',
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
        description: 'سفر بین‌ستاره‌ای محتوا با کلود مگان و ترنسکدینگ warp-speed.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'startrek-deepspace',
        title: 'Deep Space Nine (دیپ اسپیس ناین)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'پیاده‌سازی روی پایگاه شما با امنیت Starfleet و مانیتورینگ پیشرفته.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'startrek-voyager',
        title: 'Voyager (وویجر)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA بین‌سیاره‌ای و پشتیبانی چندسیاره‌ای.',
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
        description: 'کلود مگان با استقرار خودکار برای ساخت آرشیو رسانه‌ای امپراطوری شما.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'foundation-trantor',
        title: 'Trantor (ترنتور)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی زیرساخت سازمانی با سیاست‌های امنیتی دقیق و کنترل دسترسی چندسطحی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'foundation-seldon',
        title: 'Seldon Vault (سلدون)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با آرشیوهای تکرار شده و تیم عملیات همیشه در دسترس.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
  {
    id: 'wheel',
    label: 'The Wheel of Time',
    icon: '🌀',
    plans: [
      {
        id: 'wheel-twoRivers',
        title: 'Two Rivers (تو ریورز)',
        tier: 'پلن اقتصادی',
        price: '۱٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'استریم امن برای تیم‌های کوچک روی کلود مگان با بکاپ خودکار.',
        infra: 'زیرساخت کامل مگان',
      },
      {
        id: 'wheel-tarvalon',
        title: 'Tar Valon (تار والون)',
        tier: 'پلن حرفه‌ای',
        price: '۳٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'نصب روی سرور شما با محافظت سپرهای Aes Sedai و مانیتورینگ دائمی.',
        infra: 'سرور شخصی مشتری',
      },
      {
        id: 'wheel-amyrlin',
        title: 'Amyrlin Seat (اَمِرلین)',
        tier: 'پلن اینترپرایز',
        price: '۵٬۰۰۰٬۰۰۰ تومان در ماه',
        description: 'میزبانی اختصاصی با SLA پریمیوم و تیم پشتیبانی ویژه برای آرشیوهای گسترده.',
        infra: 'میزبانی اختصاصی مگان',
      },
    ],
  },
]

const faqs = [
  {
    question: 'استقرار Jellyfin مدیریت‌شده چقدر زمان می‌برد؟',
    answer:
      'پس از دریافت اطلاعات دسترسی، محیط Jellyfin شما طی چند ساعت آماده خواهد شد و لینک دسترسی به همراه کاربری امن ارسال می‌شود.',
  },
  {
    question: 'آیا می‌توان آرشیو فعلی را به سرویس منتقل کرد؟',
    answer:
      'بله، تیم ما مهاجرت فایل‌ها، متادیتا و پایگاه‌داده را انجام می‌دهد و پس از اطمینان از صحت، سرویس جدید را تحویل می‌دهد.',
  },
  {
    question: 'چگونه ترنسکدینگ و مصرف منابع مدیریت می‌شود؟',
    answer:
      'پروفایل‌های ترنسکدینگ بر اساس نوع سخت‌افزار و شبکه شما تنظیم می‌شوند و مانیتورینگ فعال جهت جلوگیری از افت کیفیت انجام می‌گیرد.',
  },
  {
    question: 'آیا می‌توان به ابزارهای خارجی متصل شد؟',
    answer:
      'بله، با استفاده از Webhook و API رسمی، اتصال به Sonarr، Radarr، Plex Meta Manager یا اتوماسیون‌های DevOps امکان‌پذیر است.',
  },
  {
    question: 'برای امنیت حساب کاربران چه اقداماتی انجام می‌شود؟',
    answer:
      'احراز هویت چندمرحله‌ای، محدودیت IP، گواهی SSL و یکپارچگی با SSO سازمانی برای محافظت از حساب‌ها فعال می‌شود.',
  },
  {
    question: 'اگر نیاز به فضای ذخیره‌سازی بیشتری داشته باشم چه می‌شود؟',
    answer:
      'به‌راحتی می‌توان فضای ابری مگان را ارتقا داد یا فضای ذخیره‌سازی شبکه‌ای جدید متصل کرد بدون اینکه سرویس متوقف شود.',
  },
  {
    question: 'آیا امکان استقرار در محیط آفلاین وجود دارد؟',
    answer:
      'بله، می‌توان سرویس را در شبکه‌های ایزوله سازمانی یا دیتاسنترهای فاقد اینترنت عمومی راه‌اندازی و به‌روزرسانی کرد.',
  },
  {
    question: 'چه نوع SLA و پشتیبانی ارائه می‌شود؟',
    answer:
      'پشتیبانی ۲۴/۷ همراه با SLA متناسب هر پلن ارائه می‌شود و در پلن اینترپرایز توافق سطح خدمت اختصاصی تنظیم خواهد شد.',
  },
]

const JellyfinServicePage = () => {
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
    <section className="jellyfin-service">
      <header className="jellyfin-hero">
        <div className="jellyfin-hero__badge">Media Streaming</div>
        <div className="jellyfin-hero__logo hero-logo-pair" aria-label="لوگوی مگان و Jellyfin">
          <div className="hero-logo-pair__image hero-logo-pair__image--megan">
            <img src={meganLogo} alt="لوگوی مگان" />
          </div>
          <span className="hero-logo-pair__divider" />
          <div className="hero-logo-pair__image">
            <img src={jellyfinLogo} alt="لوگوی Jellyfin" />
          </div>
        </div>
        <h1 className="jellyfin-hero__title">Jellyfin مدیریت‌شده روی زیرساخت ابری مگان</h1>
        <p className="jellyfin-hero__subtitle">
          استریم رسانه‌های سازمانی را با زیرساخت امن و مقیاس‌پذیر تجربه کنید. ما استقرار، ترنسکدینگ، مانیتورینگ و نگهداری
          کامل Jellyfin را انجام می‌دهیم تا شما فقط روی محتوای خود تمرکز کنید.
        </p>
        <div className="jellyfin-hero__actions">
          <NavLink to="/dashboard" className="button button--primary">
            ورود به کنسول
          </NavLink>
          <a href="#pricing" className="button button--ghost">
            مشاهده پلن‌ها
          </a>
        </div>
      </header>

      <section className="jellyfin-section">
        <div className="jellyfin-section__content">
          <h2 className="jellyfin-section__title">چرا Jellyfin مدیریت‌شده مگان؟</h2>
          <p className="jellyfin-section__description">
            راه‌اندازی Jellyfin روی زیرساخت‌های مختلف نیاز به تخصص DevOps، امن‌سازی و مانیتورینگ دارد. تیم مگان زیرساخت
            آماده و مقیاس‌پذیر را فراهم می‌کند تا شما بر تجربه تماشای کاربرانتان تمرکز کنید.
          </p>
          <div className="jellyfin-insight">
            <article className="jellyfin-insight__card">
              <span className="jellyfin-insight__label">مشکل</span>
              <h3>پیچیدگی مدیریت رسانه</h3>
              <p>
                نگهداری آرشیوهای بزرگ، مدیریت ترنسکدینگ و حفظ امنیت دسترسی بدون تیم تخصصی دشوار است و تجربه کاربر نهایی را
                تحت تاثیر قرار می‌دهد.
              </p>
            </article>
            <article className="jellyfin-insight__card">
              <span className="jellyfin-insight__label jellyfin-insight__label--solution">راه‌حل</span>
              <h3>سرویس کاملاً مدیریت‌شده</h3>
              <p>
                ما استقرار، مانیتورینگ، بکاپ و مقیاس‌پذیری را برعهده می‌گیریم و محیطی پایدار برای پخش با کیفیت ارائه می‌کنیم که
                در هر زمان آماده سرویس‌دهی است.
              </p>
            </article>
          </div>
          <div className="jellyfin-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="jellyfin-benefits__item">
                <span className="jellyfin-benefits__icon" aria-hidden="true">✔️</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="jellyfin-section jellyfin-section--surface">
        <div className="jellyfin-section__content">
          <h2 className="jellyfin-section__title">ویژگی‌های فنی کلیدی</h2>
          <p className="jellyfin-section__description">
            زیرساخت ما با اتکا به بهترین الگوهای مهندسی رسانه، امکان ارائه سرویس پایدار و انعطاف‌پذیر را برای تیم‌های تولید
            محتوا، استارتاپ‌های استریم و سازمان‌های بزرگ فراهم می‌کند.
          </p>
          <div className="jellyfin-features">
            {features.map((feature) => (
              <article key={feature.title} className="jellyfin-feature">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="jellyfin-section" id="pricing">
        <div className="jellyfin-section__content">
          <h2 className="jellyfin-section__title">پلن‌های قیمت‌گذاری با تم‌های سرگرم‌کننده</h2>
          <p className="jellyfin-section__description">
            می‌توانید پلن‌ها را بر اساس علاقه‌مندی خود و با نام‌گذاری سرگرم‌کننده مشاهده کنید؛ تم‌ها صرفاً برای فان هستند و
            قیمت‌ها و امکانات در هر ستون یکسان باقی می‌ماند.
          </p>
          <div className="jellyfin-pricing__themes" role="tablist" aria-label="انتخاب تم قیمت‌گذاری">
            {pricingThemes.map((theme) => (
              <button
                key={theme.id}
                type="button"
                role="tab"
                aria-selected={activeTheme === theme.id}
                className={`jellyfin-pricing__theme${activeTheme === theme.id ? ' jellyfin-pricing__theme--active' : ''}`}
                onClick={() => handleThemeChange(theme.id)}
              >
                <span className="jellyfin-pricing__theme-icon" aria-hidden="true">
                  {theme.icon}
                </span>
                {theme.label}
              </button>
            ))}
          </div>
          <div className="jellyfin-pricing">
            {currentPlans.map((plan) => (
              <article
                key={plan.id}
                className={`jellyfin-plan${activePlan === plan.id ? ' jellyfin-plan--active' : ''}`}
                onMouseEnter={() => setActivePlan(plan.id)}
                onFocus={() => setActivePlan(plan.id)}
                tabIndex={0}
              >
                <div className="jellyfin-plan__head">
                  <span className="jellyfin-plan__tier">{plan.tier}</span>
                  <h3 className="jellyfin-plan__title">{plan.title}</h3>
                </div>
                <p className="jellyfin-plan__price">{plan.price}</p>
                <p className="jellyfin-plan__description">{plan.description}</p>
                <p className="jellyfin-plan__meta">{plan.infra}</p>
                <NavLink to="/login" className="jellyfin-plan__cta">
                  سفارش دهید
                </NavLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="jellyfin-section jellyfin-section--surface" id="faq">
        <div className="jellyfin-section__content">
          <h2 className="jellyfin-section__title">سوالات متداول</h2>
          <div className="jellyfin-faq">
            {faqs.map((faq) => (
              <details key={faq.question} className="jellyfin-faq__item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <LandingFooter />
    </section>
  )
}

export default JellyfinServicePage
