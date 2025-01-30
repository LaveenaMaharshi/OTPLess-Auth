import React from 'react';
import LoginButton from '../components/LoginButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: '440px', borderRadius: '20px' }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="h4 fw-bold text-dark">Login with OTPless</h1>
          <p className="text-muted">Choose your preferred method to log in securely without a password</p>
        </div>

        {/* Login Buttons */}
        <LoginButton />

        {/* Terms and Privacy */}
        <div className="mt-4 text-center">
          <p className="text-muted small">
            By logging in, you agree to our{' '}
            <a href="www.otpless.com" className="text-primary text-decoration-none">Terms of Service</a> {' '}
            and {' '}
            <a href="www.otpless.com" className="text-primary text-decoration-none">Privacy Policy</a>
          </p>
        </div>

        {/* Powered by */}
        <div className="mt-3 text-center">
          <p className="text-muted small">
            Powered by <span className="fw-semibold text-dark">OTPless</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;