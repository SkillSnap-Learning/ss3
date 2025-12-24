'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Play, 
  BookOpen, 
  Shield, 
  Award, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  Star,
  Zap,
  Code
} from 'lucide-react';

// --- Components ---

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

export default function SkillsnapLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-orange-200">
      
      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">Skill<span className="text-orange-600">Snap</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#curriculum" className="hover:text-orange-600 transition-colors">Curriculum</a>
            <a href="#parents" className="hover:text-orange-600 transition-colors">For Parents</a>
            <a href="#reviews" className="hover:text-orange-600 transition-colors">Reviews</a>
          </div>
          <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-gray-200">
            Book Free Demo
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
          
          {/* Left: Content */}
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                <Zap size={14} fill="currentColor" />
                Trusted by 500+ Parents
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
                Master the Syllabus. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  Crack the Future.
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                The only platform for Class 6-10 that combines <strong>School Academics</strong> with <strong>Future Tech Skills</strong> (Coding & AI). 
              </p>
            </FadeIn>

            {/* Lead Form Box */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-md">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                  Book a Free Demo Class
                </h3>
                <form className="space-y-3">
                  <input type="text" placeholder="Parent's Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-gray-500">
                    <option>Select Student's Class</option>
                    <option>Class 6</option>
                    <option>Class 7</option>
                    <option>Class 8</option>
                    <option>Class 9</option>
                    <option>Class 10</option>
                  </select>
                  <button className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-200 hover:shadow-xl hover:scale-[1.02] transition-all">
                    Unlock Free Trial
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-2">No credit card required. 100% Free.</p>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:block h-[600px]">
             {/* Abstract representation of student excitement */}
             <div className="absolute inset-0 bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                {/* Replace this div with a real image of a happy student later */}
                <div className="w-full h-full bg-slate-200 flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-orange-500/20 mix-blend-multiply"></div>
                   <span className="text-gray-400 font-medium">[Image: Happy Student with Tablet]</span>
                </div>
             </div>
             
             {/* Floating Elements */}
             <FloatingBadge 
               icon={Award} 
               text="Top Scorer" 
               className="top-10 -left-10" 
             />
             <FloatingBadge 
               icon={Code} 
               text="Python Certified" 
               className="bottom-20 -right-5" 
             />
             <div className="absolute bottom-10 left-10 p-4 bg-white/90 backdrop-blur rounded-xl shadow-lg border border-teal-100 max-w-[200px]">
                <div className="flex gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_,i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-xs font-semibold text-gray-700">"My son loves the coding classes!"</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- Social Proof --- */}
      <section className="py-10 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Trusted by parents from top schools</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos */}
             {['DPS', 'Ryan International', 'Kendriya Vidyalaya', 'Dav Public School'].map((school) => (
               <span key={school} className="text-xl font-bold text-gray-400 hover:text-gray-800 transition-colors">{school}</span>
             ))}
          </div>
        </div>
      </section>

      {/* --- Parent's Peace of Mind --- */}
      <section id="parents" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Parents Trust SkillSnap</h2>
              <p className="text-lg text-gray-600">We balance academic rigour with modern skills.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                color: "text-blue-600",
                bg: "bg-blue-100",
                title: "Curriculum Aligned",
                desc: "100% mapped to CBSE & ICSE syllabus. We don't distract them; we support their school exams."
              },
              {
                icon: Shield,
                color: "text-teal-600",
                bg: "bg-teal-100",
                title: "Safe & Distraction Free",
                desc: "A secure, ad-free environment dedicated solely to learning. No social media distractions."
              },
              {
                icon: Users,
                color: "text-purple-600",
                bg: "bg-purple-100",
                title: "Progress Reports",
                desc: "Get weekly WhatsApp reports on your child's attendance, test scores, and areas of improvement."
              }
            ].map((feature, idx) => (
              <FadeIn delay={idx * 0.1} key={idx}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon size={28} className={feature.color} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- Student's Excitement (The Vibe) --- */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Decorative Grid */}
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
                  { title: "Gamified Learning", desc: "Earn badges, climb leaderboards, and unlock rewards for finishing homework." },
                  { title: "Real Coding Projects", desc: "Don't just memorize. Build websites, games, and apps from Class 6." },
                  { title: "Bite-sized Videos", desc: "Short, high-energy videos that explain complex Physics concepts in minutes." }
                ].map((item, i) => (
                  <FadeIn delay={i * 0.2} key={i}>
                    <div className="flex gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0 font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400">{item.desc}</p>
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
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-2xl border border-gray-700 shadow-2xl"
              >
                {/* Mock UI of the Platform */}
                <div className="aspect-video bg-gray-950 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
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

      {/* --- Curriculum Section --- */}
      <section id="curriculum" className="py-24 bg-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Complete Syllabus Coverage</h2>
            <p className="text-lg text-gray-600">Plus the skills tomorrow's jobs will demand.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { subject: "Mathematics", topics: ["Algebra", "Geometry", "Vedic Math"] },
              { subject: "Science", topics: ["Physics", "Chemistry", "Biology"] },
              { subject: "English", topics: ["Grammar", "Creative Writing", "Debating"] },
              { subject: "Coding (Extra)", topics: ["Python", "Web Dev", "AI Basics"], highlight: true },
            ].map((card, idx) => (
              <div key={idx} className={`p-6 rounded-2xl bg-white shadow-sm border ${card.highlight ? 'border-orange-500 ring-4 ring-orange-500/10' : 'border-gray-100'} hover:shadow-lg transition-shadow`}>
                <h3 className={`text-xl font-bold mb-4 ${card.highlight ? 'text-orange-600' : 'text-gray-800'}`}>{card.subject}</h3>
                <ul className="space-y-3">
                  {card.topics.map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle size={16} className={card.highlight ? "text-orange-500" : "text-teal-500"} />
                      {t}
                    </li>
                  ))}
                </ul>
                {card.highlight && <span className="mt-6 inline-block text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded">Recommended</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Real Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
             {/* Parent Review */}
             <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative">
               <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full text-2xl font-serif">"</div>
               <p className="text-gray-700 italic mb-6">
                 "I was worried about online classes being a waste of time. But SkillSnap is different. My son actually finishes his Maths homework to unlock his Coding class. It's brilliant."
               </p>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                 <div>
                   <p className="font-bold text-gray-900">Mrs. Sharma</p>
                   <p className="text-xs text-gray-500">Parent of Class 8 Student</p>
                 </div>
               </div>
             </div>

             {/* Student Review */}
             <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-teal-500 text-white flex items-center justify-center rounded-full text-2xl font-serif">"</div>
               <p className="text-gray-700 italic mb-6">
                 "Science used to be boring. Now I watch the animated experiments and I understand everything. Also, I made my own website last week!"
               </p>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                 <div>
                   <p className="font-bold text-gray-900">Aryan K.</p>
                   <p className="text-xs text-gray-500">Class 7 Student</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is this a replacement for school?", a: "No, Skillsnap is a companion. We help students master their school syllabus so they score higher, while adding future skills like coding that schools often miss." },
              { q: "How much time does a student need to spend?", a: "Just 40 minutes a day. We believe in smart learning, not long hours." },
              { q: "Can I try it before buying?", a: "Absolutely. We offer a 7-day free trial including 2 live demo classes. No payment required." }
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === i && (
                  <div className="p-4 bg-white text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA / Footer --- */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4">Ready to boost your child's confidence?</h2>
              <p className="text-gray-400">Join 5,000+ students learning smarter, not harder.</p>
            </div>
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-lg shadow-lg shadow-orange-900/50 transition-all hover:scale-105">
              Book Your Free Demo
            </button>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
             <p>&copy; 2024 Skillsnap Education. All rights reserved.</p>
             <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-white">Privacy Policy</a>
               <a href="#" className="hover:text-white">Terms of Service</a>
             </div>
          </div>
        </div>
      </footer>

    </div>
  );
}