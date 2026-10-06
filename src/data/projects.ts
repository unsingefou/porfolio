export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  demoUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'A clean, fast, hand-crafted portfolio built with React, TypeScript, and Vite.',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    demoUrl: 'https://levis.com',
    repoUrl: 'https://github.com/levis/porfolio',
  },
]
