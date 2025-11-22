import animation from "../assets/ai-animation.gif";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 
                 bg-gradient-to-br from-[#eaf1ff] via-[#f5faff] to-[#e6fff0]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-center w-full">

        {/* LEFT SIDE — TEXT BLOCK */}
        <div className="animate-fadeIn text-center md:text-left">
          
          {/* TOP SMALL LABEL */}
          <p className="text-[10px] sm:text-xs font-semibold text-blue-700 tracking-wider mb-3 sm:mb-4">
            AI AUTOMATION ENGINEER
          </p>

          {/* MAIN HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Hi, I'm <span className="text-blue-600">Saad</span><br />
            AI Engineer &<br />
            Automation Specialist
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 sm:mt-6 text-gray-600 max-w-md mx-auto md:mx-0 text-sm sm:text-base md:text-lg">
            I build intelligent automation systems, chatbots, and voice agents
            that help businesses save time, eliminate manual work, and scale
            operations.
          </p>

          {/* SOCIAL ICONS — UPDATED SPACING */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10 justify-center md:justify-start">
            <a href="https://wa.me/923072288633" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
                className="w-7 sm:w-8 md:w-9" 
                alt="WhatsApp"
              />
            </a>

            <a href="mailto:msaadashraf9@gmail.com" className="social-icon">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
                className="w-7 sm:w-8 md:w-9" 
                alt="Email"
              />
            </a>

            <a href="#" className="social-icon">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" 
                className="w-7 sm:w-8 md:w-9" 
                alt="Instagram"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/saad-ashraf-7b1752220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png" 
                className="w-7 sm:w-8 md:w-9" 
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — ANIMATION */}
        <div className="flex justify-center items-center animate-fadeIn mt-8 md:mt-0">
          <img
            src={animation}
            alt="AI Animation"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[540px] lg:h-[540px] xl:w-[638px] xl:h-[638px] object-contain animate-float drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
