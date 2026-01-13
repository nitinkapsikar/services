import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="bg-white text-gray-900 py-28">
      <div className="max-w-7xl mx-auto px-6 space-y-40">

        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Our Services
        </motion.h1>

        {/* ANDROID SECTION */}
        <motion.div
          id="android"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-14 items-center scroll-mt-32"
        >
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Android App Development
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We build robust, scalable, and high-performance Android
              applications tailored to real business needs. From idea
              validation to Play Store deployment, we handle the complete
              Android app development lifecycle.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Native Android apps using Kotlin</li>
              <li>✔ MVVM & Clean Architecture</li>
              <li>✔ Firebase, REST APIs & third-party integrations</li>
              <li>✔ Play Store launch & long-term support</li>
            </ul>
          </div>

          {/* IMAGE */}
          <img
            src="/android.svg"
            alt="Android App Development"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* WEB SECTION */}
        <motion.div
          id="web"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-14 items-center scroll-mt-32"
        >
          {/* IMAGE */}
          <img
            src="https://illustrations.popsy.co/white/web-design.svg"
            alt="Web Development"
            className="w-full max-w-md mx-auto"
          />

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Web Development
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We design and develop modern, responsive, and fast websites
              that help businesses establish a strong digital presence and
              convert visitors into customers.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✔ React-based modern frontend</li>
              <li>✔ Responsive UI with Tailwind CSS</li>
              <li>✔ Admin dashboards & CMS panels</li>
              <li>✔ SEO & performance optimization</li>
            </ul>
          </div>
        </motion.div>

        {/* API SECTION */}
        <motion.div
          id="api"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-14 items-center scroll-mt-32"
        >
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Backend & API Services
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our backend and API solutions are secure, scalable, and built
              to support both web and mobile applications with smooth data
              flow and reliable performance.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✔ REST API design & development</li>
              <li>✔ Authentication & authorization</li>
              <li>✔ Database design (MySQL / PostgreSQL)</li>
              <li>✔ Deployment & server configuration</li>
            </ul>
          </div>

          {/* IMAGE */}
          <img
            src="/api.svg"
            alt="API Development"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
