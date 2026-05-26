import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Building, Users, Briefcase, Stethoscope, 
  FlaskConical, Pill, Ambulance, Handshake, FileText, 
  ShieldCheck, Settings, ChevronDown
} from 'lucide-react';
import { Avatar } from '../UI/Avatar';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/org', label: 'Organization', icon: Building },
  { path: '/users', label: 'User Management', icon: Users },
  { path: '/services', label: 'Services', icon: Briefcase, expandable: true },
  { path: '/consultation', label: 'Consultation', icon: Stethoscope },
  { path: '/lab', label: 'Lab test Booking', icon: FlaskConical },
  { path: '/medicine', label: 'Medicine Orders', icon: Pill },
  { path: '/ambulance', label: 'Ambulance booking', icon: Ambulance },
  { path: '/vendor', label: 'Vendor & Partners', icon: Handshake },
  { path: '/report', label: 'Report', icon: FileText },
  { path: '/access', label: 'User Access', icon: ShieldCheck },
  { path: '/settings', label: 'Setting', icon: Settings },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside style={{
      width: 'var(--sidebar-width)',
      backgroundColor: 'var(--bg-card)',
      borderRight: '1px solid var(--border-light)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <div style={{
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border-light)',
        padding: '0 9px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 800, fontSize: '24px', fontStyle: 'italic' }}>
          <span style={{ position: 'relative' }}>
            Jiva<span style={{ fontSize: '12px', verticalAlign: 'super' }}>™</span>
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: '10px', fontStyle: 'normal', fontWeight: 600 }}>
            <span style={{ color: 'var(--danger)', marginTop: '12px' }}>HEALTH</span>
          </div>
        </div>
      </div>
      
      <nav style={{
        flex: 1,
        overflowY: 'auto',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 12px',
                borderRadius: '8px',
                color: isActive ? 'var(--primary)' : 'var(--text-main)',
                backgroundColor: isActive ? 'var(--sidebar-active, #c7ded7)' : 'transparent',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 500,
                gap: '12px'
              }}
            >
              <item.icon size={20} color={isActive ? 'var(--primary)' : 'var(--text-main)'} />
              {item.label}
              {item.expandable && <ChevronDown size={16} style={{ marginLeft: 'auto' }} />}
            </Link>
          );
        })}
      </nav>

      <div style={{
        padding: '16px',
        borderTop: '1px solid var(--border-light)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <Avatar initials="AD" size="small" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '14px', fontWeight: 600 }}>Admin User</span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Admin@healthcare.com</span>
        </div>
      </div>
    </aside>
  );
};
