import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div style={{
      position: 'absolute',
      bottom: '85px',
      left: '20px',
      right: '20px',
      background: 'rgba(1, 39, 65, 0.95)',
      backdropFilter: 'blur(8px)',
      color: '#FFFFFF',
      padding: '12px 18px',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      zIndex: 200,
      animation: 'slideUp 0.25s ease-out'
    }}>
      <CheckCircle2 size={18} color="#53BF9D" />
      <span style={{ fontSize: '13px', fontWeight: '600' }}>{toastMessage}</span>
    </div>
  );
};
