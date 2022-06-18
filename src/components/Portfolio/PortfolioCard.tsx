import { motion } from "framer-motion"

function PortfolioCard({
  title,
  tag,
  date,
}: {
  title: string
  tag: string
  date: string
}) {
  return (
    // TODO: fix the exit animation
    <motion.li
      className="card-container"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox1">
        <img src="/images/portfolio/portfolio-box1/pic1.jpg" alt="" />
        <div className="overlay-bx">
          <div className="portinner">
            <span>
              {date} in <span className="capitalize">{tag}</span>
            </span>
            <h3 className="port-title">
              <a href="project-detail-1.html">{title}</a>
            </h3>
            <a
              href="project-detail-1.html"
              className="btn outline outline-2 radius-xl"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </motion.li>
  )
}

export default PortfolioCard
