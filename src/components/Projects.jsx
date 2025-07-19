import Project from "./Project";
import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="projects">
        <div className="container">
          <div className="projects-wrapper">
            <h1 className="section-title">
              <span className="section-title__underline">Featured</span> Projects
            </h1>
            <div className="projects-items">
              <Project title="Real Estate Agency Website" image="/assets/svg/MOCKUP-tablet.svg">
                <span className="project-box__item">Branding</span>
              </Project>
              <Project title="Property Agent Website" image="/assets/svg/MOCKUP-artboard.svg">
                <span className="project-box__item">Development</span>
              </Project>
              <Project title="Movie Apps Mobile" image="/assets/svg/MOCKUP-iphone13.svg"></Project>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
