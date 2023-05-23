import "./Testimonial.css";

function Testimonial() {
  return (
    <>
      <div className="testimonial">
        <div className="container">
          <div className="testimonial-wrapper">
            <h1 className="section-title">
              What <span className="section-title__underline">they say</span> about me
            </h1>
            <p className="testimonial-description">
              Sapien pretium ut massa aliquet tellus pellentesque elementum. Pellentesque pellentesque in curabitur turpis sed dolor
              adipiscing mi. Gravida consequat ornare at dui gravida ut tortor. Nisi turpis in sed gravida nec vitae. Arcu, ut et integer
              bibendum duis lacus malesuada. In mi elementum mauris orci dictum sollicitudin odio duis. Vulputate egestas commodo nisl id
              mauris. Magnis elit ultricies aliquam adipiscing fames sed.
            </p>
            <div className="testimonial-author">
                <img className="testimonial-author__profile" src="/public/assets/images/profile.jpg" alt="" />
                <h4 className="testimonial-author__name" >Samantha Carlos</h4>
                <h5 className="testimonial-author__job" >Manager at cyclos</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
