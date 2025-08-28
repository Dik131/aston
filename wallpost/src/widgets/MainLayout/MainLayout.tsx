import { Outlet } from 'react-router-dom';
import type { ReactNode } from 'react';
import { BaseLayout } from '../../shared/layouts/BaseLayout';
import { LayoutHeader } from '../../widgets/LayoutHeader/LayoutHeader';
import { LayoutFooter } from '../../widgets/LayoutFooter/LayoutFooter';

interface MainLayoutProps {
  children?: ReactNode; 
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <BaseLayout
      header={<LayoutHeader />}
      footer={<LayoutFooter />}
    >
      {children || <Outlet />}
    </BaseLayout>
  );
};
