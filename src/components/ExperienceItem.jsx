import propTypes from "prop-types";
import "./ExperienceItem.css";

function ExperienceItem({ icon, title, description }) {
  return (
    <>
      <div className="expreience-item">
        <div className="expreience-item__icon">
          <img src={icon} alt="" />
        </div>
        <div className="expreience-item__content">
          <h2 className="expreience-item__title">{title}</h2>
          <h5 className="expreience-item__description">{description}</h5>
        </div>
      </div>
    </>
  );
}

ExperienceItem.propTypes = {
  icon: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
};

export default ExperienceItem;
