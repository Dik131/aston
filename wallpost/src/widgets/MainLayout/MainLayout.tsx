import { BaseLayout } from '../../shared/layouts/BaseLayout';
import { LayoutHeader } from '../../widgets/LayoutHeader/LayoutHeader';
import { LayoutFooter } from '../../widgets/LayoutFooter/LayoutFooter';
//import styles from './MainLayout.module.css';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BaseLayout
      header={<LayoutHeader />}
      footer={<LayoutFooter />}
    >
      {children}
    </BaseLayout>
  );
};
