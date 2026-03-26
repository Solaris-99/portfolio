export type Project = {
  id: string;
  githubUrl?: string;
  imageUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'ctrl-x',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pasos',
    githubUrl: 'https://github.com/Solaris-99/TP_CIFUENTES_DELCANTO',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'yt-audio-downloader',
    githubUrl: 'https://github.com/Solaris-99/yt-audio-downloader',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'codecrafters-shell',
    githubUrl: 'https://github.com/Solaris-99/codecrafters-shell-java',
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'media-aggregator',
    githubUrl: 'https://github.com/Solaris-99/media-aggregator',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800'
  }
];
