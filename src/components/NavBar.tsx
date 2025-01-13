import { useEffect, useState } from "react";
import { links } from "../utils/contants";

type Props = {};

const NavBar = (props: Props) => {
  const storedSelectedLink = sessionStorage.getItem("selectedLink");
  const initialSelectedLink = storedSelectedLink
    ? parseInt(storedSelectedLink, 10)
    : 0;

  const [selectedLink, setSelectedLink] = useState(initialSelectedLink);

  useEffect(() => {
    sessionStorage.setItem("selectedLink", selectedLink.toString());
  }, [selectedLink]);
  return (
    <nav className="h-[90px] mt-4">
      <ul className="flex flex-row gap-12 justify-center">
        {links.map((link, index) => (
          <li key={index} className="relative">
            <a
              href={link.path}
              className="w-[120px] h-auto inline-block p-0 text-center font-semibold"
              onClick={() => setSelectedLink(index)}
            >
              {link.title}
            </a>
            {selectedLink === index && (
              <div className="absolute bottom-0 left-0 w-full h-[4px] rounded-xl bg-blue-500" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
