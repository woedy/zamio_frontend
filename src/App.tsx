import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import DefaultLayout from './layout/DefaultLayout';
import SignUp from './pages/Authentication/SignUp';
import LandingPage from './pages/Project/LandingPage';
import AudioMatch from './pages/Project/AudioMatch';
import MusicRoyaltiesDashboard from './pages/ArtistDashboard';
import MusicRoyaltiesPayments from './pages/MusicRoyaltiesPayments';
import ZamIOLandingPage from './pages/Landing/LandingPage';
import AllArtists from './pages/Admin/Artists/ListAllArtists';
import ArtistDetails from './pages/Admin/Artists/ArtistDetails';
import AddArtist from './pages/Admin/Artists/AddArtist';
import UploadTrack from './pages/Admin/Artists/UploadTrack';

const hiddenOnRoutes = ['/', '/signup', '/verify-user', '/audio-match'];

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
              <PageTitle title="Artist Dasboard | ZamIO" />
              <MusicRoyaltiesDashboard />
            </>
          }
        />

        <Route
          path="/all-artists"
          element={
            <>
              <PageTitle title="All Artist | Admin | ZamIO" />
              <AllArtists />
            </>
          }
        />
        <Route
          path="/artist-details"
          element={
            <>
              <PageTitle title="Artist Details | Admin | ZamIO" />
              <ArtistDetails />
            </>
          }
        />
        <Route
          path="/add-artist"
          element={
            <>
              <PageTitle title="Add Artist | Admin | ZamIO" />
              <AddArtist />
            </>
          }
        />
        <Route
          path="/uploads"
          element={
            <>
              <PageTitle title="Upload | Admin | ZamIO" />
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
              <PageTitle title="Home | ZamIO" />
              <ZamIOLandingPage />
            </>
          }
        />

        <Route
          path="/audio-match"
          element={
            <>
              <PageTitle title="Sign Up | ZamIO" />
              <AudioMatch />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
