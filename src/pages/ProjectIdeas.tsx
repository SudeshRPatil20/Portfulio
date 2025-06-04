import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, CheckCircle, Clock, AlertCircle, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'Planned' | 'In Progress' | 'Blocked' | 'Completed';
  createdAt: string;
}

const ProjectIdeas: React.FC = () => {
  // Sample project ideas
  const initialIdeas: ProjectIdea[] = [
    {
      id: '1',
      title: 'Personalized AI Study Assistant',
      description: 'An AI-powered app that creates personalized study plans based on learning style, goals, and available time. Incorporates spaced repetition and active recall techniques.',
      tags: ['Education', 'GenAI', 'Mobile App'],
      status: 'Planned',
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    },
    {
      id: '2',
      title: 'Predictive Healthcare Analytics',
      description: 'A system that uses ML to predict potential health issues based on patient history and current vitals. Focus on preventive care and early detection.',
      tags: ['Healthcare', 'ML', 'Python'],
      status: 'In Progress',
      createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days ago
    },
  ];

  const [ideas, setIdeas] = useState<ProjectIdea[]>(initialIdeas);
  const [showForm, setShowForm] = useState(false);
  const [editingIdea, setEditingIdea] = useState<ProjectIdea | null>(null);
  const [formData, setFormData] = useState<Partial<ProjectIdea>>({
    title: '',
    description: '',
    tags: [],
    status: 'Planned',
  });
  const [tagInput, setTagInput] = useState('');

  const statusIcons = {
    'Planned': <Clock size={16} className="text-primary-600 dark:text-primary-400" />,
    'In Progress': <CheckCircle size={16} className="text-success-500 dark:text-success-400" />,
    'Blocked': <AlertCircle size={16} className="text-error-500 dark:text-error-400" />,
    'Completed': <CheckCircle size={16} className="text-neutral-500 dark:text-neutral-400" />,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addTag = () => {
    if (tagInput.trim() !== '' && !formData.tags?.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...(formData.tags || []), tagInput.trim()],
      });
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags?.filter(tag => tag !== tagToRemove) || [],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (editingIdea) {
      // Update existing idea
      setIdeas(ideas.map(idea => 
        idea.id === editingIdea.id 
          ? { 
              ...idea, 
              title: formData.title || idea.title, 
              description: formData.description || idea.description,
              tags: formData.tags || idea.tags,
              status: formData.status as any || idea.status,
            } 
          : idea
      ));
      toast.success('Project idea updated');
    } else {
      // Add new idea
      const newIdea: ProjectIdea = {
        id: Date.now().toString(),
        title: formData.title || 'Untitled',
        description: formData.description || '',
        tags: formData.tags || [],
        status: formData.status as 'Planned' | 'In Progress' | 'Blocked' | 'Completed' || 'Planned',
        createdAt: new Date().toISOString(),
      };
      
      setIdeas([...ideas, newIdea]);
      toast.success('Project idea added');
    }
    
    // Reset form and state
    setFormData({
      title: '',
      description: '',
      tags: [],
      status: 'Planned',
    });
    setShowForm(false);
    setEditingIdea(null);
    setTagInput('');
  };

  const handleEditClick = (idea: ProjectIdea) => {
    setEditingIdea(idea);
    setFormData({
      title: idea.title,
      description: idea.description,
      tags: [...idea.tags],
      status: idea.status,
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project idea?')) {
      setIdeas(ideas.filter(idea => idea.id !== id));
      toast.success('Project idea deleted');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
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
                Project Ideas Board
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                Keep track of your upcoming project ideas and inspirations.
              </p>
            </div>
            <button
              onClick={() => {
                setShowForm(!showForm);
                if (showForm && editingIdea) {
                  setEditingIdea(null);
                  setFormData({
                    title: '',
                    description: '',
                    tags: [],
                    status: 'Planned',
                  });
                }
              }}
              className="btn btn-primary"
            >
              {showForm ? 'Cancel' : (
                <>
                  <Plus size={18} className="mr-2" />
                  Add Idea
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Add/Edit Idea Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 mb-8"
          >
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              {editingIdea ? 'Edit Project Idea' : 'Add New Project Idea'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description || ''}
                  onChange={handleInputChange}
                  required
                  className="input"
                  placeholder="Project description and goals"
                  rows={4}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status || 'Planned'}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="Planned">Planned</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Blocked">Blocked</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Add Tags
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      className="input rounded-r-none"
                      placeholder="Add tag"
                    />
                    <button
                      type="button"
                      onClick={addTag}
                      className="px-4 py-2 bg-primary-600 text-white rounded-r-lg hover:bg-primary-700 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Display selected tags */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Selected Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {formData.tags?.length === 0 && (
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      No tags selected
                    </span>
                  )}
                  {formData.tags?.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-primary-700 dark:text-primary-300 hover:text-primary-900 dark:hover:text-primary-100"
                      >
                        <XCircle size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingIdea(null);
                    setFormData({
                      title: '',
                      description: '',
                      tags: [],
                      status: 'Planned',
                    });
                  }}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  {editingIdea ? 'Update Idea' : 'Add Idea'}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Ideas List */}
        <div className="grid grid-cols-1 gap-6">
          {ideas.length === 0 ? (
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-8 text-center">
              <p className="text-neutral-600 dark:text-neutral-400">
                No project ideas yet. Add your first idea to get started!
              </p>
            </div>
          ) : (
            ideas.map((idea, index) => (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="mr-3">
                        {statusIcons[idea.status]}
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                        {idea.title}
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditClick(idea)}
                        className="p-1.5 rounded-full text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                        aria-label="Edit idea"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(idea.id)}
                        className="p-1.5 rounded-full text-neutral-500 hover:text-error-600 dark:text-neutral-400 dark:hover:text-error-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                        aria-label="Delete idea"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {idea.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {idea.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`tag ${
                      idea.status === 'Planned' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' :
                      idea.status === 'In Progress' ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-300' :
                      idea.status === 'Blocked' ? 'bg-error-100 text-error-700 dark:bg-error-900/30 dark:text-error-300' :
                      'bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200'
                    }`}>
                      {idea.status}
                    </span>
                    
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      Created: {formatDate(idea.createdAt)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectIdeas;