import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src="/logo-coruja.png"
        alt="Logo Coruja"
        className="w-32 h-32 animate-bounce"
      />
    </div>
  );
};

export default Loading; 