import { motion } from "framer-motion"
import Image from "next/image"

function PortfolioCard({
  name,
  image,
  date,
}: {
  name: string
  tag: string
  date: string
  image: any
}) {
  console.log('PortfolioCard', name)
  return (
    // TODO: fix the exit animation
    <motion.li
      className="card-container"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox1">
        <Image
          src={
            image?.data?.attributes?.url ??
            "/images/portfolio/portfolio-box2/pic1.jpg"
          }
          alt={image?.data?.attributes?.name}
          width="364px"
          height="350px"
          objectFit="cover"
          blurDataURL={
            image?.data?.attributes?.url ??
            "/images/portfolio/portfolio-box2/pic1.jpg"
          }
          placeholder="blur"
        />
        <div className="overlay-bx">
          <div className="portinner">
            <span>
              {date} 
            </span>
            <h3 className="port-title">
              <a href="project-detail-1.html">{name}</a>
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
