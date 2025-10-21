import { useState, type FormEvent } from 'react'
import '../App.css'

type LoginMode = 'otp' | 'password'

const phoneInputMode = 'tel'

const LoginPage = () => {
  const [mode, setMode] = useState<LoginMode>('otp')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const isOtpMode = mode === 'otp'

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const toggleMode = () => {
    setMode((current) => (current === 'otp' ? 'password' : 'otp'))
    setPassword('')
  }

  return (
    <section className="login">
      <div className="login__shell">
        <div className="login__visual" aria-hidden="true">
          <span className="login__moon" />
          <div className="login__visual-inner">
            <div className="login__screen">
              <div className="login__screen-header">
                <span />
                <span />
                <span />
              </div>
              <div className="login__screen-body">
                <div className="login__chart login__chart--primary" />
                <div className="login__chart login__chart--secondary" />
                <div className="login__chart login__chart--tertiary" />
              </div>
            </div>
            <div className="login__panel-card">
              <div className="login__panel-heading" />
              <div className="login__panel-line login__panel-line--wide" />
              <div className="login__panel-line" />
            </div>
            <div className="login__magnifier">
              <div className="login__magnifier-handle" />
              <div className="login__magnifier-glass" />
            </div>
          </div>
        </div>

        <div className="login__form">
          <div className="login__brand">
            <div className="nav__logo" aria-hidden="true">
              <span className="nav__logo-stripe nav__logo-stripe--one" />
              <span className="nav__logo-stripe nav__logo-stripe--two" />
              <span className="nav__logo-stripe nav__logo-stripe--three" />
            </div>
            <div className="login__brand-text">
              <strong>مگان</strong>
              <span>MEGAN CLOUD</span>
            </div>
          </div>

          <header className="login__header">
            <h1>خوش آمدید</h1>
            <p>ورود به کنسول مدیریت پلتفرم ابری مگان</p>
          </header>

          <form className="login__card" onSubmit={handleSubmit}>
            <label className="field">
              <span className="field__label">شماره تلفن همراه</span>
              <div className="field__control">
                <input
                  dir="ltr"
                  placeholder="0912 ..."
                  value={phone}
                  inputMode={phoneInputMode}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />
              </div>
            </label>

            {!isOtpMode && (
              <label className="field">
                <span className="field__label">کلمه عبور</span>
                <div className="field__control">
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>
              </label>
            )}

            {isOtpMode && (
              <p className="login__hint">
                برای ورود یا ثبت نام، شماره همراه خود را وارد کنید تا کد یکبار مصرف برای شما ارسال شود.
              </p>
            )}

            {!isOtpMode && (
              <button type="button" className="login__link login__link--inline">
                فراموشی کلمه عبور؟
              </button>
            )}

            <button type="submit" className="button button--secondary login__submit">
              {isOtpMode ? 'تایید و دریافت کد' : 'ورود'}
            </button>

            <div className="login__divider">
              <span>یا</span>
            </div>

            <button
              type="button"
              className="button button--ghost login__toggle"
              onClick={toggleMode}
            >
              {isOtpMode ? 'ورود با کلمه عبور' : 'ورود با دریافت کد یکبار مصرف'}
            </button>
          </form>

          <footer className="login__footer">
            <span>هنوز حساب کاربری ندارید؟</span>
            <button type="button" className="login__link">
              ثبت نام کنید
            </button>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
