import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-top">
            <div className="app-logo">
              <span className="app-logo__text">S</span>
            </div>
            <nav className="header-nav">
              <ul className="header-nav__list">
                <li className="header-nav__item">
                  <a href="#" className="header-nav__link header-nav__link--active">
                    Home
                  </a>
                </li>
                <li className="header-nav__item">
                  <a href="#" className="header-nav__link">
                    About me
                  </a>
                </li>
                <li className="header-nav__item">
                  <a href="#" className="header-nav__link">
                    Project
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-search">
              <img src="/public/assets/svg/search.svg" alt="" />
            </div>
            <div className="hamburger">
              <span className="hamburger-line"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
