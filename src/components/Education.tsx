import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Education</h2>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 sm:p-8 hover:border-cyan-400 transition-colors">
          <div className="flex items-start gap-4">
            <GraduationCap className="text-cyan-400 flex-shrink-0 mt-1" size={32} />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Bachelor of Computer Applications</h3>
                  <p className="text-gray-300 text-lg mb-2">Community Institute of Commerce and Management Studies, Bangalore</p>
                  <p className="text-gray-400 mb-2">Majors: Computer Science - Artificial Intelligence and Machine Learning</p>
                </div>
                <span className="text-gray-400 text-sm sm:text-base whitespace-nowrap">2023 - Present</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-cyan-400/10 border border-cyan-400 text-cyan-400 rounded-lg font-semibold">
                  CGPA: 8.71
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
