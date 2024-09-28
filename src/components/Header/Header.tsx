import { ReactNode } from "react";
import "./Header.css";
interface Props {
  children: ReactNode;
  className: string;
}
const Header = ({ children, className }: Props) => {
  return (
    <nav className={`navbar bg-body-tertiary header-nav ${className}`}>
      {children}
    </nav>
  );
};

export default Header;
