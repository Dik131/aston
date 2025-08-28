import { Outlet } from 'react-router-dom';
import { BaseLayout } from '../../shared/layouts/BaseLayout';
import { LayoutHeader } from '../../widgets/LayoutHeader/LayoutHeader';
import { LayoutFooter } from '../../widgets/LayoutFooter/LayoutFooter';

export const MainLayout = () => {
  return (
    <BaseLayout
      header={<LayoutHeader />}
      footer={<LayoutFooter />}
    >
      <Outlet />
    </BaseLayout>
  );
};
