// components/StructuredData.tsx
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "SkillSnap Learning",
    "url": "https://www.skillsnaplearning.com",
    "logo": "https://www.skillsnaplearning.com/skillsnaplogotransparent.png",
    "description": "Online learning platform for Class 6-10 combining academics with tech skills",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9311933961",
      "contactType": "customer service",
      "email": "support@skillsnap.com"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61586000617763",
      "https://www.instagram.com/skillsnaplearning",
      "https://www.linkedin.com/company/110972038",
      "https://www.youtube.com/channel/UCgdNjvZRmcMK5dgc0sv6Q-w"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CourseSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Class 6-10 Academic + Coding Program",
    "description": "Comprehensive online learning combining school academics with future tech skills",
    "provider": {
      "@type": "Organization",
      "name": "SkillSnap Learning",
      "sameAs": "https://www.skillsnaplearning.com"
    },
    "educationalLevel": "Secondary Education",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}