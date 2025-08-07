import styles from './Button.module.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...rest }: Props) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  )
}
