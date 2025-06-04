// Your existing imports
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Briefcase, Code, FileText } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'LangChain', level: 85 },
    { name: 'SQL', level: 75 },
    { name: 'Flask', level: 70 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Deep Learning', level: 75 },
    { name: 'TensorFlow', level: 70 },
    { name: 'Pandas', level: 85 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const certifications = [
    {
      title: 'NPTEL Machine Learning (2024)',
      url: 'https://example.com/nptel-certificate',
    },
    {
      title: 'IIT-B Python (2023)',
      url: 'https://example.com/iitb-python',
    },
    {
      title: 'Altair – Machine Learning Professional (2023)',
      url: 'https://example.com/altair-ml',
    },
    {
      title: 'AWS – Cloud Practitioner (2024)',
      url: 'https://example.com/aws-cloud',
    },
    {
      title: 'BlockBash 2023',
      url: 'https://example.com/blockbash',
    },
  ];

  const publications = [
    {
      title: 'A Survey of AI Music Generation Tools and Models',
      url: 'https://example.com/music-paper',
    },
    {
      title: 'Artificial Intelligence as a Service (AI-aaS) on Software-Defined Infrastructure',
      url: 'https://example.com/ai-aas-paper',
    },
  ];

  // New hackathons array with PDF certificate links
  const hackathons = [
    {
      title: 'LevelSupermind Hackathon',
      sponsors: 'AWS, Langflow, Findcoder',
      project: 'SoulBuddy - AI-Powered Spiritual Guide',
      certificateUrl: '/certificates/levelsupmind_soulbuddy.pdf',
    },
    {
      title: 'Mumbai Hacks',
      sponsors: 'Meta, Nvidia, Atlas, Quantiphi',
      project: 'Plant Disease Detection',
      certificateUrl: '/certificates/mumbaihacks_plantdisease.pdf',
    },
    {
      title: 'BlockBash 2023',
      sponsors: '',
      project: 'Decentralized Donation and Aid Distribution System (Ranked 7th)',
      certificateUrl: '/certificates/blockbash2023_decentralized.pdf',
    },
    {
      title: 'Hack2Skill Tech Champ',
      sponsors: 'H2S',
      project: 'Rag Chatbot with GPT',
      certificateUrl: '/certificates/hack2skill_rag_chatbot.pdf',
    },
    {
      title: 'Hack the Future with GenAI',
      sponsors: 'Accenture',
      project: 'Agentic AI Resume Generation - JOBMATCH AI',
      certificateUrl: '/certificates/hackthefuture_jobmatch.pdf',
      extraNote: 'Code is private; see YouTube link',
      ytLink: 'https://youtube.com/your_youtube_link_here',
    },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-800/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300">
            Get to know my background, skills, and what drives me as an AI/ML developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            {/* Education */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Education</h3>
              </div>
              <div className="pl-4 border-l-2 border-primary-200 dark:border-primary-800">
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-neutral-900 dark:text-white">B.E. in AI & ML</h4>
                  <p className="text-neutral-700 dark:text-neutral-300">PES Modern College of Engineering</p>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">2021 - 2025</span>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">CGPA: 7.98</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Experience</h3>
              </div>
              <div className="pl-4 border-l-2 border-primary-200 dark:border-primary-800">
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Python Intern</h4>
                  <p className="text-neutral-700 dark:text-neutral-300">CodeSoft</p>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">2024</span>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">Remote</span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    Learned core Python concepts including functions, data structures, object-oriented programming,
                    and file handling. Strengthened logic, debugging, and version control understanding with practical
                    tasks. Built small-scale real-world applications using modular Python scripts.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Data Science Master Virtual Internship</h4>
                  <p className="text-neutral-700 dark:text-neutral-300">Altair (AICTE Approved)</p>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">2024</span>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">Remote</span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    Performed hands-on projects using machine learning and data science techniques like regression,
                    classification, clustering, and recommendation systems. Applied data preprocessing, feature engineering, and
                    model evaluation techniques using Python (Pandas, NumPy, Scikit-learn). Gained software development
                    workflow experience.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Certifications</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15, duration: 0.4 }}
                    className="block p-5 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-md bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">{cert.title}</h4>
                    <p className="text-sm text-neutral-500 mt-1">View Certificate ↗</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Hackathons Section */}
<motion.div variants={itemVariants} className="mb-10">
  <div className="flex items-center mb-6">
    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
      <Award size={24} />
    </div>
    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Hackathons</h3>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
    {hackathons.map((hack, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.15, duration: 0.4 }}
        className="p-5 border border-neutral-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-900 shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">{hack.title}</h4>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          <strong>Sponsors:</strong> {hack.sponsors || 'N/A'}
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
          <strong>Project:</strong> {hack.project}
        </p>
        <div className="mt-3 flex items-center space-x-4">
          <a
            href={hack.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline text-sm"
          >
            View Certificate ↗
          </a>
          {hack.ytLink && (
            <a
              href={hack.ytLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 dark:text-yellow-400 font-medium hover:underline text-sm"
              title="YouTube Link"
            >
              YouTube Demo ↗
            </a>
          )}
        </div>
        {hack.extraNote && (
          <p className="text-xs italic text-neutral-500 dark:text-neutral-400 mt-1">{hack.extraNote}</p>
        )}
      </motion.div>
    ))}
  </div>
</motion.div>

            {/* Publications */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Publications</h3>
              </div>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <motion.a
                    key={index}
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary-600 dark:text-primary-400 hover:underline text-base"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    • {pub.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Interests */}
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                  <Code size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Technical Skills</h3>
              </div>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : { width: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-neutral-800 dark:text-neutral-200">{skill.name}</span>
                      <span className="text-neutral-500 dark:text-neutral-400">{skill.level}%</span>
                    </div>
                    <div className="skill-progress-bar">
                      <motion.div
                        className="skill-progress-value"
                        initial={{ width: '0%' }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">What I Love To Do</h3>
              <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Building real-world tools with AI/ML technologies</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Collaborating on innovative AI projects</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Exploring LLMs and natural language processing</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Solving complex problems through code</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Participating in hackathons and coding competitions</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
