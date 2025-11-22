export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">Let's Work Together</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Looking to build an AI solution? Automate workflows? Deploy a chatbot or voice agent? Let's talk.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 lg:p-10 border border-gray-100">
          {/* Contact Options */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
            {/* Email */}
            <a
              href="mailto:msaadashraf9@gmail.com"
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 
                         border border-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-blue-600 text-white text-lg sm:text-xl md:text-2xl flex-shrink-0">
                ✉️
              </div>
              <div className="text-left min-w-0">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Email Me</h3>
                <p className="text-xs sm:text-sm text-gray-600 truncate">msaadashraf9@gmail.com</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923072288633"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-50 to-green-100 
                         border border-green-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-green-600 text-white text-lg sm:text-xl md:text-2xl flex-shrink-0">
                💬
              </div>
              <div className="text-left min-w-0">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">WhatsApp</h3>
                <p className="text-xs sm:text-sm text-gray-600">+92 307 2288633</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/saad-ashraf-7b1752220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 
                         border border-indigo-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-indigo-600 text-white text-lg sm:text-xl md:text-2xl flex-shrink-0">
                💼
              </div>
              <div className="text-left min-w-0">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">LinkedIn</h3>
                <p className="text-xs sm:text-sm text-gray-600">Connect professionally</p>
              </div>
            </a>

            {/* Schedule Call */}
            <a
              href="https://wa.me/923072288633"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 
                         border border-purple-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-purple-600 text-white text-lg sm:text-xl md:text-2xl flex-shrink-0">
                📞
              </div>
              <div className="text-left min-w-0">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Schedule a Call</h3>
                <p className="text-xs sm:text-sm text-gray-600">Book a free consultation</p>
              </div>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center pt-5 sm:pt-6 border-t border-gray-200">
            <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base px-2">
              Or send me a quick message and I'll get back to you within 24 hours
            </p>
            <a
              href="mailto:msaadashraf9@gmail.com"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                         text-white font-semibold rounded-xl shadow-lg hover:shadow-xl 
                         hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Send Email Now
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
          <p className="text-gray-500 text-xs sm:text-sm px-4">
            🚀 Available for freelance projects and consulting opportunities
          </p>
        </div>
      </div>
    </section>
  );
}
