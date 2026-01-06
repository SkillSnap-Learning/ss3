import { 
  Zap,
  Code,
  Globe,
  Beaker,
  Calculator,
  PenTool,
  Phone,
} from 'lucide-react';


// --- Data: Curriculum with Details ---
export const CURRICULUM_DATA: Record<string, any> = {
  /* =========================
       CLASS 6
  ========================= */
  "Class 6": [
    {
      subject: "Mathematics",
      tagline: "Building Strong Maths Foundations the Fun Way",
      icon: Calculator,
      color: "text-blue-700",
      bg: "bg-blue-100",
      summary: [
        "Strong Number Sense",
        "Conceptual Understanding",
        "Problem-Solving Skills",
        "Geometry & Visualization",
        "Algebraic Thinking",
        "Data Handling & Logical Thinking",
        "Consistent Practice",
        "Fun & Engaging Methods"
      ],
      details: [
        {
          title: "Strong Number Sense",
          points: [
            "Master place value, integers, fractions, and decimals",
            "Develops mental math and calculation accuracy",
            "Build confidence in basic operations"
          ]
        },
        {
          title: "Conceptual Understanding",
          points: [
            "Focus on why formulas work, not just memorizing",
            "Use real-life examples to relate concepts",
            "Grasp ratios, proportions, and percentages practically"
          ]
        },
        {
          title: "Problem-Solving Skills",
          points: [
            "Step-by-step approach for word problems",
            "Break complex problems into manageable parts",
            "Fun puzzles and challenges to strengthen logic"
          ]
        },
        {
          title: "Geometry & Visualization",
          points: [
            "Learn lines, angles, shapes, and symmetry",
            "Hands-on activities: drawing, measuring, and modeling",
            "Apply area, perimeter, and volume in practical contexts"
          ]
        },
        {
          title: "Algebraic Thinking",
          points: [
            "Introduction to variables and simple equations",
            "Identify patterns and relationships",
            "Apply algebra in everyday problems"
          ]
        },
        {
          title: "Data Handling & Logical Thinking",
          points: [
            "Interpret bar graphs, pictographs, and charts",
            "Learn basic mean, median, and mode",
            "Develop critical thinking and analytical skills"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Daily exercises and quizzes to reinforce learning",
            "Mix of numerical, word, and real-life problems",
            "Track progress and celebrate milestones"
          ]
        },
        {
          title: "Fun & Engaging Methods",
          points: [
            "Graphics, interactive quizzes, and gamified learning",
            "Collaborative group activities and peer discussions",
            "Learning through exploration and experimentation"
          ]
        }
      ]
    },
    {
      subject: "English",
      tagline: "English Made Easy, Engaging, and Effective",
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-100",
      summary: [
        "Strong Vocabulary",
        "Grammar Mastery",
        "Reading Comprehension",
        "Writing Skills",
        "Listening & Speaking Skills",
        "Literature & Text Analysis",
        "Consistent Practice",
        "Fun & Interactive Learning"
      ],
      details: [
        {
          title: "Strong Vocabulary",
          points: [
            "Learn new words and their meanings contextually",
            "Use words effectively in sentences and writing",
            "Develop spelling, synonyms, antonyms, and word formation skills"
          ]
        },
        {
          title: "Grammar Mastery",
          points: [
            "Understand parts of speech, tenses, and sentence structure",
            "Learn punctuation, subject-verb agreement, and voice",
            "Apply grammar rules in writing and speaking confidently"
          ]
        },
        {
          title: "Reading Comprehension",
          points: [
            "Develop skills to understand and interpret texts",
            "Practice skimming, scanning, and critical reading",
            "Answer comprehension questions with accuracy"
          ]
        },
        {
          title: "Writing Skills",
          points: [
            "Practice paragraph writing, letters, and essays",
            "Develop creative writing, storytelling, and descriptive skills",
            "Focus on clarity, coherence, and correct grammar"
          ]
        },
        {
          title: "Listening & Speaking Skills",
          points: [
            "Enhance pronunciation, intonation, and clarity",
            "Practice conversational English and presentations",
            "Listening comprehension and response exercises"
          ]
        },
        {
          title: "Literature & Text Analysis",
          points: [
            "Explore poems, stories, and plays from the curriculum",
            "Learn to analyze characters, plots, and themes",
            "Develop appreciation for language and literary devices"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Daily exercises for vocabulary, grammar, and writing",
            "Regular reading and comprehension practice",
            "Quizzes and assessments to track progress"
          ]
        },
        {
          title: "Fun & Interactive Learning",
          points: [
            "Gamified exercises for vocabulary and grammar",
            "Role-plays, storytelling, and creative writing activities",
            "Interactive worksheets, quizzes, and multimedia resources"
          ]
        }
      ]
    },
    {
      subject: "Interactive Science",
      tagline: "Explore, Experiment, Excel in Science",
      icon: Beaker,
      color: "text-teal-600",
      bg: "bg-teal-100",
      summary: [
        "Conceptual Understanding",
        "Hands-On Visual Experiments",
        "Critical Thinking & Problem Solving",
        "Scientific Inquiry & Exploration",
        "Application & Real-World Connections",
        "Reading & Research Skills",
        "Consistent Practice",
        "Fun & Interactive Learning"
      ],
      details: [
        {
          title: "Conceptual Understanding",
          points: [
            "Learn the fundamentals of Physics, Chemistry, and Biology",
            "Understand scientific concepts, not just memorize facts",
            "Connect theory with real-life examples"
          ]
        },
        {
          title: "Hands-On Visual Experiments",
          points: [
            "Conduct experiments to see concepts in action",
            "Learn through observation, analysis, and discovery",
            "Safe and guided practical activities"
          ]
        },
        {
          title: "Critical Thinking & Problem Solving",
          points: [
            "Develop logical reasoning and analytical skills",
            "Solve scientific problems step by step",
            "Encourage curiosity and asking \"why\""
          ]
        },
        {
          title: "Scientific Inquiry & Exploration",
          points: [
            "Learn to ask questions, form hypotheses, and test them",
            "Explore concepts through projects and experiments",
            "Develop research and investigative skills"
          ]
        },
        {
          title: "Application & Real-World Connections",
          points: [
            "Relate science to everyday life and technology",
            "Understand how science impacts the world around us",
            "Apply learning in practical scenarios"
          ]
        },
        {
          title: "Reading & Research Skills",
          points: [
            "Read scientific texts and interpret information",
            "Summarize and present findings clearly",
            "Build independent learning habits"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Daily exercises, quizzes, and mini-experiments",
            "Reinforce learning through revision and application",
            "Track progress and celebrate achievements"
          ]
        },
        {
          title: "Fun & Interactive Learning",
          points: [
            "Gamified experiments, simulations, and multimedia content",
            "Collaborative projects and peer discussions",
            "Learning science through curiosity and exploration"
          ]
        }
      ]
    },
    {
      subject: "Exploratory Social Studies",
      tagline: "Discover, Analyze, and Connect with the World",
      icon: Globe,
      color: "text-orange-600",
      bg: "bg-orange-100",
      summary: [
        "Understanding Society & Culture",
        "Geography & Environment",
        "Civics & Governance",
        "History & Timeline Exploration",
        "Research & Critical Thinking",
        "Application & Real-World Connections",
        "Consistent Practice",
        "Fun & Interactive Learning"
      ],
      details: [
        {
          title: "Understanding Society & Culture",
          points: [
            "Learn about communities, traditions, and cultural practices",
            "Explore history, heritage, and diversity",
            "Connect past events to present-day society"
          ]
        },
        {
          title: "Geography & Environment",
          points: [
            "Study maps, landforms, climate, and ecosystems",
            "Understand human-environment interaction",
            "Explore local and global geography through interactive activities"
          ]
        },
        {
          title: "Civics & Governance",
          points: [
            "Learn about government, democracy, and citizen responsibilities",
            "Understand laws, rights, and duties",
            "Explore social issues and civic engagement"
          ]
        },
        {
          title: "History & Timeline Exploration",
          points: [
            "Discover historical events and timelines",
            "Analyze causes, effects, and significance of events",
            "Learn to critically evaluate sources and evidence"
          ]
        },
        {
          title: "Research & Critical Thinking",
          points: [
            "Conduct small projects and investigations",
            "Develop analytical and reasoning skills",
            "Interpret data, charts, and historical texts"
          ]
        },
        {
          title: "Application & Real-World Connections",
          points: [
            "Relate lessons to real-world scenarios and current events",
            "Learn practical life skills through social understanding",
            "Understand global perspectives and local relevance"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Daily exercises, quizzes, and map activities",
            "Reinforce knowledge through review and reflection",
            "Track learning milestones and achievements"
          ]
        },
        {
          title: "Fun & Interactive Learning",
          points: [
            "Gamified activities, simulations, and role-playing exercises",
            "Collaborative projects and discussions",
            "Learning through exploration, storytelling, and interactive content"
          ]
        }
      ]
    },
    {
      subject: "Coding",
      tagline: "Logic, Algorithms & Creative Coding",
      icon: Code,
      color: "text-purple-600",
      bg: "bg-purple-100",
      isCoding: true,
      summary: [
        "Computational Thinking",
        "Visual Coding (Advanced Scratch)",
        "Logic to Text Bridge",
        "Mini Projects & Games"
      ],
      details: [
        {
          title: "Computational Thinking",
          points: [
            "How computers 'think'",
            "Decomposition & pattern recognition",
            "Algorithm writing (daily-life → code logic)",
            "Flowcharts & decision trees"
          ]
        },
        {
          title: "Visual Coding (Advanced Scratch)",
          points: [
            "Event-driven programming",
            "Loops & nested loops",
            "Conditions & variables",
            "Game logic (score, levels, lives)"
          ]
        },
        {
          title: "Logic → Text Bridge",
          points: [
            "Pseudocode writing",
            "Converting Scratch logic to text logic",
            "Introduction to Python syntax (no heavy theory)"
          ]
        },
        {
          title: "Mini Projects",
          points: [
            "Logic-based games",
            "Animated storytelling with rules",
            "Quiz & puzzle creators"
          ]
        }
      ]
    }
  ],

  /* =========================
       CLASS 7
  ========================= */
  "Class 7": [
    {
      subject: "Mathematics",
      tagline: "Strengthening Logic, Accuracy & Real-World Maths Skills",
      icon: Calculator,
      color: "text-blue-700",
      bg: "bg-blue-100",
      summary: [
        "Advanced Number Sense",
        "Concept-Based Learning",
        "Problem-Solving Mastery",
        "Geometry & Spatial Visualization",
        "Algebraic Foundations",
        "Data Handling & Analytical Thinking",
        "Consistent Practice",
        "Fun & Engaging Learning"
      ],
      details: [
        {
          title: "Advanced Number Sense",
          points: [
            "Deepen understanding of integers, rational numbers, and decimals",
            "Strengthen mental math and estimation skills",
            "Improve speed and accuracy in calculations"
          ]
        },
        {
          title: "Concept-Based Learning",
          points: [
            "Understand the logic behind formulas and rules",
            "Apply ratios, proportions, percentages, and profit & loss concepts",
            "Use real-life situations to reinforce mathematical thinking"
          ]
        },
        {
          title: "Problem-Solving Mastery",
          points: [
            "Solve multi-step word problems with confidence",
            "Learn structured approaches to complex problems",
            "Engage in logical puzzles and reasoning challenges"
          ]
        },
        {
          title: "Geometry & Spatial Visualization",
          points: [
            "Explore lines, angles, triangles, congruence, and symmetry",
            "Learn construction and measurement techniques",
            "Apply perimeter, area, and volume to real-world examples"
          ]
        },
        {
          title: "Algebraic Foundations",
          points: [
            "Work with expressions, equations, and simple linear equations",
            "Identify patterns and relationships",
            "Apply algebra to daily-life situations"
          ]
        },
        {
          title: "Data Handling & Analytical Thinking",
          points: [
            "Interpret bar graphs, pie charts, and data tables",
            "Learn mean, median, mode, and probability basics",
            "Develop analytical and reasoning abilities"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Daily exercises and topic-wise quizzes",
            "Balanced mix of numerical, logical, and application-based questions",
            "Progress tracking and milestone achievements"
          ]
        },
        {
          title: "Fun & Engaging Learning",
          points: [
            "Visual explanations, interactive quizzes, and gamified tasks",
            "Group problem-solving and peer learning",
            "Learn by exploring, experimenting, and applying concepts"
          ]
        }
      ]
    },
    {
      subject: "English",
      tagline: "Building Strong Communication & Language Confidence",
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-100",
      summary: [
        "Vocabulary Enhancement",
        "Grammar Proficiency",
        "Reading Comprehension & Analysis",
        "Writing Skills Development",
        "Listening & Speaking Skills",
        "Literature Appreciation & Analysis",
        "Regular Practice & Assessment",
        "Interactive & Enjoyable Learning"
      ],
      details: [
        {
          title: "Vocabulary Enhancement",
          points: [
            "Expand vocabulary through contextual learning",
            "Improve word usage, synonyms, antonyms, and spellings",
            "Develop expressive language skills"
          ]
        },
        {
          title: "Grammar Proficiency",
          points: [
            "Master tenses, voice, narration, and sentence structures",
            "Learn correct usage of punctuation and clauses",
            "Apply grammar confidently in writing and speaking"
          ]
        },
        {
          title: "Reading Comprehension & Analysis",
          points: [
            "Understand and interpret prose, poetry, and unseen passages",
            "Develop critical reading and inference skills",
            "Answer comprehension questions accurately"
          ]
        },
        {
          title: "Writing Skills Development",
          points: [
            "Practice formal and informal writing formats",
            "Improve creative writing, essays, and descriptive pieces",
            "Focus on clarity, structure, and grammatical accuracy"
          ]
        },
        {
          title: "Listening & Speaking Skills",
          points: [
            "Enhance pronunciation, fluency, and confidence",
            "Practice presentations, discussions, and conversations",
            "Listening comprehension and response activities"
          ]
        },
        {
          title: "Literature Appreciation & Analysis",
          points: [
            "Study stories, poems, and plays from the syllabus",
            "Analyze characters, themes, and literary devices",
            "Develop appreciation for language and expression"
          ]
        },
        {
          title: "Regular Practice & Assessment",
          points: [
            "Daily grammar and vocabulary exercises",
            "Writing tasks and reading practice",
            "Quizzes and progress assessments"
          ]
        },
        {
          title: "Interactive & Enjoyable Learning",
          points: [
            "Role-plays, storytelling, and language games",
            "Multimedia learning resources",
            "Creative expression through activities"
          ]
        }
      ]
    },
    {
      subject: "Interactive Science",
      tagline: "Understanding Science Through Curiosity & Application",
      icon: Beaker,
      color: "text-teal-600",
      bg: "bg-teal-100",
      summary: [
        "Strong Conceptual Foundations",
        "Visual & Hands-On Experiments",
        "Critical Thinking & Scientific Reasoning",
        "Scientific Inquiry & Exploration",
        "Real-World Applications",
        "Reading & Research Skills",
        "Consistent Practice",
        "Fun & Engaging Learning"
      ],
      details: [
        {
          title: "Strong Conceptual Foundations",
          points: [
            "Learn Physics, Chemistry, and Biology concepts clearly",
            "Focus on understanding rather than memorization",
            "Connect science with everyday experiences"
          ]
        },
        {
          title: "Visual & Hands-On Experiments",
          points: [
            "Observe and conduct guided experiments",
            "Learn through demonstrations and simulations",
            "Safe and structured practical exposure"
          ]
        },
        {
          title: "Critical Thinking & Scientific Reasoning",
          points: [
            "Analyze problems logically",
            "Apply scientific methods step by step",
            "Encourage curiosity and questioning"
          ]
        },
        {
          title: "Scientific Inquiry & Exploration",
          points: [
            "Learn to observe, hypothesize, and experiment",
            "Project-based learning for deeper understanding",
            "Develop research and investigation skills"
          ]
        },
        {
          title: "Real-World Applications",
          points: [
            "Relate science concepts to daily life and technology",
            "Understand scientific impact on society",
            "Apply knowledge practically"
          ]
        },
        {
          title: "Reading & Research Skills",
          points: [
            "Interpret scientific texts and diagrams",
            "Summarize findings and present conclusions",
            "Build independent learning habits"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Topic-wise quizzes, worksheets, and experiments",
            "Revision through application-based questions",
            "Performance tracking and feedback"
          ]
        },
        {
          title: "Fun & Engaging Learning",
          points: [
            "Simulations, videos, and gamified science modules",
            "Group projects and collaborative discussions",
            "Learning driven by curiosity and exploration"
          ]
        }
      ]
    },
    {
      subject: "Exploratory Social Studies",
      tagline: "Understanding Society, History & the World Around Us",
      icon: Globe,
      color: "text-orange-600",
      bg: "bg-orange-100",
      summary: [
        "Society, Culture & History",
        "Geography & Environment",
        "Civics & Governance",
        "Historical Thinking & Timelines",
        "Research & Analytical Skills",
        "Real-World Connections",
        "Regular Practice",
        "Fun & Interactive Learning"
      ],
      details: [
        {
          title: "Society, Culture & History",
          points: [
            "Study civilizations, cultures, and historical developments",
            "Understand cause-and-effect relationships in history",
            "Connect past events to modern society"
          ]
        },
        {
          title: "Geography & Environment",
          points: [
            "Explore landforms, climate, natural resources, and maps",
            "Understand human-environment relationships",
            "Learn through maps, visuals, and case studies"
          ]
        },
        {
          title: "Civics & Governance",
          points: [
            "Understand democracy, governance, and civic duties",
            "Learn about rights, responsibilities, and institutions",
            "Develop awareness of social issues"
          ]
        },
        {
          title: "Historical Thinking & Timelines",
          points: [
            "Analyze historical events and movements",
            "Develop chronological understanding",
            "Interpret historical sources and evidence"
          ]
        },
        {
          title: "Research & Analytical Skills",
          points: [
            "Conduct small research projects",
            "Interpret data, maps, and historical texts",
            "Build reasoning and analytical thinking"
          ]
        },
        {
          title: "Real-World Connections",
          points: [
            "Relate social studies to current affairs",
            "Understand global and local perspectives",
            "Learn practical life skills"
          ]
        },
        {
          title: "Regular Practice",
          points: [
            "Worksheets, quizzes, and map work",
            "Revision and reflection activities",
            "Progress tracking"
          ]
        },
        {
          title: "Fun & Interactive Learning",
          points: [
            "Role-plays, simulations, and storytelling",
            "Group discussions and collaborative projects",
            "Engaging and activity-based learning"
          ]
        }
      ]
    },
    {
      subject: "Coding",
      tagline: "Core Programming with Python",
      icon: Code,
      color: "text-purple-600",
      bg: "bg-purple-100",
      isCoding: true,
      summary: [
        "Python Programming (Core)",
        "Problem Solving & Debugging",
        "Data Handling Basics",
        "Real-Life Coding Projects"
      ],
      details: [
        {
          title: "Python Programming (Core)",
          points: [
            "Variables & data types",
            "Input–output operations",
            "Conditional statements",
            "Loops (for, while)"
          ]
        },
        {
          title: "Problem Solving",
          points: [
            "Writing algorithms in Python",
            "Pattern problems",
            "Number logic & decision problems",
            "Debugging mindset"
          ]
        },
        {
          title: "Data Handling Basics",
          points: [
            "Lists & strings",
            "Basic data manipulation",
            "Simple calculators & converters"
          ]
        },
        {
          title: "Real-Life Coding Projects",
          points: [
            "Password checker",
            "Marks analysis system",
            "Number guessing game"
          ]
        }
      ]
    }
  ],

  /* =========================
     CLASS 8
  ========================= */
  "Class 8": [
    {
      subject: "Mathematics",
      tagline: "Building Conceptual Strength, Accuracy & Exam Readiness",
      icon: Calculator,
      color: "text-blue-700",
      bg: "bg-blue-100",
      summary: [
        "Strong Number Systems",
        "Concept-Based Mathematical Thinking",
        "Advanced Problem-Solving Skills",
        "Geometry & Mensuration Mastery",
        "Algebraic Understanding",
        "Data Handling & Probability",
        "Consistent Practice",
        "Fun & Engaging Learning"
      ],
      details: [
        {
          title: "Strong Number Systems",
          points: [
            "Deepen understanding of rational numbers and exponents",
            "Strengthen mental calculations and estimation",
            "Improve accuracy and confidence in numerical operations"
          ]
        },
        {
          title: "Concept-Based Mathematical Thinking",
          points: [
            "Understand the logic behind formulas and methods",
            "Apply percentages, profit & loss, discount, and interest concepts",
            "Use real-life examples to strengthen understanding"
          ]
        },
        {
          title: "Advanced Problem-Solving Skills",
          points: [
            "Solve multi-step and application-based word problems",
            "Learn structured and logical approaches to complex questions",
            "Strengthen reasoning through puzzles and challenges"
          ]
        },
        {
          title: "Geometry & Mensuration Mastery",
          points: [
            "Learn polygons, angles, quadrilaterals, and constructions",
            "Understand area, surface area, and volume concepts",
            "Apply geometry to practical and real-world situations"
          ]
        },
        {
          title: "Algebraic Understanding",
          points: [
            "Work with algebraic expressions and identities",
            "Solve linear equations confidently",
            "Identify patterns and relationships across problems"
          ]
        },
        {
          title: "Data Handling & Probability",
          points: [
            "Interpret bar graphs, pie charts, and data tables",
            "Understand basics of probability",
            "Develop analytical and decision-making skills"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Chapter-wise exercises and regular quizzes",
            "Balanced mix of numerical, logical, and application-based questions",
            "Progress tracking with performance milestones"
          ]
        },
        {
          title: "Fun & Engaging Learning",
          points: [
            "Visual explanations, interactive quizzes, and gamified learning",
            "Group problem-solving and collaborative practice",
            "Learn by exploring, experimenting, and applying concepts"
          ]
        }
      ]
    },
    {
      subject: "English",
      tagline: "Strengthening Expression, Comprehension & Language Confidence",
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-100",
      summary: [
        "Vocabulary Development",
        "Grammar Proficiency",
        "Reading Comprehension & Interpretation",
        "Writing Skills Enhancement",
        "Listening & Speaking Skills",
        "Literature Appreciation & Analysis",
        "Regular Practice & Assessment",
        "Interactive & Enjoyable Learning"
      ],
      details: [
        {
          title: "Vocabulary Development",
          points: [
            "Expand vocabulary through contextual usage",
            "Improve synonyms, antonyms, spellings, and word forms",
            "Enhance expressive language skills"
          ]
        },
        {
          title: "Grammar Proficiency",
          points: [
            "Master tenses, modals, clauses, and sentence structures",
            "Learn accurate use of punctuation and grammar rules",
            "Apply grammar confidently in writing and speaking"
          ]
        },
        {
          title: "Reading Comprehension & Interpretation",
          points: [
            "Understand prose, poetry, and unseen passages",
            "Develop critical reading and inference skills",
            "Answer comprehension questions accurately"
          ]
        },
        {
          title: "Writing Skills Enhancement",
          points: [
            "Practice essays, letters, notices, and creative writing",
            "Improve clarity, coherence, and structure",
            "Focus on grammar accuracy and expression"
          ]
        },
        {
          title: "Listening & Speaking Skills",
          points: [
            "Improve pronunciation, fluency, and confidence",
            "Practice presentations, discussions, and conversations",
            "Listening comprehension and response activities"
          ]
        },
        {
          title: "Literature Appreciation & Analysis",
          points: [
            "Study prescribed stories, poems, and prose",
            "Analyze characters, themes, and literary devices",
            "Develop deeper appreciation of language"
          ]
        },
        {
          title: "Regular Practice & Assessment",
          points: [
            "Daily grammar and vocabulary exercises",
            "Writing tasks and reading practice",
            "Periodic assessments and feedback"
          ]
        },
        {
          title: "Interactive & Enjoyable Learning",
          points: [
            "Role-plays, storytelling, and language games",
            "Multimedia resources and activities",
            "Creative expression through interactive learning"
          ]
        }
      ]
    },
    {
      subject: "Interactive Science",
      tagline: "Building Scientific Thinking Through Understanding & Application",
      icon: Beaker,
      color: "text-teal-600",
      bg: "bg-teal-100",
      summary: [
        "Strong Conceptual Foundations",
        "Visual & Hands-On Experiments",
        "Critical Thinking & Scientific Reasoning",
        "Scientific Inquiry & Exploration",
        "Real-World Applications",
        "Reading & Research Skills",
        "Consistent Practice",
        "Fun & Engaging Learning"
      ],
      details: [
        {
          title: "Strong Conceptual Foundations",
          points: [
            "Clear understanding of Physics, Chemistry, and Biology",
            "Focus on concepts rather than rote memorization",
            "Connect science with everyday experiences"
          ]
        },
        {
          title: "Visual & Hands-On Experiments",
          points: [
            "Observe and conduct guided experiments",
            "Learn through demonstrations and simulations",
            "Safe, structured, and engaging practical exposure"
          ]
        },
        {
          title: "Critical Thinking & Scientific Reasoning",
          points: [
            "Analyze scientific problems logically",
            "Apply scientific methods step by step",
            "Encourage curiosity and questioning"
          ]
        },
        {
          title: "Scientific Inquiry & Exploration",
          points: [
            "Learn to observe, hypothesize, and experiment",
            "Project-based learning for deeper understanding",
            "Develop investigation and research skills"
          ]
        },
        {
          title: "Real-World Applications",
          points: [
            "Relate scientific concepts to daily life and technology",
            "Understand the impact of science on society",
            "Apply learning practically"
          ]
        },
        {
          title: "Reading & Research Skills",
          points: [
            "Interpret scientific texts, diagrams, and data",
            "Summarize observations and conclusions",
            "Build independent learning habits"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Topic-wise quizzes, worksheets, and experiments",
            "Revision through application-based questions",
            "Performance tracking and feedback"
          ]
        },
        {
          title: "Fun & Engaging Learning",
          points: [
            "Simulations, videos, and gamified science modules",
            "Group projects and collaborative discussions",
            "Learning driven by curiosity and exploration"
          ]
        }
      ]
    },
    {
      subject: "Exploratory Social Studies",
      tagline: "Understanding Society, Geography & History with Real-World Connections",
      icon: Globe,
      color: "text-orange-600",
      bg: "bg-orange-100",
      summary: [
        "History & Civilization Studies",
        "Geography & Environment",
        "Civics & Governance",
        "Historical Thinking & Timelines",
        "Research & Analytical Skills",
        "Real-World Connections",
        "Regular Practice",
        "Fun & Interactive Learning"
      ],
      details: [
        {
          title: "History & Civilization Studies",
          points: [
            "Learn about historical events, movements, and timelines",
            "Understand causes, effects, and significance",
            "Connect past events with present-day society"
          ]
        },
        {
          title: "Geography & Environment",
          points: [
            "Study resources, industries, climate, and landforms",
            "Understand human-environment relationships",
            "Learn through maps, visuals, and case studies"
          ]
        },
        {
          title: "Civics & Governance",
          points: [
            "Understand democracy, constitution, and governance",
            "Learn about rights, duties, and responsibilities",
            "Develop awareness of social and civic issues"
          ]
        },
        {
          title: "Historical Thinking & Timelines",
          points: [
            "Analyze events chronologically",
            "Interpret historical sources and evidence",
            "Develop critical historical thinking"
          ]
        },
        {
          title: "Research & Analytical Skills",
          points: [
            "Conduct small research and project work",
            "Interpret data, maps, and texts",
            "Build reasoning and analytical abilities"
          ]
        },
        {
          title: "Real-World Connections",
          points: [
            "Relate lessons to current affairs",
            "Understand local, national, and global perspectives",
            "Learn practical life and social skills"
          ]
        },
        {
          title: "Regular Practice",
          points: [
            "Worksheets, quizzes, and map work",
            "Revision and reflection activities",
            "Progress tracking"
          ]
        },
        {
          title: "Fun & Interactive Learning",
          points: [
            "Role-plays, simulations, and storytelling",
            "Group discussions and collaborative projects",
            "Engaging and activity-based learning"
          ]
        }
      ]
    },
    {
      subject: "Coding",
      tagline: "Application Development & Web Foundations",
      icon: Code,
      color: "text-purple-600",
      bg: "bg-purple-100",
      isCoding: true,
      summary: [
        "Python (Intermediate)",
        "Web Development (HTML + CSS)",
        "Introduction to Automation",
        "Real-World Projects"
      ],
      details: [
        {
          title: "Python (Intermediate)",
          points: [
            "Functions & modular programming",
            "Dictionaries & tuples",
            "File handling (read/write)",
            "Error handling"
          ]
        },
        {
          title: "Web Development (HTML + CSS)",
          points: [
            "Website structure & layout",
            "Styling & design logic",
            "Responsive basics",
            "Personal website creation"
          ]
        },
        {
          title: "Introduction to Automation",
          points: [
            "Simple automation ideas",
            "Python-based utilities",
            "Real-life problem solving"
          ]
        },
        {
          title: "Projects",
          points: [
            "Student management system",
            "Quiz web app",
            "Portfolio website"
          ]
        }
      ]
    }
  ],

  /* =========================
     CLASS 9
  ========================= */
  "Class 9": [
    {
      subject: "Mathematics",
      tagline: "Building Strong Foundations for Board Success & Logical Thinking",
      icon: Calculator,
      color: "text-blue-700",
      bg: "bg-blue-100",
      summary: [
        "Number Systems & Algebraic Basics",
        "Concept-Based Mathematical Learning",
        "Linear Equations & Applications",
        "Geometry & Proof-Based Learning",
        "Coordinate Geometry",
        "Statistics & Data Interpretation",
        "Consistent Practice",
        "Fun & Engaging Learning"
      ],
      details: [
        {
          title: "Number Systems & Algebraic Basics",
          points: [
            "Deep understanding of number systems and rational numbers",
            "Introduction to polynomials and algebraic expressions",
            "Strengthen accuracy, speed, and calculation confidence"
          ]
        },
        {
          title: "Concept-Based Mathematical Learning",
          points: [
            "Understand the logic behind formulas and methods",
            "Apply algebraic concepts rather than memorizing steps",
            "Build strong conceptual clarity for long-term retention"
          ]
        },
        {
          title: "Linear Equations & Applications",
          points: [
            "Solve linear equations in one and two variables",
            "Apply concepts to real-life situations and word problems",
            "Learn structured problem-solving techniques"
          ]
        },
        {
          title: "Geometry & Proof-Based Learning",
          points: [
            "Study lines, angles, triangles, and congruence",
            "Learn logical reasoning through geometrical proofs",
            "Develop step-by-step thinking and accuracy"
          ]
        },
        {
          title: "Coordinate Geometry",
          points: [
            "Understand Cartesian planes and plotting points",
            "Apply coordinate geometry concepts confidently",
            "Build analytical and spatial reasoning skills"
          ]
        },
        {
          title: "Statistics & Data Interpretation",
          points: [
            "Organize, represent, and interpret data",
            "Understand graphical representation and analysis",
            "Develop decision-making and analytical thinking"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Chapter-wise exercises and regular quizzes",
            "Balanced mix of NCERT, application-based, and exam-style questions",
            "Continuous progress tracking and feedback"
          ]
        },
        {
          title: "Fun & Engaging Learning",
          points: [
            "Visual explanations and interactive problem-solving",
            "Concept-based quizzes and guided practice",
            "Learn by applying, analysing, and reasoning"
          ]
        }
      ]
    },
    {
      subject: "English",
      tagline: "Strengthening Language, Expression & Board Writing Skills",
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-100",
      summary: [
        "Vocabulary & Expression Enhancement",
        "Grammar Proficiency",
        "Reading Comprehension & Critical Analysis",
        "Writing Skills Development",
        "Listening & Speaking Skills",
        "Literature Appreciation & Analysis",
        "Regular Practice & Assessment",
        "Interactive & Enjoyable Learning"
      ],
      details: [
        {
          title: "Vocabulary & Expression Enhancement",
          points: [
            "Build strong vocabulary through contextual learning",
            "Improve word usage, sentence formation, and expression",
            "Develop confidence in written and spoken English"
          ]
        },
        {
          title: "Grammar Proficiency",
          points: [
            "Master tenses, modals, clauses, and sentence structures",
            "Learn accurate usage of grammar rules",
            "Apply grammar effectively in exams and communication"
          ]
        },
        {
          title: "Reading Comprehension & Critical Analysis",
          points: [
            "Understand prose, poetry, and unseen passages",
            "Develop inference and interpretation skills",
            "Answer comprehension questions with clarity"
          ]
        },
        {
          title: "Writing Skills Development",
          points: [
            "Practice formal and creative writing formats",
            "Letters, essays, story writing, and descriptive writing",
            "Focus on structure, coherence, and grammatical accuracy"
          ]
        },
        {
          title: "Listening & Speaking Skills",
          points: [
            "Improve pronunciation, fluency, and confidence",
            "Practice discussions, presentations, and spoken activities",
            "Listening comprehension exercises"
          ]
        },
        {
          title: "Literature Appreciation & Analysis",
          points: [
            "Study NCERT prose and poetry in depth",
            "Analyze themes, characters, and literary devices",
            "Build exam-oriented answer-writing skills"
          ]
        },
        {
          title: "Regular Practice & Assessment",
          points: [
            "Grammar drills and vocabulary exercises",
            "Writing practice and reading tasks",
            "Periodic tests and progress reviews"
          ]
        },
        {
          title: "Interactive & Enjoyable Learning",
          points: [
            "Role-plays, discussions, and storytelling",
            "Multimedia resources and language games",
            "Creative and engaging language activities"
          ]
        }
      ]
    },
    {
      subject: "Interactive Science",
      tagline: "Concept Clarity, Reasoning & Real-World Application",
      icon: Beaker,
      color: "text-teal-600",
      bg: "bg-teal-100",
      summary: [
        "Strong Conceptual Foundations",
        "Visual & Practical Learning",
        "Scientific Thinking & Reasoning",
        "Inquiry & Exploration",
        "Real-World Applications",
        "Reading & Research Skills",
        "Consistent Practice",
        "Fun & Engaging Learning"
      ],
      details: [
        {
          title: "Strong Conceptual Foundations",
          points: [
            "Clear understanding of Physics, Chemistry, and Biology",
            "Focus on concepts, laws, and principles",
            "Move beyond memorization to logical understanding"
          ]
        },
        {
          title: "Visual & Practical Learning",
          points: [
            "Experiments, demonstrations, and simulations",
            "Learn through observation and analysis",
            "Safe and structured practical exposure"
          ]
        },
        {
          title: "Scientific Thinking & Reasoning",
          points: [
            "Analyze problems step by step",
            "Apply scientific laws and formulas correctly",
            "Develop logical and analytical thinking"
          ]
        },
        {
          title: "Inquiry & Exploration",
          points: [
            "Encourage curiosity and questioning",
            "Project-based and activity-based learning",
            "Develop investigation and research skills"
          ]
        },
        {
          title: "Real-World Applications",
          points: [
            "Relate scientific concepts to daily life and technology",
            "Understand how science impacts society",
            "Apply learning practically"
          ]
        },
        {
          title: "Reading & Research Skills",
          points: [
            "Interpret scientific diagrams, data, and texts",
            "Summarize observations and conclusions",
            "Build independent learning habits"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Topic-wise tests, numericals, and worksheets",
            "NCERT-based and application-oriented questions",
            "Continuous evaluation and feedback"
          ]
        },
        {
          title: "Fun & Engaging Learning",
          points: [
            "Simulations, videos, and interactive modules",
            "Group discussions and collaborative projects",
            "Learning driven by curiosity and understanding"
          ]
        }
      ]
    },
    {
      subject: "Exploratory Social Studies",
      tagline: "Understanding Society, Economy & Governance",
      icon: Globe,
      color: "text-orange-600",
      bg: "bg-orange-100",
      summary: [
        "History & Social Change",
        "Geography & Natural Environment",
        "Civics & Political Awareness",
        "Economics & Daily Life",
        "Research & Analytical Skills",
        "Real-World Connections",
        "Regular Practice",
        "Fun & Interactive Learning"
      ],
      details: [
        {
          title: "History & Social Change",
          points: [
            "Study historical events, movements, and revolutions",
            "Understand causes, effects, and long-term impact",
            "Develop chronological and analytical thinking"
          ]
        },
        {
          title: "Geography & Natural Environment",
          points: [
            "Learn about physical features, climate, and resources",
            "Understand human-environment interaction",
            "Use maps, diagrams, and case studies"
          ]
        },
        {
          title: "Civics & Political Awareness",
          points: [
            "Understand democracy, constitution, and governance",
            "Learn about rights, duties, and political institutions",
            "Build responsible citizenship values"
          ]
        },
        {
          title: "Economics & Daily Life",
          points: [
            "Understand basic economic concepts and systems",
            "Learn how economies function in real life",
            "Develop financial and social awareness"
          ]
        },
        {
          title: "Research & Analytical Skills",
          points: [
            "Conduct small research and project work",
            "Interpret maps, data, and source-based questions",
            "Strengthen reasoning and analytical abilities"
          ]
        },
        {
          title: "Real-World Connections",
          points: [
            "Relate lessons to current affairs",
            "Understand national and global perspectives",
            "Apply learning to everyday situations"
          ]
        },
        {
          title: "Regular Practice",
          points: [
            "Worksheets, quizzes, and map work",
            "Revision and reflection activities",
            "Progress tracking and feedback"
          ]
        },
        {
          title: "Fun & Interactive Learning",
          points: [
            "Role-plays, debates, and simulations",
            "Group discussions and collaborative projects",
            "Engaging and activity-based learning"
          ]
        }
      ]
    },
    {
      subject: "Coding",
      tagline: "Advanced Programming & Modern Tech",
      icon: Code,
      color: "text-purple-600",
      bg: "bg-purple-100",
      isCoding: true,
      summary: [
        "Python (Advanced) & OOP",
        "Data & Databases (SQL)",
        "Web Development (Advanced)",
        "Emerging Technologies (AI, ML, Cloud)"
      ],
      details: [
        {
          title: "Python (Advanced)",
          points: [
            "Object-Oriented Programming",
            "Classes & objects",
            "Inheritance (conceptual)",
            "Code optimization"
          ]
        },
        {
          title: "Data & Databases",
          points: [
            "What is data?",
            "SQL fundamentals",
            "Python + database connection (intro)"
          ]
        },
        {
          title: "Web Development (Advanced)",
          points: [
            "HTML5 & CSS layouts",
            "CSS components & responsive design",
            "Intro to JavaScript (logic, events)"
          ]
        },
        {
          title: "Emerging Technologies",
          points: [
            "Artificial Intelligence (how it works)",
            "Machine Learning (conceptual)",
            "Cybersecurity basics",
            "Cloud computing overview"
          ]
        }
      ]
    }
  ],

  /* =========================
     CLASS 10
  ========================= */
  "Class 10": [
    {
      subject: "Mathematics",
      tagline: "Mastering Concepts, Accuracy & Board Exam Excellence",
      icon: Calculator,
      color: "text-blue-700",
      bg: "bg-blue-100",
      summary: [
        "Strong Algebraic Foundations",
        "Trigonometry Mastery",
        "Geometry & Proof-Based Learning",
        "Coordinate Geometry",
        "Mensuration & Real-World Applications",
        "Statistics & Probability",
        "Consistent Board Practice",
        "Smart & Engaging Learning"
      ],
      details: [
        {
          title: "Strong Algebraic Foundations",
          points: [
            "Deep understanding of polynomials, linear equations, and quadratic equations",
            "Apply algebraic concepts accurately in board-level problems",
            "Build confidence through systematic practice"
          ]
        },
        {
          title: "Trigonometry Mastery",
          points: [
            "Learn trigonometric ratios, identities, and applications",
            "Understand heights and distances conceptually",
            "Apply formulas correctly in exam-oriented questions"
          ]
        },
        {
          title: "Geometry & Proof-Based Learning",
          points: [
            "Study triangles, circles, and constructions in depth",
            "Learn logical reasoning through step-by-step proofs",
            "Improve accuracy and presentation for board answers"
          ]
        },
        {
          title: "Coordinate Geometry",
          points: [
            "Understand distance formula, section formula, and area of triangle",
            "Apply concepts confidently in numerical problems",
            "Develop spatial and analytical thinking"
          ]
        },
        {
          title: "Mensuration & Real-World Applications",
          points: [
            "Calculate surface areas and volumes of solids",
            "Apply mensuration concepts to real-life situations",
            "Improve numerical accuracy and speed"
          ]
        },
        {
          title: "Statistics & Probability",
          points: [
            "Learn statistical methods and data interpretation",
            "Understand probability concepts clearly",
            "Apply formulas correctly in board-style questions"
          ]
        },
        {
          title: "Consistent Board Practice",
          points: [
            "NCERT examples and exercise-based practice",
            "Chapter-wise tests and mock exams",
            "Time-bound practice and accuracy improvement"
          ]
        },
        {
          title: "Smart & Engaging Learning",
          points: [
            "Visual explanations and step-wise solutions",
            "Guided practice and doubt-solving",
            "Focus on clarity, confidence, and exam readiness"
          ]
        }
      ]
    },
    {
      subject: "English",
      tagline: "Board-Focused Communication, Writing & Expression Skills",
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-100",
      summary: [
        "Vocabulary & Expression Enhancement",
        "Grammar Accuracy",
        "Reading Comprehension & Analysis",
        "Board-Pattern Writing Skills",
        "Listening & Speaking Skills",
        "Literature Deep-Dive",
        "Regular Practice & Assessment",
        "Interactive & Confidence-Building Learning"
      ],
      details: [
        {
          title: "Vocabulary & Expression Enhancement",
          points: [
            "Strengthen vocabulary for effective writing",
            "Improve sentence structure and expression",
            "Develop confidence in written and spoken English"
          ]
        },
        {
          title: "Grammar Accuracy",
          points: [
            "Master grammar rules as per board requirements",
            "Apply grammar correctly in writing tasks",
            "Improve language precision and clarity"
          ]
        },
        {
          title: "Reading Comprehension & Analysis",
          points: [
            "In-depth study of prose, poetry, and unseen passages",
            "Develop critical reading and interpretation skills",
            "Answer board-style comprehension questions accurately"
          ]
        },
        {
          title: "Board-Pattern Writing Skills",
          points: [
            "Practice formal writing formats (letters, articles, reports)",
            "Creative writing and literature-based answers",
            "Focus on structure, coherence, and marks-oriented presentation"
          ]
        },
        {
          title: "Listening & Speaking Skills",
          points: [
            "Improve fluency, pronunciation, and confidence",
            "Practice presentations and spoken activities",
            "Strengthen communication skills"
          ]
        },
        {
          title: "Literature Deep-Dive",
          points: [
            "Complete NCERT literature coverage",
            "Theme, character, and literary device analysis",
            "Board-oriented answer writing techniques"
          ]
        },
        {
          title: "Regular Practice & Assessment",
          points: [
            "Writing practice and grammar drills",
            "Reading exercises and tests",
            "Periodic assessments and feedback"
          ]
        },
        {
          title: "Interactive & Confidence-Building Learning",
          points: [
            "Discussions, role-plays, and debates",
            "Multimedia-supported learning",
            "Stress-free preparation for board exams"
          ]
        }
      ]
    },
    {
      subject: "Science",
      tagline: "Concept Mastery, Numericals & Board Exam Readiness",
      icon: Beaker,
      color: "text-teal-600",
      bg: "bg-teal-100",
      summary: [
        "Strong Conceptual Foundations",
        "Numericals, Diagrams & Practical Understanding",
        "Scientific Reasoning & Application",
        "Inquiry & Concept Application",
        "Reading & Answer-Writing Skills",
        "Consistent Practice & Revision",
        "Board Exam Strategy",
        "Engaging & Stress-Free Learning"
      ],
      details: [
        {
          title: "Strong Conceptual Foundations",
          points: [
            "Clear understanding of Physics, Chemistry, and Biology concepts",
            "Focus on laws, reactions, and biological processes",
            "Concept clarity over rote memorization"
          ]
        },
        {
          title: "Numericals, Diagrams & Practical Understanding",
          points: [
            "Step-by-step numericals in Physics and Chemistry",
            "Accurate diagram practice in Biology",
            "Proper explanation of experiments and reactions"
          ]
        },
        {
          title: "Scientific Reasoning & Application",
          points: [
            "Apply formulas and concepts in board-level questions",
            "Develop logical reasoning and analytical skills",
            "Strengthen problem-solving abilities"
          ]
        },
        {
          title: "Inquiry & Concept Application",
          points: [
            "Understand scientific concepts through real-life examples",
            "Case-based and application-oriented learning",
            "Strengthen exam confidence"
          ]
        },
        {
          title: "Reading & Answer-Writing Skills",
          points: [
            "Interpret scientific data, diagrams, and questions",
            "Learn structured and precise answer writing",
            "Focus on clarity and presentation"
          ]
        },
        {
          title: "Consistent Practice & Revision",
          points: [
            "NCERT-based questions and chapter tests",
            "Revision modules and mock exams",
            "Continuous performance tracking"
          ]
        },
        {
          title: "Board Exam Strategy",
          points: [
            "Time management techniques",
            "Answer presentation and accuracy improvement",
            "Focus on scoring and confidence"
          ]
        },
        {
          title: "Engaging & Stress-Free Learning",
          points: [
            "Visual explanations and interactive content",
            "Guided revision and doubt-solving",
            "Calm, confident preparation for boards"
          ]
        }
      ]
    },
    {
      subject: "Social Studies",
      tagline: "Understanding Society, Economy & Governance for Board Success",
      icon: Globe,
      color: "text-orange-600",
      bg: "bg-orange-100",
      summary: [
        "History & National Movements",
        "Geography & Resources",
        "Civics & Political Science",
        "Economics & Real-Life Application",
        "Source-Based & Case-Study Questions",
        "Current Affairs & Real-World Connections",
        "Regular Practice & Revision",
        "Interactive & Engaging Learning"
      ],
      details: [
        {
          title: "History & National Movements",
          points: [
            "In-depth study of historical events and movements",
            "Understand causes, effects, and significance",
            "Answer-writing techniques for board exams"
          ]
        },
        {
          title: "Geography & Resources",
          points: [
            "Physical features, resources, industries, and maps",
            "Map work and diagram-based understanding",
            "Application of geographical concepts"
          ]
        },
        {
          title: "Civics & Political Science",
          points: [
            "Democracy, constitution, and political institutions",
            "Rights, duties, and democratic values",
            "Case-based learning and examples"
          ]
        },
        {
          title: "Economics & Real-Life Application",
          points: [
            "Understand economic concepts and systems",
            "Apply learning to daily life and current affairs",
            "Build financial and social awareness"
          ]
        },
        {
          title: "Source-Based & Case-Study Questions",
          points: [
            "Analyze data, maps, and source materials",
            "Develop critical thinking and interpretation skills",
            "Practice board-style questions"
          ]
        },
        {
          title: "Current Affairs & Real-World Connections",
          points: [
            "Link textbook concepts with real-world events",
            "National and global perspectives",
            "Concept clarity with relevance"
          ]
        },
        {
          title: "Regular Practice & Revision",
          points: [
            "Worksheets, map work, and tests",
            "Revision and reflection exercises",
            "Performance tracking and improvement"
          ]
        },
        {
          title: "Interactive & Engaging Learning",
          points: [
            "Debates, role-plays, and discussions",
            "Collaborative learning activities",
            "Confidence-building exam"
          ]
        }
      ]
    },
    {
      subject: "Coding",
      tagline: "AI, Full-Stack Thinking & Career Readiness",
      icon: Code,
      color: "text-purple-600",
      bg: "bg-purple-100",
      isCoding: true,
      summary: [
        "Advanced Applications & APIs",
        "Full-Stack Basics",
        "AI & Data Science Foundations",
        "Capstone Projects & Portfolio"
      ],
      details: [
        {
          title: "Advanced Applications",
          points: [
            "Python automation",
            "API concepts",
            "Mini backend logic"
          ]
        },
        {
          title: "Full-Stack Basics",
          points: [
            "Frontend logic (HTML, CSS, JS)",
            "Interactive websites",
            "Form handling & validations"
          ]
        },
        {
          title: "AI & Data Science Foundations",
          points: [
            "Data analysis mindset",
            "Visualization concepts",
            "AI ethics & responsible tech",
            "Real-life AI use cases"
          ]
        },
        {
          title: "Innovation & Capstone Projects",
          points: [
            "App / website / AI project",
            "Startup & problem-solving mindset",
            "GitHub basics",
            "Portfolio building & presentation"
          ]
        }
      ]
    }
  ],

  /* =========================
     FUTURE TECH CURRICULUM
  ========================= */
  // "Future Tech": [
  //   {
  //     subject: "Coding Foundation",
  //     tagline: "Logic & Algorithms",
  //     icon: Code,
  //     color: "text-purple-600",
  //     bg: "bg-purple-100",
  //     summary: ["Logic Building", "Block Coding", "Python Intro", "Games"],
  //     details: [
  //       { title: "Digital Fundamentals", points: ["Hardware vs Software", "OS basics", "File management"] },
  //       { title: "Intro to Coding", points: ["Variables and loops", "Conditionals (If/Else)", "Block-based coding (Scratch)"] },
  //       { title: "Python Basics", points: ["Syntax intro", "Data types", "Input/Output operations"] },
  //       { title: "Game Logic", points: ["Sprite movement", "Collision detection", "Score keeping"] },
  //       { title: "Web Basics", points: ["How internet works", "Browsers vs Search engines", "URL structure"] },
  //       { title: "Problem Solving", points: ["Decomposition", "Pattern recognition", "Debugging simple code"] },
  //       { title: "Digital Art", points: ["Pixel art", "Basic animation", "Digital storytelling"] },
  //       { title: "Projects", points: ["Calculator app", "Interactive story", "Simple maze game"] }
  //     ]
  //   },
  //   {
  //     subject: "Web Development",
  //     tagline: "Build Your Presence",
  //     icon: Globe,
  //     color: "text-blue-600",
  //     bg: "bg-blue-100",
  //     summary: ["HTML5", "CSS3", "Responsive Design", "Live Deployment"],
  //     details: [
  //       { title: "HTML Core", points: ["Tags and attributes", "Document structure", "Lists and tables"] },
  //       { title: "CSS Styling", points: ["Colors and fonts", "Box model", "Margins and padding"] },
  //       { title: "Layouts", points: ["Flexbox basics", "Grid introduction", "Positioning elements"] },
  //       { title: "Responsive Design", points: ["Media queries", "Mobile-first approach", "Fluid grids"] },
  //       { title: "Interactivity", points: ["Hover effects", "Transitions", "Simple buttons"] },
  //       { title: "Web Projects", points: ["Personal portfolio", "Recipe blog", "Tribute page"] },
  //       { title: "Dev Tools", points: ["Inspect element", "Debugging layout", "Browser testing"] },
  //       { title: "Deployment", points: ["GitHub basics", "Hosting on Netlify", "Domain names"] }
  //     ]
  //   },
  //   {
  //     subject: "AI & Data Science",
  //     tagline: "Future Intelligence",
  //     icon: Zap,
  //     color: "text-amber-600",
  //     bg: "bg-amber-100",
  //     summary: ["AI Basics", "Machine Learning", "Data Vis", "Ethics"],
  //     details: [
  //       { title: "What is AI?", points: ["AI vs Human Intelligence", "History of AI", "Daily life applications"] },
  //       { title: "Machine Learning", points: ["Supervised vs Unsupervised", "Training data", "Recognizing patterns"] },
  //       { title: "Computer Vision", points: ["Face detection", "Image classification", "Object recognition"] },
  //       { title: "NLP Basics", points: ["Chatbots", "Voice assistants", "Sentiment analysis"] },
  //       { title: "Data Science", points: ["Data collection", "Cleaning data", "Reading charts"] },
  //       { title: "Data Visualization", points: ["Bar charts", "Scatter plots", "Interpreting trends"] },
  //       { title: "AI Ethics", points: ["Bias in AI", "Privacy concerns", "Future of work"] },
  //       { title: "Projects", points: ["Train a model", "Smart chatbot", "Image sorter"] }
  //     ]
  //   },
  //   {
  //     subject: "App Design",
  //     tagline: "Mobile Innovation",
  //     icon: Phone,
  //     color: "text-pink-600",
  //     bg: "bg-pink-100",
  //     summary: ["UI/UX", "Prototyping", "User Research", "App Logic"],
  //     details: [
  //       { title: "UI vs UX", points: ["Visual design", "User experience", "Wireframing"] },
  //       { title: "Design Thinking", points: ["Empathize", "Define", "Ideate", "Prototype"] },
  //       { title: "Prototyping Tools", points: ["Figma basics", "Creating screens", "Linking flows"] },
  //       { title: "User Research", points: ["User personas", "Surveys", "Usability testing"] },
  //       { title: "App Logic", points: ["Flowcharts", "If-then scenarios", "Data storage basics"] },
  //       { title: "Mobile Guidelines", points: ["Touch targets", "Navigation patterns", "Screen sizes"] },
  //       { title: "Visual Design", points: ["Color theory", "Typography for mobile", "Iconography"] },
  //       { title: "Final Project", points: ["Design a school app", "Clickable prototype", "Presentation"] }
  //     ]
  //   }
  // ]
};