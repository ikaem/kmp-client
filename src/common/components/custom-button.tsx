import React from 'react';

interface CustomButtonProps {
  type: 'button' | 'submit';
  className: string;
  onClick?: (e: React.MouseEvent) => Promise<void>;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  type = 'button',
  className,
  onClick,
}) => {
  return (
    <button type={type} className={className} onClick={onClick ?? undefined}>
      {children}
    </button>
  );
};
