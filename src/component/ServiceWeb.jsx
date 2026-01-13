import { motion } from "framer-motion";

const ServiceWeb = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
      
      {/* LEFT – CONTENT */}
    {/* LEFT – CONTENT */}
<div className="max-w-lg">
  {/* Accent label */}
  <div className="flex items-center gap-3 mb-4">
    <span className="h-[2px] w-8 bg-blue-600"></span>
    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
      Web Services
    </h3>
  </div>

  <h2 className="text-4xl font-bold mb-6 leading-tight">
    Web Development
  </h2>

  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
    We craft modern, high-performance websites that are fast, secure,
    and designed to convert visitors into real customers.
  </p>

  <ul className="space-y-4 text-gray-700 mb-10">
    <li className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
      <span>Modern React-based frontends with clean architecture</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
      <span>Secure, scalable backend APIs for long-term growth</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
      <span>SEO-friendly structure with performance optimization</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
      <span>Fully responsive design across all devices</span>
    </li>
  </ul>

  <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
    Get Website
    <span className="text-lg">→</span>
  </button>
</div>

      {/* RIGHT – ANIMATION */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Laptop / dashboard image */}
          <img
            src="/web-dashboard.svg"
            alt="Web Development"
            className="w-80"
          />

          {/* Floating UI card */}
          <motion.img
            src="/web-ui.svg"
            alt="Website UI"
            className="absolute top-12 right-6 w-64 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceWeb;
