import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

type Props = {
  children: React.ReactNode
  onClose: () => void
}

export const Modal = ({ children, onClose }: Props) => {
  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✖</button>
        {children}
      </div>
    </div>,
    document.body
  )
}
