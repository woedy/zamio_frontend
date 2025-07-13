import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import DefaultLayout from './layout/DefaultLayout';
import SignUp from './pages/Authentication/SignUp';

import ZamIOLandingPage from './pages/Landing/LandingPage';
import SignIn from './pages/Authentication/SignIn';
import VerifyEmail from './pages/Authentication/VerifyEmail';
import ForgotPassword from './pages/Authentication/Password/ForgotPassword';
import ConfirmPasswordOTP from './pages/Authentication/Password/ConfirmPasswordOTP';
import NewPassword from './pages/Authentication/Password/NewPassword';
import ArtistDashboard from './pages/Dashboard/Dashboard';
import SongManager from './pages/MusicUploadManagement/SongManager';
import UploadTrack from './pages/MusicUploadManagement/UploadTrack';
import TractDetails from './pages/MusicUploadManagement/TrackDetails';
import EditTractDetails from './pages/MusicUploadManagement/EditSong';
import CoverUploader from './pages/MusicUploadManagement/UploadCoverArt';
import TrackContributors from './pages/MusicUploadManagement/Contributors';
import AddContributor from './pages/MusicUploadManagement/AddContributors';
import MatchLogViewer from './pages/Song&DetectionManagement/FullDetectionTable';
import ArtistAnalyticsPage from './pages/PlatformAnalytics/ArtistAnalyticsPage';
import RoyaltyDashboard from './pages/Royalty&PaymentsOversight/ViewPaymentHistory';
import NotificationCenter from './pages/NotificationCenter/NotificationCenter';
import LegalCompliancePage from './pages/LegalCompliance/LegalComplains';
import EducationSupport from './pages/TechSupport/HelpSupport';
import FeedbackReviewsPage from './pages/FeedbackReview/FeedbackReview';
import ArtistProfilePage from './pages/ArtistManagement/ArtistProfile';

const hiddenOnRoutes = [
  '/',
  '/sign-up',
  '/verify-email',
  '/sign-in',
  '/forgot-password',
  '/new-password-reset',
  '/confirm-password-otp',
  '/audio-match',
];

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
              <PageTitle title="Artist Dasboard | ZamIO-Artists" />
              <ArtistDashboard />
            </>
          }
        />

        <Route
          path="/all-artist-songs"
          element={
            <>
              <PageTitle title="Song Manager | ZamIO-Artists" />
              <SongManager />
            </>
          }
        />

 
        <Route
          path="/add-track"
          element={
            <>
              <PageTitle title="Upload | ZamIO-Artists" />
              <UploadTrack />
            </>
          }
        />

 
        <Route
          path="/track-details"
          element={
            <>
              <PageTitle title="Song Details | ZamIO-Artists" />
              <TractDetails />
            </>
          }
        />
        <Route
          path="/edit-track-details"
          element={
            <>
              <PageTitle title="Edit Song Details | ZamIO-Artists" />
              <EditTractDetails />
            </>
          }
        />
        <Route
          path="/add-track-cover"
          element={
            <>
              <PageTitle title="Add Song Cover | ZamIO-Artists" />
              <CoverUploader />
            </>
          }
        />
        <Route
          path="/track-contributors"
          element={
            <>
              <PageTitle title="Song Contributors | ZamIO-Artists" />
              <TrackContributors />
            </>
          }
        />
        <Route
          path="/add-track-contributor"
          element={
            <>
              <PageTitle title="Add Song Contributor | ZamIO-Artists" />
              <AddContributor />
            </>
          }
        />
        <Route
          path="/match-logs"
          element={
            <>
              <PageTitle title="Add Song Contributor | ZamIO-Artists" />
              <MatchLogViewer />
            </>
          }
        />
        <Route
          path="/analytics"
          element={
            <>
              <PageTitle title="Add Song Contributor | ZamIO-Artists" />
              <ArtistAnalyticsPage />
            </>
          }
        />
        <Route
          path="/royalty-payments"
          element={
            <>
              <PageTitle title="Royalty & Payments | ZamIO-Artists" />
              <RoyaltyDashboard />
            </>
          }
        />
        <Route
          path="/notifications"
          element={
            <>
              <PageTitle title="Notification Center | ZamIO-Artists" />
              <NotificationCenter />
            </>
          }
        />
        <Route
          path="/legal"
          element={
            <>
              <PageTitle title="Legal & Compliance | ZamIO-Artists" />
              <LegalCompliancePage />
            </>
          }
        />
        <Route
          path="/help"
          element={
            <>
              <PageTitle title="Help & Support | ZamIO-Artists" />
              <EducationSupport />
            </>
          }
        />
        <Route
          path="/feedback"
          element={
            <>
              <PageTitle title="Feedback & Compliance | ZamIO-Artists" />
              <FeedbackReviewsPage />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Artist Page | ZamIO-Artists" />
              <ArtistProfilePage />
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
              <PageTitle title="Home | ZamIO-Artists" />
              <ZamIOLandingPage />
            </>
          }
        />

        <Route
          path="/sign-in"
          element={
            <>
              <PageTitle title="Sign In | ZamIO-Artists" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/sign-up"
          element={
            <>
              <PageTitle title="Sign Up | ZamIO-Artists" />
              <SignUp />
            </>
          }
        />
        <Route
          path="/verify-email"
          element={
            <>
              <PageTitle title="Verify Email | ZamIO-Artists" />
              <VerifyEmail />
            </>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <>
              <PageTitle title="Forgot Password | ZamIO-Artists" />
              <ForgotPassword />
            </>
          }
        />
        <Route
          path="/confirm-password-otp"
          element={
            <>
              <PageTitle title="Confirm Password OTP | ZamIO-Artists" />
              <ConfirmPasswordOTP />
            </>
          }
        />
        <Route
          path="/new-password-reset"
          element={
            <>
              <PageTitle title="New Password Reset | ZamIO-Artists" />
              <NewPassword />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
