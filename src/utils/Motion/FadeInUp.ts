export function fadeInUp (duration:number = 0.6) {
  return {
    visible: { opacity: 1, y: 0, transition: { duration: duration} },
    hidden: { opacity: 0, y: 100}
  }
}