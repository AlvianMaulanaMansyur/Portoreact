import React from 'react';

type MainButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const MainButton: React.FC<MainButtonProps> = ({ label, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-2 py-2 md:px-4 md:py-2 rounded-md pointerfont-semibold transition duration-300 ease-in-out cursor-pointer';
  const styles =
    variant === 'primary'
      ? `${baseStyles} bg-purple-800 hover:bg-purple-600 text-white`
      : `${baseStyles} bg-white hover:bg-gray-400 text-black`;

  return (
    <button className={`${baseStyles} ${styles} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default MainButton;
