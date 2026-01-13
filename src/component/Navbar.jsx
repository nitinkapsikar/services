import { NavLink, useMatch } from "react-router-dom";

const Navbar = () => {
  const servicesMatch = useMatch("/services");

  return (
    <header className="sticky bg-[#000814] text-white top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold">
          Digital<span className="text-blue-600">Agency</span>
        </NavLink>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative group">

            {/* Services main link */}
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `transition ${
                  isActive || servicesMatch
                    ? "text-blue-600"
                    : "hover:text-blue-600"
                }`
              }
            >
              Services
            </NavLink>

            {/* Dropdown */}
            <div
              className="absolute left-0 top-10 w-56 bg-[#000814] border border-white/10 rounded-xl
                         opacity-0 invisible group-hover:opacity-100 group-hover:visible
                         transition-all duration-300"
            >
              <NavLink
                to="/services#android"
                className="block px-5 py-3 text-sm hover:bg-white/5 hover:text-blue-600"
              >
                Android Development
              </NavLink>

              <NavLink
                to="/services#web"
                className="block px-5 py-3 text-sm hover:bg-white/5 hover:text-blue-600"
              >
                Web Development
              </NavLink>

              <NavLink
                to="/services#api"
                className="block px-5 py-3 text-sm hover:bg-white/5 hover:text-blue-600"
              >
                API Services
              </NavLink>
            </div>
          </div>

          {/* Projects */}
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Projects
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            About
          </NavLink>

        </nav>

        {/* CTA */}
        <NavLink
          to="/contact"
          className="hidden md:block px-5 py-2 bg-[#155DFC] rounded-lg hover:bg-blue-700 transition"
        >
          Start Your Project

        </NavLink>

      </div>
    </header>
  );
};

export default Navbar;
