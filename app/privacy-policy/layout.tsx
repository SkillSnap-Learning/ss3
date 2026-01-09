import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SkillSnap Learning',
  description: 'Learn how SkillSnap Learning collects, uses, and protects your personal information. Our commitment to data privacy and security.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}