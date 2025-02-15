import { useEffect, useState } from "react";
import { links } from "../utils/constants";
import { services } from "../utils/services";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const storedSelectedLink = sessionStorage.getItem("selectedLink");
  const initialSelectedLink = storedSelectedLink
  ? parseInt(storedSelectedLink, 10)
  : 0;

  const [selectedLink, setSelectedLink] = useState(initialSelectedLink);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("selectedLink", selectedLink.toString());
  }, [selectedLink]);

  const handleServicesClick = (index: number) => {
    setSelectedLink(index);
    if (links[index].title === "DỊCH VỤ TỔNG QUÁT") {
      setIsServicesOpen(!isServicesOpen); 
    } else {
      setIsServicesOpen(false); 
    }
    navigate(links[index].path);
    
  };
  
  return (
    <nav className="h-[90px] mt-4">
      <ul className="flex flex-row gap-12 justify-center">
        {links.map((link, index) => (
          <li key={index} className="relative font-bold ">
            <a
              className={`w-auto h-auto inline-block text-center font-semibold transition-colors duration-1000 ease-in-out hover:cursor-pointer ${
                selectedLink === index ? "text-[#82C8E5]" : "text-gray-800"
              }`}
              onClick={() => handleServicesClick(index)}
              aria-current={selectedLink === index ? "page" : undefined}
            >
              <span className="block">{link.title.split(" ").slice(0, 2).join(" ")}</span>
              <span className="block">{link.title.split(" ").slice(2).join(" ")}</span>
            </a>
            {selectedLink === index && (
              <div className="w-full h-[4px] rounded-xl bg-[#0052A2] transition duration-1000 ease-linear" />
            )}
            {link.title === "DỊCH VỤ TỔNG QUÁT" && isServicesOpen && (
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-xl shadow-xl">
                {services.map((service) => (
                  <a
                    onClick={() => {
                      navigate(`/services/${service.id}`);
                      setIsServicesOpen(false); 
                    }}
                    className="block px-4 py-2 text-gray-800 cursor-pointer group"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
