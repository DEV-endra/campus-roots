import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import NavBar from "./NavigationBar";


import styles from "../styles/alumnus-signup.module.css";

export default function AlumnusSignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    password: "",
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <NavBar></NavBar>
      <div className={styles.signupWrapper}>
        <div className={styles.signupCard}>
          <h2 className={styles.title}>Sign up as an Alumnus</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.nameRow}>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={styles.halfInput}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={styles.halfInput}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Institute email address"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.fullInput}
            />
            <div className={styles.phoneRow}>
              <input
                type="text"
                name="countryCode"
                placeholder="+91"
                value={formData.countryCode}
                onChange={handleChange}
                required
                className={styles.countryCodeInput}
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className={styles.phoneInput}
              />
            </div>
            <div className={styles.passwordContainer}>
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                Hide
              </button>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className={styles.fullInput}
              />
              <p className={styles.passwordHint}>
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
            </div>
            <div className={styles.termsCheckbox}>
              <input
                type="checkbox"
                id="terms-agreement"
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleChange}
                required
              />
              <label htmlFor="terms-agreement">
                By creating an account, I agree to the Terms of use and Privacy
                Policy
              </label>
            </div>
            <button
              type="submit"
              className={styles.signupButton}
              disabled={!formData.termsAgreed}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
