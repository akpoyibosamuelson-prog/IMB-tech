import BrandLogo from '../components/BrandLogo';

export default function LoginPage() {
  return (
    <main className="inner-shell page-shell auth-shell">
      <section className="auth-panel">
        <BrandLogo />
        <div className="auth-header">
          <p className="eyebrow">Secure access</p>
          <h1>IMB Tech Login</h1>
        </div>

        <form className="contact-form">
          <label>
            Email address
            <input type="email" placeholder="name@company.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>
          <button type="submit" className="btn btn-gold full-width">Sign in</button>
        </form>

        <div className="auth-links">
          <a href="#">Forgot password?</a>
          <a href="/admin">Owner / admin access</a>
        </div>
      </section>
    </main>
  );
}
