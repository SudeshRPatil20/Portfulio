import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Youtube, Info } from 'lucide-react';
import { projectsData, ProjectType, SkillType } from '../data/projects';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<SkillType | 'All'>('All');
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projectsData);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillFilters: (SkillType | 'All')[] = [
    'All', 'ML', 'DL', 'LLM', 'GenAI', 'LangChain', 'Hackathon', 'NLP'
  ];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => 
        project.tags.includes(activeFilter)
      );
      setFilteredProjects(filtered);
    }
    
    // Reset expanded project when filter changes
    setExpandedProject(null);
  }, [activeFilter]);

  const toggleProjectDetails = (projectId: string) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  // Animation variants
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

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300">
            Browse through my portfolio of projects. Use the filters below to see projects by category.
          </p>
        </motion.div>

        {/* Skill Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillFilters.map((skill) => (
            <motion.button
              key={skill}
              variants={itemVariants}
              className={`skill-tag ${activeFilter === skill ? 'active' : ''}`}
              onClick={() => setActiveFilter(skill)}
            >
              {skill}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="card project-card"
              >
                {/* Project Image */}
                <div className="h-48 bg-neutral-200 dark:bg-neutral-700 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  
                  {/* Featured Badge */}
                  {project.tags.includes('Featured') && (
                    <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="tag bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-600 dark:text-neutral-300 line-clamp-3 mb-4">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs py-1 px-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs py-1 px-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
                          aria-label="GitHub Repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.youtube && (
                        <a
                          href={project.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
                          aria-label="YouTube Demo"
                        >
                          <Youtube size={18} />
                        </a>
                      )}
                    </div>
                    
                    <button
                      onClick={() => toggleProjectDetails(project.id)}
                      className="flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      <Info size={16} className="mr-1" />
                      {expandedProject === project.id ? 'Less Info' : 'More Info'}
                    </button>
                  </div>
                  
                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700"
                      >
                        <h4 className="font-medium mb-2 text-neutral-900 dark:text-white">Full Description:</h4>
                        <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                          {project.fullDescription}
                        </p>
                        
                        <h4 className="font-medium mb-2 text-neutral-900 dark:text-white">Complete Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="text-xs py-1 px-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <h4 className="font-medium mb-2 text-neutral-900 dark:text-white">All Tags:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="tag bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              No projects found with the selected filter. Try another category!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;