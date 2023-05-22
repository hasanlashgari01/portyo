import HeaderTop from "./HeaderTop";
import "./Header.css";
import HeaderMain from "./HeaderMain";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <HeaderTop />
          <HeaderMain />
        </div>
      </div>
    </>
  );
}

export default Header;
