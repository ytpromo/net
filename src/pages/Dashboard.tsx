import '../App.css'

const menuItems = [
  { label: 'خانه', description: 'نمای کلی سیستم', active: true },
  { label: 'سرویس‌ها', description: 'مدیریت سرویس‌های ابری' },
  { label: 'سفارش‌ها', description: 'پیگیری درخواست‌ها' },
  { label: 'مانیتورینگ', description: 'تحلیل سلامت سرویس‌ها' },
  { label: 'حساب کاربری', description: 'تنظیمات امنیت و دسترسی' },
]

const statCards = [
  {
    title: 'میزان مصرف',
    value: '۱۰۰٪',
    description: 'هزینه امروز',
    footnote: 'بدون تغییر نسبت به دیروز',
    tone: 'safe',
  },
  {
    title: 'سفارش‌های باز',
    value: '۳',
    description: 'در انتظار پردازش',
    footnote: 'آخرین بروزرسانی ۵ دقیقه پیش',
    tone: 'warn',
  },
  {
    title: 'سرویس‌های فعال',
    value: '۱',
    description: 'پوشش ابر داده',
    footnote: 'پایداری ۹۹.۹٪ در ۲۴ ساعت گذشته',
    tone: 'info',
  },
]

const services = [
  {
    name: 'ابر داده تهران',
    status: 'فعال',
    meta: 'پردازش لحظه‌ای · خوشه اصلی',
  },
  {
    name: 'شبکه تحویل محتوا',
    status: 'در حال آماده‌سازی',
    meta: 'فعال‌سازی در دست اقدام',
  },
]

const activities = [
  {
    title: 'استقرار نسخه جدید API',
    time: '۱۶:۲۰',
    status: 'موفق',
  },
  {
    title: 'بروزرسانی گواهی امنیتی',
    time: '۱۵:۰۵',
    status: 'در انتظار تایید',
  },
  {
    title: 'افزایش ظرفیت پایگاه داده',
    time: '۱۳:۴۸',
    status: 'انجام شد',
  },
]

const quickLinks = [
  { label: 'API', description: 'مدیریت کلیدها و دسترسی‌ها' },
  { label: 'صورتحساب‌ها', description: 'مشاهده سوابق مالی' },
  { label: 'پشتیبانی', description: 'گفتگو با تیم فنی' },
]

const DashboardPage = () => {
  return (
    <section className="dashboard">
      <div className="dashboard__layout">
        <aside className="dashboard__sidebar">
          <div className="dashboard__sidebar-top">
            <div className="dashboard__sidebar-brand">
              <div className="nav__logo" aria-hidden="true">
                <span className="nav__logo-stripe nav__logo-stripe--one" />
                <span className="nav__logo-stripe nav__logo-stripe--two" />
                <span className="nav__logo-stripe nav__logo-stripe--three" />
              </div>
              <div className="dashboard__sidebar-text">
                <strong>کنسول مگان</strong>
                <span>مدیریت یکپارچه</span>
              </div>
            </div>

            <nav className="dashboard__menu" aria-label="بخش‌های کنسول">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`dashboard__menu-item${
                    item.active ? ' dashboard__menu-item--active' : ''
                  }`}
                >
                  <span className="dashboard__menu-bullet" aria-hidden="true" />
                  <span className="dashboard__menu-copy">
                    <strong>{item.label}</strong>
                    <small>{item.description}</small>
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="dashboard__sidebar-footer">
            <div className="dashboard__plan">
              <h3>پلن اینترپرایز</h3>
              <p>پشتیبانی ۲۴/۷ و منابع اختصاصی برای سازمان شما فعال است.</p>
              <button type="button" className="button button--ghost dashboard__plan-action">
                مدیریت پلن
              </button>
            </div>

            <div className="dashboard__support">
              <span className="dashboard__support-label">تیم پشتیبانی</span>
              <p>تیکت شماره ۲۴۸۵ در حال پیگیری است. زمان پاسخ تقریبی ۱۲ دقیقه.</p>
            </div>
          </div>
        </aside>

        <div className="dashboard__content">
          <header className="dashboard__toolbar">
            <div className="dashboard__profile">
              <div className="dashboard__avatar" aria-hidden="true">
                AK
              </div>
              <div className="dashboard__profile-copy">
                <span className="dashboard__profile-name">آوا کریمی</span>
                <span className="dashboard__profile-mail">ava.karimi@megan.cloud</span>
              </div>
            </div>

            <button type="button" className="button button--accent dashboard__top-action">
              افزایش موجودی
            </button>
          </header>

          <div className="dashboard__hero">
            <div className="dashboard__welcome">
              <span className="dashboard__eyebrow">خوش آمدید به داشبورد مگان</span>
              <h1>مدیریت کامل زیرساخت و سرویس‌های ابری شما</h1>
              <p>
                گزارش‌های لحظه‌ای، مانیتورینگ هوشمند و ابزارهای مدیریتی در یک مکان.
                فعالیت‌های اخیر شما همگام‌سازی شده و آماده بررسی هستند.
              </p>
              <div className="dashboard__meta">
                <span className="dashboard__pill">سطح دسترسی: اینترپرایز</span>
                <span className="dashboard__muted">آخرین ورود: ۲ ساعت پیش</span>
              </div>
            </div>

            <div className="dashboard__balance" aria-label="موجودی حساب">
              <div className="dashboard__balance-header">
                <span>موجودی حساب</span>
                <span className="dashboard__badge">فعال</span>
              </div>
              <strong className="dashboard__balance-amount">۳٬۲۰۰٬۰۰۰ تومان</strong>
              <p>میزان مصرف ماه جاری ۴۵٪ کمتر از سقف تعیین‌شده است.</p>
              <div className="dashboard__progress">
                <div className="dashboard__progress-bar" style={{ width: '55%' }} />
              </div>
              <footer className="dashboard__balance-footer">
                <span>سقف مصرف: ۷٬۰۰۰٬۰۰۰ تومان</span>
                <span>باقی‌مانده: ۳٬۸۰۰٬۰۰۰ تومان</span>
              </footer>
            </div>
          </div>

          <div className="dashboard__stats">
            {statCards.map((card) => (
              <article
                key={card.title}
                className={`dashboard__stat dashboard__stat--${card.tone}`}
              >
                <header>
                  <span className="dashboard__stat-title">{card.title}</span>
                  <span className="dashboard__stat-desc">{card.description}</span>
                </header>
                <strong className="dashboard__stat-value">{card.value}</strong>
                <footer>{card.footnote}</footer>
              </article>
            ))}
          </div>

          <div className="dashboard__panel-grid">
            <section className="dashboard-card">
              <header className="dashboard-card__header">
                <h2>سرویس‌های فعال</h2>
                <button type="button" className="dashboard__link">
                  مشاهده همه
                </button>
              </header>
              <ul className="dashboard__service-list">
                {services.map((service) => (
                  <li key={service.name} className="dashboard__service-item">
                    <div className="dashboard__service-icon" aria-hidden="true" />
                    <div className="dashboard__service-copy">
                      <strong>{service.name}</strong>
                      <span>{service.meta}</span>
                    </div>
                    <span className="dashboard__service-status">{service.status}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="dashboard-card">
              <header className="dashboard-card__header">
                <h2>فعالیت‌های اخیر</h2>
                <button type="button" className="dashboard__link">
                  تاریخچه کامل
                </button>
              </header>
              <ul className="dashboard__activity-list">
                {activities.map((activity) => (
                  <li key={activity.title} className="dashboard__activity-item">
                    <div>
                      <strong>{activity.title}</strong>
                      <span>{activity.status}</span>
                    </div>
                    <span className="dashboard__activity-time">{activity.time}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="dashboard-card dashboard-card--accent">
              <header className="dashboard-card__header">
                <h2>میان‌برهای پرکاربرد</h2>
              </header>
              <div className="dashboard__shortcuts">
                {quickLinks.map((item) => (
                  <button key={item.label} type="button" className="dashboard__shortcut">
                    <span className="dashboard__shortcut-dot" aria-hidden="true" />
                    <div>
                      <strong>{item.label}</strong>
                      <span>{item.description}</span>
                    </div>
                  </button>
                ))}
              </div>
              <footer className="dashboard__cta">
                <p>
                  برای راهنمایی بیشتر می‌توانید به مرکز آموزش مراجعه کنید و سناریوهای آماده را
                  اجرا نمایید.
                </p>
                <button type="button" className="button button--primary dashboard__cta-action">
                  رفتن به مستندات
                </button>
              </footer>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
