import { Logo } from './Logo'
import { MenuIcon } from './MenuIcon'

export const Header = () => (
  <header className="header">
    <div className="header__main">
      <Logo />
      <MenuIcon />
    </div>
  </header>
)
