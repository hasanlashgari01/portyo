import "./HeaderMain.css";

function HeaderMain() {
  return (
    <>
      <div className="header-main">
        <div className="header-left">
          <h5 className="header-left__suptitle">Hi, I am samantha</h5>
          <h1 className="header-left__title">
            Proffesional <span className="header-left__title-underline">product designer</span> based in USA{" "}
          </h1>
          <p className="header-left__description">
            Varius amet, integer tellus non eget viverra. Ultrices tellus donec gravida id sed senectus dolor cursus sed. Ullamcorper tellus
            ac cras nec, pretium laoreet duis.
          </p>

          <div className="header-left__links">
            <a href="#" className="header-left__link">
              Contact Us
            </a>
            <div className="header-left__icons">
              <a href="#" className="header-left__icon">
                <img src="/assets/svg/INSTAGRAM.svg" alt="" />
              </a>
              <a href="#" className="header-left__icon">
                <img src="/assets/svg/DRIBBBLE.svg" alt="" />
              </a>
              <a href="#" className="header-left__icon">
                <img src="/assets/svg/BEHANCE.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="header-right__wrapper">
            <img className="header-right__small" src="/assets/images/samantha-small.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderMain;
