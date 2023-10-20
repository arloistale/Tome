import './page.scss';

import React, { ReactNode } from 'react';
import Nav from '../core/nav';
import Footer from '../core/footer';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="page-container is-flex is-flex-direction-column">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;