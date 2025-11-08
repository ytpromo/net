import { NavLink } from 'react-router-dom'

const LandingFooter = () => (
  <footer className="landing-footer">
    <div className="landing-footer__cta">
      <span className="landing-footer__emoji" aria-hidden="true">
        💬
      </span>
      <div>
        <h2>با تیم مگان در ارتباط باشید</h2>
        <p>
          اگر سوال، ایده یا پیشنهادی دارید خوشحال می‌شویم بشنویم. راه‌های تماس زیر همیشه در دسترس
          شماست.
        </p>
      </div>
    </div>
    <div className="landing-footer__links" aria-label="شبکه‌های اجتماعی مگان">
      <a href="https://t.me/megancloud" target="_blank" rel="noreferrer" className="landing-footer__link">
        <span aria-hidden="true">📣</span>
        تلگرام
      </a>
      <a href="https://x.com/megancloud" target="_blank" rel="noreferrer" className="landing-footer__link">
        <span aria-hidden="true">✖️</span>
        X
      </a>
      <a
        href="https://www.linkedin.com/company/megancloud"
        target="_blank"
        rel="noreferrer"
        className="landing-footer__link"
      >
        <span aria-hidden="true">in</span>
        لینکدین
      </a>
      <NavLink to="/login" className="landing-footer__link landing-footer__link--highlight">
        <span aria-hidden="true">🚀</span>
        ورود / ثبت نام
      </NavLink>
    </div>
  </footer>
)

export default LandingFooter
