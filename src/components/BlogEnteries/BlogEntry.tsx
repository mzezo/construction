import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { fadeInUp } from "@/utils/Motion/FadeInUp"

function BlogEntry({
  name,
  description,
  id,
  image,
  date,
}: {
  name: string
  description: string
  id: string
  image: any
  date: string
}) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp(0.6)}
      className="item"
    >
      <div className="blog-post blog-grid style1">
        <div className="blog-media">
          <img
            className="max-h-[230px] bg-cover"
            src={image?.data?.attributes?.url || "images/blog/card/pic1.jpg"}
            alt=""
          />
        </div>
        <div className="dlab-post-text">
          <div className="dlab-post-title">
            <h4 className="post-title font-weight-600">
              <Link href={`/blogs/${id}`}>
                <a>{name}</a>
              </Link>
            </h4>
          </div>

          <p className="line-clamp-2">{description}</p>
          <div className="dlab-post-meta">
            <ul>
              <li className="post-date">
                <i className="far fa-clock"></i> {date}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BlogEntry
