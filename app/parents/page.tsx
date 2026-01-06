'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Heart, 
  BookOpen, 
  Brain, 
  Target, 
  Video, 
  FileText, 
  Clock, 
  BarChart3, 
  Star, 
  Handshake,
  CheckCircle,
  ArrowLeft,
  Sparkles,
  Users,
  Shield,
  TrendingUp,
  Quote,
  GraduationCap,
  Lightbulb,
  Download,
  Calendar,
  Eye
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

export default function ParentsCorner() {
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
            <Link href="/students" className="hover:text-orange-600 transition-colors">Student's Corner</Link>
            <Link href="/parents" className="text-orange-600 font-bold">Parent's Corner</Link>
            <Link href="/#contact-form" className="hover:text-orange-600 transition-colors">Contact Us</Link>
          </div>
          <Link 
            href="/#contact-form"
            className="bg-blue-950 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-900 transition-all hover:scale-105 shadow-lg shadow-blue-200"
          >
            Talk to an Expert
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-rose-50 to-white">
        <div className="absolute top-0 right-0 -mr-20 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] bg-pink-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-600 transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </FadeIn>
          
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-100 text-rose-700 rounded-full text-sm font-bold mb-6">
                <span className="text-lg">🌱</span>
                <span>Parents' Corner</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-950 mb-6 leading-tight">
                Parents' Corner
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500 mt-2">
                  Because Every Child's Future Begins with Trust
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Skillsnap Learning, we understand one simple truth:
              </p>
              <p className="text-xl text-blue-950 font-semibold mt-2">
                👉 When parents feel confident, children learn better.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                This space is created exclusively for you—to give clarity, assurance, and a complete view of how we nurture your child's learning journey with care, structure, and purpose.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 💖 A Warm Welcome to Parents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <div className="bg-gradient-to-br from-rose-100 to-orange-100 rounded-3xl p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">💖</span>
                    <span className="text-rose-700 font-bold text-lg">A Warm Welcome to Parents</span>
                  </div>
                  <h2 className="text-3xl font-bold text-blue-950 mb-6">
                    You're Not Just Observers—<br/>You're Our Partners
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Every parent wants their child to feel confident, capable, and ahead—not stressed or confused.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At Skillsnap Learning, we walk hand in hand with parents, ensuring that your child doesn't just study, but <strong>understands, applies, and grows</strong>.
                  </p>
                  <p className="text-rose-700 font-semibold text-lg">
                    Your trust matters to us—and we earn it every single day through our work.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/parents-teaching-child.png" 
                  alt="Parent and child learning together" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW WE TEACH SECTIONS - ALTERNATING LAYOUT */}
      {/* ============================================ */}

      {/* 🎓 How We Teach - Section 1 (Content LEFT, Visual RIGHT) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Content */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎓</span>
                  <span className="text-blue-700 font-bold text-lg">How We Teach (Parent-Friendly & Transparent)</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  Learning should feel guided, not overwhelming
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  We follow a step-by-step academic approach:
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Concepts move from foundation → clarity → application → mastery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Lessons are not dumped all at once, preventing confusion and screen fatigue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Learning feels like a well-planned classroom—not a chaotic video library</span>
                  </li>
                </ul>
                
                <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
                  <p className="text-gray-800 font-semibold mb-4">Your child always knows:</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-teal-600" />
                      <span className="text-gray-700">What to study</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-teal-600" />
                      <span className="text-gray-700">When to study</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-teal-600" />
                      <span className="text-gray-700">Why they are studying it</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Visual */}
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <GraduationCap size={48} className="text-blue-600" />
                  </div>
                  <p className="text-blue-800 font-semibold text-lg">Structured Learning</p>
                  <p className="text-blue-600 text-sm mt-2">Step by Step Progress</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🧠 Personalized Learning - Section 2 (Visual LEFT, Content RIGHT) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Visual */}
            <FadeIn>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px] order-2 lg:order-1">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <Brain size={48} className="text-purple-600" />
                  </div>
                  <p className="text-purple-800 font-semibold text-lg">AI-Powered Learning</p>
                  <p className="text-purple-600 text-sm mt-2">Adapts to Every Child</p>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Content */}
            <FadeIn delay={0.2}>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🧠</span>
                  <span className="text-purple-700 font-bold text-lg">Personalized Learning for Every Child</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  Because no two children learn the same way
                </h2>
                
                <p className="text-lg text-gray-700 mb-4">
                  Every child has a unique pace, strength, and learning style.
                </p>
                
                <p className="text-lg text-gray-700 mb-6">
                  Our AI-powered learning system adapts content according to:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Understanding level</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Learning speed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Performance patterns</span>
                  </li>
                </ul>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <p className="text-gray-800 font-semibold mb-4">This means:</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">✨</span>
                      <span className="text-gray-700">Fast learners stay challenged</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">✨</span>
                      <span className="text-gray-700">Steady learners stay confident</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">✨</span>
                      <span className="text-gray-700">No child feels left behind</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 📚 Beyond School & Tuition Learning - Section 3 (Content LEFT, Visual RIGHT) */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Content */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📚</span>
                  <span className="text-blue-700 font-bold text-lg">Beyond School & Tuition Learning</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  Preparing children for more than exams
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  We don't limit learning to textbooks or NCERT alone.
                </p>
                
                <p className="text-lg text-gray-700 mb-4">
                  Your child learns:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Advanced concepts explained simply</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Logical thinking & problem-solving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Real-world application of concepts</span>
                  </li>
                </ul>
                
                <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
                  <p className="text-gray-800 font-semibold mb-4">This builds:</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-teal-600" />
                      <span className="text-gray-700">Strong fundamentals</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-teal-600" />
                      <span className="text-gray-700">Exam confidence</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-teal-600" />
                      <span className="text-gray-700">Competitive-edge thinking</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Visual */}
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <BookOpen size={48} className="text-blue-600" />
                  </div>
                  <p className="text-blue-800 font-semibold text-lg">Beyond Textbooks</p>
                  <p className="text-blue-600 text-sm mt-2">Real-World Skills</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🎥 Interactive, Visual & Engaging Lessons - Section 4 (Visual LEFT, Content RIGHT) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Visual */}
            <FadeIn>
              <div className="bg-gradient-to-br from-rose-100 to-orange-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px] order-2 lg:order-1">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <Video size={48} className="text-rose-600" />
                  </div>
                  <p className="text-rose-800 font-semibold text-lg">Interactive Learning</p>
                  <p className="text-rose-600 text-sm mt-2">Engaging & Fun</p>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Content */}
            <FadeIn delay={0.2}>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎥</span>
                  <span className="text-rose-700 font-bold text-lg">Interactive, Visual & Engaging Lessons</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  Because learning should never feel boring
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  Children today learn best when they see, interact, and explore.
                </p>
                
                <p className="text-lg text-gray-700 mb-4">
                  That's why our lessons include:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Visual graphics & animations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Playful, concept-based videos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Quizzes, puzzles & mini challenges</span>
                  </li>
                </ul>
                
                <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-6 border border-rose-100">
                  <p className="text-gray-800 font-semibold mb-2">Result?</p>
                  <p className="text-lg text-gray-700">
                    Your child doesn't just attend class—<span className="text-rose-600 font-bold">they look forward to it.</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🗂 Well-Planned Notes & Study Material - Section 5 (Content LEFT, Visual RIGHT) */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Content */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🗂</span>
                  <span className="text-amber-700 font-bold text-lg">Well-Planned Notes & Study Material</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  Support even after the class ends
                </h2>
                
                <p className="text-lg text-gray-700 mb-4">
                  Every lesson comes with:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Clear, structured key notes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Quick revision summaries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Downloadable study material</span>
                  </li>
                </ul>
                
                <div className="bg-white rounded-xl p-6 border border-amber-100 shadow-sm">
                  <p className="text-lg text-gray-700">
                    So even if your child revises alone, they are <span className="text-amber-700 font-bold">never confused or lost</span>.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Visual */}
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <FileText size={48} className="text-amber-600" />
                  </div>
                  <p className="text-amber-800 font-semibold text-lg">Complete Study Material</p>
                  <p className="text-amber-600 text-sm mt-2">Notes & Revisions</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ⏰ Structured Learning with Flexible Access - Section 6 (Visual LEFT, Content RIGHT) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Visual */}
            <FadeIn>
              <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px] order-2 lg:order-1">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <Clock size={48} className="text-cyan-600" />
                  </div>
                  <p className="text-cyan-800 font-semibold text-lg">Flexible Schedule</p>
                  <p className="text-cyan-600 text-sm mt-2">Discipline + Comfort</p>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Content */}
            <FadeIn delay={0.2}>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">⏰</span>
                  <span className="text-cyan-700 font-bold text-lg">Structured Learning with Flexible Access</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  Discipline with comfort
                </h2>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Classes run Monday to Friday—like a real academic routine</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">All lectures remain accessible on weekends for revision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Learn anytime, anywhere—without pressure</span>
                  </li>
                </ul>
                
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-6 border border-cyan-100">
                  <p className="text-gray-800 font-semibold mb-4">This balance builds:</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📌</span>
                      <span className="text-gray-700">Discipline</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📌</span>
                      <span className="text-gray-700">Consistency</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📌</span>
                      <span className="text-gray-700">Healthy study habits</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 📊 Progress Tracking & Parent Reports */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Content */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📊</span>
                  <span className="text-teal-700 font-bold text-lg">Progress Tracking & Parent Reports</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                  You always know how your child is doing
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  We believe parents deserve <strong>visibility, not assumptions</strong>.
                </p>
                
                <p className="text-lg text-gray-700 mb-4">
                  You receive:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Regular progress reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Performance insights (strengths & improvement areas)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                    <span className="text-gray-700">Test scores & learning analytics</span>
                  </li>
                </ul>
                
                <div className="bg-white rounded-xl p-6 border border-teal-100 shadow-sm text-center">
                  <p className="text-gray-600 mb-2">No guessing. No uncertainty.</p>
                  <p className="text-teal-700 font-bold text-lg">Just clear academic growth.</p>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT - Visual */}
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <BarChart3 size={48} className="text-teal-600" />
                  </div>
                  <p className="text-teal-800 font-semibold text-lg">Progress Reports</p>
                  <p className="text-teal-600 text-sm mt-2">Clear Visibility</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🌟 Learning Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl">🌟</span>
                <span className="text-yellow-700 font-bold text-lg">Learning Outcomes You'll Actually See</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 lg:p-12 border border-yellow-100">
                <p className="text-lg text-gray-700 mb-6">With Skillsnap Learning, parents notice:</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <Star size={20} className="text-yellow-500" fill="currentColor" />
                    <span className="text-gray-800 font-medium">Improved academic performance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star size={20} className="text-yellow-500" fill="currentColor" />
                    <span className="text-gray-800 font-medium">Stronger concept clarity</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star size={20} className="text-yellow-500" fill="currentColor" />
                    <span className="text-gray-800 font-medium">Better focus & confidence</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star size={20} className="text-yellow-500" fill="currentColor" />
                    <span className="text-gray-800 font-medium">Independent learning habits</span>
                  </li>
                </ul>
                <div className="text-center pt-6 border-t border-yellow-200">
                  <p className="text-lg text-gray-700">
                    Most importantly—<br/>
                    <span className="text-2xl font-bold text-blue-950">children begin to believe in themselves.</span>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🤝 Our Promise to Parents */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl">🤝</span>
                <span className="text-orange-300 font-bold text-lg">Our Promise to Parents</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Care. Clarity. Commitment.</h2>
              <div className="max-w-2xl mx-auto space-y-4 text-xl text-blue-200">
                <p>We don't just teach subjects—<strong className="text-white">we shape mindsets</strong>.</p>
                <p>We don't just deliver classes—<strong className="text-white">we build futures</strong>.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
              <p className="text-lg text-blue-100 text-center leading-relaxed">
                Your child's growth is our shared responsibility, and we take that responsibility with <strong className="text-white">heart, honesty, and excellence</strong>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ✉ CEO Message Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6">
                <div className="flex items-center gap-3 text-white">
                  <span className="text-2xl">✉</span>
                  <span className="text-xl font-bold">A Message from the Founder</span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-blue-950 mb-6">Building Futures Through Purposeful Learning</h3>
                
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p><strong className="text-gray-800">Dear Parents,</strong></p>
                  
                  <p>
                    Education is not merely about completing syllabi or achieving scores—it is about shaping character, confidence, and capability for life. When you choose a learning partner for your child, you entrust them with something invaluable: your child's future.
                  </p>
                  
                  <p>
                    At Skillsnap Learning, we accept this responsibility with the highest sense of commitment and integrity.
                  </p>
                  
                  <p>
                    Our vision is to create an academic environment where learning is structured, progressive, and deeply meaningful. We believe that true education empowers students to think independently, apply knowledge practically, and approach challenges with confidence rather than fear.
                  </p>
                  
                  <p>
                    Every program at Skillsnap Learning is thoughtfully designed to respect the individuality of each learner. By combining disciplined academic structure with modern technology and personalized learning pathways, we ensure that:
                  </p>
                  
                  <ul className="space-y-2 my-6 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                      <span>Students progress with clarity and confidence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                      <span>Learning remains consistent, focused, and engaging</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                      <span>No child feels overwhelmed or left behind</span>
                    </li>
                  </ul>
                  
                  <p>
                    We do not believe in shortcuts or surface-level learning. Our emphasis remains firmly on <strong>strong foundations, conceptual mastery, and long-term academic growth</strong>—values that remain relevant far beyond school years.
                  </p>
                  
                  <p>
                    As parents, your aspirations for your child are driven by care, effort, and sacrifice. Our role is to complement that dedication with an education system that is reliable, transparent, and future-ready.
                  </p>
                  
                  <p>
                    I assure you that Skillsnap Learning will continue to evolve responsibly—guided by educational excellence, ethical practices, and an unwavering commitment to student success.
                  </p>
                  
                  <p>
                    Thank you for placing your trust in us. Together, let us nurture confident learners today and capable leaders for tomorrow.
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-500 text-sm">With sincere regards,</p>
                  <p className="text-xl font-bold text-blue-950">Aryan</p>
                  <p className="text-orange-600 font-medium">Founder & Director</p>
                  <p className="text-gray-500 text-sm">Skillsnap Learning Pvt Ltd</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
              Ready to Give Your Child the Best Learning Experience?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of parents who trust Skillsnap Learning for their child's academic success.
            </p>
            <Link 
              href="/#contact-form"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-200 hover:shadow-xl hover:scale-105 transition-all"
            >
              Get Started Today
              <Sparkles size={20} />
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