import { LayoutHeader } from '../../widgets/LayoutHeader/LayoutHeader'
import { LayoutFooter } from '../../widgets/LayoutFooter/LayoutFooter'
import styles from './MainLayout.module.css'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <LayoutHeader />
      <main>{children}</main>
      <LayoutFooter />
    </div>
  )
}
