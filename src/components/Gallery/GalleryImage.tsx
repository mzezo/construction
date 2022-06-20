import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "src/utils/Motion/FadeInUp";

function GalleryImage({ name, image, category }: any) {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.li
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp(0.6)}
      className="card-container col-lg-4 col-md-6 col-sm-6 royal wow fadeInUp"
      // initial={{ opacity: 0, y: -100 }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: 100 }}
    >
      <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox3">
        <Image
          src={image?.data?.attributes?.url ??  "/images/portfolio/portfolio-box2/pic1.jpg"}
          alt={image?.data?.attributes?.name }
          width="374px"
          height="500px"
          // layout="fill"
          objectFit="contain"
          blurDataURL={image?.data?.attributes?.url ??  "/images/portfolio/portfolio-box2/pic1.jpg"}
          placeholder="blur"
        />
        <div className="overlay-bx">
          <div className="portinner">
            <div className="port-up">
              <span className="text-primary">
                {category?.data?.attributes?.name}
              </span>
              <h3 className="port-title">
                <a href="project-detail-1.html">{name}</a>
              </h3>
            </div>
            <div className="port-down">
              <a href={"#"} className="btn-link">
                View Detail <i className="la la-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export default GalleryImage;
