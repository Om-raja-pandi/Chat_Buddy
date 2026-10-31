// import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
// import { Button } from '@heroui/react';
import { WallpaperProvider } from "./context/WallpaperContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Navigate, Route,Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";
import { useAuth } from "@clerk/react";
import PageLoader from "./components/PageLoader";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import {Toaster} from "react-hot-toast";

function App() {

  const { isSignedIn, isLoaded } = useAuth();

  const clearAuth  = useAuthStore((state) => state.clearAuth);
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  useEffect (() => {
    if (!isLoaded)   return;
    
    if(isSignedIn) checkAuth();
    else clearAuth();
  }, [checkAuth, clearAuth, isLoaded,isSignedIn])

  if (!isLoaded || (isCheckingAuth && isCheckingAuth) ) return <PageLoader />

  return (
    <ThemeProvider>
      <WallpaperProvider>
        <Routes>
          <Route path="/" element={isSignedIn ? <ChatPage /> : <AuthPage />} />
          <Route path="/auth" element={!isSignedIn ? <AuthPage /> : <Navigate to="/" replace />} />
          <Route path="/chat" element={isSignedIn ? <ChatPage /> : <Navigate to="/auth" replace />} />
          <Route path="*" element={<Navigate to={isSignedIn ? "/" : "/auth"} replace />} />
        </Routes>
        <Toaster />
      </WallpaperProvider>
    </ThemeProvider>
  )
}

export default App;