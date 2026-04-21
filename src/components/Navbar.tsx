import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'navbar-item has-background-grey-lighter' : 'navbar-item';

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <NavLink className={getLinkClass} to="/">
        Home
      </NavLink>

      <NavLink className={getLinkClass} to="/people">
        People
      </NavLink>
    </nav>
  );
};
