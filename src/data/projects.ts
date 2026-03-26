export type Project = {
  id: string;
  githubUrl?: string;
  imageUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'project1',
    githubUrl: 'https://github.com/example/quantum-engine',
    // Using a placeholder gradient image
    imageUrl: 'https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'project2',
    githubUrl: 'https://github.com/example/astra-analytics',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];
