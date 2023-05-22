import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import "./Header.css";

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
