import { useState } from 'react';

interface Link {
  href: string;
  text: string;
}

function SidenavDropdown({ links, text }: { links: Link[]; text: any }) {
  const [active, setActive] = useState(false);

  const toggle = () => setActive(!active);

  return (
    <li>
      <a
        href="#"
        onClick={toggle}
        className="transition-colors duration-200 hover:text-[#a8ca1e]"
      >
        {text} <i className="fa fa-chevron-down"></i>
      </a>

      {/* TODO: make the collapse animation */}
      {active && (
        <ul className="space-y-5 pl-10">
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
        </ul>
      )}
    </li>
  );
}

export default SidenavDropdown;
