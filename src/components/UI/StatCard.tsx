import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  iconBgColor?: string;
  valueColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  label, 
  value, 
  icon, 
  iconBgColor,
  valueColor = 'var(--text-main)'
}) => {
  return (
    <div className="card-shadow" style={{ 
      backgroundColor: 'var(--bg-card)', 
      borderRadius: '8px', 
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flex: 1
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontSize: '14px', color: 'var(--text-faint)' }}>{label}</span>
        <span style={{ fontSize: '24px', fontWeight: 500, color: valueColor }}>{value}</span>
      </div>
      {icon && (
        <div style={{ 
          width: '48px', 
          height: '48px', 
          backgroundColor: iconBgColor || 'transparent',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--primary)' // fallback
        }}>
          {icon}
        </div>
      )}
    </div>
  );
};
