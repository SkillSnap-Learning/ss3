import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Student's Corner - Fun Learning for Class 6-10",
  description: "Interactive online classes designed for students. Learn math, science, and coding through gamified lessons. No boring lectures - just fun, effective learning!",
  alternates: {
    canonical: 'https://www.skillsnaplearning.com/students',
  },
};

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}