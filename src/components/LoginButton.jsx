import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginButton = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleOtplessLogin = (event) => {
      const { response } = event.detail;
      if (response && response.token) {
        const userData = {
          token: response.token,
          name: response.identities?.[0]?.name,
          email: response.identities?.[0]?.identityValue,
          waId: response.userId
        };
        login(userData);
        navigate('/dashboard');
      }
    };

    window.addEventListener('otpless-login', handleOtplessLogin);
    return () => window.removeEventListener('otpless-login', handleOtplessLogin);
  }, [login, navigate]);

  const handleWhatsAppLogin = () => {
    if (window.OTPlessSignin) {
      window.OTPlessSignin.initiate({ channel: 'OAUTH', channelType: 'WHATSAPP' });
    }
  };

  const handleGoogleLogin = () => {
    if (window.OTPlessSignin) {
      window.OTPlessSignin.initiate({ channel: 'OAUTH', channelType: 'GOOGLE' });
    }
  };

  return (
    <div className="d-grid gap-3">
      <button onClick={handleWhatsAppLogin} className="btn btn-success btn-lg d-flex align-items-center justify-content-center">
        <svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 15.55C16.4 16.31 15.3 16.96 14.47 17.23C13.93 17.41 13.23 17.55 11.53 16.82C9.27 15.87 7.84 13.64 7.72 13.47C7.6 13.31 6.53 11.87 6.53 10.37C6.53 8.87 7.27 8.17 7.54 7.89C7.78 7.64 8.14 7.53 8.48 7.53C8.6 7.53 8.71 7.53 8.81 7.54C9.08 7.55 9.23 7.56 9.42 8.01C9.66 8.56 10.21 10.06 10.27 10.19C10.33 10.32 10.39 10.5 10.3 10.67C10.22 10.85 10.15 10.93 10.02 11.09C9.89 11.25 9.77 11.37 9.64 11.54C9.52 11.69 9.39 11.85 9.54 12.12C9.69 12.38 10.21 13.23 10.97 13.91C11.94 14.78 12.74 15.07 13.04 15.19C13.27 15.28 13.54 15.26 13.69 15.09C13.88 14.87 14.11 14.5 14.35 14.14C14.52 13.88 14.73 13.84 14.96 13.93C15.19 14.01 16.69 14.75 16.94 14.87C17.19 15 17.36 15.06 17.42 15.18C17.48 15.31 17.48 15.95 17.24 16.71L16.64 15.55Z"/>
        </svg>
        Sign in with WhatsApp
      </button>
      <button onClick={handleGoogleLogin} className="btn btn-outline-dark btn-lg d-flex align-items-center justify-content-center">
        <svg className="me-2" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        </svg>
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginButton;
