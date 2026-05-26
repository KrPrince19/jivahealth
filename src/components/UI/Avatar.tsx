import React from 'react';

interface AvatarProps {
  initials: string;
  size?: 'small' | 'medium' | 'large'; // small: 32x32, medium: 48x48, large: 80x80
  className?: string;
  bgColor?: string;
  textColor?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  initials, 
  size = 'medium', 
  className = '', 
  bgColor, 
  textColor 
}) => {
  let sizeStyle = {};
  let defaultBg = 'var(--accent-blue)';
  let defaultText = '#ffffff';

  if (size === 'small') {
    sizeStyle = { width: '32px', height: '32px', fontSize: '14px', borderRadius: '50%' };
    defaultBg = 'var(--primary)'; // #016a4d
  } else if (size === 'medium') {
    sizeStyle = { width: '48px', height: '48px', fontSize: '16px', fontWeight: 'bold', borderRadius: '50%' };
  } else if (size === 'large') {
    sizeStyle = { width: '80px', height: '80px', fontSize: '24px', fontWeight: 'bold', borderRadius: '12px' };
    defaultBg = 'var(--icon-bg-teal)'; // #b3d9ce
    defaultText = 'var(--primary)'; // #016a4d
  }

  return (
    <div 
      className={`avatar ${className}`}
      style={{
        ...sizeStyle,
        backgroundColor: bgColor || defaultBg,
        color: textColor || defaultText,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {initials}
    </div>
  );
};
