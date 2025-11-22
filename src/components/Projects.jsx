// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "Healthcare Voice Agent",
      subtitle: "Automated appointment & refill assistant for clinics",
      description:
        "AI voice agent that handles patient calls, schedules appointments, manages reminders, and processes prescription refill requests over the phone.",
      icon: "🎧",
      tech: ["LiveKit", "Twilio", "Node.js", "OpenAI"],
      link: "#",
    },
    {
      title: "Real Estate Lead Qualification Bot",
      subtitle: "Qualifies property leads before they reach sales",
      description:
        "Chatbot that collects buyer details, filters serious leads based on budget and requirements, and automatically syncs them into the CRM pipeline.",
      icon: "🏠",
      tech: ["WhatsApp API", "Rasa", "Python", "Zapier"],
      link: "#",
    },
    {
      title: "E-commerce Support Chatbot",
      subtitle: "Automates 24/7 customer support for online stores",
      description:
        "Bot that answers product questions, tracks orders, handles refund queries, and routes complex issues to human support with full context.",
      icon: "🛒",
      tech: ["Dialogflow", "Firebase", "React"],
      link: "#",
    },
    {
      title: "AI Data Extraction Pipeline",
      subtitle: "Turns unstructured documents into usable data",
      description:
        "Pipeline that reads PDFs and reports, extracts key fields with AI, validates them, and exports structured data into dashboards and reports.",
      icon: "📄",
      tech: ["Python", "LangChain", "OpenAI", "Pandas"],
      link: "#",
    },
    {
      title: "Rental Car Booking Voice Agent",
      subtitle: "Automates car rental appointments through conversational AI",
      description:
        "A voice assistant used by car rental companies to take booking details, verify availability, schedule appointments, and send confirmations—all without human involvement.",
      icon: "🚗",
      tech: ["Twilio Voice", "LiveKit", "Node.js", "OpenAI"],
      link: "#",
    },
    {
      title: "Business Workflow Automation",
      subtitle: "End-to-end automation for repetitive operational tasks",
      description:
        "A custom automation pipeline that handles data entry, document processing, email updates, and scheduled tasks using AI-driven logic and integrations with business tools.",
      icon: "🏢",
      tech: ["Python", "Zapier", "OpenAI", "APIs"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            Projects
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Here are a few real automation projects I've worked on.
            Contact me if you'd like to explore live demos or more of my project work.
          </p>
        </div>

        {/* PROJECT GRID — 6 PROJECTS (3 per row) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm 
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                         flex flex-col overflow-hidden"
            >
              {/* Top banner with icon */}
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-50 to-green-50">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-white shadow-sm flex-shrink-0">
                  <span className="text-lg sm:text-xl md:text-2xl">{project.icon}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 truncate">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">{project.subtitle}</p>
                </div>
              </div>

              {/* Body */}
              <div className="px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 pb-4 sm:pb-5 flex-1 flex flex-col">
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <p className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Built Using
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs 
                                 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-3 sm:mt-4">
                  <a href={project.link} className="text-blue-600 text-xs sm:text-sm font-medium">
                    View details ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
