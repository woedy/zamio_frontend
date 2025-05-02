import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import DefaultLayout from './layout/DefaultLayout';
import SignUp from './pages/Authentication/SignUp';
import LandingPage from './pages/Landing/LandingPage';
import AudioMatch from './pages/Landing/AudioMatch';
import MusicRoyaltiesDashboard from './pages/ArtistDashboard';
import MusicRoyaltiesPayments from './pages/MusicRoyaltiesPayments';



const hiddenOnRoutes = [
  '/',
  '/signup',
  '/verify-user',
  "/audio-match",
  "/artist-dashboard",
  "/artist-payments",

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
 
     
    
      </Routes>
    </DefaultLayout>
  ) : (
    <>
      <Routes>
   

        <Route
          index
          element={
            <>
              <PageTitle title="Home | Restore Water Africa" />
              <LandingPage />
            </>
          }
        />

        <Route
          path="/audio-match"
          element={
            <>
              <PageTitle title="Sign Up | Restore Water Africa" />
              <AudioMatch />
            </>
          }
        />
        <Route
          path="/artist-dashboard"
          element={
            <>
              <PageTitle title="Artist Dasboard | Restore Water Africa" />
              <MusicRoyaltiesDashboard />
            </>
          }
        />

        <Route
          path="/artist-payments"
          element={
            <>
              <PageTitle title="Artist Payments | Restore Water Africa" />
              <MusicRoyaltiesPayments />
            </>
          }
        />



   


   

  


      </Routes>
    </>
  );
}

export default App;
