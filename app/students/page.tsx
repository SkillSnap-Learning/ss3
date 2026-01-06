'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Target,
  Brain,
  BookOpen,
  Video,
  FileText,
  Clock,
  TrendingUp,
  Star,
  Sparkles,
  ArrowLeft,
  CheckCircle,
  Rocket,
  Zap,
  Trophy,
  Gamepad2,
  Lightbulb,
  PenTool,
  BarChart3,
  Heart
} from 'lucide-react';

// Reusable FadeIn component
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

export default function StudentsCorner() {
  return (
    <div className="min-h-screen bg-white font-poppins text-gray-800">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/skillsnaplogotransparent.png" 
              alt="SkillSnap Logo" 
              className="h-[150px] w-auto object-contain mt-4" 
            />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-900">
            <Link href="/students" className="text-orange-600 font-bold">Student's Corner</Link>
            <Link href="/parents" className="hover:text-orange-600 transition-colors">Parent's Corner</Link>
            <Link href="/#contact-form" className="hover:text-orange-600 transition-colors">Contact Us</Link>
          </div>
          <Link 
            href="/#contact-form"
            className="bg-blue-950 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-900 transition-all hover:scale-105 shadow-lg shadow-blue-200"
          >
            Start Learning
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-purple-50 via-pink-50 to-white">
        <div className="absolute top-0 right-0 -mr-20 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] bg-pink-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-32 right-20 hidden lg:block"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="bg-white p-3 rounded-xl shadow-lg">
            <Rocket size={32} className="text-purple-500" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-40 right-40 hidden lg:block"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="bg-white p-3 rounded-xl shadow-lg">
            <Star size={28} className="text-yellow-500" fill="currentColor" />
          </div>
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </FadeIn>
          
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6">
                <Gamepad2 size={16} />
                <span>Student Corner</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-950 mb-6 leading-tight">
                Your Learning Zone.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mt-2">
                  Your Rules. Your Future.
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-2xl text-gray-700 mb-4">
                Hey there! 👋
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Welcome to the Student Corner—a place where learning feels <strong>clear, cool, and totally doable</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Skillsnap Learning, we don't believe in boring lectures or stressful studying. We believe learning should help you <strong>understand better, feel confident, and enjoy the journey</strong>.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="mt-8">
                <Link 
                  href="/#contact-form"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <Rocket size={20} />
                  Start Your Journey
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STUDENT SECTIONS - ALTERNATING LAYOUT */}
      {/* ============================================ */}

      {/* 🎯 Learn with Clarity - Section 1 (Content LEFT, Visual RIGHT) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Content */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎯</span>
                  <span className="text-blue-700 font-bold text-lg">Learn with Clarity</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  No confusion. No pressure.
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  We teach step by step, so you always know:
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">What you're learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Why you're learning it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">How it connects to the next topic</span>
                  </li>
                </ul>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                  <p className="text-lg text-gray-700">
                    No jumping. No rushing. Just smooth learning 🚦
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Visual */}
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <Target size={48} className="text-blue-600" />
                  </div>
                  <p className="text-blue-800 font-semibold text-lg">Crystal Clear Learning</p>
                  <p className="text-blue-600 text-sm mt-2">Step by Step</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🧠 Learn at Your Own Speed - Section 2 (Visual LEFT, Content RIGHT) */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Visual */}
            <FadeIn>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px] order-2 lg:order-1">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <Brain size={48} className="text-purple-600" />
                  </div>
                  <p className="text-purple-800 font-semibold text-lg">Your Pace, Your Power</p>
                  <p className="text-purple-600 text-sm mt-2">No Pressure Learning</p>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Content */}
            <FadeIn delay={0.2}>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🧠</span>
                  <span className="text-purple-700 font-bold text-lg">Learn at Your Own Speed</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  Fast or slow—both are awesome
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  Everyone learns differently, and that's totally okay!
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">If you get it quickly, we help you go ahead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">If you need more time, we explain it again—no stress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">No comparisons. No judgment. Just progress</span>
                  </li>
                </ul>
                
                <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                  <p className="text-xl text-purple-700 font-bold text-center">
                    Your pace = your power 💪
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 📚 From "Oh no" to "Oh yes!" - Section 3 (Content LEFT, Visual RIGHT) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Content */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📚</span>
                  <span className="text-teal-700 font-bold text-lg">From "Oh no" to "Oh yes!"</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  Concepts that finally make sense
                </h2>
                
                <p className="text-lg text-gray-700 mb-4">
                  We focus on:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Clear explanations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Real examples</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Plenty of practice</span>
                  </li>
                </ul>
                
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-6 border border-teal-100">
                  <p className="text-gray-800 font-semibold mb-4">Soon you'll notice:</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-teal-600" />
                      <span className="text-gray-700">Less fear of exams</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-teal-600" />
                      <span className="text-gray-700">More confidence in answers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-teal-600" />
                      <span className="text-gray-700">Better problem-solving skills</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Visual */}
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <Lightbulb size={48} className="text-teal-600" />
                  </div>
                  <p className="text-teal-800 font-semibold text-lg">Concepts Made Easy</p>
                  <p className="text-teal-600 text-sm mt-2">Finally Makes Sense!</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🎥 Classes That Don't Feel Like Classes - Section 4 (Visual LEFT, Content RIGHT) */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Visual */}
            <FadeIn>
              <div className="bg-gradient-to-br from-rose-100 to-orange-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px] order-2 lg:order-1">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <Video size={48} className="text-rose-600" />
                  </div>
                  <p className="text-rose-800 font-semibold text-lg">Fun Learning</p>
                  <p className="text-rose-600 text-sm mt-2">Not Boring Classes</p>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Content */}
            <FadeIn delay={0.2}>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎥</span>
                  <span className="text-rose-700 font-bold text-lg">Classes That Don't Feel Like Classes</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  Learning can actually be fun 😄
                </h2>
                
                <p className="text-lg text-gray-700 mb-4">
                  Our lessons include:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Cool visuals and animations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Easy explanations for tough topics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Quizzes, games, and challenges</span>
                  </li>
                </ul>
                
                <div className="bg-white rounded-xl p-6 border border-rose-100 shadow-sm">
                  <p className="text-gray-700 mb-2">So instead of "Ugh, class time," you'll think—</p>
                  <p className="text-2xl text-rose-600 font-bold">"Let's do this!" 🚀</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 📝 Notes That Actually Help - Section 5 (Content LEFT, Visual RIGHT) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Content */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📝</span>
                  <span className="text-amber-700 font-bold text-lg">Notes That Actually Help</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  Perfect for revision before tests
                </h2>
                
                <p className="text-lg text-gray-700 mb-4">
                  You'll get:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Simple, clean notes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Quick revision points</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Practice help when you need it</span>
                  </li>
                </ul>
                
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-100">
                  <p className="text-lg text-gray-700">
                    Great for last-minute revision—and everyday learning too 📖✨
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Visual */}
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <PenTool size={48} className="text-amber-600" />
                  </div>
                  <p className="text-amber-800 font-semibold text-lg">Smart Notes</p>
                  <p className="text-amber-600 text-sm mt-2">Revision Made Easy</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ⏰ Smart Routine, Zero Stress - Section 6 (Visual LEFT, Content RIGHT) */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Visual */}
            <FadeIn>
              <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px] order-2 lg:order-1">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <Clock size={48} className="text-cyan-600" />
                  </div>
                  <p className="text-cyan-800 font-semibold text-lg">Smart Routine</p>
                  <p className="text-cyan-600 text-sm mt-2">Stay Regular, Stay Relaxed</p>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Content */}
            <FadeIn delay={0.2}>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">⏰</span>
                  <span className="text-cyan-700 font-bold text-lg">Smart Routine, Zero Stress</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  Stay regular, stay relaxed
                </h2>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Classes happen on weekdays like school</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Weekends are for revision and catch-up</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Learn anytime, anywhere—without losing focus</span>
                  </li>
                </ul>
                
                <div className="bg-white rounded-xl p-6 border border-cyan-100 shadow-sm">
                  <p className="text-xl text-cyan-700 font-bold text-center">
                    Good habits now = success later 🌟
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 📈 Track Your Growth - Section 7 (Content LEFT, Visual RIGHT) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Content */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📈</span>
                  <span className="text-indigo-700 font-bold text-lg">Track Your Growth</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  See yourself getting better every week
                </h2>
                
                <p className="text-lg text-gray-700 mb-4">
                  You can:
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Check what you're good at</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Improve what's tricky</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Watch your confidence grow</span>
                  </li>
                </ul>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <p className="text-xl text-indigo-700 font-bold text-center">
                    Progress feels amazing—trust us 🙌
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Visual */}
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <TrendingUp size={48} className="text-indigo-600" />
                  </div>
                  <p className="text-indigo-800 font-semibold text-lg">Track Progress</p>
                  <p className="text-indigo-600 text-sm mt-2">Watch Yourself Grow</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🌟 What You'll Gain */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl">🌟</span>
                <span className="text-yellow-700 font-bold text-lg">What You'll Gain</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-950">
                Not just marks, but mindset
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-8 lg:p-12 border border-yellow-100 shadow-lg">
                <p className="text-lg text-gray-700 mb-6">With Skillsnap Learning, you build:</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Star size={20} className="text-yellow-500" fill="currentColor" />
                    <span className="text-gray-800 font-medium text-lg">Confidence in learning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star size={20} className="text-yellow-500" fill="currentColor" />
                    <span className="text-gray-800 font-medium text-lg">Strong thinking skills</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star size={20} className="text-yellow-500" fill="currentColor" />
                    <span className="text-gray-800 font-medium text-lg">Discipline and focus</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star size={20} className="text-yellow-500" fill="currentColor" />
                    <span className="text-gray-800 font-medium text-lg">A positive attitude toward studies</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 😄 Fun Message from the CEO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl overflow-hidden border border-purple-100">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
                <div className="flex items-center gap-3 text-white">
                  <span className="text-2xl">😄</span>
                  <span className="text-xl font-bold">A Fun Message from the Founder</span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-blue-950 mb-6">Hey Superstar! 🌟</h3>
                
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>Hi there!</p>
                  
                  <p>
                    If you're reading this, here's something important you should know first:
                  </p>
                  
                  <p className="text-xl text-purple-700 font-bold">
                    👉 You are smarter than you think—and yes, you can totally do this.
                  </p>
                  
                  <p>
                    Learning isn't about being perfect or topping every test. It's about <strong>understanding, improving, and not giving up</strong> when something feels tricky. Even the best learners were once confused—and that's how learning actually starts 😉
                  </p>
                  
                  <p>
                    At Skillsnap Learning, we've built this space just for you:
                  </p>
                  
                  <ul className="space-y-2 my-6 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                      <span>To help you understand concepts clearly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                      <span>To make learning less stressful and more fun</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                      <span>To remind you that mistakes are part of success</span>
                    </li>
                  </ul>
                  
                  <p>
                    Some days you'll feel confident.<br/>
                    Some days you'll feel stuck.<br/>
                    <strong>Both are completely okay.</strong>
                  </p>
                  
                  <p>
                    Just promise yourself one thing—<strong>keep trying</strong>.
                  </p>
                  
                  <p>
                    Ask questions. Practice a little every day. Celebrate small wins. And never compare your journey with anyone else's.
                  </p>
                  
                  <p>
                    We're proud of you for showing up and learning.<br/>
                    <strong>Your future self will thank you for it</strong> 🙌
                  </p>
                  
                  <p className="text-xl text-purple-700 font-bold">
                    Now go crush your lessons—you've got this! 🚀
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-purple-200">
                  <p className="text-gray-500 text-sm">Cheers,</p>
                  <p className="text-xl font-bold text-blue-950">Aryan</p>
                  <p className="text-purple-600 font-medium">Founder & Director</p>
                  <p className="text-gray-500 text-sm">Skillsnap Learning Pvt Ltd</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Learning Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students who are learning smarter, not harder!
            </p>
            <Link 
              href="/#contact-form"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Sparkles size={20} />
              Let's Do This!
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-10 border-t border-gray-200 text-gray-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 text-center md:text-left">
            <p>&copy; 2026 Skillsnap Learning Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}