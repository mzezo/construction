import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion'
import { fadeInUp } from "@/utils/Motion/FadeInUp";

interface BlogItemType {
  title: string,
  description: string,
  imgSrc: string,
  postedBy: string,
  date: string,
  likes: string,
  comments: string,
}

function BlogItem({ title, description, imgSrc, postedBy, date, likes, comments }: BlogItemType) {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="post card-container col-lg-6 col-md-6 col-sm-12 col-xs-12 wow fadeInUp"
      animate={controls}
      initial="hidden"
      variants={fadeInUp(1)}
    >
      <div className="blog-post blog-grid blog-rounded radius-sm shadow">
        <div className="dlab-post-media dlab-img-effect">
          <a href="blog-details.html">
            <img src={imgSrc || "images/blog/blog/pic1.jpg"} alt="" />
          </a>
        </div>
        <div className="dlab-info p-lr50 p-tb40">
          <div className="dlab-post-meta">
            <ul className="d-flex align-items-center">
              <li className="post-date"> {date} </li>
              <li className="post-author">
                <i className="ti ti-thumb-up"></i>{" "}
                <a href="javascript:void(0);">{likes}</a>{" "}
              </li>
              <li className="post-comment">
                <i className="ti ti-comments"></i>{" "}
                <a href="javascript:void(0);">{comments}</a>{" "}
              </li>
            </ul>
          </div>
          <div className="dlab-post-title">
            <h4 className="post-title">
              <a href="blog-details.html">{title}</a>
            </h4>
          </div>
          <div className="dlab-post-text">
            <p>
              {description}
            </p>
          </div>
          <div className="dlab-post-name">
            Posted by{" "}
            <a href="#" className="site-button-link">
              {postedBy}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BlogItem
