import styles from './BaseLayout.module.css'

export const BaseLayout = (
  { header, footer, children }: { header: React.ReactNode, footer: React.ReactNode, children: React.ReactNode }
) => {
  return (
    <div className={styles.layout}>
      {header}
        <main>{children}</main>
      {footer}
    </div>
  )
}
