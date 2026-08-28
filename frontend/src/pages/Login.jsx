import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-brand">

        <div className="brand-logo">
          DP
        </div>

        <h1>
          Dividend<span>Puzzle</span>
        </h1>

        <p>
          Discover what really drives dividend-paying stocks.
        </p>

        <div className="brand-features">
          <div>✓ Data-driven dividend insights</div>
          <div>✓ Machine learning predictions</div>
          <div>✓ Four-theory financial analysis</div>
        </div>

      </div>

      <div className="auth-card">

        <div className="auth-top">

          <span className="premium-badge">
            ✦ PREMIUM ANALYTICS
          </span>

          <h2>Welcome back</h2>

          <p>
            Sign in to your analytics dashboard.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <button className="primary-auth-button">
            Sign In →
          </button>

        </form>

        <div className="demo-account">
          <strong>Demo Account</strong>
          <span>admin@dividendpuzzle.com</span>
          <span>admin123</span>
        </div>

        <p className="auth-switch">
          Don't have an account?
          {" "}
          <Link to="/signup">
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;