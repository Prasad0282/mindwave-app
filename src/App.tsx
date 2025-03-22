import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { ChatPage } from "./pages/ChatPage";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

// import React, { useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { LandingPage } from "./pages/LandingPage";
// import { LoginPage } from "./pages/LoginPage";
// import { AuthProvider, useAuth } from "./contexts/AuthContext";

// // Protected route component
// const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({
//   element,
// }) => {
//   const { user, loading } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!loading && !user) {
//       navigate("/login");
//     }
//   }, [user, loading, navigate]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//       </div>
//     );
//   }

//   return user ? element : null;
// };

// // Auth redirect component
// const AuthRedirect: React.FC<{ element: React.ReactElement }> = ({
//   element,
// }) => {
//   const { user, loading } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!loading && user) {
//       navigate("/companion");
//     }
//   }, [user, loading, navigate]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//       </div>
//     );
//   }

//   return !user ? element : null;
// };

// // App Routes
// const AppRoutes: React.FC = () => {
//   const { user } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Handle browser back button for authenticated users
//   useEffect(() => {
//     const handlePopState = () => {
//       if (user && location.pathname === "/") {
//         navigate("/companion");
//       }
//     };

//     window.addEventListener("popstate", handlePopState);
//     return () => window.removeEventListener("popstate", handlePopState);
//   }, [user, location.pathname, navigate]);

//   return (
//     <Routes>
//       <Route path="/" element={<AuthRedirect element={<LandingPage />} />} />
//       <Route path="/login" element={<AuthRedirect element={<LoginPage />} />} />
//       {/* <Route
//         path="/companion"
//         element={<ProtectedRoute element={<CompanionPage />} />}
//       /> */}
//       <Route
//         path="/chat"
//         element={
//           <ProtectedRoute element={<div>Chat Page (to be implemented)</div>} />
//         }
//       />
//       <Route path="*" element=<LandingPage/>
//     </Routes>
//     );
//   };

//   function App() {
//     return (
//       <Router>
//       <AuthProvider>
//         <AppRoutes />
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;
// // {user ? <CompanionPage /> : <LandingPage />} />
