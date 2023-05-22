import propTypes from "prop-types";
import "./Service.css";

function Service({ icon, title, description }) {
  return (
    <>
      <div className="service">
        <div className="service-icon">
          <img src={icon} alt="" />
        </div>
        <h2 className="serivce-title">{title}</h2>
        <p className="serivce-caption">{description}</p>
      </div>
    </>
  );
}

Service.propTypes = {
  icon: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
};

export default Service;
