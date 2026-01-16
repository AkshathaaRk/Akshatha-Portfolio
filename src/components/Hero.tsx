export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                AKSHATHA RK
              </h1>
              <p className="text-xl text-gray-400 mb-6">
                AI/ML enthusiast • <a href="https://www.linkedin.com/in/akshathark" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">LinkedIn</a> • <a href="https://github.com/AkshathaaRk" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub</a> • <a href="mailto:akshatharajshekar7975@gmail.com" className="text-cyan-400 hover:underline">Email</a>
              </p>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am <span className="text-cyan-400 font-mono">Akshatha RK</span>, an Artificial Intelligence & Machine Learning engineering student with a passion for <span className="text-cyan-400 font-mono">intelligent systems</span> at the intersection of AI research, product design, and purposeful innovation.
              </p>

              <p>
                I have a proven track record in <span className="text-cyan-400 font-mono">web development</span>, <span className="text-cyan-400 font-mono">machine learning</span>, and <span className="text-cyan-400 font-mono">technical leadership</span>, with projects ranging from GAN-based image generation to BERT-powered text classification.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              <div className="aspect-square bg-gray-700 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-6xl font-bold text-white">
                  AR
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-4 tracking-wider uppercase">Important Links</h3>
              <div className="space-y-2">
                <a href="#education" className="block text-cyan-400 hover:underline font-mono text-sm">Resume</a>
                <a href="https://www.linkedin.com/in/akshathark" target="_blank" rel="noopener noreferrer" className="block text-cyan-400 hover:underline font-mono text-sm">LinkedIn</a>
                <a href="https://github.com/AkshathaaRk" target="_blank" rel="noopener noreferrer" className="block text-cyan-400 hover:underline font-mono text-sm">GitHub Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
