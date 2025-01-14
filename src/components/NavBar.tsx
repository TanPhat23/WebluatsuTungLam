import { useEffect, useState } from "react";
import { links } from "../utils/contants";

const NavBar = () => {
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
          <li key={index} className="relative font-bold">
            <a
              href={link.path}
              className={`w-auto h-auto inline-block text-center font-semibold ${
                selectedLink === index ? "text-green-600" : "text-gray-800"
              }`}
              onClick={() => setSelectedLink(index)}
              aria-current={selectedLink === index ? "page" : undefined}
            >
              <span className="block">
                {link.title.split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="block">
                {link.title.split(" ").slice(2).join(" ")}
              </span>
            </a>
            {selectedLink === index && (
              <div className="w-full h-[4px] rounded-xl bg-[#122B12]" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
