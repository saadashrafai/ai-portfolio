import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  /* === NAVBAR SHRINK ON SCROLL === */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* === ACTIVE SECTION HIGHLIGHT === */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  /* NAV ITEMS */
  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 border-b border-gray-200/70 
        backdrop-blur-xl bg-white/60 transition-all duration-300
        ${isScrolled ? "py-2 sm:py-3 shadow-md" : "py-3 sm:py-5 shadow-sm"}
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* === LOGO + NAME === */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src="/profile.jpg"
            alt="Saad"
            className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full object-cover border shadow-sm"
          />
          <h1 className="font-semibold text-xs sm:text-sm md:text-[15px] lg:text-[16px] tracking-wide text-gray-800">
            <span className="hidden sm:inline">Saad • AI Automation Engineer</span>
            <span className="sm:hidden">Saad • AI Engineer</span>
          </h1>
        </div>

        {/* === MOBILE MENU BUTTON === */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-blue-600"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* === DESKTOP MENU ITEMS === */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-sm lg:text-[16px] font-medium">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative cursor-pointer group text-gray-700 hover:text-blue-600 transition"
            >
              <a href={`#${item.id}`} className="transition-colors duration-200">
                {item.label}
              </a>

              {/* ACTIVE UNDERLINE */}
              <span
                className={`
                  absolute left-0 bottom-[-4px] h-[2px] bg-blue-600 transition-all duration-300
                  ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
            </li>
          ))}
        </ul>

        {/* === MOBILE MENU === */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b shadow-lg">
            <ul className="flex flex-col py-4 px-6 space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </nav>
    </header>
  );
}
