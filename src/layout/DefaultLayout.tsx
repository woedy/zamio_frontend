import React, { ReactNode, useState } from 'react';
import { useLocation } from 'react-router-dom';


interface DefaultLayoutProps {
  children: ReactNode;
  hiddenOnRoutes: string[];
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, hiddenOnRoutes }) => {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Determine if the current route should hide the sidebar and header
  const hideSidebarAndHeader = hiddenOnRoutes.some(route => {
    if (route.includes(':')) {
      // For dynamic routes like /verify-user/:user_email, check if the pathname starts with the route
      return pathname.startsWith(route.split('/:')[0]);
    }
    return pathname === route; // Exact match for non-dynamic routes
  });

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">

        <div className="relative flex flex-1 flex-col overflow-y px-7 overflow-x-hidden">
       
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
