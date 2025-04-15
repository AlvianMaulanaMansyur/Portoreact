function Navbar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-white shadow-lg rounded p-4 flex flex-col gap-4 me-2">
    <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
    <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
    <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
    <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
  </div>
  
  );
}

export default Navbar;
