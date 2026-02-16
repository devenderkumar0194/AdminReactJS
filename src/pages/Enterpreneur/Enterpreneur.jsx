import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => (
  <motion.div 
    className="text-center mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
      {title}
    </h2>
    {subtitle && (
      <motion.p 
        className="text-gray-400 mt-4 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

const Card = ({ children, delay = 0 }) => (
  <motion.div 
    className="bg-[#111118] border border-yellow-500/20 rounded-2xl p-8 hover:scale-105 transition duration-500 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20 hover:border-yellow-500/40"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 30px rgba(234, 179, 8, 0.2)"
    }}
  >
    {children}
  </motion.div>
);

export default function Entrepreneur() {
  return (
    <div className="bg-[#0B0B0F] text-white font-sans overflow-hidden">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
        {/* Floating elements */}
        <motion.div 
          className="absolute top-20 left-10 w-4 h-4 bg-yellow-500 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-6 h-6 border-2 border-yellow-500 rounded-full"
          animate={{ 
            y: [0, 30, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          THE LIFE OF AN{" "}
          <motion.span 
            className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            ENTREPRENEUR
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-400 max-w-3xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Learn Skills. Build Confidence. Earn Money.
        </motion.p>

        <motion.button 
          className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 text-black font-bold hover:scale-105 transition duration-300 shadow-xl shadow-yellow-500/30 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 40px rgba(234, 179, 8, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">JOIN NOW</span>
          <motion.div 
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
        </motion.button>
      </section>

      {/* WHY SECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0B0B0F] to-[#111118]">
        <SectionTitle
          title="Why Most People Stay Stuck"
          subtitle="Most education systems fail to teach real-world success skills."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Theory but no real-world skills",
            "No mentorship or support system",
            "Fear of communication",
            "No roadmap for income growth",
            "Lack of leadership",
            "No practical implementation",
          ].map((item, index) => (
            <Card key={index} delay={index * 0.1}>
              <motion.p 
                className="text-gray-300 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              >
                {item}
              </motion.p>
            </Card>
          ))}
        </div>
      </section>

      {/* WHAT YOU MASTER */}
      <section className="py-24 bg-[#111118] px-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        <SectionTitle
          title="What You Will Master"
          subtitle="High income & high growth skill development"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
          {[
            "Communication Skills",
            "Public Speaking",
            "Leadership Development",
            "Business Fundamentals",
            "Financial Awareness",
            "Sales & Closing",
            "Marketing Strategies",
            "Human Psychology",
            "Goal Execution",
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="border border-yellow-500/20 rounded-xl p-6 text-center hover:bg-yellow-500/10 transition cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(234, 179, 8, 0.15)",
                borderColor: "rgba(234, 179, 8, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h3 
                className="text-lg font-semibold text-yellow-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              >
                {skill}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0B0B0F] to-[#1a1a24]">
        <SectionTitle title="Choose Your Learning Pack" />

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Learner Pack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Learner’s Pack
              </motion.h3>
              <motion.p 
                className="text-gray-400 line-through"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                ₹10,999
              </motion.p>
              <motion.p 
                className="text-4xl font-bold text-yellow-400 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                ₹5,999
              </motion.p>
              <motion.button 
                className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 text-black font-bold hover:scale-105 transition duration-300 relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(234, 179, 8, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Unlock Learner’s Pack</span>
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </Card>
          </motion.div>

          {/* Master Pack */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="absolute -top-4 right-4 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold z-20"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: 1
              }}
            >
              MOST RECOMMENDED
            </motion.div>
            <Card>
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Master’s Pack
              </motion.h3>
              <motion.p 
                className="text-gray-400 line-through"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                ₹20,999
              </motion.p>
              <motion.p 
                className="text-4xl font-bold text-yellow-400 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                ₹12,999
              </motion.p>
              <motion.button 
                className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 text-black font-bold hover:scale-105 transition duration-300 relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(234, 179, 8, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Unlock Master’s Pack</span>
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 text-center px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 left-1/4 w-16 h-16 border-2 border-yellow-500/30 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-1/4 w-12 h-12 bg-amber-500/20 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Your Growth Starts With One Decision
        </motion.h2>
        
        <motion.button 
          className="px-10 py-4 rounded-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 text-black font-bold hover:scale-105 transition relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 40px rgba(234, 179, 8, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">JOIN THE LIFE OF AN ENTREPRENEUR NOW</span>
          <motion.div 
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </section>

      {/* FOOTER */}
      <motion.footer 
        className="py-8 text-center text-gray-500 border-t border-yellow-500/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        © 2026 Life Of An Entrepreneur. All Rights Reserved.
      </motion.footer>

    </div>
  );
}
