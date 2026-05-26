import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  let btnClass = 'btn ';
  if (variant === 'primary') btnClass += 'btn-primary';
  if (variant === 'secondary') btnClass += 'btn-secondary';
  if (variant === 'ghost') btnClass += 'btn-ghost';

  return (
    <button className={`${btnClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
