import { useEffect, useRef, useState } from "react";

export default function Services() {
  /* ---------------- COUNTERS WITH SCROLL TRIGGER ---------------- */
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStartCount(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Smooth Counter
  function Counter({ target, duration }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCount) return;
      let start = 0;
      const increment = target / (duration / 16);

      const animate = () => {
        start += increment;
        if (start >= target) {
          setCount(target);
        } else {
          setCount(Math.floor(start));
          requestAnimationFrame(animate);
        }
      };

      animate();
    }, [startCount]);

    return count;
  }

  /* ---------------- SERVICES LIST (UPDATED) ---------------- */
  const services = [
    {
      title: "AI Chatbots",
      desc: "Deploy intelligent chatbots for customer support, lead qualification, and automated replies.",
      icon: "🤖",
    },
    {
      title: "Voice Agents",
      desc: "AI agents for outbound calling, appointment scheduling, reminders, and phone automation.",
      icon: "🎤",
    },
    {
      title: "Workflow Automation",
      desc: "Eliminate manual work using AI-driven automations that save hours daily.",
      icon: "⚡",
    },
    {
      title: "AI Data Processing",
      desc: "Analyze, extract, filter, and structure business data using AI pipelines.",
      icon: "📊",
    },
    {
      title: "SaaS Product Development",
      desc: "Build scalable SaaS platforms with modern tech stacks and seamless user experience.",
      icon: "🧩",
    },
    {
      title: "IT Support & Systems Setup",
      desc: "Professional IT assistance including servers, networking, system configuration, and deployments.",
      icon: "🛠️",
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-10 md:mb-12 lg:mb-14 text-center text-gray-900">
          Services
        </h2>

        {/* ---------------- COUNTERS ---------------- */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-20 mb-10 sm:mb-12 md:mb-14 lg:mb-16 text-center">
          <div className="min-w-[100px] sm:min-w-[120px]">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
              <Counter target={25} duration={1200} />+
            </h3>
            <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">AI Projects</p>
          </div>

          <div className="min-w-[100px] sm:min-w-[120px]">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
              <Counter target={6} duration={1200} />+
            </h3>
            <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">months experience in industry</p>
          </div>

          <div className="min-w-[100px] sm:min-w-[120px]">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
              <Counter target={50} duration={1200} />+
            </h3>
            <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">Clients Worldwide</p>
          </div>
        </div>

        {/* ---------------- SERVICE CARDS ---------------- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 md:p-8 border rounded-2xl shadow-sm bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">{s.icon}</div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-900">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
