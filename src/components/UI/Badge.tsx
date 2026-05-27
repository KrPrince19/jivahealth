import React from 'react';

interface BadgeProps {
  type: 
    | 'Active' | 'Inactive' | 'Patient' | 'Nurse' 
    | 'Normal User' | 'Support Staff' | 'Prime' 
    | 'Delivered' | 'Pending' | 'Cancelled' 
    | 'Confirmed' | 'Scheduled' | 'Default';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, children, className = '' }) => {
  let bg = '';
  let color = '';
  let border = 'none';

  switch (type) {
    case 'Active':
    case 'Delivered':
    case 'Confirmed':
    case 'Prime':
      bg = 'var(--badge-green-bg)'; // #dcfce7
      color = 'var(--primary-dark)'; // #016630
      if (type === 'Confirmed') color = 'var(--primary)'; // #016a4d
      break;
    case 'Inactive':
    case 'Patient':
    case 'Nurse':
      bg = 'var(--badge-grey-bg)'; // #f3f4f6
      color = 'var(--badge-text-dark)'; // #1e2939
      break;
    case 'Normal User':
    case 'Support Staff':
      bg = '#ffffff';
      border = '1px solid var(--border-light)';
      color = 'var(--text-sub)'; // #4a5565
      break;
    case 'Pending':
      bg = '#fef9c2';
      color = '#fbc02d';
      break;
    case 'Cancelled':
      bg = 'var(--icon-bg-red)'; // #ffe2e2
      color = 'var(--danger)'; // #e53835
      break;
    case 'Scheduled':
      bg = 'var(--badge-blue-bg)'; // #cae6fe
      color = 'var(--badge-text-blue)'; // #2194f3
      break;
    case 'Default':
      bg = 'transparent';
      border = '1px solid #d1d5db';
      color = 'var(--text-main)'; // #263238
      break;
  }

  return (
    <span
      className={`badge ${className}`}
      style={{ backgroundColor: bg, color, border }}
    >
      {children}
    </span>
  );
};
