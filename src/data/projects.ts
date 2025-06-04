export type SkillType = 'ML' | 'DL' | 'LLM' | 'GenAI' | 'LangChain' | 'Hackathon' | 'NLP' | 'Featured' | 'Web App';

export interface ProjectType {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: SkillType[];
  techStack: string[];
  github?: string;
  demo?: string;
  youtube?: string;
  blog?: string;
  isPublic: boolean;
  notes?: string;
}

export const projectsData: ProjectType[] = [
  {
    id: 'agentic-resume-builder',
    title: 'Agentic AI Resume Builder',
    shortDescription: 'ATS-optimized resume generator using LLMs.',
    fullDescription: 'ATS-optimized resume generator that personalizes content using LLMs based on job descriptions. The system generates tailored resumes that highlight relevant skills and experiences for specific job applications.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['LangChain', 'GenAI', 'Hackathon', 'Featured', 'NLP'],
    techStack: ['Python', 'LangChain', 'OpenAI', 'Streamlit', 'HuggingFace'],
    github: 'https://github.com/SudeshRPatil20/Agentic-Ai-Resume-builder',
    demo: 'https://agentic-ai-resume-builder.streamlit.app/',
    isPublic: true
  },
  {
    id: 'travel-ai-planner',
    title: 'Travel AI Planner',
    shortDescription: 'Smart itinerary planner using natural language prompts.',
    fullDescription: 'An intelligent travel planning application that uses natural language processing to create personalized itineraries based on user preferences, budget constraints, and destination information.',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['LLM', 'Hackathon', 'Web App', 'GenAI'],
    techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/SudeshRangaraoPatil/levelsupermind',
    demo: 'https://levelsupermind-q9ffcp1j7-parags-projects-d0af38f7.vercel.app/',
    youtube: 'https://www.youtube.com/watch?v=RRHHwmlU9do',
    isPublic: true
  },
  {
    id: 'chatbot-with-langchain',
    title: 'LangChain Powered Chatbot',
    shortDescription: 'Intelligent chatbot built with LangChain framework.',
    fullDescription: 'A conversational AI assistant built using the LangChain framework that can understand context, answer questions, and perform various tasks based on user inputs. Integrates with multiple knowledge sources for comprehensive responses.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['LangChain', 'LLM', 'NLP', 'GenAI'],
    techStack: ['Python', 'LangChain', 'Gradio', 'OpenAI', 'FastAPI'],
    github: 'https://github.com/SudeshRPatil20/langchain-chatbot',
    isPublic: true
  },
  {
    id: 'sentiment-analysis',
    title: 'Social Media Sentiment Analyzer',
    shortDescription: 'Real-time sentiment analysis for social media content.',
    fullDescription: 'A machine learning application that analyzes sentiment in social media posts and comments in real-time. Uses advanced NLP techniques to classify text as positive, negative, or neutral with high accuracy.',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['ML', 'NLP', 'Featured'],
    techStack: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'React'],
    github: 'https://github.com/SudeshRPatil20/sentiment-analysis',
    demo: 'https://sentiment-analyzer-demo.vercel.app',
    isPublic: true
  },
  {
    id: 'cnn-image-classifier',
    title: 'CNN Image Classifier',
    shortDescription: 'Deep learning model for image classification.',
    fullDescription: 'A convolutional neural network (CNN) based image classification system that can accurately identify objects in images. Trained on a large dataset of labeled images and optimized for performance.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['DL', 'ML'],
    techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/SudeshRPatil20/cnn-classifier',
    isPublic: true
  },
  {
    id: 'blockchain-hackathon',
    title: 'BlockBash 2024 Project',
    shortDescription: 'Award-winning blockchain solution from Coca-Cola Disrupt.',
    fullDescription: 'An innovative blockchain-based solution developed during the BlockBash 2024 hackathon. The project focuses on supply chain transparency and was recognized with the top innovation award at Coca-Cola Disrupt.',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Hackathon', 'Featured'],
    techStack: ['Solidity', 'React', 'Web3.js', 'Ethereum', 'Node.js'],
    github: 'https://github.com/SudeshRPatil20/blockbash-2024',
    youtube: 'https://www.youtube.com/@Blockbash-jb7gt',
    isPublic: true
  }
];