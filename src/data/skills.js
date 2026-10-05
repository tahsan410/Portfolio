import { Brain, Database, Layers, Server, Terminal, Wrench } from 'lucide-react'

export const skillGroups = [
  {
    id: 'programming',
    title: 'Programming',
    icon: Terminal,
    items: ['C', 'C++', 'Python', 'JavaScript'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Layers,
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Flutter'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    items: ['FastAPI', 'REST API', 'JWT', 'OAuth2', 'Authentication'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    items: ['PostgreSQL', 'SQL', 'Firebase', 'Firestore', 'Supabase'],
  },
  {
    id: 'ai',
    title: 'AI / ML',
    icon: Brain,
    items: [
      'Machine Learning',
      'PyTorch',
      'Scikit-learn',
      'Hugging Face',
      'LLMs',
      'RAG',
      'AI Automation',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman'],
  },
]
