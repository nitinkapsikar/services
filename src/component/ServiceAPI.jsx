import { motion } from "framer-motion";

const ServiceAPI = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
      
      {/* LEFT – ANIMATION */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/api-server.svg"
            alt="API Development"
            className="w-80"
          />

          {/* Floating response card */}
      
        </motion.div>
      </div>

      {/* RIGHT – CONTENT */}
  {/* RIGHT – CONTENT */}
<div className="max-w-lg">
  {/* Accent label */}
  <div className="inline-flex items-center gap-2 mb-4">
    <span className="h-[2px] w-8 bg-blue-600"></span>
    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
      Backend Services
    </h3>
  </div>

  {/* Title */}
  <h2 className="text-4xl font-bold mb-6 leading-tight">
    API Development
  </h2>

  {/* Description */}
  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
    We design and build secure, scalable, and high-performance APIs
    that power modern web and mobile applications.
  </p>

  {/* Features */}
  <ul className="space-y-4 mb-10">
    {[
      "RESTful APIs with Django & DRF",
      "Authentication & authorization (JWT)",
      "Database design & optimization",
      "Third-party API integration",
    ].map((item) => (
      <li key={item} className="flex items-start gap-3 text-gray-700">
        <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
        <span>{item}</span>
      </li>
    ))}
  </ul>

  {/* CTA */}
  <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
    Build My API
    <span className="text-lg">→</span>
  </button>
</div>

    </section>
  );
};

export default ServiceAPI;
