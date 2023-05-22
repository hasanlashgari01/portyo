import Service from "./Service";
import "./Services.css";

function Services() {
  return (
    <>
      <div className="services">
        <div className="container">
          <div className="services-wrapper">
            <h1 className="section-title">
              What <span className="section-title__underline">service</span> do I provide
            </h1>
            <div className="services-items">
              <Service icon="/public/assets/svg/ui.svg" title="UI Design" description="Varius amet, integer tellus non eget viverra." />
              <Service icon="/public/assets/svg/mouse.svg" title="Prototype" description="Ridiculus nulla eu ultricies auctor purus." />
              <Service
                icon="/public/assets/svg/search-design.svg"
                title="UX Research"
                description="Ac non massa non accumsan eget congue pellentesque neque."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
