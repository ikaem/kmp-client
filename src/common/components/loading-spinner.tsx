import React from 'react';

export const LoadingSpinner: React.FC = ({ children }) => {
  return (
    <div className='loading-spinner'>
      <div className='spinner-border' role='status' />
      <div className='loading-label'>{children}</div>
    </div>
  );
};
