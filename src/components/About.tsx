export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            A dedicated and enthusiastic learner fascinated by AI/ML technologies, actively exploring how intelligent systems work through building hands-on projects. I started my journey by developing real-time computer vision systems using Python, OpenCV, and MediaPipe, and later expanded into full-stack AI development through projects like Sahaayak – a multilingual AI tutor, built with Flask, React, LLM APIs, and Redis.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            I consistently take part in hackathons, experiment with new tools, and enjoy applying machine learning, NLP, and deep learning techniques to create useful, real-world solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
