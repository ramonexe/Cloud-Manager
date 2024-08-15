import React, { ReactNode } from 'react';
import '../styles/FullScreenDiv.css';

interface FullScreenDivProps {
  children: ReactNode;
}

const FullScreenDiv: React.FC<FullScreenDivProps> = ({ children }) => {
  return (
    <div className="fullscreen-div">
      {children}
    </div>
  );
};

export default FullScreenDiv;
