import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SellPage from './pages/SellPage';
import DetailPage from './pages/DetailPage';
import DashBoardPage from './pages/DashBoardPage';
import AuthenticationPage from './pages/AuthenticationPage';
import SignUpPage from './pages/SignUpPage';
import BuyingAssest from './pages/BuyingAssest';
import USDPage from './pages/USDPage';
import SignInPage from './pages/SignIn';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import TradingScreen from './pages/TradingScreenPage';
import { MinetStore } from '../src/context';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(MinetStore);

  // Check if context is undefined or if user is not authenticated
  if (!context || context.userDetails.id === null) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

const App = () => {
  const context = useContext(MinetStore);

  if (!context) {
    // Optional: Handle case where context is unavailable
    return <div>Loading...</div>;
  }

  // const { userDetails } = context;

  return (
    <div>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/authentication" element={<AuthenticationPage />} />

        {/* Protected routes */}
        <Route
          path="/sell"
          element={
            <ProtectedRoute>
              <SellPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/usd"
          element={
            <ProtectedRoute>
              <USDPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trade"
          element={
            <ProtectedRoute>
              <DetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watch-list"
          element={
            <ProtectedRoute>
              <TradingScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashBoardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buying"
          element={
            <ProtectedRoute>
              <BuyingAssest />
            </ProtectedRoute>
          }
        />

        {/* Catch-all route */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
