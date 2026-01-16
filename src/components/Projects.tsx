import { Code2, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Enhanced Facial Expression & Hand Gesture Recognition System',
      link: 'https://github.com/AkshathaaRk/Enhanced-Facial-Expressions-and-Hand-Gestures-Recognition-System',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'Scikit-learn', 'Multi-threading'],
      description: [
        'Developed a real-time system capable of identifying 13 facial expressions and 14 hand gestures',
        'Enhanced the system using a webcam',
        'Optimized performance through multi-threading and refined landmark processing',
        'Implemented confidence visualization and performance metrics for user feedback',
      ],
    },
    {
      title: 'SAHAAYAK – Multilingual AI Tutor',
      link: 'https://github.com/AkshathaaRk/Sahaayak--The-AI-Tutor',
      technologies: ['Python (Flask)', 'React', 'TypeScript', 'Gemini API', 'NLP', 'Redis'],
      description: [
        'Integrated PDF processing, YouTube summarization, and an MCP-based memory system for contextual responses',
        'Built a multilingual AI-based tutoring platform designed for Indian learners',
        'Built a responsive frontend with real-time chat and voice interaction',
        'Implemented a fallback mechanism that ensures the system can respond in all major Indian languages when primary processing fails or user input contains mixed languages',
      ],
    },
    {
      title: 'AI Image Super Resolution',
      link: 'https://github.com/AkshathaaRk/AI-Image-Super-Resolution',
      technologies: ['Python', 'Deep Learning', 'Computer Vision', 'TensorFlow'],
      description: [
        'Implemented deep learning models for enhancing image resolution',
        'Utilized advanced neural network architectures for super-resolution',
        'Achieved significant improvements in image quality and detail enhancement',
      ],
    },
    {
      title: 'UnifiedChainID',
      link: 'https://github.com/AkshathaaRk/UnifiedChainID',
      technologies: ['Blockchain', 'Authentication', 'API Development'],
      description: [
        'Developed a unified identity framework for cross-application verification',
        'Implemented secure authentication and data linking mechanisms',
        'Designed for workflow interoperability using modern backend approaches',
      ],
    },
    {
      title: 'SysAura',
      link: 'https://github.com/AkshathaaRk/SysAura',
      technologies: ['System Monitoring', 'Python', 'Performance Analytics'],
      description: [
        'Built a comprehensive system monitoring and analytics tool',
        'Implemented real-time performance tracking and visualization',
        'Designed for efficient resource management and optimization',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 sm:p-8 hover:border-cyan-400 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl font-semibold text-cyan-400 hover:underline flex items-center gap-2">
                  {project.title}
                  <ExternalLink size={20} className="inline" />
                </a>
                <Code2 className="text-gray-400 flex-shrink-0 ml-4" size={24} />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
