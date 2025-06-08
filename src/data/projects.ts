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
    shortDescription: 'ATS-optimized resume generator using LLMs.(Repository is private — see video for reference.)',
    fullDescription: 'ATS-optimized resume generator that personalizes content using LLMs based on job descriptions. The system generates tailored resumes that highlight relevant skills and experiences for specific job applications.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['LangChain', 'GenAI', 'Hackathon', 'Featured', 'NLP'],
    techStack: ['Python', 'LangChain', 'OpenAI', 'Streamlit', 'HuggingFace'],
    github: 'https://github.com/SudeshRPatil20/Agentic-Ai-Resume-builder',
    demo: 'https://agentic-ai-resume-builder.streamlit.app/',
    youtube: 'https://www.youtube.com/watch?v=RRHHwmlU9do',
    isPublic: true
  },
  {
    id: 'travel-ai-planner',
    title: 'Travel AI Planner',
    shortDescription: 'Smart itinerary planner using natural language prompts.',
    fullDescription: 'An intelligent travel planning application that uses natural language processing to create personalized itineraries based on user preferences, budget constraints, and destination information.',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['LLM', 'Hackathon', 'Web App', 'GenAI'],
    techStack: ['LLAMA2'],
    github: 'https://github.com/SudeshRPatil20/Travel-AI',
    demo: 'https://travel-ai-silk.vercel.app/',
    youtube: 'https://www.youtube.com/watch?v=qsQldPYCTjU',
    isPublic: true
  },
  {
    id: 'Plant Desieses Detection',
    title: 'Plant Desieses Detection',
    shortDescription: 'Detects Plant Desieses based on provided image',
    fullDescription: 'This project is a web application that utilizes Convolutional Neural Networks (CNN) for detecting plant leaf diseases from Images. Users can upload images of plant leaves affected by diseases, and the application uses machine learning models to accurately identify the disease, it supports real-time leaf detection also.',
    image: 'https://user-images.githubusercontent.com/55544024/230736365-b52d0ba7-0ee7-4a04-9179-ec4ea0014a18.png',
    tags: ['DL', 'Hackathon', 'Web App'],
    techStack: ['Python','CNN','Flask','Tensorflow','Keras'],
    github: 'https://github.com/SudeshRPatil20/-Plant-Disease-Classification-Using-CNN-',
    youtube: '',
    isPublic: true
  },
  {
    id: 'Next-word-Predictor',
    title: 'Next-word-Predictor',
    shortDescription: 'The Next-Word Predictor using LSTM ',
    fullDescription: 'The Next-Word Predictor using LSTM is a deep learning model that leverages Long Short-Term Memory networks to predict the most likely subsequent word in a given text sequence. It captures contextual dependencies and sequential patterns, enhancing the accuracy of language modeling tasks.',
    image: 'https://miro.medium.com/v2/resize:fit:1358/0*wTiOf6s0GmF6cxcU',
    tags: ['DL', 'Web App'],
    techStack: ['Python','LSTM','Flask','Tensorflow','Keras'],
    github: 'https://github.com/SudeshRPatil20/LSTM-Next-word-Predictor',
    youtube: '',
    isPublic: true
  },
  {
    id: 'Sentiment Analysis on IMDB Reviews using RNN',
    title: 'Sentiment Analysis on IMDB Reviews using RNN',
    shortDescription: 'This project involves building a sentiment analysis model using a Recurrent Neural Network  ',
    fullDescription: 'This project involves building a sentiment analysis model using a Recurrent Neural Network (RNN) trained on the IMDB movie review dataset. The model learns to understand the sequential nature of text and classifies reviews as positive or negative based on their content. By leveraging RNNs ability to capture contextual word relationships, the system demonstrates efficient performance in natural language understanding tasks.',
    image: 'https://www.aimtechnologies.co/wp-content/uploads/2024/01/Sentiment-Analysis-Methods-1.png',
    tags: ['DL', 'Web App'],
    techStack: ['Python','RNN','Flask','Tensorflow','Keras'],
    github: 'https://github.com/SudeshRPatil20/SImpleRNN',
    youtube: '',
    isPublic: true
  },
  {
    id: 'Deep Audio Classifier',
    title: ' High-accuracy Deep Audio Classifier',
    shortDescription: 'Developed a high-accuracy Deep Audio Classifier using Python and TensorFlow for precise audio categorization across speech, sound events, and music genres. ',
    fullDescription: 'Developed a high-accuracy Deep Audio Classifier using Python and TensorFlow, enabling precise categorization of audio data for applications including speech recognition, sound event detection, and music genre classification, showcasing the efficacy of deep learning in audio processing. ',
    image: 'https://ai.google.dev/static/edge/mediapipe/images/solutions/examples/audio_classifier.png',
    tags: ['DL', 'Web App'],
    techStack: ['Python','RNN','Flask','Tensorflow','Keras','LibROSA','CNNs','Streamlit'],
    github: 'https://github.com/SudeshRangaraoPatil/Automatic-Speech-Recognition-Model',
    youtube: '',
    isPublic: true
  },
  {
    id: 'chatbot-with-langchain',
    title: 'LangChain Powered Chatbot',
    shortDescription: 'Intelligent chatbot built with LangChain framework.',
    fullDescription: 'A conversational AI assistant built using the LangChain framework that can understand context, answer questions, and perform various tasks based on user inputs. Integrates with multiple knowledge sources for comprehensive responses.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['LangChain', 'LLM', 'NLP', 'GenAI'],
    techStack: ['Python', 'LangChain', 'Streamlit', 'Gemma2','Ollama','RAG','GORQ'],
    github: 'https://github.com/SudeshRPatil20/langchain-practice-projects/tree/main/Chatbot%20using%20langchain',
    demo: 'https://langchain-practice-projects-x9gytybk4zm7jc9wg4b4ww.streamlit.app/',
    isPublic: true
  },
  {
    id: 'Math problem solvers using LLMs',
    title: 'Math problem solvers using LLMs',
    shortDescription: 'Solve math problems using language models.',
    fullDescription: 'Developed an intelligent Math Problem Solver powered by Googles Gemma 2 Large Language Model (LLM), capable of interpreting and solving a wide range of mathematical queries including algebra, calculus, and word problems. The system leverages advanced language understanding and reasoning abilities of Gemma 2 to provide accurate, step-by-step solutions in natural language.',
    image: 'https://wallpaperaccess.com/full/10528686.jpg',
    tags: ['LLM', 'NLP','LangChain'],
    techStack: ['Python','Langchain','Stremlit','GROQ','Gemma2','Ollama'],
    github: 'https://github.com/SudeshRPatil20/langchain-practice-projects/tree/main/Math%20Problem%20Solver',
    demo: 'https://langchain-practice-projects-zkkzyt5rptja3x9kvfpgm5.streamlit.app/',
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
    techStack: ['Solidity', 'React', 'Web3.js', 'Ethereum',],
    github: 'https://github.com/SudeshRPatil20/blockbash-2024',
    youtube: 'https://www.youtube.com/watch?v=SYvePMCeTfw',
    isPublic: true
  }
];