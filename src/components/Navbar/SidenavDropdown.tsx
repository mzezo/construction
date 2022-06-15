import { useState } from "react"
import { motion } from 'framer-motion'

interface Link {
  href: string
  text: string
}

function SidenavDropdown({ links, text }: { links: Link[]; text: any }) {
  const [active, setActive] = useState(false)

  const toggle = () => setActive(!active)

  return (
    <li>
      <a
        href="#"
        onClick={toggle}
        className="transition-colors duration-200 hover:text-[#a8ca1e]"
      >
        {text} <i className="fa fa-chevron-down"></i>
      </a>

      {active && (
        <motion.ul
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="space-y-5 pl-10"
        >
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="transition-colors duration-200 hover:text-[#a8ca1e]"
              >
                {link.text}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </li>
  )
}

export default SidenavDropdown
