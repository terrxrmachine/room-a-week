import { Link } from "react-router-dom";
import "./Header.module.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ROOM a week</Link>
      </div>
      <nav>
        <Link to="/page1">Host A Room</Link>
        <Link to="/page2">Find A Room</Link>
      </nav>
      <div className="auth-buttons">
        <Link to="/sign-in">Sign in</Link>
        <Link to="/sign-up" className="sign-up">
          Sign up
        </Link>
      </div>
    </header>
  );
}

export default Header;
