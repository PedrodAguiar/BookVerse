// Navbar.jsx
import NavItemText from "../NavItemText";
import NavItemIcon from "../NavItemIcon";

const Navbar = () => {
  return (
    <nav className="flex gap-8">
      <ul className="flex items-center gap-8 list-none">
        <NavItemText />
      </ul>
      <ul className="flex items-center gap-8 list-none">
        <NavItemIcon />
      </ul>
    </nav>
  );
};

export default Navbar;
