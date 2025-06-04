import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { projectsData, ProjectType } from '../data/projects';
import toast from 'react-hot-toast';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState<ProjectType[]>(projectsData);
  const [editingProject, setEditingProject] = useState<ProjectType | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState<Partial<ProjectType>>({
    id: '',
    title: '',
    shortDescription: '',
    fullDescription: '',
    image: '',
    tags: [],
    techStack: [],
    github: '',
    demo: '',
    youtube: '',
    blog: '',
    isPublic: true,
    notes: '',
  });

  // All possible tags for selection
  const allTags: ProjectType['tags'][0][] = [
    'ML', 'DL', 'LLM', 'GenAI', 'LangChain', 'Hackathon', 'NLP', 'Featured', 'Web App'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagChange = (tag: ProjectType['tags'][0]) => {
    const updatedTags = formData.tags || [];
    if (updatedTags.includes(tag)) {
      setFormData({ 
        ...formData, 
        tags: updatedTags.filter(t => t !== tag) 
      });
    } else {
      setFormData({ 
        ...formData, 
        tags: [...updatedTags, tag] 
      });
    }
  };

  const handleTechStackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const techArray = e.target.value
      .split(',')
      .map(item => item.trim())
      .filter(item => item !== '');
    
    setFormData({ ...formData, techStack: techArray });
  };

  const handleVisibilityToggle = (id: string) => {
    setProjects(projects.map(project => 
      project.id === id 
        ? { ...project, isPublic: !project.isPublic } 
        : project
    ));
    toast.success('Project visibility updated');
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== id));
      toast.success('Project deleted');
    }
  };

  const handleEditClick = (project: ProjectType) => {
    setEditingProject(project);
    setFormData({
      ...project,
      // Convert arrays to comma-separated strings for the form
      techStack: project.techStack,
    });
    setShowAddForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.title || !formData.shortDescription || !formData.image) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!formData.id) {
      // Creating a new project
      const newId = formData.title.toLowerCase().replace(/\s+/g, '-');
      const newProject: ProjectType = {
        id: newId,
        title: formData.title || '',
        shortDescription: formData.shortDescription || '',
        fullDescription: formData.fullDescription || '',
        image: formData.image || '',
        tags: formData.tags || [],
        techStack: formData.techStack || [],
        github: formData.github,
        demo: formData.demo,
        youtube: formData.youtube,
        blog: formData.blog,
        isPublic: formData.isPublic || false,
        notes: formData.notes,
      };
      
      setProjects([...projects, newProject]);
      toast.success('Project added successfully');
    } else {
      // Updating an existing project
      setProjects(projects.map(project => 
        project.id === formData.id ? { ...project, ...formData } as ProjectType : project
      ));
      toast.success('Project updated successfully');
    }
    
    // Reset form and state
    setFormData({
      id: '',
      title: '',
      shortDescription: '',
      fullDescription: '',
      image: '',
      tags: [],
      techStack: [],
      github: '',
      demo: '',
      youtube: '',
      blog: '',
      isPublic: true,
      notes: '',
    });
    setShowAddForm(false);
    setEditingProject(null);
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
    <div className="min-h-screen pt-24 pb-12 bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
                Project Dashboard
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                Welcome back, {user?.username || 'Admin'}. Manage your projects here.
              </p>
            </div>
            <button
              onClick={() => {
                setShowAddForm(!showAddForm);
                if (!showAddForm) {
                  setEditingProject(null);
                  setFormData({
                    id: '',
                    title: '',
                    shortDescription: '',
                    fullDescription: '',
                    image: '',
                    tags: [],
                    techStack: [],
                    github: '',
                    demo: '',
                    youtube: '',
                    blog: '',
                    isPublic: true,
                    notes: '',
                  });
                }
              }}
              className="btn btn-primary"
            >
              <Plus size={18} className="mr-2" />
              {showAddForm ? 'Cancel' : 'Add Project'}
            </button>
          </div>
        </motion.div>

        {/* Add/Edit Project Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 mb-8"
          >
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title || ''}
                    onChange={handleInputChange}
                    required
                    className="input"
                    placeholder="Project Title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Image URL *
                  </label>
                  <input
                    type="text"
                    name="image"
                    value={formData.image || ''}
                    onChange={handleInputChange}
                    required
                    className="input"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Short Description *
                </label>
                <input
                  type="text"
                  name="shortDescription"
                  value={formData.shortDescription || ''}
                  onChange={handleInputChange}
                  required
                  className="input"
                  placeholder="Brief project description (max 100 chars)"
                  maxLength={100}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Full Description
                </label>
                <textarea
                  name="fullDescription"
                  value={formData.fullDescription || ''}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="Detailed project description"
                  rows={4}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    GitHub URL
                  </label>
                  <input
                    type="text"
                    name="github"
                    value={formData.github || ''}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="https://github.com/username/repo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Demo URL
                  </label>
                  <input
                    type="text"
                    name="demo"
                    value={formData.demo || ''}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="https://demo.example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    YouTube URL
                  </label>
                  <input
                    type="text"
                    name="youtube"
                    value={formData.youtube || ''}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="https://youtube.com/watch?v=abc123"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Blog URL
                  </label>
                  <input
                    type="text"
                    name="blog"
                    value={formData.blog || ''}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="https://blog.example.com/post"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagChange(tag)}
                      className={`skill-tag ${
                        formData.tags?.includes(tag) ? 'active' : ''
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Tech Stack (comma-separated)
                </label>
                <textarea
                  name="techStack"
                  value={formData.techStack?.join(', ') || ''}
                  onChange={handleTechStackChange}
                  className="input"
                  placeholder="React, TypeScript, Tailwind CSS"
                  rows={2}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Private Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes || ''}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="Any notes for yourself (not visible to visitors)"
                  rows={2}
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isPublic"
                  name="isPublic"
                  checked={formData.isPublic || false}
                  onChange={(e) => setFormData({ ...formData, isPublic: e.target.checked })}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                />
                <label htmlFor="isPublic" className="ml-2 text-sm text-neutral-700 dark:text-neutral-300">
                  Make this project public
                </label>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingProject(null);
                  }}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  {editingProject ? 'Update Project' : 'Add Project'}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Projects Table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
              <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Project
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Tags
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Links
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700">
                {projects.map((project, index) => (
                  <motion.tr 
                    key={project.id}
                    variants={itemVariants}
                    className="hover:bg-neutral-50 dark:hover:bg-neutral-700/20 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-neutral-900 dark:text-white">
                            {project.title}
                          </div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
                            {project.shortDescription}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag} 
                            className="tag bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="tag bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`tag ${
                        project.isPublic 
                          ? 'bg-success-100 text-success-700 dark:bg-success-900/20 dark:text-success-500' 
                          : 'bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200'
                      }`}>
                        {project.isPublic ? 'Public' : 'Private'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                      <div className="flex space-x-2">
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
                          >
                            {/* <Github size={16} /> */}
                          </a>
                        )}
                        {project.demo && (
                          <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
                          >
                            <Eye size={16} />
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => handleVisibilityToggle(project.id)}
                          className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
                          aria-label={project.isPublic ? "Make private" : "Make public"}
                        >
                          {project.isPublic ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                        <button
                          onClick={() => handleEditClick(project)}
                          className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
                          aria-label="Edit project"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="text-neutral-600 hover:text-error-600 dark:text-neutral-400 dark:hover:text-error-500"
                          aria-label="Delete project"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;