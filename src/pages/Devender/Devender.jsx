import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 py-4 px-6 md:px-12 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Devender.
            </div>
            <div className="hidden md:flex space-x-8 text-slate-600 font-medium">
                <a href="#home" className="hover:text-blue-600 transition">Home</a>
                <a href="#services" className="hover:text-blue-600 transition">Services</a>
                <a href="#tech" className="hover:text-blue-600 transition">Tech</a>
                <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
                <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </div>
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                Hire Me
            </a>
        </nav>
    );
};

const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
            {/* Decorative background shapes */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [0, -90, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center max-w-4xl"
            >
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6"
                >
                    Full Stack Developer
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6"
                >
                    Building <span className="text-blue-600">Premium</span> Digital <br />
                    Experiences with Scale
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
                >
                    Hi, I'm <span className="font-semibold text-slate-900">Devender Kumar</span>. I specialize in building secure, fast, and scalable web applications using modern technologies like React, NestJS, and Node.js.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
                    >
                        View My Work
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all"
                    >
                        Contact Details
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

const Services = () => {
    // ... (services array remains the same)
    const services = [
        {
            title: "Frontend Development",
            desc: "Creating pixel-perfect, responsive UIs with React.js, Tailwind CSS, and Framer Motion.",
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Backend & APIs",
            desc: "Building robust server-side logic and RESTful APIs using NestJS, Node.js, and PostgreSQL.",
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            )
        },
        {
            title: "Payment Integration",
            desc: "Seamlessly integrating Stripe and Razorpay for subscriptions and one-time payments.",
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            )
        },
        {
            title: "Security & Auth",
            desc: "Implementing secure authentication systems with JWT, Passport, and RBAC.",
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Real-Time Systems",
            desc: "Developing real-time communication features using Socket.IO and Webhooks.",
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            )
        },
        {
            title: "Cloud & Deployment",
            desc: "Deploying and scaling apps on VPS, DigitalOcean, and Docker environments.",
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        }
    ];

    return (
        <section id="services" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">My Expertise</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">Providing end-to-end development solutions with a focus on quality and scalability.</p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                            className="p-8 rounded-2xl bg-blue-50/50 border border-blue-100 hover:bg-white transition-all duration-300"
                        >
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="mb-6 inline-block"
                            >
                                {s.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TechStack = () => {
    const techs = [
        "React.js", "Next.js", "NestJS", "Node.js", "Redux", "React Query",
        "Tailwind CSS", "PostgreSQL", "MongoDB", "Stripe", "Razorpay", "VPS"
    ];

    return (
        <section id="tech" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-slate-400 font-semibold uppercase tracking-widest text-sm mb-12"
                >
                    Technologies I Master
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {techs.map((t, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.1, backgroundColor: "#eff6ff" }}
                            className="px-6 py-3 bg-white border border-blue-100 rounded-full text-blue-700 font-medium shadow-sm cursor-default"
                        >
                            {t}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Monetrixa",
            category: "Rewards Platform",
            desc: "A sophisticated reward-based earning platform featuring full-stack automation, secure user profiles, and real-time dashboard analytics.",
            tags: ["React", "NestJS", "PostgreSQL"]
        },
        {
            title: "Subscription Hub",
            category: "SaaS Infrastructure",
            desc: "Complete subscription management system integrated with Stripe including periodic billing, webhooks, and flexible plan management.",
            tags: ["Node.js", "Stripe", "Webhooks"]
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Featured Work</h2>
                        <p className="text-slate-600 max-w-xl">A selection of my recent projects that demonstrate proficiency in complex system architectures.</p>
                    </motion.div>
                    <motion.button
                        whileHover={{ x: 5 }}
                        className="text-blue-600 font-bold flex items-center gap-2 transition-all"
                    >
                        See All Projects
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </motion.button>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="aspect-video bg-blue-100 rounded-3xl mb-8 overflow-hidden relative shadow-lg"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="bg-white px-6 py-3 rounded-full font-bold text-blue-600 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Details</div>
                                </div>
                            </motion.div>
                            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">{p.category}</span>
                            <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4 group-hover:text-blue-600 transition duration-300">{p.title}</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">{p.desc}</p>
                            <div className="flex gap-3">
                                {p.tags.map((t, idx) => (
                                    <span key={idx} className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-500 rounded-md">#{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-blue-600 relative overflow-hidden">
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-1/3 h-full bg-blue-500 skew-x-12 transform translate-x-1/2 -z-0"
            />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Let's work together</h2>
                        <p className="text-blue-100 text-lg mb-12 max-w-md">
                            Ready to take your project to the next level? I'm currently available for freelance work and full-time roles.
                        </p>

                        <div className="space-y-6">
                            {[
                                { label: "Email Me", val: "devenderkumar0194@gmail.com", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
                                { label: "Call Me", val: "8955848384", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-white/20">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                                    </div>
                                    <div>
                                        <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">{item.label}</p>
                                        <p className="text-xl font-medium">{item.val}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Name</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Email</label>
                                    <input type="email" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors" placeholder="Email@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Message</label>
                                <textarea className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 h-32 transition-colors" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="button"
                                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-100"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="py-12 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-2xl font-bold text-slate-900 cursor-default"
                >
                    Devender.
                </motion.div>
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Devender Kumar. Built with React & Tailwind.
                </p>
                <div className="flex gap-6">
                    {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                        <motion.a
                            key={social}
                            href="#"
                            whileHover={{ y: -3, color: "#2563eb" }}
                            className="text-slate-400 transition-colors"
                        >
                            {social}
                        </motion.a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

const Devender = () => {
    return (
        <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-600 scroll-smooth">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <TechStack />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Devender;