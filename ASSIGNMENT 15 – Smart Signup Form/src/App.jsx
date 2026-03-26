import { useState } from "react";
import "./App.css";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [strength, setStrength] = useState("");

  function checkPasswordStrength(pass) {
    let score = 0;

    if (pass.length >= 6) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[!@#$%^&*]/.test(pass)) score++;

    if (score <= 1) return "Weak";
    if (score === 2 || score === 3) return "Medium";
    if (score === 4) return "Strong";
  }

  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);
    setStrength(checkPasswordStrength(value));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.includes("@")) {
      setMessage("Invalid email format");
      return;
    }

    if (strength !== "Strong") {
      setMessage("Password is not strong enough");
      return;
    }

    setMessage("Signup successful!");
  }

  return (
    <div className="container">
      <h1>Signup Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ul className="rules">
        <li>Password must be at least 6 characters</li>
        <li>Include at least one uppercase letter (A-Z)</li>
        <li>Include at least one number (0-9)</li>
        <li>Include at least one special character (!@#$%^&*)</li>
        </ul>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />

        {/* Live strength display */}
        {password && (
          <p>Password Strength: <b>{strength}</b></p>
        )}

        <button type="submit">Signup</button>

      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;