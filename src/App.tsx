import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import DefaultLayout from './layout/DefaultLayout';
<<<<<<< HEAD
import LandingPage from './pages/Project/LandingPage';
=======
import SignUp from './pages/Authentication/SignUp';
>>>>>>> 4d63dbec7119255807124bca3c7d28e7055eef3c
import AudioMatch from './pages/Project/AudioMatch';
import MusicRoyaltiesDashboard from './pages/ArtistDashboard';
import AllArtists from './pages/Admin/Artists/ListAllArtists';
import ArtistDetails from './pages/Admin/Artists/ArtistDetails';
import AddArtist from './pages/Admin/Artists/AddArtist';
import UploadTrack from './pages/Admin/Artists/UploadTrack';
<<<<<<< HEAD
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';

const hiddenOnRoutes = ['/', '/sign-up',  '/sign-in', '/verify-user', '/audio-match'];
=======
import ZamIOLandingPage from './pages/Landing/LandingPage';
import SignIn from './pages/Authentication/SignIn';
import VerifyEmail from './pages/Authentication/VerifyEmail';
import ForgotPassword from './pages/Authentication/Password/ForgotPassword';
import ConfirmPasswordOTP from './pages/Authentication/Password/ConfirmPasswordOTP';
import NewPassword from './pages/Authentication/Password/NewPassword';

const hiddenOnRoutes = ['/', '/sign-up', '/verify-email',  '/sign-in', '/forgot-password', '/new-password-reset', '/confirm-password-otp', '/audio-match'];
>>>>>>> 4d63dbec7119255807124bca3c7d28e7055eef3c

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Determine if the current route should skip the layout
  const shouldUseDefaultLayout = !hiddenOnRoutes.includes(location.pathname);

  return loading ? (
    <Loader />
  ) : shouldUseDefaultLayout ? (
    <DefaultLayout hiddenOnRoutes={hiddenOnRoutes}>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <>
<<<<<<< HEAD
              <PageTitle title="Artist Dasboard | ZamIO-Artist" />
=======
              <PageTitle title="Artist Dasboard | ZamIO-Admin" />
>>>>>>> 4d63dbec7119255807124bca3c7d28e7055eef3c
              <MusicRoyaltiesDashboard />
            </>
          }
        />

        <Route
          path="/all-artists"
          element={
            <>
<<<<<<< HEAD
              <PageTitle title="All Artist | Admin | ZamIO-Artist" />
=======
              <PageTitle title="All Artist | Admin | ZamIO-Admin" />
>>>>>>> 4d63dbec7119255807124bca3c7d28e7055eef3c
              <AllArtists />
            </>
          }
        />
        <Route
          path="/artist-details"
          element={
            <>
<<<<<<< HEAD
              <PageTitle title="Artist Details | Admin | ZamIO-Artist" />
=======
              <PageTitle title="Artist Details | Admin | ZamIO-Admin" />
>>>>>>> 4d63dbec7119255807124bca3c7d28e7055eef3c
              <ArtistDetails />
            </>
          }
        />
        <Route
          path="/add-artist"
          element={
            <>
<<<<<<< HEAD
              <PageTitle title="Add Artist | Admin | ZamIO-Artist" />
=======
              <PageTitle title="Add Artist | Admin | ZamIO-Admin" />
>>>>>>> 4d63dbec7119255807124bca3c7d28e7055eef3c
              <AddArtist />
            </>
          }
        />
        <Route
          path="/uploads"
          element={
            <>
<<<<<<< HEAD
              <PageTitle title="Upload | Admin | ZamIO-Artist" />
=======
              <PageTitle title="Upload | Admin | ZamIO-Admin" />
>>>>>>> 4d63dbec7119255807124bca3c7d28e7055eef3c
              <UploadTrack />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
<<<<<<< HEAD
              <PageTitle title="Home | ZamIO-Artist" />
=======
              <PageTitle title="Home | ZamIO-Admin" />
>>>>>>> 4d63dbec7119255807124bca3c7d28e7055eef3c
              <ZamIOLandingPage />
            </>
          }
        />

        <Route
          path="/audio-match"
          element={
            <>
<<<<<<< HEAD
              <PageTitle title="Sign Up | ZamIO-Artist" />
=======
              <PageTitle title="Sign Up | ZamIO-Admin" />
>>>>>>> 4d63dbec7119255807124bca3c7d28e7055eef3c
              <AudioMatch />
            </>
          }
        />

        <Route
          path="/sign-in"
          element={
            <>
<<<<<<< HEAD
              <PageTitle title="Sign In | ZamIO-Artist" />
=======
              <PageTitle title="Sign In | ZamIO-Admin" />
>>>>>>> 4d63dbec7119255807124bca3c7d28e7055eef3c
              <SignIn />
            </>
          }
        />
        <Route
          path="/sign-up"
          element={
            <>
<<<<<<< HEAD
              <PageTitle title="Sign Up | ZamIO-Artist" />
=======
              <PageTitle title="Sign Up | ZamIO-Admin" />
>>>>>>> 4d63dbec7119255807124bca3c7d28e7055eef3c
              <SignUp />
            </>
          }
        />
<<<<<<< HEAD
=======
        <Route
          path="/verify-email"
          element={
            <>
              <PageTitle title="Verify Email | ZamIO-Admin" />
              <VerifyEmail />
            </>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <>
              <PageTitle title="Forgot Password | ZamIO-Admin" />
              <ForgotPassword />
            </>
          }
        />
        <Route
          path="/confirm-password-otp"
          element={
            <>
              <PageTitle title="Confirm Password OTP | ZamIO-Admin" />
              <ConfirmPasswordOTP />
            </>
          }
        />
        <Route
          path="/new-password-reset"
          element={
            <>
              <PageTitle title="New Password Reset | ZamIO-Admin" />
              <NewPassword />
            </>
          }
        />
>>>>>>> 4d63dbec7119255807124bca3c7d28e7055eef3c
      </Routes>
    </>
  );
}

export default App;
