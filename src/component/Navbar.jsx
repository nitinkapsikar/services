import { NavLink, useMatch } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const servicesMatch = useMatch("/services");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky bg-[#000814] text-white top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold">
          Digital<span className="text-blue-600">Agency</span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-blue-600" : "hover:text-blue-600"
          }>
            Home
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative group">
            <NavLink
              to="/services"
              className={`transition ${
                servicesMatch ? "text-blue-600" : "hover:text-blue-600"
              }`}
            >
              Services
            </NavLink>

            <div className="absolute left-0 top-10 w-56 bg-[#000814] border border-white/10 rounded-xl
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                            transition-all duration-300">
              <NavLink to="/services#android" className="block px-5 py-3 hover:bg-white/5 hover:text-blue-600">
                Android Development
              </NavLink>
              <NavLink to="/services#web" className="block px-5 py-3 hover:bg-white/5 hover:text-blue-600">
                Web Development
              </NavLink>
              <NavLink to="/services#api" className="block px-5 py-3 hover:bg-white/5 hover:text-blue-600">
                API Services
              </NavLink>
            </div>
          </div>

          <NavLink to="/projects" className={({ isActive }) =>
            isActive ? "text-blue-600" : "hover:text-blue-600"
          }>
            Projects
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive ? "text-blue-600" : "hover:text-blue-600"
          }>
            About
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <NavLink
          to="/about"
          className="hidden md:block px-5 py-2 bg-[#155DFC] rounded-lg hover:bg-blue-700 transition"
        >
          Start Your Project
        </NavLink>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#000814] border-t border-white/10 px-6 py-6 space-y-4 text-sm">
          <NavLink onClick={() => setOpen(false)} to="/" className="block hover:text-blue-600">
            Home
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/services" className="block hover:text-blue-600">
            Services
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/projects" className="block hover:text-blue-600">
            Projects
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/about" className="block hover:text-blue-600">
            About
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className="block mt-4 text-center px-5 py-2 bg-[#155DFC] rounded-lg hover:bg-blue-700 transition"
          >
            Start Your Project
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
