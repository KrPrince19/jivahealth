import React from 'react';
import {
  LayoutDashboard,
  Building,
  Users,
  Briefcase,
  Stethoscope,
  FlaskConical,
  Pill,
  Ambulance,
  Handshake,
  FileText,
  ShieldCheck,
  Settings,
  PanelLeft,
  Search,
  Moon,
  Bell,
  ArrowLeft,
  Calendar,
  Activity,
  Crown,
  ChevronDown,
  ShoppingBag,
  CreditCard,
  User as UserIcon,
  ClipboardList,
  Mail,
  Phone,
  Heart,
  Edit2,
  Plus,
  Home,
  Building2,
  Trash2
} from 'lucide-react';

function App() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F9364', fontWeight: 800, fontSize: '24px', fontStyle: 'italic' }}>
            <span style={{ position: 'relative' }}>
              Jiva<span style={{ fontSize: '12px', verticalAlign: 'super' }}>™</span>
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '10px', fontStyle: 'normal', fontWeight: 600 }}>
              <span style={{ color: '#FF4D4D', marginTop: '12px' }}>HEALTH</span>
            </div>
          </div>
        </div>
        
        <nav className="sidebar-menu">
          <a href="#" className="menu-item">
            <LayoutDashboard />
            Dashboard
          </a>
          <a href="#" className="menu-item">
            <Building />
            Organization
          </a>
          <a href="#" className="menu-item active">
            <Users />
            User Management
          </a>
          <a href="#" className="menu-item">
            <Briefcase />
            Services
            <ChevronDown className="chevron" />
          </a>
          <a href="#" className="menu-item">
            <Stethoscope />
            Consultation
          </a>
          <a href="#" className="menu-item">
            <FlaskConical />
            Lab test Booking
          </a>
          <a href="#" className="menu-item">
            <Pill />
            Medicine Orders
          </a>
          <a href="#" className="menu-item">
            <Ambulance />
            Ambulance booking
          </a>
          <a href="#" className="menu-item">
            <Handshake />
            Vendor & Partners
          </a>
          <a href="#" className="menu-item">
            <FileText />
            Report
          </a>
          <a href="#" className="menu-item">
            <ShieldCheck />
            User Access
          </a>
          <a href="#" className="menu-item">
            <Settings />
            Setting
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="user-avatar">AD</div>
          <div className="user-info">
            <span className="user-name">Admin User</span>
            <span className="user-email">Admin@healthcare.com</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-left">
            <button className="icon-button">
              <PanelLeft size={16} strokeWidth={1.33} />
            </button>
          </div>
          <div className="header-center">
            <div className="search-bar">
              <Search size={16} />
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="header-right">
            <button className="icon-button">
              <Moon size={20} />
            </button>
            <button className="icon-button notification">
              <Bell size={20} />
              <span className="notification-dot">1</span>
            </button>
            <div className="user-avatar" style={{ width: '36px', height: '36px', fontSize: '14px', backgroundColor: '#0F9364', padding: '4px' }}>AD</div>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-container">
          <a href="#" className="back-link">
            <ArrowLeft size={16} />
            Back to User Management
          </a>

          {/* Profile Header */}
          <div className="profile-header">
            <div className="profile-info-left">
              <div className="profile-avatar">AW</div>
              <div className="profile-details">
                <h1 className="profile-name">Alice Williams</h1>
                <div className="profile-badges">
                  <span className="badge active">Active</span>
                  <span className="badge neutral">Patient</span>
                  <span className="badge neutral" style={{ backgroundColor: 'transparent', border: '1px solid #EFEFEF' }}>Normal User</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#1A1D1F', marginLeft: '4px' }}>ID: #1</span>
                </div>
                <div className="profile-meta">
                  <span className="meta-item">
                    <Calendar />
                    Joined 1/15/2025
                  </span>
                  <span className="meta-item">
                    <Activity />
                    Last active 4/2/2026
                  </span>
                </div>
              </div>
            </div>
            
            <div className="profile-actions">
              <button className="btn btn-prime">
                <Crown />
                Upgrade to Prime
              </button>
              <button className="btn btn-outline">
                Active
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-info">
                <span className="metric-label">Total Orders</span>
                <span className="metric-value">6</span>
              </div>
              <div className="metric-icon blue">
                <ShoppingBag size={20} />
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-info">
                <span className="metric-label">Total Booking & Appointment</span>
                <span className="metric-value green">5</span>
              </div>
              <div className="metric-icon green">
                <Stethoscope size={20} />
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-info">
                <span className="metric-label">Total Family Member</span>
                <span className="metric-value green" style={{ color: '#0F9364' }}>10</span>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-info">
                <span className="metric-label">Total Spent</span>
                <span className="metric-value">₹24500.00</span>
              </div>
              <div className="metric-icon green">
                <CreditCard size={20} />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <div className="tab active">
              <UserIcon />
              Overview
            </div>
            <div className="tab">
              <ClipboardList />
              Orders & Bookings
            </div>
            <div className="tab">
              <CreditCard />
              Payments
            </div>
            <div className="tab">
              <Users />
              Family Members
            </div>
          </div>

          {/* Content Grid */}
          <div className="content-grid">
            {/* Personal Information */}
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Personal Information</h2>
                <button className="btn btn-outline" style={{ padding: '6px 12px' }}>
                  <Edit2 size={14} />
                  Edit
                </button>
              </div>
              <div className="info-list">
                <div className="info-item">
                  <div className="info-label"><Mail /> Email:</div>
                  <div className="info-value">alice.williams@email.com</div>
                </div>
                <div className="info-item">
                  <div className="info-label"><Phone /> Phone:</div>
                  <div className="info-value">+91 98765 43210</div>
                </div>
                <div className="info-item">
                  <div className="info-label"><Calendar /> Date of Birth:</div>
                  <div className="info-value">5/15/1990</div>
                </div>
                <div className="info-item">
                  <div className="info-label"><UserIcon /> Gender:</div>
                  <div className="info-value">Female</div>
                </div>
                <div className="info-item">
                  <div className="info-label"><Heart /> Blood Group:</div>
                  <div className="info-value">O+</div>
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="card" style={{ backgroundColor: '#FFFFFF', border: 'none' }}>
              <div className="card-header">
                <h2 className="card-title">Addresses</h2>
                <button className="btn btn-outline" style={{ padding: '6px 12px' }}>
                  <Plus size={16} />
                  Add
                </button>
              </div>
              
              <div className="address-list">
                <div className="address-item">
                  <div className="address-icon">
                    <Home size={18} />
                  </div>
                  <div className="address-content">
                    <div className="address-title-row">
                      <span className="address-title">Home</span>
                      <span className="badge neutral" style={{ fontSize: '11px', padding: '2px 8px' }}>Default</span>
                    </div>
                    <div className="address-text">
                      Flat 301, Sunshine Apartments, MG Road<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </div>
                  </div>
                  <div className="address-actions">
                    <button className="action-btn">
                      <Edit2 size={14} />
                    </button>
                    <button className="action-btn delete">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                <div className="address-item">
                  <div className="address-icon">
                    <Building2 size={18} />
                  </div>
                  <div className="address-content">
                    <div className="address-title-row">
                      <span className="address-title">Home</span>
                    </div>
                    <div className="address-text">
                      Flat 301, Sunshine Apartments, MG Road<br />
                      Mumbai, Maharashtra 400001
                    </div>
                  </div>
                  <div className="address-actions">
                    <button className="action-btn">
                      <Edit2 size={14} />
                    </button>
                    <button className="action-btn delete">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
