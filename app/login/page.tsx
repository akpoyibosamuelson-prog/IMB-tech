export default function LoginPage() {
  return (
    <main className="site-shell inner-page narrow-layout">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">IMB</div>
          <div>
            <div className="brand-name">IMB Tech</div>
            <div className="brand-tag">Business access</div>
          </div>
        </div>
      </header>

      <section className="login-box">
        <p className="eyebrow">Secure login</p>
        <h1>Customer and staff portal</h1>
        <form className="contact-form login-form" action="#" method="post">
          <label>
            Email address
            <input type="email" placeholder="name@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="submit" className="btn btn-primary full-width">Login</button>
        </form>
      </section>
    </main>
  );
}
