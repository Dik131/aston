import { useTheme } from '../../../shared/lib/theme/useTheme'
import { Button } from '../../../shared/ui/Button/Button'

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme()

  return <Button onClick={toggleTheme}>🌗</Button>
}
