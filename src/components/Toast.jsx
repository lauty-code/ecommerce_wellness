import React, { useState, useEffect } from 'react';

const Toast = ({ message, isVisible }) => {
  if (!message) return null;

  return (
    <div
      className={`fixed top-24 left-1/2 -translate-x-1/2 z-[90] px-6 py-3.5 rounded-2xl text-white text-sm font-semibold shadow-xl flex items-center gap-2.5 ${
        isVisible ? 'toast-enter' : 'toast-exit'
      }`}
      style={{ background: 'linear-gradient(135deg, #0f766e, #14b8a6)' }}
    >
      <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      {message}
    </div>
  );
};

export default Toast;
