import aboutAnimation from "../assets/about-animation.gif";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

        {/* LEFT SIDE – PROFESSIONAL BACKGROUND */}
        <div className="animate-fadeIn">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-5 md:mb-6">
            Professional Background
          </h2>

          {/* Intro Paragraphs */}
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-[17px] mb-4 sm:mb-5">
            I’m Saad, an AI Engineer specializing in designing and deploying 
            practical automation systems for real businesses—ranging from 
            chatbots and voice agents to advanced AI workflows integrated 
            with existing tools and operations.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-[17px] mb-6 sm:mb-8 md:mb-10">
            My work blends software engineering with applied AI, helping 
            businesses understand their bottlenecks, design the right automation, 
            and implement reliable, production-ready solutions at scale.
          </p>

          {/* CURRENT ROLE */}
          <div className="mb-6 sm:mb-8 md:mb-10 border-l-4 border-blue-600 pl-3 sm:pl-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
              Current Role
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-[16px]">
              Founder at{" "}
              <span className="font-semibold text-blue-600">
                Neurcoex AI Agency
              </span>
            </p>
          </div>

          {/* EDUCATION */}
          <div className="mb-6 sm:mb-8 md:mb-10 border-l-4 border-blue-600 pl-3 sm:pl-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
              Education
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-[16px]">
              BS Computer Science — Institute of Space Technology
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="border-l-4 border-blue-600 pl-3 sm:pl-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Experience in the Field
            </h3>

            <ul className="space-y-2 text-gray-800 text-sm sm:text-base md:text-[16px]">
              <li>
                <span className="font-semibold">PCRWR</span> — IT Assistant
              </li>
              <li>
                <span className="font-semibold">CareCloud</span> — AI Engineer (Present)
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE - ANIMATION */}
        <div className="flex justify-center items-center animate-fadeIn mt-8 md:mt-0">
          <img
            src={aboutAnimation}
            alt="AI Engineer Animation"
            className="w-72 sm:w-80 md:w-[460px] lg:w-[540px] xl:w-[600px] object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
