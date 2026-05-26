// import "../style/notfound.scss";
// import { motion } from 'framer-motion';
// import { ArrowRight, Home, SearchCode, Sparkles } from 'lucide-react';
// import { Link } from "react-router";

// const NotFound = () => {
//   return (
//     <section className='notfound'>
//       <div className='grid-bg'></div>

//       <div className='orb orb1'></div>
//       <div className='orb orb2'></div>

//       <motion.div
//         className='notfound-container'
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <motion.div
//           className='floating-badge'
//           animate={{ y: [-8, 8, -8] }}
//           transition={{
//             repeat: Infinity,
//             duration: 4,
//           }}
//         >
//           <Sparkles size={16} />
//           AI Navigation Error
//         </motion.div>

//         <div className='error-code'>
//           <span>4</span>
//           <div className='brain-circle'>
//             <SearchCode size={60} />
//           </div>
//           <span>4</span>
//         </div>

//         <h1>
//           Looks Like The AI
//           <span> Lost This Route</span>
//         </h1>

//         <p>
//           The page you’re trying to access doesn’t exist,
//           was moved, or the route configuration is broken.
//           Stop guessing and fix your navigation properly.
//         </p>

//         <div className='action-buttons'>
//           <Link to='/' className='primary-btn'>
//             <Home size={18} />
//             Back To Home
//           </Link>

//           <Link to='/explore' className='secondary-btn'>
//             Explore Platform
//             <ArrowRight size={18} />
//           </Link>
//         </div>

//         <div className='status-card'>
//           <div className='status-header'>
//             <span>System Status</span>
//             <div className='live-dot'></div>
//           </div>

//           <div className='status-content'>
//             <div className='status-item'>
//               <span>AI Engine</span>
//               <div className='progress'>
//                 <div style={{ width: '92%' }}></div>
//               </div>
//             </div>

//             <div className='status-item'>
//               <span>Route Recovery</span>
//               <div className='progress'>
//                 <div style={{ width: '78%' }}></div>
//               </div>
//             </div>

//             <div className='status-item'>
//               <span>Navigation System</span>
//               <div className='progress'>
//                 <div style={{ width: '96%' }}></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default NotFound;

import { motion } from "framer-motion";
import { ArrowRight, Home, SearchCode, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-[#050505] text-white flex items-center justify-center px-6">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
        bg-[size:50px_50px]"
        />

        {/* Glow */}

        <div className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] rounded-full bg-red-600/20 blur-[140px]" />

        <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] rounded-full bg-red-500/10 blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl"
      >
        <div
          className="rounded-[28px]
        border border-white/10
        bg-[#111111]
        shadow-[0_0_60px_rgba(255,0,0,0.08)]
        backdrop-blur-xl
        p-6 md:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}

            <div>
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="inline-flex items-center gap-2 rounded-full
                bg-red-500/10 border border-red-500/20
                px-4 py-2 text-xs text-red-400 mb-5"
              >
                <Sparkles size={14} />
                AI Navigation Error
              </motion.div>

              {/* Compact 404 */}

              <div className="flex items-center mb-6">
                <span className="text-[55px] md:text-[75px] font-black">4</span>

                <div
                  className="mx-2 h-[60px] w-[60px]
                md:h-[80px] md:w-[80px]
                rounded-full
                bg-gradient-to-br from-red-500 to-red-700
                flex items-center justify-center
                shadow-[0_0_30px_rgba(255,0,0,0.5)]"
                >
                  <SearchCode size={30} />
                </div>

                <span className="text-[55px] md:text-[75px] font-black">4</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Route Not Found
                <span className="block text-red-500 mt-1">
                  AI Lost The Path
                </span>
              </h1>

              <p className="mt-4 text-gray-400 leading-7 max-w-lg">
                The page may have moved, been deleted, or your route
                configuration needs attention.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/"
                  className="flex items-center gap-2 rounded-xl
                bg-red-600 px-5 py-2
                font-medium hover:bg-red-700 transition"
                >
                  <Home size={16} />
                  Home
                </Link>

                {/* <Link
                  to="/explore"
                  className="flex items-center gap-2 rounded-xl
                border border-white/10
                px-5 py-3
                hover:border-red-500
                hover:bg-white/[0.03]
                transition"
                >
                  Explore
                  <ArrowRight size={16} />
                </Link> */}
              </div>
            </div>

            {/* RIGHT */}

            <div
              className="rounded-2xl
            border border-red-500/10
            bg-[#0b0b0b]
            p-6"
            >
              <div className="flex justify-between items-center mb-7">
                <h3 className="font-semibold">System Status</h3>

                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

                  <span className="text-sm text-green-400">Live</span>
                </div>
              </div>

              {[
                {
                  title: "AI Engine",
                  value: "92%",
                },
                {
                  title: "Recovery",
                  value: "78%",
                },
                {
                  title: "Navigation",
                  value: "96%",
                },
              ].map((item, index) => (
                <div key={index} className="mb-5">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">{item.title}</span>

                    <span className="text-red-400">{item.value}</span>
                  </div>

                  <div className="h-2 bg-[#181818] rounded-full">
                    <div
                      style={{
                        width: item.value,
                      }}
                      className="h-full rounded-full
                    bg-gradient-to-r
                    from-red-500
                    to-red-700"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
