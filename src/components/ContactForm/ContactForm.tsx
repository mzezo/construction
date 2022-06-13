import React, { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from 'src/utils/Motion/FadeInUp';

const ContactForm = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
     <div className="section-full bg-white content-inner-2 project-slider">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6 p-lr0">
							<div className="project-carousel-2 owl-carousel owl-btn-center-lr owl-btn-1 black  wow fadeInLeft" data-wow-delay="0.2s"  data-wow-duration="2s">
								<div className="item">
									<div className="dlab-media dlab-img-overlay1">
										<img src="images/portfolio/portfolio-box/pic6.jpg" alt="" />
									</div>
								</div>
								<div className="item">
									<div className="dlab-media dlab-img-overlay1">
										<img src="images/portfolio/portfolio-box/pic2.jpg" alt="" />
									</div>
								</div>
								<div className="item">
									<div className="dlab-media dlab-img-overlay1">
										<img src="images/portfolio/portfolio-box/pic7.jpg" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="about-bx1-content wow fadeIn" data-wow-delay="0.2s"  data-wow-duration="2s">
								<h2>Our latest project Industrial style apartment</h2>
								<p>Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper metus in erat viverra, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada </p>
								<div className="m-b30">
									<ul className="list-details">
										<li>
											<strong>Clients:</strong>
											<span>Ethan Hunt</span>
										</li>
										<li>
											<strong>Completion:</strong>
											<span>February 5th, 2017</span>
										</li>
										<li>
											<strong>Project Type:</strong>
											<span>Villa, Residence</span>
										</li>
									</ul>
								</div>
								<div className="">
									<a href="https://www.youtube.com/watch?v=Dj6CKxQue7U" className="popup-youtube video btn outline outline-2 button-lg black radius-xl btn-aware btn-video btn-aware">
										<i className="fa fa-play"></i><span></span>
									</a>
									<a href="carousel-showcase.html" className="btn outline outline-2 button-lg black radius-xl btn-aware">View Portfolio<span></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-full bg-white content-inner-2 form-content-box">
				<div className="container">
					<div className="form-box">
						<div className="row m-b40">
							<div className="col-lg-6 wow fadeIn" data-wow-delay="0.4s"  data-wow-duration="2s">
								<h3 className="title"><strong>The principle of the</strong> design - the <strong>harmony, rhythm and </strong> balance <strong>are all the same with </strong> interior and fashion design.</h3>
								<span className="sign"><img src="images/sign-2.png" alt=""/> Creative. Modern. Smart.</span>
							</div>
              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={fadeInUp(1)}
                className="col-lg-6 wow fadeInUp"
              >
                <div className="form-img"><img src="images/laptop.png" alt=""/></div>
              </motion.div>
						</div>
						<form className="row sp20">
							<div className="col-lg-4 col-md-4 wow fadeIn" data-wow-delay="0.6s"  data-wow-duration="2s">
								<div className="form-group">
									<input name="dzName" type="text" required className="form-control" placeholder="Name" />
								</div>
							</div>
							<div className="col-lg-8 col-md-8 wow fadeIn" data-wow-delay="0.8s"  data-wow-duration="2s">
								<div className="form-group">
									<input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Business services consulting" />
								</div>
							</div>
							<div className="col-lg-5 col-md-5 wow fadeIn" data-wow-delay="1.0s"  data-wow-duration="2s">
								<div className="form-group">
									<input name="dzEmail" type="email" className="form-control" required  placeholder="Email" />
								</div>
							</div>
							<div className="col-lg-4 col-md-7 wow fadeIn" data-wow-delay="1.2s"  data-wow-duration="2s">
								<div className="form-group">
									<input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone" />
								</div>
							</div>
							<div className="col-lg-3 col-md-12 wow fadeIn" data-wow-delay="1.6s"  data-wow-duration="2s">
								 <button name="submit" type="submit" value="Submit" className="btn btn-lg radius-xl black">Send to us</button>
							</div>
						</form>
					</div>
				</div>	
			</div>
    </>
  )
}

export default ContactForm