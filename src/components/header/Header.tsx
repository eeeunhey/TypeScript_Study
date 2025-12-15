import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
  return (
    <header className="header">
      <Link to="/" className="headerTitle">
       Home
      </Link>
    </header>
  );
}