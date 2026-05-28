import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopHeader } from './TopHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="app-container">
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)} />
      )}
      <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>
      <main className="main-content">
        <TopHeader onToggleSidebar={toggleSidebar} />
        <div className="page-container">
          <div className="content-max-width">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
