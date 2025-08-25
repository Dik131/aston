import type { PropsWithChildren } from 'react';
import { BaseLayout } from '../../shared/layouts/BaseLayout';
import { LayoutHeader } from '../../widgets/LayoutHeader/LayoutHeader';
import { LayoutFooter } from '../../widgets/LayoutFooter/LayoutFooter';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <BaseLayout
      header={<LayoutHeader />}
      footer={<LayoutFooter />}
    >
      {children}
    </BaseLayout>
  );
};
