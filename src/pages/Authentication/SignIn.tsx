import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants';
import api from '../../lib/api';
import ButtonLoader from '../../common/button_loader';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fcm_token, setFcmtoken] = useState('sddfdsfdsfsdf');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const [successMessage, setSuccessMessage] = useState(
    location.state?.successMessage || '',
  );

  useEffect(() => {
    // Clear the message after 5 seconds (optional)
    const timer = setTimeout(() => setSuccessMessage(''), 5000);
    return () => clearTimeout(timer);
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let isValid = true;
  
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }
  
    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }
  
    if (!isValid) return;
  
    const url = 'api/accounts/login-artist/';
    const data = { email, password, fcm_token };
  
    setLoading(true);
  
    try {
      const response = await api.post(url, data);
      if (response.status === 200) {
        const user = response.data.data;
  
        // Save to localStorage
        localStorage.setItem('first_name', user.first_name);
        localStorage.setItem('last_name', user.last_name);
        localStorage.setItem('user_id', user.user_id);
        localStorage.setItem('artist_id', user.artist_id);
        localStorage.setItem('email', user.email);
        localStorage.setItem('photo', user.photo);
        localStorage.setItem('token', user.token);
  
        // Redirect based on onboarding step
        const onboardingStep = user.onboarding_step;
  
        switch (onboardingStep) {
          case 'profile':
            navigate('/onboarding/profile');
            break;
          case 'social-media':
            navigate('/onboarding/social-media');
            break;
          case 'payment':
            navigate('/onboarding/payment');
            break;
          case 'publisher':
            navigate('/onboarding/publisher');
            break;
          case 'track':
            navigate('/dashboard', { replace: true });
            break;
          case 'done':
          default:
            navigate('/dashboard', { replace: true });

        }
      }
    } catch (error: any) {
      const status = error?.response?.status;
      const data = error?.response?.data;
      if (status) {
        // Server returned an error with details
        const emailMsg = data?.errors?.email?.[0];
        const passwordMsg = data?.errors?.password?.[0];
        if (emailMsg) setEmailError(emailMsg);
        if (passwordMsg) setPasswordError(passwordMsg);
        if (!emailMsg && !passwordMsg) {
          setEmailError(data?.message || 'Login failed');
        }

        // Optional navigations based on server messages
        if (emailMsg === 'Please check your email to confirm your account or resend confirmation email.') {
          navigate('/verify-email', { state: { email } });
        } else if (data?.errors?.profile?.[0] === 'Please complete your profile.') {
          if (data?.errors?.token) {
            localStorage.setItem('token', data.errors.token);
          }
          navigate('/onboarding/profile');
        }
      } else {
        // Network/blocked error
        const msg = error?.message || 'Network error';
        console.error('Error:', msg);
        setEmailError('Network error. Ensure the API is running and any ad blocker is disabled for this site.');
      }
    } finally {
      setLoading(false);
    }
  };
  




  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-tr from-[#131833] via-[#1b1745] to-[#2a215c] px-4 pt-20 pb-10">
      <div className="w-full max-w-xl">
        {successMessage && (
          <div
            className="mb-4 rounded-lg border border-green bg-green px-4 py-3 text-white relative"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline ml-2">{successMessage}</span>
            <button
              onClick={() => setSuccessMessage('')}
              className="absolute top-0 bottom-0 right-0 px-4 py-3 text-green-700"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        <h2 className="text-5xl font-bold text-white text-center mb-8">
          ZamIO
        </h2>

        {emailError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {emailError}</span>
          </div>
        )}

        <div className="relative w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] p-10">
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-8 flex items-center justify-center gap-3">
            <span className="text-3xl">🎧</span>
            <span>Artist Login</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-5 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Password Input + Show/Hide */}
            <div className="relative w-full">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-5 pr-12 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-6 h-6" />
                ) : (
                  <EyeIcon className="w-6 h-6" />
                )}
              </button>
            </div>

            <p className="text-white/90 mt-4 text-center text-sm">
           Forgot your password?{' '}
            <Link
              to="/forgot-password"
              className="underline text-blue-400 hover:text-blue-200"
            >
              Reset
            </Link>
          </p>

            {/* Error Message */}
            {passwordError && (
              <p className="text-sm text-red-400">{passwordError}</p>
            )}

            {/* Submit Button */}
            {loading ? (
              <ButtonLoader />
            ) : (
              <button
                type="submit"
                className="w-full h-12 bg-[#2563eb] hover:bg-[#1e55c9] transition text-white font-semibold rounded-xl mt-6 shadow-[0_6px_20px_rgba(37,99,235,0.35)]"
              >
                Login
              </button>
            )}
          </form>

          {/* Link to Register */}
          <p className="text-white/90 mt-6 text-center text-sm">
            Don't have an account?{' '}
            <Link
              to="/sign-up"
              className="underline text-blue-400 hover:text-blue-200"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
