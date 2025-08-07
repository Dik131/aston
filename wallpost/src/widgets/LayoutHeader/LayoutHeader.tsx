import { useState } from 'react'
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher'
import { Modal } from '../../shared/ui/Modal/Modal'
import { Button } from '../../shared/ui/Button/Button'
import styles from './LayoutHeader.module.css'

export const LayoutHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className={styles.header}>
      <h1>📄 Посты</h1>
      <div className={styles.rightSide}>
        <ThemeSwitcher />
        <Button onClick={() => setIsModalOpen(true)}>О проекте</Button>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2>О проекте</h2>
          <p>Это учебное приложение на Vite + React + TypeScript</p>
        </Modal>
      )}
    </header>
  )
}
