import "../style/notfound.scss";
import { motion } from 'framer-motion';
import { ArrowRight, Home, SearchCode, Sparkles } from 'lucide-react';
import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className='notfound'>
      <div className='grid-bg'></div>

      <div className='orb orb1'></div>
      <div className='orb orb2'></div>

      <motion.div
        className='notfound-container'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className='floating-badge'
          animate={{ y: [-8, 8, -8] }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        >
          <Sparkles size={16} />
          AI Navigation Error
        </motion.div>

        <div className='error-code'>
          <span>4</span>
          <div className='brain-circle'>
            <SearchCode size={60} />
          </div>
          <span>4</span>
        </div>

        <h1>
          Looks Like The AI
          <span> Lost This Route</span>
        </h1>

        <p>
          The page you’re trying to access doesn’t exist,
          was moved, or the route configuration is broken.
          Stop guessing and fix your navigation properly.
        </p>

        <div className='action-buttons'>
          <Link to='/' className='primary-btn'>
            <Home size={18} />
            Back To Home
          </Link>

          <Link to='/explore' className='secondary-btn'>
            Explore Platform
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className='status-card'>
          <div className='status-header'>
            <span>System Status</span>
            <div className='live-dot'></div>
          </div>

          <div className='status-content'>
            <div className='status-item'>
              <span>AI Engine</span>
              <div className='progress'>
                <div style={{ width: '92%' }}></div>
              </div>
            </div>

            <div className='status-item'>
              <span>Route Recovery</span>
              <div className='progress'>
                <div style={{ width: '78%' }}></div>
              </div>
            </div>

            <div className='status-item'>
              <span>Navigation System</span>
              <div className='progress'>
                <div style={{ width: '96%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;