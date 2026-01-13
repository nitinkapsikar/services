import { FaInfoCircle, FaShareAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#000814] border-t border-white/10 text-white">
      
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        
        {/* INFO */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
            <FaInfoCircle className="text-blue-500" />
            Info
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            Modern digital solutions for web, mobile, and backend development.
            Clean UI, fast performance, and scalable architecture.
          </p>
        </div>

        {/* HOW TO CONTACT */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
            <FaShareAlt className="text-blue-500" />
            Get in Touch
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            Interested in working together?  
            Let’s discuss your project directly on Fiverr.
          </p>

          <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Contact via Fiverr
          </button>
        </div>

        {/* TRUST */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Trusted Workflow
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            All communication and payments are securely handled through Fiverr
            to ensure a smooth and safe collaboration.
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-500 font-medium">
          DigitalAgency
        </span>{" "}
        — All rights reserved
         <p className="text-gray-500">
    Illustrations by Storyset
  </p>
      </div>

    </footer>
  );
}
