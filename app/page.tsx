'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { CURRICULUM_DATA } from './curriculum';
import { FAQ_DATA } from './faqs-data';
import { 
  CheckCircle, 
  BookOpen, 
  Shield, 
  Award, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  Code,
  Rocket,
  MessageCircle,
  Play,
  Headphones,
  Calendar,
  Clock,
  Lock,
  Smartphone,
  Mail,
  MapPin,
  Download,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';
import Link from 'next/link';
import { submitContactForm } from '@/lib/api';

const LearningJourney = dynamic(() => import('@/components/LearningJourney'), {
  loading: () => (
    <div className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false
});

const AppDownload = dynamic(() => import('@/components/AppDownload'), {
  loading: () => (
    <div className="bg-blue-950 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-blue-800 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-blue-800 rounded w-96 mx-auto"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false
});

const iconPaths: Record<string, string> = {
  Calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  Clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
  Lock: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4",
  Code: "M16 18l6-6-6-6M8 6l-6 6 6 6"
};

// ===========================================
// ANIMATION 1: Character-by-Character Text Reveal
// ===========================================
const AnimatedText = ({ 
  text, 
  className = "", 
  delay = 0,
  staggerDelay = 0.08,
  once = true 
}: { 
  text: string; 
  className?: string; 
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}) => {
  const words = text.split(' ');
  
  return (
    <motion.span 
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex}>
          <motion.span
            className="inline-block"
            variants={{
              hidden: { 
                opacity: 0, 
                y: 20,
                filter: "blur(8px)"
              },
              visible: { 
                opacity: 1, 
                y: 0,
                filter: "blur(0px)"
              }
            }}
            transition={{
              duration: 0.4,
              delay: delay + wordIndex * staggerDelay,
              ease: [0.2, 0.65, 0.3, 0.9]
            }}
          >
            {word}
          </motion.span>
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
};

// particles animation
const ParticleField = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
  }>>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    // Skip particles on mobile entirely
    if (window.innerWidth < 768) {
      setParticles([]);
      return;
    }
    
    // Reduced count: 18 particles instead of 40
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2,
        duration: Math.random() * 15 + 25,
        delay: Math.random() * -15,
        opacity: Math.random() * 0.3 + 0.1
      }))
    );

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't render on mobile or if no particles
  if (isMobile || particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            willChange: 'transform'
          }}
          animate={{
            y: [0, -20, 0, 15, 0],
            x: [0, 10, -8, 4, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  );
};

// IconDrawing
const DrawingIcon = ({ 
  iconName, 
  color 
}: { 
  iconName: string; 
  color: string;
}) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={color}
  >
    <motion.path
      d={iconPaths[iconName] || iconPaths.Calendar}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.4, 0.6, 1]
      }}
    />
  </svg>
);

// Gradient text with character animation
const AnimatedGradientText = ({ 
  text, 
  className = "", 
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  delay?: number;
}) => {
  const words = text.split(' ');
  
  return (
    <motion.span 
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex}>
          <motion.span
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500"
            variants={{
              hidden: { 
                opacity: 0, 
                y: 20,
                filter: "blur(8px)"
              },
              visible: { 
                opacity: 1, 
                y: 0,
                filter: "blur(0px)"
              }
            }}
            transition={{
              duration: 0.4,
              delay: delay + wordIndex * 0.1,
              ease: [0.2, 0.65, 0.3, 0.9]
            }}
          >
            {word}
          </motion.span>
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
};

// ===========================================
// ANIMATION 3: Animated Hero Image (Tilt Animation)
// ===========================================
const TiltHeroImage = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-8deg", "8deg"]);

  React.useEffect(() => {
  // Mouse movement for desktop
  const handleMouseMove = (e: MouseEvent) => {
    const xPct = e.clientX / window.innerWidth - 0.5;
    const yPct = e.clientY / window.innerHeight - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  // Device orientation for mobile
  const handleOrientation = (e: DeviceOrientationEvent) => {
    if (e.gamma === null || e.beta === null) return;
    
    // gamma: left/right tilt (-90 to 90)
    // beta: front/back tilt (-180 to 180)
    const xPct = Math.max(-0.5, Math.min(0.5, e.gamma / 45));
    const yPct = Math.max(-0.5, Math.min(0.5, (e.beta - 45) / 45));
    
    x.set(xPct);
    y.set(yPct);
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('deviceorientation', handleOrientation);
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('deviceorientation', handleOrientation);
  };
}, [x, y]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ===========================================
// Supporting Components (FadeIn, FloatingBadge, etc.)
// ===========================================
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const FloatingBadge = ({ icon: Icon, text, className }: { icon: any, text: string, className: string }) => (
  <motion.div 
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className={`absolute flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg z-10 ${className}`}
  >
    <div className="p-2 bg-orange-100 rounded-full">
      <Icon size={16} className="text-orange-600" />
    </div>
    <span className="text-sm font-bold text-gray-700">{text}</span>
  </motion.div>
);

// ===========================================
// MAIN PAGE COMPONENT
// ===========================================
export default function SkillsnapLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("Class 6");
  const [expandedCard, setExpandedCard] = useState<number | string | null>(null);
  const [highlightForm, setHighlightForm] = useState(false);
  
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    class: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: string; text: string }>({ 
    type: '', 
    text: '' 
  });
  const [isMounted, setIsMounted] = useState(false);
  
  // ADD THIS EFFECT:
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || undefined,
          message: `Class ${formData.class} inquiry`,
          source: 'contact_form'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSubmitMessage({ 
        type: 'success', 
        text: data.message || 'Thank you! We will contact you soon.' 
      });
      
      // Reset form
      setFormData({ name: '', phone: '', email: '', class: '' });
    } catch (error: any) {
      setSubmitMessage({ 
        type: 'error', 
        text: error.message || 'Failed to submit. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    // Trigger highlight after scroll completes
    setTimeout(() => {
    setHighlightForm(true);
    // Remove highlight after 1 second
    setTimeout(() => {
      setHighlightForm(false);
    }, 1000);
  }, 500); // Wait for scroll to complete
  };

  const features = [
    {
      icon: BookOpen,
      color: "text-blue-600",
      bg: "bg-blue-100",
      title: "Immersive Skill-Building Sessions",
      desc: "These sessions are designed to develop real-world competencies through hands-on practice and guided learning."
    },
    {
      icon: Shield,
      color: "text-teal-600",
      bg: "bg-teal-100",
      title: "Tailored Learning Experiences",
      desc: "We deliver tailored learning experiences that adapt to individual strengths and learning needs."
    },
    {
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-100",
      title: "Consistent Smart Progress Insights for Parents",
      desc: "Parents receive consistent, data driven insights to confidently track their child's academic progress."
    },
    {
      icon: Award,
      color: "text-rose-600",
      bg: "bg-rose-100",
      title: "Gamified Learning",
      desc: "Our modern teaching approach blends visuals, quizzes, and gamified learning for better understanding."
    },
    {
      icon: Headphones,
      color: "text-orange-600",
      bg: "bg-orange-100",
      title: "24x7 Mentor Support",
      desc: "Our mentors provide one-on-one support to ensure every learner stays on track with our modern Ed-Tech approach."
    },
    {
      icon: Download,
      color: "text-cyan-600",
      bg: "bg-cyan-100",
      title: "Downloadable Notes & Smart Revision Material",
      desc: "Every concept is supported with structured notes and revision-ready resources, helping students revise efficiently and parents stay confident."
    }
  ];

  const XIcon = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
  
  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586000617763", label: "Facebook", hoverColor: "hover:bg-blue-600" },
    { Icon: Instagram, href: "https://www.instagram.com/skillsnaplearning", label: "Instagram", hoverColor: "hover:bg-pink-600" },
    { Icon: XIcon, href: "https://x.com/skillsnaplearn", label: "X", hoverColor: "hover:bg-black" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/110972038/admin/dashboard", label: "LinkedIn", hoverColor: "hover:bg-blue-700" },
    { Icon: Youtube, href: "https://www.youtube.com/channel/UCgdNjvZRmcMK5dgc0sv6Q-w", label: "YouTube", hoverColor: "hover:bg-red-600" },
  ];

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-800 selection:bg-orange-200">
      
      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/skillsnaplogotransparent.png" 
              alt="SkillSnap Logo" 
              width={300}
              height={150}
              className="h-[150px] w-auto object-contain mt-4"
              priority
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-900">
            <Link href="/students" className="hover:text-orange-600 transition-colors">Student's Corner</Link>
            <Link href="/parents" className="hover:text-orange-600 transition-colors">Parent's Corner</Link>
            <button onClick={scrollToContact} className="hover:text-orange-600 transition-colors">Contact Us</button>
          </div>
          <button 
            onClick={scrollToContact}
            className="bg-blue-950 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-900 transition-all hover:scale-105 shadow-lg shadow-blue-200"
          >
            Talk to an Expert
          </button>
        </div>
      </nav>

      {/* --- Hero Section with ANIMATED TEXT --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        {/* Floating Particles */}
        <ParticleField />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
          
          {/* Left: Content with ANIMATED TEXT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                <Rocket size={14} fill="currentColor" />
                Strong Foundations for Future Skills.
              </div>
            </motion.div>
            
            {/* ✨ ANIMATION 1: Character-by-character headline reveal */}
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-blue-950 mb-6">
            <AnimatedText text="Where Fun, Skill-Focused," delay={0.2} />
            <br/>
            <AnimatedText text="and Effective Learning" delay={0.6} />
            <br/>
            <AnimatedGradientText text="Builds Real-World Excellence" delay={1.0} />
          </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              The only platform for Class 6-10 that combines <strong>School Academics</strong> with <strong>Future Tech Skills</strong>. Get the guidance your child deserves.
            </motion.p>

            {/* Lead Form Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div 
                id="contact-form" 
                className={`bg-white p-6 rounded-2xl shadow-xl border max-w-md w-full mx-auto lg:mx-0 scroll-mt-24 text-left transition-all duration-500 ${
                  highlightForm 
                    ? 'border-orange-500 ring-4 ring-orange-300 ring-opacity-50 shadow-2xl shadow-orange-200' 
                    : 'border-gray-100'
                }`}
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-900">
                  <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                  Get a Call Back
                </h3>
                <form className="space-y-3" onSubmit={handleSubmit}>
                  {submitMessage.text && (
                    <div className={`p-3 rounded-lg text-sm ${
                      submitMessage.type === 'success' 
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : 'bg-red-100 text-red-700 border border-red-200'
                    }`}>
                      {submitMessage.text}
                    </div>
                  )}
                  
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Student's/Parent's Name *"
                    required 
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all disabled:opacity-50" 
                  />
                  
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number (WhatsApp preferred) *" 
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all disabled:opacity-50" 
                  />
                  
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address (optional)"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all disabled:opacity-50" 
                  />
                  
                  <label htmlFor="student-class" className="sr-only">
                    Student's Class
                  </label>
                  <select 
                    id="student-class"
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all disabled:opacity-50"
                  >
                    <option value="">Select Student&apos;s Class *</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                  </select>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-200 hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Call Back'}
                  </button>
                  
                  <p className="text-xs text-center text-gray-400 mt-2">Our counselors will call you within 24 hours.</p>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual */}
        <div className="relative block h-[400px] lg:h-[600px] mt-12 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none" style={{ perspective: "1000px" }}>
        <TiltHeroImage className="absolute inset-0">
            <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100"
            >
                <Image 
                  src="/final-hero-image.png" 
                  alt="Happy student holding tablet showing coding project" 
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover object-[70%_center]"
                  priority
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>
        </TiltHeroImage>
        
        <FloatingBadge 
            icon={Award} 
            text="Top Scorer" 
            className="top-6 -left-4 lg:top-12 lg:-left-8 scale-90 lg:scale-100" 
        />
        <FloatingBadge 
            icon={Code} 
            text="Tech Wizard" 
            className="bottom-16 -right-2 lg:bottom-24 lg:-right-6 scale-90 lg:scale-100" 
        />
        
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 p-3 lg:p-4 bg-white/95 backdrop-blur rounded-xl shadow-lg border border-teal-100 max-w-[160px] lg:max-w-[200px] z-10"
        >
            <div className="flex gap-2 items-center text-teal-600 mb-1">
                <MessageCircle size={16} fill="currentColor" />
                <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wide">Included</span>
            </div>
            <p className="text-xs lg:text-sm font-bold text-gray-800">Live Doubt Solving</p>
            <p className="text-[10px] lg:text-xs text-gray-500">Every Weekend</p>
        </motion.div>
        </div>
        </div>
      </section>

      {/* Border */}
      <div className='border-y border-gray-100 bg-gray-50/50'></div>

      {/* --- Social Proof --- */}
      <section className="hidden py-10 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Designed for students from top schools</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {['DPS', 'Ryan International', 'Kendriya Vidyalaya', 'Dav Public School'].map((school) => (
               <span key={school} className="text-xl font-bold text-gray-400 hover:text-gray-800 transition-colors">{school}</span>
             ))}
          </div>
        </div>
      </section>

      {/* --- Parent's Peace of Mind (MERGED WITH MENTOR) --- */}
      <section id="parents" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <FadeIn>
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4">Why Parents Trust SkillSnap</h2>
        <p className="text-lg text-gray-600">We balance academic rigour with modern skills.</p>
      </div>
    </FadeIn>

    {/* All 5 cards in a single grid with responsive layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {features.map((feature, idx) => (
        <FadeIn delay={idx * 0.1} key={idx}>
          <div className={`p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full ${
            idx === 3 ? 'md:col-start-1 lg:col-start-auto' : ''
          } ${
            idx === 4 ? 'md:col-start-2 lg:col-start-auto' : ''
          } ${
            idx >= 3 ? 'lg:col-span-1 lg:mx-0' : ''
          }`}>
            <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                    }}
                >
                    <feature.icon size={28} className={feature.color} />
                </motion.div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
          </div>
        </FadeIn>
      ))}
    </div>

    {/* Wrapper for centering last 2 cards on large screens */}
    <style jsx>{`
      @media (min-width: 1024px) {
        .grid > *:nth-child(4) {
          grid-column-start: 1;
          margin-left: auto;
          margin-right: 0;
          max-width: calc(100% - 2rem);
        }
        .grid > *:nth-child(5) {
          grid-column-start: 3;
          margin-left: 0;
          margin-right: auto;
          max-width: calc(100% - 2rem);
        }
      }
    `}</style>
  </div>
</section>

      {/* --- Curriculum Section --- */}
      <section id="curriculum" className="py-24 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4">Explore Our Syllabus</h2>
            <p className="text-lg text-gray-600">Select your child's class to see what they will learn.</p>
          </div>

          {/* Horizontal Tabs */}
          <div className="flex justify-start md:justify-center mb-12 overflow-x-auto pb-4 no-scrollbar px-6 md:px-0">
            <div className="flex gap-2 p-1 bg-white rounded-full border border-gray-200 shadow-sm min-w-max">
              {Object.keys(CURRICULUM_DATA).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setExpandedCard(null); 
                  }}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === tab 
                    ? "bg-blue-950 text-white shadow-md" 
                    : "text-gray-500 hover:text-blue-900 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Academic Subjects - 2x2 Grid */}
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {CURRICULUM_DATA[activeTab]?.filter((card: any) => !card.isCoding).length > 0 ? (
                  CURRICULUM_DATA[activeTab].filter((card: any) => !card.isCoding).map((card: any, idx: number) => (
                    <div key={idx} className={`bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden ${expandedCard === idx ? 'ring-2 ring-orange-100' : ''}`}>
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 ${card.bg} rounded-lg flex items-center justify-center shrink-0`}>
                            <card.icon size={24} className={card.color} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800">{card.subject}</h3>
                            {card.tagline && <p className="text-xs text-gray-500 font-medium italic mt-1">{card.tagline}</p>}
                          </div>
                        </div>
                        
                        <ul className="space-y-3 mb-6">
                          {card.summary.map((topic: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600">
                              <CheckCircle size={18} className="text-teal-500 mt-1 shrink-0" />
                              <span className="text-sm font-medium">{topic}</span>
                            </li>
                          ))}
                        </ul>

                        <button 
                          onClick={() => toggleCard(idx)}
                          className="w-full py-3 rounded-xl border border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-50 hover:text-blue-900 transition-colors flex items-center justify-center gap-2 group"
                        >
                          {expandedCard === idx ? (
                            <>Hide Curriculum <ChevronUp size={16} /></>
                          ) : (
                            <>View Detailed Curriculum <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" /></>
                          )}
                        </button>
                      </div>

                      <AnimatePresence>
                        {expandedCard === idx && card.details && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="bg-gray-50 border-t border-gray-100"
                          >
                            <div className="p-8 pt-4 space-y-8">
                              <div className="flex items-center justify-center">
                                <span className="bg-white border border-gray-200 px-4 py-1 rounded-full text-xs font-bold text-gray-400 uppercase tracking-widest">Full Syllabus</span>
                              </div>
                              
                              {card.details.map((section: any, sIdx: number) => (
                                <div key={sIdx}>
                                  <h4 className={`text-lg font-bold mb-3 flex items-center gap-2 ${card.color}`}>
                                    <span className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs text-gray-500 shadow-sm">{sIdx + 1}</span>
                                    {section.title}
                                  </h4>
                                  <ul className="space-y-2 ml-8 border-l-2 border-gray-200 pl-4">
                                    {section.points.map((pt: string, pIdx: number) => (
                                      <li key={pIdx} className="text-sm text-gray-600 leading-relaxed relative">
                                        <span className="absolute -left-[21px] top-2 w-2 h-2 rounded-full bg-gray-300"></span>
                                        {pt}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}

                              <div className="pt-4 text-center">
                                <button onClick={scrollToContact} className="text-orange-600 font-bold hover:underline text-sm">
                                  Download PDF Syllabus
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                    <p className="text-gray-500 text-lg">Curriculum coming soon!</p>
                  </div>
                )}
              </div>

              {/* Coding Section - Full Width Featured Card */}
              {CURRICULUM_DATA[activeTab]?.find((card: any) => card.isCoding) && (
                <div className="mt-8">
                  {/* Section Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wide">
                      <Rocket size={14} />
                      Future Skills
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
                  </div>

                  {(() => {
                    const codingCard = CURRICULUM_DATA[activeTab].find((card: any) => card.isCoding);
                    return (
                      <div className={`bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-sm border border-purple-100 hover:shadow-lg transition-all duration-300 overflow-hidden ${expandedCard === 'coding' ? 'ring-2 ring-purple-200' : ''}`}>
                        <div className="p-8">
                          <div className="flex flex-col md:flex-row md:items-start gap-6">
                            {/* Left: Icon and Title */}
                            <div className="flex items-center gap-4 md:w-1/3">
                              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                                <Code size={28} className="text-purple-600" />
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-gray-800">{codingCard.subject}</h3>
                                <p className="text-sm text-purple-600 font-medium mt-1">{codingCard.tagline}</p>
                              </div>
                            </div>

                            {/* Right: Summary Points */}
                            <div className="md:w-2/3">
                              <ul className="grid sm:grid-cols-2 gap-3">
                                {codingCard.summary.map((topic: string, i: number) => (
                                  <li key={i} className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle size={18} className="text-purple-500 mt-0.5 shrink-0" />
                                    <span className="text-sm font-medium">{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Outcomes Section - Orange Theme */}
                          {codingCard.outcomes && (
                            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-rose-50 rounded-xl border border-yellow-200">
                              <h4 className="text-sm font-bold text-yellow-800 mb-3 flex items-center gap-2">
                                <span className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">
                                  <Award size={12} className="text-white" />
                                </span>
                                What Your Child Will Achieve
                              </h4>
                              <ul className="grid sm:grid-cols-3 gap-2">
                                {codingCard.outcomes.map((outcome: string, i: number) => (
                                  <li key={i} className="flex items-center gap-2 text-sm text-yellow-900">
                                    <CheckCircle size={16} className="text-yellow-500 shrink-0" />
                                    <span>{outcome}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <button 
                            onClick={() => setExpandedCard(expandedCard === 'coding' ? null : 'coding')}
                            className="w-full mt-6 py-3 rounded-xl border border-purple-200 text-purple-700 font-bold text-sm hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 group"
                          >
                            {expandedCard === 'coding' ? (
                              <>Hide Curriculum <ChevronUp size={16} /></>
                            ) : (
                              <>View Detailed Curriculum <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" /></>
                            )}
                          </button>
                        </div>

                        <AnimatePresence>
                          {expandedCard === 'coding' && codingCard.details && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="bg-purple-50/50 border-t border-purple-100"
                            >
                              <div className="p-8 pt-4 space-y-8">
                                <div className="flex items-center justify-center">
                                  <span className="bg-white border border-purple-200 px-4 py-1 rounded-full text-xs font-bold text-purple-400 uppercase tracking-widest">Full Syllabus</span>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-8">
                                  {codingCard.details.map((section: any, sIdx: number) => (
                                    <div key={sIdx}>
                                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-purple-600">
                                        <span className="w-6 h-6 rounded-full bg-white border border-purple-200 flex items-center justify-center text-xs text-purple-500 shadow-sm">{sIdx + 1}</span>
                                        {section.title}
                                      </h4>
                                      <ul className="space-y-2 ml-8 border-l-2 border-purple-200 pl-4">
                                        {section.points.map((pt: string, pIdx: number) => (
                                          <li key={pIdx} className="text-sm text-gray-600 leading-relaxed relative">
                                            <span className="absolute -left-[21px] top-2 w-2 h-2 rounded-full bg-purple-300"></span>
                                            {pt}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>

                                <div className="pt-4 text-center">
                                  <button onClick={scrollToContact} className="text-purple-600 font-bold hover:underline text-sm">
                                    Download PDF Syllabus
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })()}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">Want to see the full detailed brochure?</p>
            <button onClick={scrollToContact} className="text-orange-600 font-bold hover:underline flex items-center justify-center gap-2 mx-auto">
              Download Full Brochure <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* --- Learning Journey Section --- */}
      <LearningJourney />

      {/* --- Student's Excitement --- */}
      <section id="students" className="py-24 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-400 font-bold tracking-wider uppercase text-sm">For Students</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">Learning that doesn't feel like a chore.</h2>
              <div className="space-y-8">
                {[
                  { title: "Interactive & Gamified Learning", desc: "Learn through quizzes, challenges, and rewards that make studying enjoyable — not stressful." },
                  { title: "Learn by Doing (Projects & Practice)", desc: "Apply concepts through real examples, mini-projects, and problem-solving — so learning actually sticks." },
                  { title: "Short, Easy-to-Understand Lessons", desc: "Concepts are taught in small, focused lessons that are easy to grasp and quick to revise." }
                ].map((item, i) => (
                  <FadeIn delay={i * 0.2} key={i}>
                    <div className="flex gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0 font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-blue-100">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-900 to-blue-950 p-2 rounded-2xl border border-blue-800 shadow-2xl"
              >
                <div className="aspect-video bg-black rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-orange-600/20 group-hover:bg-orange-600/10 transition-colors"></div>
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <Play size={32} fill="white" className="text-white ml-1" />
                  </div>
                </div>
                <div className="p-4 flex gap-4">
                  <div className="h-2 bg-gray-700 rounded-full flex-1 overflow-hidden">
                    <div className="h-full w-2/3 bg-orange-500"></div>
                  </div>
                  <span className="text-xs text-gray-400">65% Complete</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-950">Common Questions</h2>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <motion.div 
                key={i} 
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={false}
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-4 bg-white text-gray-600 text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- App Download Section --- */}
      <AppDownload />

      {/* --- Footer --- */}
      <footer className="bg-gray-900 pt-20 pb-10 text-gray-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Image 
                  src="/skillsnaplogotransparent.png" 
                  alt="SkillSnap Logo" 
                  width={350}
                  height={150}
                  className="h-32 w-auto object-contain -ml-2"
                />
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed mx-auto md:mx-0 mb-6">
                We create unique learning paths for every student, ensuring the curriculum matches their abilities and inspires growth.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.Icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white ${social.hoverColor} transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center justify-center md:justify-start gap-2 hover:text-orange-400 transition-colors">
                    <Users size={16} className="text-orange-500"/>
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <button onClick={scrollToContact} className="flex items-center justify-center md:justify-start gap-2 hover:text-orange-400 transition-colors w-full">
                    <Phone size={16} className="text-orange-500"/>
                    <span>Contact Us</span>
                  </button>
                </li>
                <li>
                  <Link href="/students" className="flex items-center justify-center md:justify-start gap-2 hover:text-orange-400 transition-colors">
                    <BookOpen size={16} className="text-orange-500"/>
                    <span>Student&apos;s Corner</span>
                  </Link>
                </li>
                <li>
                  <Link href="/parents" className="flex items-center justify-center md:justify-start gap-2 hover:text-orange-400 transition-colors">
                    <Shield size={16} className="text-orange-500"/>
                    <span>Parent&apos;s Corner</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-white mb-6">Get in Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <Mail size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <a href="mailto:support@skillsnaplearning.com" className="hover:text-orange-400 transition-colors">
                    support@skillsnaplearning.com
                  </a>
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <Phone size={18} className="text-orange-500 mt-0.5" />
                  <a href="tel:+919999999999" className="hover:text-orange-400 transition-colors">
                    +91 9311933961
                  </a>
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <MapPin size={18} className="text-orange-500 mt-0.5" />
                  <span>Gurgaon, Haryana</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2026 Skillsnap Learning Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}