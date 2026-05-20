import React, { useState } from 'react';

// Impor komponen layout
import TopHeader from './components/TopHeader';
import BottomNav from './components/BottomNav';

// Impor halaman-halaman
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Monitoring from './pages/Monitoring';
import DiagnosticResult from './pages/DiagnosticResult';
import HistoryPage from './pages/HistoryPage';

export default function App() {
  // State untuk navigasi antar halaman (SPA)
  const [currentPage, setCurrentPage] = useState('landing');

  // Logika untuk menyembunyikan header/nav berdasarkan halaman aktif
  const isLogged = !['landing', 'login', 'register'].includes(currentPage);
  const hideHeader = currentPage === 'diagnostic';

  // Fungsi router sederhana
  const renderPage = () => {
    switch (currentPage) {
      case 'landing': return <LandingPage navigate={setCurrentPage} />;
      case 'register': return <RegisterPage navigate={setCurrentPage} />;
      case 'login': return <LoginPage navigate={setCurrentPage} />;
      case 'dashboard': return <Dashboard navigate={setCurrentPage} />;
      case 'monitoring': return <Monitoring navigate={setCurrentPage} />;
      case 'diagnostic': return <DiagnosticResult navigate={setCurrentPage} />;
      case 'history': return <HistoryPage navigate={setCurrentPage} />;
      default: return <LandingPage navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col antialiased">
      {!hideHeader && <TopHeader navigate={setCurrentPage} isLogged={isLogged} />}
      
      {renderPage()}
      
      {isLogged && currentPage !== 'diagnostic' && (
        <BottomNav currentPage={currentPage} navigate={setCurrentPage} />
      )}
    </div>
  );
}
