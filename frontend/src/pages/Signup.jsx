import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    signup(name, email, password);

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      <div className="auth-brand">
        <div className="brand-logo">DP</div>

        <h1>Dividend<span>Puzzle</span></h1>

        <p>
          Intelligent dividend analytics for smarter investing.
        </p>

        <div className="brand-features">
          <div>✓ Dividend Analysis</div>
          <div>✓ Machine Learning Insights</div>
          <div>✓ Financial Theory Analysis</div>
        </div>
      </div>

      <div className="auth-card">

        <div className="auth-top">
          <span className="premium-badge">
            ✦ PREMIUM ANALYTICS
          </span>

          <h2>Create your account</h2>

          <p>
            Start exploring the Dividend Puzzle.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Create a password"
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
            Create Account →
          </button>

        </form>

        <p className="auth-switch">
          Already have an account?
          {" "}
          <Link to="/login">
            Sign in
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;