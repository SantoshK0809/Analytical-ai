import "../style/landingpage.scss";
import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Upload,
  Sparkles,
  FileSearch,
  Target,
  BadgeCheck,
  ChartSpline,
  FileText,
  Menu,
  ChevronDown,
  Star,
  Check,
} from 'lucide-react';
import { Link } from "react-router";

const features = [
  {
    icon: BrainCircuit,
    title: 'AI Technical Questions',
    desc: 'Generate highly targeted technical interview questions instantly.',
  },
  {
    icon: Target,
    title: 'Skill Gap Analysis',
    desc: 'Identify missing technologies and improve your readiness.',
  },
  {
    icon: BadgeCheck,
    title: 'Match Score Engine',
    desc: 'Understand exactly how your profile fits the job.',
  },
  {
    icon: FileText,
    title: 'Resume Optimization',
    desc: 'AI-powered ATS optimization and resume enhancement.',
  },
  {
    icon: Sparkles,
    title: 'Behavioral Questions',
    desc: 'Practice realistic HR and behavioral interview scenarios.',
  },
  {
    icon: ChartSpline,
    title: 'Preparation Roadmap',
    desc: 'Get a personalized AI preparation strategy.',
  },
];

const pricing = [
  {
    name: 'Free',
    price: '₹0',
    features: ['Basic AI Analysis', '3 Resume Uploads', 'Basic Questions'],
  },
  {
    name: 'Pro',
    price: '₹1999/year',
    popular: true,
    features: [
      'Unlimited AI Analysis',
      'Skill Gap Insights',
      'AI Resume Optimization',
      'Unlimited Questions',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Team Analytics', 'Advanced AI', 'Custom Integrations'],
  },
];

const faqs = [
  {
    q: 'How does AnalyticsAI work?',
    a: 'Upload your resume and job description. AI analyzes your profile and generates personalized preparation insights.',
  },
  {
    q: 'Is the resume ATS optimized?',
    a: 'Yes. The platform improves formatting, keywords, and recruiter readability.',
  },
  {
    q: 'Does it generate interview questions?',
    a: 'Yes. Both technical and behavioral questions are generated dynamically.',
  },
];

function LandingPage() {
  return (
    <div className='app'>
      <div className='cursor-glow'></div>

      <header className='navbar'>
        <div className='logo'>AnalyticsAI</div>

        <nav>
          <a href='#features'>Features</a>
          <a href='#workflow'>Workflow</a>
          <a href='#pricing'>Pricing</a>
          <a href='#faq'>FAQ</a>
        </nav>

        <div className='nav-actions'>
          <Link to='/login' className='secondary-btn'>
            Login
          </Link>
          <Link to='/register' className='primary-btn'>
            Get Started
          </Link>
        </div>

        <div className='mobile-menu'>
          <Menu />
        </div>
      </header>

      <section className='hero'>
        <div className='orb orb1'></div>
        <div className='orb orb2'></div>

        <div className='hero-left'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className='badge'>AI Interview Intelligence Platform</span>

            <h1>
              Crack Interviews With
              <span> AI-Powered Precision</span>
            </h1>

            <p>
              Upload your resume, job description, and self profile.
              AnalyticsAI instantly generates interview questions,
              match score insights, skill-gap analysis, and AI-driven
              preparation roadmaps.
            </p>

            <div className='hero-buttons'>
              <Link to='/register' className='primary-btn'>
                Start Your Analysis
              </Link>
              {/* <Link to='/demo' className='secondary-btn'>
                Watch Demo
              </Link> */}
            </div>

            <div className='hero-stats'>
              <div>
                <h2>50K+</h2>
                <span>AI Analyses</span>
              </div>

              <div>
                <h2>95%</h2>
                <span>Success Accuracy</span>
              </div>

              <div>
                <h2>4.9</h2>
                <span>User Rating</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className='hero-right'>
          <motion.div
            className='dashboard-preview'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className='top-card'>
              <div>
                <span>Match Score</span>
                <h2>92%</h2>
              </div>

              <div className='progress-ring'>Ready</div>
            </div>

            <div className='workflow-cards'>
              <div><Upload size={18}/> Upload Resume</div>
              <div><FileSearch size={18}/> Analyze JD</div>
              <div><BrainCircuit size={18}/> AI Analysis</div>
              <div><Sparkles size={18}/> Questions Generated</div>
            </div>

            <div className='dashboard-analytics'>
              <div className='analytics-card'>
                <span>React</span>
                <div className='bar'><div style={{width:'90%'}}></div></div>
              </div>

              <div className='analytics-card'>
                <span>Node.js</span>
                <div className='bar'><div style={{width:'80%'}}></div></div>
              </div>

              <div className='analytics-card'>
                <span>DSA</span>
                <div className='bar'><div style={{width:'60%'}}></div></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='trusted'>
        <div className='marquee'>
          <span>Google</span>
          <span>Microsoft</span>
          <span>Amazon</span>
          <span>Netflix</span>
          <span>Adobe</span>
          <span>OpenAI</span>
        </div>
      </section>

      <section className='features' id='features'>
        <div className='section-heading'>
          <span>FEATURES</span>
          <h2>Everything Needed To Dominate Interviews</h2>
        </div>

        <div className='feature-grid'>
          {features.map((item, index) => (
            <motion.div
              className='feature-card'
              key={index}
              whileHover={{ y: -8 }}
            >
              <item.icon size={34} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className='workflow-section' id='workflow'>
        <div className='section-heading'>
          <span>WORKFLOW</span>
          <h2>Simple AI-Powered Preparation Pipeline</h2>
        </div>

        <div className='workflow-line'>
          <div className='step'>
            <h3>01</h3>
            <p>Upload Resume & JD</p>
          </div>

          <div className='step'>
            <h3>02</h3>
            <p>AI Analysis Engine</p>
          </div>

          <div className='step'>
            <h3>03</h3>
            <p>Generate Insights</p>
          </div>

          <div className='step'>
            <h3>04</h3>
            <p>Interview Ready</p>
          </div>
        </div>
      </section>

      <section className='comparison'>
        <div className='comparison-card'>
          <h2>Traditional Preparation</h2>
          <ul>
            <li>Generic interview questions</li>
            <li>No personalization</li>
            <li>Manual resume edits</li>
            <li>Weak preparation tracking</li>
          </ul>
        </div>

        <div className='comparison-card active'>
          <h2>AnalyticsAI</h2>
          <ul>
            <li>AI-powered question generation</li>
            <li>Smart skill gap analysis</li>
            <li>ATS resume optimization</li>
            <li>Personalized preparation roadmap</li>
          </ul>
        </div>
      </section>

      <section className='testimonials'>
        <div className='section-heading'>
          <span>TESTIMONIALS</span>
          <h2>Trusted By Candidates Worldwide</h2>
        </div>

        <div className='testimonial-grid'>
          {[1,2,3].map((item) => (
            <div className='testimonial-card' key={item}>
              <div className='stars'>
                <Star fill='white' size={16}/>
                <Star fill='white' size={16}/>
                <Star fill='white' size={16}/>
                <Star fill='white' size={16}/>
                <Star fill='white' size={16}/>
              </div>

              <p>
                AnalyticsAI completely changed how I prepared for interviews.
                The AI-generated insights were shockingly accurate.
              </p>

              <div className='user'>
                <div className='avatar'></div>
                <div>
                  <h4>Alex Carter</h4>
                  <span>Frontend Engineer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='pricing' id='pricing'>
        <div className='section-heading'>
          <span>PRICING</span>
          <h2>Choose Your AI Preparation Plan</h2>
        </div>

        <div className='pricing-grid'>
          {pricing.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'active' : ''}`} key={index}>
              {plan.popular && <div className='popular'>Most Popular</div>}

              <h3>{plan.name}</h3>
              <h2>{plan.price}</h2>

              <ul>
                {plan.features.map((f, i) => (
                  <li key={i}>
                    <Check size={18}/> {f}
                  </li>
                ))}
              </ul>

              <button className='primary-btn'>Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      <section className='faq' id='faq'>
        <div className='section-heading'>
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className='faq-list'>
          {faqs.map((faq, index) => (
            <div className='faq-item' key={index}>
              <div className='faq-question'>
                <h3>{faq.q}</h3>
                <ChevronDown />
              </div>

              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='cta'>
        <div className='cta-box'>
          <h2>Start Preparing Smarter With AI</h2>

          <p>
            Stop wasting time on generic preparation strategies.
            Use AI-driven interview intelligence.
          </p>

          <button className='primary-btn'>Start Free Today</button>
        </div>
      </section>

      <footer className='footer'>
        <div>
          <h3>AnalyticsAI</h3>
          <p>AI-powered interview preparation platform.</p>
        </div>

        <div>
          <h4>Product</h4>
          <a href='#'>Features</a>
          <a href='#'>Pricing</a>
          <a href='#'>Dashboard</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href='#'>About</a>
          <a href='#'>Careers</a>
          <a href='#'>Contact</a>
        </div>

        <div>
          <h4>Newsletter</h4>
          <div className='newsletter'>
            <input type='email' placeholder='Enter email' />
            <button>Join</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;