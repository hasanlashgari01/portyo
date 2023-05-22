import propTypes from "prop-types";
import "./Project.css";

function Project({ title, image, children }) {
  return (
    <div className="project">
      <div className="project-left">
        <h1 className="project-title">{title}</h1>
        <div className="project-box">
          <span className="project-box__item">UIUX Design</span>
          {children}
        </div>
        <a href="#" className="project-link">
          See Detail Project
        </a>
      </div>
      <div className="project-right">
        <img className="project-right__icon" src={image} alt="" />
      </div>
    </div>
  );
}

Project.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  children: propTypes.element,
};

export default Project;
