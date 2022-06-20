import { fadeInUp } from "@/utils/Motion/FadeInUp"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function FadeInAnimate({ children, className, style }: { children: any, className: string, style?: any }) {
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
      variants={fadeInUp(1)}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
