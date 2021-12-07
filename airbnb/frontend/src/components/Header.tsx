import { Logo } from './Logo'
import { MenuIcon } from './MenuIcon'

export const Header = () => (
  <header className="header" tabIndex={0}>
    <div className="header__main">
      <a href="/">
        <Logo />
      </a>
      <MenuIcon />
    </div>
  </header>
)
