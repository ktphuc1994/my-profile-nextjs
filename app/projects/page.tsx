import type { Metadata } from 'next';
import ProjectsView from './ProjectsView';

export const metadata: Metadata = {
  title: 'Project List | Khuc Thien Phuc',
  description: 'Projects by Khuc Thien Phuc',
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
