export function fadeInOut (duration:number = 0.2) {
  return {
    from: { 
      opacity: 0,
      y: 30,
      transition: {
        // type: 'easeInOut',
        duration: duration,
      } 
    },
    to: { 
      opacity: 1,
      y: 0,
      transition: {
        // type: 'easeInOut',
        duration: duration,
      } 
    },
  }
}