import { Swiper, SwiperSlide } from "swiper/react"

function LuxurySection() {
  return (
    <div
      className="h-screen bg-white relative mb-20"
      style={{
        backgroundImage: "url(images/background/bg9.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="pt-20">
          <h2 className="head-title text-5xl">
            The Luxury Residence In Forest
          </h2>
          <p className="font-normal text-black">
            Meh synth Schlitz, tempor duis single-origin coffee ea next level
            ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit
            hella,{" "}
          </p>
          <a
            href="contact-us-1.html"
            className="btn btn-lg radius-xl black m-r10 m-b10"
          >
            Contact Us
          </a>
          <a
            href="portfolio-2.html"
            className="btn btn-lg radius-xl black m-b10"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* TODO: add navigation */}
      <div className="w-full h-[400px] absolute -bottom-20">
        <Swiper className="container h-full">

          <SwiperSlide
            className="flex items-center"
            style={{
              backgroundImage: "url(images/projects/project/img1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-white w-1/2 p-10">
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
                <li>
                  <strong>Architects:</strong>
                  <span>Logan Cee</span>
                </li>
                <li>
                  <a
                    href="portfolio-2.html"
                    className="btn outline outline-2 button-lg black m-t10 radius-xl btn-aware"
                  >
                    View Portfolio<span></span>
                  </a>
                </li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="flex items-center"
            style={{
              backgroundImage: "url(images/projects/project/img1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-white w-1/2 p-10">
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
                <li>
                  <strong>Architects:</strong>
                  <span>Logan Cee</span>
                </li>
                <li>
                  <a
                    href="portfolio-2.html"
                    className="btn outline outline-2 button-lg black m-t10 radius-xl btn-aware"
                  >
                    View Portfolio<span></span>
                  </a>
                </li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="flex items-center"
            style={{
              backgroundImage: "url(images/projects/project/img1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-white w-1/2 p-10">
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
                <li>
                  <strong>Architects:</strong>
                  <span>Logan Cee</span>
                </li>
                <li>
                  <a
                    href="portfolio-2.html"
                    className="btn outline outline-2 button-lg black m-t10 radius-xl btn-aware"
                  >
                    View Portfolio<span></span>
                  </a>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  )
}

export default LuxurySection
