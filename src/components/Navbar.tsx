import { AiOutlineHome } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineWebStories } from "react-icons/md";

function Navbar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-gray-900 shadow-lg rounded-4xl p-4 text-xl flex flex-col gap-6 me-5">
    <a href="#home" className="text-gray-700 hover:text-blue-500"><AiOutlineHome /></a>
    <a href="#about" className="text-gray-700 hover:text-blue-500"><IoPersonOutline /></a>
    <a href="#projects" className="text-gray-700 hover:text-blue-500"><MdOutlineWebStories /></a>
    <a href="#contact" className="text-gray-700 hover:text-blue-500"><BsTelephone /></a>
  </div>
  
  );
}

export default Navbar;
