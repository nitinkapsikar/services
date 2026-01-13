const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          I build high-quality web, mobile, and backend solutions that help
          businesses grow and scale with confidence.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-14 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-lg">
            {/* Replace src with your image */}
            <img
              src="/profile.png"
              alt="Your Name"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Text */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          
          <h2 className="text-2xl font-pbold text-black">
                Purushottam Kapsikar BE(CSE)
          </h2>

          <p className="font-pregular">
            I’m a Full-Stack Developer with a strong foundation in web
            development, native Android applications, and backend API
            systems. I focus on building clean, scalable, and reliable
            digital products that solve real-world business problems.
          </p>

          <p>
            I hold a <strong>Bachelor of Engineering (B.E.) in Computer Science</strong>,
            which has given me a solid understanding of software
            architecture, data handling, and system design.
          </p>

          <p>
            My core skill set includes <strong>React, Tailwind CSS, Django,
            REST APIs</strong>, and <strong>native Android development using Kotlin</strong>.
            I always prioritize performance, security, and maintainability
            in every project I work on.
          </p>

          <p>
            I help startups and businesses by transforming ideas into
            production-ready applications — whether it’s a modern website,
            a mobile app, or a robust backend system.
          </p>

          <p>
            If you’re looking for a developer who values quality,
            clear communication, and long-term collaboration,
            let’s connect on Fiverr.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
