import React, { ReactNode } from "react";

interface BasicLayoutProps {
  children: ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="max-w-screen-xl w-full mx-4 ">{children}</div>
    </div>
  );
};

export default BasicLayout;
