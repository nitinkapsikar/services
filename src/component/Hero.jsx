import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
         <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
  We build complete <br />
  <span className="text-blue-600">
    Full-Stack Web & Mobile Solutions
  </span>
</h1>

<p className="text-gray-600 text-lg mb-8">
  From idea to deployment — we design, develop, and deliver
  scalable websites, mobile apps, and APIs that help businesses
  grow faster.
</p>


          <div className="flex gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Get Started
            </button>

            <button className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition">
              View Services
            </button>
          </div>
        </div>

        {/* RIGHT SIDE – ANIMATED SVG */}
        <div className="relative hidden md:block h-80">
        <HeroBackground/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
