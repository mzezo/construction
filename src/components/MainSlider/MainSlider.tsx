import React from "react";

const MainSlider = () => {
  return (
    <div className="page-content bg-white">
      <div className="content-block">
        <div
          className="section-full bg-white content-inner-2 about-bx1"
          style={{
            backgroundImage: "url(/images/background/bg8.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeIn"
                data-wow-delay="0.4s"
                data-wow-duration="2s"
              >
                <div className="radius-sm rs-wave">
                  <img src="/images/about/pic3.jpg" alt="" />
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeIn"
                data-wow-delay="0.6s"
                data-wow-duration="2s"
              >
                <div className="about-bx1-content">
                  <div className="about-year">
                    <span>26</span>
                    <p>
                      Years
                      <br />
                      Experience
                      <br />
                      Working
                    </p>
                  </div>
                  <h2>Architecure is a visual art, and The Building</h2>
                  <p>
                    Praesent pharetra orci odio, ut mattis tellus ullamcorper
                    ornare. Suspendisse ullamcorper metus in erat viverra,
                    vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus
                    malesuada vel. Praesent pharetra orci odio, ut mattis tellus
                  </p>
                  <a
                    href="film-strip.html"
                    className="btn outline outline-2 button-lg black radius-xl btn-aware m-r10 m-b10"
                  >
                    View Portfolio<span></span>
                  </a>
                  <a
                    href="company-history.html"
                    className="btn outline outline-2 button-lg black radius-xl btn-aware m-b10"
                  >
                    Company History<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
