export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: ["OpenAI GPT-4", "LangChain", "Vector Databases", "Pinecone", "ChromaDB", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering"]
    },
    {
      title: "Voice & Communication APIs",
      icon: "🎧",
      skills: ["Twilio Voice", "LiveKit", "Vonage", "WebRTC", "Speech-to-Text", "Text-to-Speech"]
    },
    {
      title: "Chatbot Platforms",
      icon: "💬",
      skills: ["Dialogflow", "Rasa", "WhatsApp Business API", "Telegram Bot API", "Microsoft Bot Framework", "Botpress"]
    },
    {
      title: "Automation & Integration",
      icon: "⚡",
      skills: ["Zapier", "Make (Integromat)", "n8n", "Airtable", "Google Apps Script", "Workflow Automation"]
    },
    {
      title: "Programming & Frameworks",
      icon: "💻",
      skills: ["Python", "JavaScript", "Node.js", "React", "TypeScript", "FastAPI", "Express.js"]
    },
    {
      title: "Databases & Backend",
      icon: "🗄️",
      skills: ["MongoDB", "Firebase", "PostgreSQL", "Redis", "Supabase", "REST APIs", "GraphQL"]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A comprehensive toolkit for building intelligent automation solutions, chatbots, and AI-powered systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 px-4 sm:px-5 md:px-6 py-3 sm:py-4 -mx-4 sm:-mx-5 md:-mx-6 -mt-4 sm:-mt-5 md:-mt-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-t-2xl">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-white shadow-sm flex-shrink-0">
                  <span className="text-lg sm:text-xl md:text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 
                               text-blue-700 rounded-lg text-xs sm:text-sm font-medium 
                               border border-blue-200 hover:scale-105 transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
