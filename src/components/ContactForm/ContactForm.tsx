import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { fadeInUp } from 'src/utils/Motion/FadeInUp';

const ContactForm = () => {
  const sliderRef = useRef(null);

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  function scroll(right: boolean) {
    sliderRef.current.scrollLeft += 400 * (right ? 1 : -1);
  }

  return (
    <>
      {/* TODO: fix the container issue */}
      <div className="flex flex-col md:flex-row md:h-screen items-center bg-white">
        {/* SLIDER */}
        <div className="h-full w-full md:w-1/2 shrink-0 bg-[#ebebeb] flex items-center relative">
          <div ref={sliderRef} className="w-full md:w-[53vw] h-[350px] -mr-20 md:h-[70%] flex items-center gap-5 overflow-hidden" style={{ scrollBehavior: 'smooth', scrollSnapType: "y mandatory" }}>
            <div className="bg-blue-500 w-9/12 flex-shrink-0 aspect-square text-[8rem] text-white flex items-center justify-center ml-2" style={{ scrollSnapAlign: "center" }}>0</div>
            <div className="bg-blue-500 w-9/12 flex-shrink-0 aspect-square text-[8rem] text-white flex items-center justify-center" style={{ scrollSnapAlign: "center" }}>1</div>
            <div className="bg-blue-500 w-9/12 flex-shrink-0 aspect-square text-[8rem] text-white flex items-center justify-center" style={{ scrollSnapAlign: "center" }}>2</div>
            <div className="bg-blue-500 w-9/12 flex-shrink-0 aspect-square text-[8rem] text-white flex items-center justify-center" style={{ scrollSnapAlign: "center" }}>3</div>
            <div className="bg-blue-500 w-9/12 flex-shrink-0 aspect-square text-[8rem] text-white flex items-center justify-center" style={{ scrollSnapAlign: "center" }}>4</div>
            <div className="bg-blue-500 w-9/12 flex-shrink-0 aspect-square text-[8rem] text-white flex items-center justify-center" style={{ scrollSnapAlign: "center" }}>5</div>
          </div>
          <button className="absolute w-12 h-12 font-bold bg-white right-5" onClick={() => scroll(true)}>
              {'>'}
            </button>
            <button className="absolute w-12 h-12 font-bold bg-white left-5" onClick={() => scroll(false)}>
              {'<'}
            </button>
        </div>

        <div className="md:w-1/2 w-full p-5">
          <div
            className="about-bx1-content wow fadeIn md:pl-10"
            data-wow-delay="0.2s"
            data-wow-duration="2s"
          >
            <h2>Our latest project Industrial style apartment</h2>
            <p>
              Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare.
              Suspendisse ullamcorper metus in erat viverra, vehicula pharetra
              dolor accumsan. In arcu ex, rutrum finibus malesuada{' '}
            </p>
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
              <a
                href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
                className="popup-youtube video btn button-lg black radius-xl btn-aware btn-video btn-aware outline outline-2"
              >
                <i className="fa fa-play"></i>
                <span></span>
              </a>
              <a
                href="carousel-showcase.html"
                className="btn button-lg black radius-xl btn-aware outline outline-2"
              >
                View Portfolio<span></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="section-full content-inner-2 form-content-box bg-white">
        <div className="container">
          <div className="form-box">
            <div className="row m-b40">
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.4s"
                data-wow-duration="2s"
              >
                <h3 className="title">
                  <strong>The principle of the</strong> design - the{' '}
                  <strong>harmony, rhythm and </strong> balance{' '}
                  <strong>are all the same with </strong> interior and fashion
                  design.
                </h3>
                <span className="sign">
                  <img src="/images/sign-2.png" alt="" /> Creative. Modern.
                  Smart.
                </span>
              </div>
              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={fadeInUp(1)}
                className="col-lg-6 wow fadeInUp"
              >
                <div className="form-img">
                  <img src="/images/laptop.png" alt="" />
                </div>
              </motion.div>
            </div>
            <form className="row sp20">
              <div
                className="col-lg-4 col-md-4 wow fadeIn"
                data-wow-delay="0.6s"
                data-wow-duration="2s"
              >
                <div className="form-group">
                  <input
                    name="dzName"
                    type="text"
                    required
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div
                className="col-lg-8 col-md-8 wow fadeIn"
                data-wow-delay="0.8s"
                data-wow-duration="2s"
              >
                <div className="form-group">
                  <input
                    name="dzOther[Subject]"
                    type="text"
                    required
                    className="form-control"
                    placeholder="Business services consulting"
                  />
                </div>
              </div>
              <div
                className="col-lg-5 col-md-5 wow fadeIn"
                data-wow-delay="1.0s"
                data-wow-duration="2s"
              >
                <div className="form-group">
                  <input
                    name="dzEmail"
                    type="email"
                    className="form-control"
                    required
                    placeholder="Email"
                  />
                </div>
              </div>
              <div
                className="col-lg-4 col-md-7 wow fadeIn"
                data-wow-delay="1.2s"
                data-wow-duration="2s"
              >
                <div className="form-group">
                  <input
                    name="dzOther[Phone]"
                    type="text"
                    required
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div
                className="col-lg-3 col-md-12 wow fadeIn"
                data-wow-delay="1.6s"
                data-wow-duration="2s"
              >
                <button
                  name="submit"
                  type="submit"
                  value="Submit"
                  className="btn btn-lg radius-xl black"
                >
                  Send to us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
