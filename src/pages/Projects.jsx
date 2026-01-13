const Projects = () => {
  const projects = [
    {
      title: "Business Website",
      desc: "Modern business website with responsive UI and clean design.",
      tech: "React, Tailwind, Django",
    },
    {
      title: "Android Application",
      desc: "Native Android app with smooth UI and API integration.",
      tech: "Kotlin, REST API",
    },
    {
      title: "Backend API System",
      desc: "Secure REST API with authentication and database integration.",
      tech: "Django, DRF, MySQL",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 text-lg">
          A selection of projects demonstrating real-world development experience.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-xl p-8 bg-white hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {project.desc}
            </p>

            <p className="text-sm text-gray-500 mb-6">
              <strong>Tech:</strong> {project.tech}
            </p>

            <span className="text-blue-600 font-medium">
              View Details →
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
