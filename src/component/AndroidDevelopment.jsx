  import { motion } from "framer-motion";
export default function AndroidDevelopment(){
  

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
            src="/android-phone.svg"
            alt="Android App Development"
            className="w-72"
          />

          {/* Floating app screen (optional but premium) */}
          <motion.img
            src="/app-screen.svg"
            alt="App UI"
            className="absolute top-16 left-6 w-60 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>

      {/* RIGHT – CONTENT */}
{/* RIGHT – CONTENT */}
<div className="max-w-lg">
  {/* Accent label */}
  <div className="flex items-center gap-3 mb-4">
    <span className="h-[2px] w-8 bg-blue-600"></span>
    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
      Mobile Services
    </h3>
  </div>

  <h2 className="text-4xl font-bold mb-6 leading-tight">
    Android App Development
  </h2>

  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
    We build powerful, reliable, and scalable Android applications
    that are designed to perform smoothly and grow with your business.
  </p>

  <ul className="space-y-4 text-gray-700 mb-10">
    <li className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
      <span>Native Android apps built using Kotlin</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
      <span>Clean UI with smooth and responsive performance</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
      <span>API integration and secure backend connectivity</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
      <span>Complete Play Store deployment and support</span>
    </li>
  </ul>

  <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
    Get Android App
    <span className="text-lg">→</span>
  </button>
</div>

    </section>
  );
};



