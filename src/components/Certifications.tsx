import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Bharatiya Antariksh Hackathon 2025 - ISRO',
      link: 'https://certificate.hack2skill.com/user/isrobah25/2025H2S06BAH25-P05442',
      description: 'Worked on the problem statement: "Generating High-Resolution Lunar Digital Elevation Models (DEMs)", involving lunar imagery processing and elevation reconstruction techniques.',
    },
    {
      title: 'NMIT HACKS 2025 - NMIT',
      link: 'https://certificate.givemycertificate.com/c/875735bc-dbc2-491d-86a9-e9b5da8f4a0c',
      description: 'Worked on a Unified Chain ID framework designed to create a single verifiable identity across applications. Explored data linking, secure authentication, and workflow interoperability using modern backend/API approaches.',
    },
    {
      title: 'Python for Absolute Beginners – EC-Council',
      link: 'https://codered.eccouncil.org/certificate/fd6c2403-9701-4c4e-85c0-46717f10015b?logged=true',
      description: 'Acquired foundational proficiency in Python through hands-on programming exercises, learning essential constructs like loops, functions, and modular code design. Enhanced the ability to translate problems into working programs, forming a strong base for AI/ML development.',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Certifications & Hackathons</h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-cyan-400 transition-colors"
            >
              <div className="flex items-start gap-4">
                <Award className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-cyan-400 mb-2 hover:underline inline-flex items-center gap-2">
                    {cert.title}
                    <ExternalLink size={18} className="inline" />
                  </a>
                  <p className="text-gray-300 leading-relaxed mt-2">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
