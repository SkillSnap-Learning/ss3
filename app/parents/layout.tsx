import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Parent's Corner - Why Parents Trust SkillSnap Learning",
  description: "Transparent progress reports, structured curriculum, and AI-powered personalized learning. See why thousands of parents choose SkillSnap for their child's education.",
  alternates: {
    canonical: 'https://www.skillsnaplearning.com/parents',
  },
};

export default function ParentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}