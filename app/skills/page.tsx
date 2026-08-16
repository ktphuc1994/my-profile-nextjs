import type { Metadata } from 'next';
import SkillsView from './SkillsView';

export const metadata: Metadata = {
  title: 'Skills List | Khuc Thien Phuc',
  description: 'Skills list of Khuc Thien Phuc',
};

export default function SkillsPage() {
  return <SkillsView />;
}
