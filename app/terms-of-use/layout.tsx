import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | SkillSnap Learning',
  description: 'Read SkillSnap Learning\'s Terms of Use governing the access and use of our educational platform and services.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfUseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}