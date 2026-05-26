import React from 'react';
import { Sidebar } from './Sidebar';
import { TopHeader } from './TopHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <TopHeader />
        <div className="page-container">
          <div className="content-max-width">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
