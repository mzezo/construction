import { useState } from "react"
import { motion } from 'framer-motion'
import { useRouter } from "next/router";

interface Link {
  href: string
  text: string
  onClick?: () => void
  handleCloseNav?: () => void
}

function SidenavDropdown({ links, text, handleCloseNav }: { links: Link[]; text: any, handleCloseNav?: any }) {
  const [active, setActive] = useState(false)

  const toggle = () => setActive(!active)
  const router = useRouter();
	const { asPath, locale } = router;

  const handleItemClicked = (lang: string) => {
    setActive(false);

    router.push(asPath, undefined, {
			locale: lang,
		});

    handleCloseNav();

  }

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
            <li key={index} onClick={() => handleItemClicked(link?.text)}>
              {/* <NextLink href={link?.href}> */}
                <span
                  // href={link.href}
                  className="transition-colors duration-200 hover:text-[#a8ca1e] cursor-pointer"
                >
                  {link.text}
                </span>
              {/* </NextLink> */}
            </li>
          ))}
        </motion.ul>
      )}
    </li>
  )
}

export default SidenavDropdown
