import { User, ShoppingBag } from "lucide-react";

const icones = [
  { id: 1, icon: User },
  { id: 2, icon: ShoppingBag },
];

const NavItemIcon = () => (
  <>
    {icones.map(({ id, icon: Icon }) => (
      <li
        key={id}
        className="cursor-pointer hover:text-gray-500 transition-colors"
      >
        <Icon className="w-6" strokeWidth={1.5} />
      </li>
    ))}
  </>
);

export default NavItemIcon;
