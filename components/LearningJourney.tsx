'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Lock, 
  Code,
  Rocket,
  Play,
  BookOpen,
  Users,
  Award
} from 'lucide-react';

// FadeIn component (copy from page.tsx or import if you make it shared)
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


// ===========================================
// Learning Journey Section
// ===========================================
const LearningJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardProgress, setCardProgress] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false, false, false, false, false, false, false]);
  const permanentlyFlippedRef = useRef<boolean[]>([false, false, false, false, false, false, false, false, false]);
  
  useEffect(() => {
    let ticking = false;
    
    const updateCardProgress = () => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.flip-card');
      const windowHeight = window.innerHeight;
      
      const newProgress: number[] = [];
      
      cards.forEach((card, index) => {
        if (permanentlyFlippedRef.current[index]) {
          newProgress.push(1);
          return;
        }
        
        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top;
        
        const progress = Math.max(0, Math.min(1,
          (windowHeight * 0.95 - cardTop) / (windowHeight * 0.25)
        ));
        
        if (progress >= 1) {
          permanentlyFlippedRef.current[index] = true;
        }
        
        newProgress.push(progress);
      });
      
      setCardProgress(newProgress);
      ticking = false;
    };
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateCardProgress);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateCardProgress();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      icon: Calendar,
      color: "text-blue-600",
      bgFront: "bg-gradient-to-br from-blue-100 to-blue-200",
      bgBack: "bg-blue-50/50",
      border: "border-blue-100",
      strokeColor: "#2563eb",
      title: "Structured Weekday Learning",
      bulletColor: "bg-blue-500",
      extra: { 
        type: "bullets", 
        items: [
          "Classes run Monday to Friday, but all lectures are accessible on weekends too.",
          "Lectures are scheduled thoughtfully, not released all at once, to avoid boredom or confusion."
        ] 
      }
    },
    {
      icon: Rocket,
      color: "text-rose-600",
      bgFront: "bg-gradient-to-br from-rose-100 to-rose-200",
      bgBack: "bg-rose-50/50",
      border: "border-rose-100",
      strokeColor: "#e11d48",
      title: "Step-by-Step Learning",
      bulletColor: "bg-rose-500",
      extra: { 
        type: "bullets", 
        items: [
          "We start from basic concepts and gradually move to advanced topics.",
          "Students learn beyond school syllabus, not just NCERT, with advanced content and mock exercises.",
          "AI-powered programs personalize the learning path for every student according to their capacity."
        ] 
      }
    },
    {
      icon: Play,
      color: "text-pink-600",
      bgFront: "bg-gradient-to-br from-pink-100 to-pink-200",
      bgBack: "bg-pink-50/50",
      border: "border-pink-100",
      strokeColor: "#db2777",
      title: "Interactive & Engaging Lessons",
      bulletColor: "bg-pink-500",
      extra: { 
        type: "bullets", 
        items: [
          "Lessons include visual graphics and playful videos to make concepts interesting and interactive.",
          "Gamified learning with quizzes, puzzles, and fun activities keeps students motivated."
        ] 
      }
    },
    {
      icon: Clock,
      color: "text-orange-600",
      bgFront: "bg-gradient-to-br from-orange-100 to-orange-200",
      bgBack: "bg-orange-50/50",
      border: "border-orange-100",
      strokeColor: "#ea580c",
      title: "Optimized Lecture Structure",
      bulletColor: "bg-orange-500",
      extra: { 
        type: "numbers", 
        items: [
          { num: "35", label: "25–35 minutes of lecture per subject", color: "text-orange-600", border: "border-orange-100" },
          { num: "10", label: "5–10 minutes of quick revisions and key notes", color: "text-teal-600", border: "border-teal-100" },
          { num: "10", label: "5–10 minutes of quick, interactive tests to reinforce learning", color: "text-purple-600", border: "border-purple-100" }
        ]
      }
    },
    {
      icon: BookOpen,
      color: "text-amber-600",
      bgFront: "bg-gradient-to-br from-amber-100 to-amber-200",
      bgBack: "bg-amber-50/50",
      border: "border-amber-100",
      strokeColor: "#d97706",
      title: "Daily Learning Support",
      bulletColor: "bg-amber-500",
      extra: { 
        type: "bullets", 
        items: [
          "Students receive daily summary PDFs and quick notes sheets for easy revision.",
          "Parents get daily insights about each subject, covering their child's learning and test performance."
        ] 
      }
    },
    {
      icon: Lock,
      color: "text-teal-600",
      bgFront: "bg-gradient-to-br from-teal-100 to-teal-200",
      bgBack: "bg-teal-50/50",
      border: "border-teal-100",
      strokeColor: "#0d9488",
      title: "Mastery-Based Progression",
      bulletColor: "bg-teal-500",
      extra: { 
        type: "bullets", 
        items: [
          "We do not move ahead to the next chapter unless a student clears all tests and revisions for the current chapter.",
          "This ensures strong foundations before advancing."
        ] 
      }
    },
    {
      icon: Users,
      color: "text-indigo-600",
      bgFront: "bg-gradient-to-br from-indigo-100 to-indigo-200",
      bgBack: "bg-indigo-50/50",
      border: "border-indigo-100",
      strokeColor: "#4f46e5",
      title: "Personalized Timetable & Breaks",
      bulletColor: "bg-indigo-500",
      extra: { 
        type: "bullets", 
        items: [
          "Lessons follow a personalized timetable for each student.",
          "Short 5–15 minute breaks are provided after each subject to relax and recharge."
        ] 
      }
    },
    {
      icon: Award,
      color: "text-cyan-600",
      bgFront: "bg-gradient-to-br from-cyan-100 to-cyan-200",
      bgBack: "bg-cyan-50/50",
      border: "border-cyan-100",
      strokeColor: "#0891b2",
      title: "Continuous Assessment",
      bulletColor: "bg-cyan-500",
      extra: { 
        type: "bullets", 
        items: [
          "Students take weekly and monthly mini-tests and quarterly major tests.",
          "This ensures steady progress tracking and reinforces learning."
        ] 
      }
    },
    {
      icon: Code,
      color: "text-purple-600",
      bgFront: "bg-gradient-to-br from-purple-100 to-purple-200",
      bgBack: "bg-purple-50/50",
      border: "border-purple-100",
      strokeColor: "#9333ea",
      title: "Weekend Coding Classes",
      bulletColor: "bg-purple-500",
      extra: { 
        type: "bullets", 
        items: [
          "Coding and practical experiments are conducted on weekends (2-hour sessions).",
          "Hands-on projects develop problem-solving, creativity, and real-world application."
        ] 
      }
    }
  ];

  const iconPaths: Record<string, string> = {
    Calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    Clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
    Lock: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4",
    Code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
    Rocket: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    Play: "M5 3l14 9-14 9V3z",
    BookOpen: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
    Users: "M18 19v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 19v-2a4 4 0 0 0-3-4M16 1a4 4 0 0 1 0 8",
    Award: "M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6z"
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4">How You Learn</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At Skillsnap Learning, we believe learning should be structured, engaging,  and personalized to each student’s pace and potential. Here’s how we  teach:
            </p>
          </FadeIn>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const progress = cardProgress[idx] || 0;
            const Icon = card.icon;
            const iconName = Icon.displayName || Icon.name || '';
            
            return (
              <div
                key={idx}
                className="flip-card h-[340px]"
                style={{ perspective: "2000px" }}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  animate={{ rotateY: progress * 180 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                >
                  {/* Front of card (preview - visible initially) */}
                  <div
                    className={`absolute inset-0 ${card.bgFront} rounded-2xl p-6 border ${card.border} flex flex-col items-center justify-center`}
                    style={{ 
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden"
                    }}
                  >
                    <div className="w-16 h-16 bg-white/80 rounded-xl shadow-lg flex items-center justify-center mb-4">
                      <Icon size={32} className={card.color} />
                    </div>
                    <h3 className="text-lg font-bold text-blue-950 text-center">{card.title}</h3>
                    <p className="text-xs text-gray-500 mt-2">Scroll to reveal</p>
                  </div>

                  {/* Back of card (content - revealed after flip) */}
                <div
                className={`absolute inset-0 ${card.bgBack} rounded-2xl p-6 border ${card.border} flex flex-col`}
                style={{ 
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                }}
                >
                {/* Animated Icon - Continuous Loop */}
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3">
                    <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={card.strokeColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="overflow-visible"
                    >
                    <motion.path
                        d={iconPaths[iconName] || iconPaths.Calendar}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={progress >= 1 
                        ? { pathLength: [0, 1, 1, 0], opacity: 1 } 
                        : { pathLength: 0, opacity: 0 }
                        }
                        transition={progress >= 1 
                        ? { 
                            pathLength: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.4, 0.6, 1]
                            },
                            opacity: { duration: 0.3 }
                            } 
                        : { duration: 0.3 }
                        }
                    />
                    </svg>
                </div>
                
                <h3 className="text-lg font-bold text-blue-950 mb-3">{card.title}</h3>
                
                {/* Bullets */}
                {card.extra.type === "bullets" && (
                    <ul className="space-y-2 flex-grow">
                    {card.extra.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${card.bulletColor} mt-1.5 shrink-0`}></span>
                        <span className="text-sm text-gray-700 leading-relaxed">{item as string}</span>
                        </li>
                    ))}
                    </ul>
                )}
                
                {/* Numbers */}
                {card.extra.type === "numbers" && (
                    <ul className="space-y-2 flex-grow">
                    {card.extra.items?.map((item, i) => {
                        const numItem = item as { num: string; label: string; color: string; border: string };
                        return (
                        <li key={i} className="flex items-center gap-2">
                            <span className={`w-7 h-7 rounded-full bg-white flex items-center justify-center font-bold text-xs ${numItem.color} border ${numItem.border}`}>
                            {numItem.num}
                            </span>
                            <span className="text-sm text-gray-700">{numItem.label}</span>
                        </li>
                        );
                    })}
                    </ul>
                )}
                </div>
                </motion.div>
              </div>
            );
          })}
        </div>
        {/* Closing Statement */}
        <FadeIn>
        <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
            At Skillsnap Learning, we blend <span className="text-blue-600 font-semibold">structure</span>, <span className="text-rose-600 font-semibold">personalization</span>, <span className="text-orange-600 font-semibold">interactivity</span>, and <span className="text-teal-600 font-semibold">continuous assessment</span> to ensure every student learns, enjoys, and excels beyond traditional school learning.
            </p>
        </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LearningJourney;
