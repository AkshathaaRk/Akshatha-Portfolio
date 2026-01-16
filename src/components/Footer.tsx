import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#1C1C1D] border-t border-gray-800 py-4 px-4 sm:px-6 lg:px-8 z-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-6">
            <a href="mailto:akshatharajshekar7975@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors" title="Email">
              <Mail size={20} />
            </a>
            <a href="https://github.com/AkshathaaRk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/akshathark" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://read.cv/akshathark" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors" title="Read.cv">
              <ExternalLink size={20} />
            </a>
          </div>
          <p className="text-gray-500 text-xs text-center">
            Feel free to reach out for collaborations, research discussions, or just to connect!
          </p>
        </div>
      </div>
    </footer>
  );
}
