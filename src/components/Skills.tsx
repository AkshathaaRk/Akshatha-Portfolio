export default function Skills() {
  const skillCategories = [
    {
      category: 'AI/ML',
      skills: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Natural Language Processing (NLP)', 'Prompt Engineering', 'LLM', 'RAG'],
    },
    {
      category: 'Programming',
      skills: ['Python', 'Java', 'C (Basics)'],
    },
    {
      category: 'Frameworks',
      skills: ['TensorFlow', 'Scikit-learn', 'Keras', 'OpenAI GPT', 'Data visualization (Matplotlib, Seaborn)', 'FastAPI', 'Streamlit', 'LangChain'],
    },
    {
      category: 'Tools',
      skills: ['VSCode', 'Virtual Machine (VM)', 'Jupyter Notebook'],
    },
    {
      category: 'Other',
      skills: ['Cybersecurity', 'Reinforcement Learning', 'Presentation', 'Research & Documentation'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-cyan-400 transition-colors">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 text-sm font-mono flex items-start"
                  >
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>{skill}</span>
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
