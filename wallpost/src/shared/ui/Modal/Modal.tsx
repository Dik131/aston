import { createPortal } from 'react-dom'
import { useTheme } from '../../lib/theme/useTheme'
import styles from './Modal.module.css'

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ onClose, children }: ModalProps) => {
  const { theme } = useTheme()

  return createPortal(
    <div
      className={`${styles.overlay} ${styles[theme]}`}
      onClick={onClose}
    >
      <div
        className={`${styles.modal} ${styles[theme]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}

Modal.Header = function ModalHeader({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  return <div className={`${styles.header} ${styles[theme]}`}>{children}</div>
}

Modal.Body = function ModalBody({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  return <div className={`${styles.body} ${styles[theme]}`}>{children}</div>
}

Modal.Footer = function ModalFooter({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  return <div className={`${styles.footer} ${styles[theme]}`}>{children}</div>
}
