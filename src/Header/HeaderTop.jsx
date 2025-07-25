import "./HeaderTop.css";

function HeaderTop() {
  return (
    <>
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
          <img src="/assets/svg/search.svg" alt="" />
        </div>
        <div className="hamburger">
          <span className="hamburger-line"></span>
        </div>
      </div>
    </>
  );
}

export default HeaderTop;
