import ExperienceItem from "./ExperienceItem";
import "./Experience.css";

function Experience() {
  return (
    <>
      <div className="experience">
        <div className="container">
          <div className="experience-wrapper">
            <div className="experience-left">
              <h1 className="experience-left__title">Working experience</h1>
              <p className="experience-left__description">
                Tincidunt purus lacus nascetur nunc commodo. Netus at dignissim urna quam. Imperdiet proin sapien posuere egestas. Tristique
                nam magna velit odio ullamcorper eget donec.
              </p>
            </div>
            <div className="experience-right">
              <ExperienceItem icon="/assets/svg/Slack.svg" title="Slack" description="Product Design - 4 Years Experince" />
              <ExperienceItem icon="/assets/svg/Firefox.svg" title="Firefox" description="Sr. UI Design - 4 Years Experince" />
              <ExperienceItem
                icon="/assets/svg/Digital Ocean.svg"
                title="Digital Ocean"
                description="UI & Motion Designer - 4 Years Experince"
              />
              <ExperienceItem icon="/assets/svg/Mailchim.svg" title="Mailchim" description="UI Designer - 4 Years Experince" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
