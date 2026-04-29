/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  ChevronRight, 
  Download,
  Menu,
  X,
  Terminal,
  Database,
  Cloud
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Khởi đầu', href: '#hero' },
    { name: 'Kỹ năng', href: '#skills' },
    { name: 'Kinh nghiệm', href: '#experience' },
    { name: 'Dự án', href: '#projects' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#020617]/80 backdrop-blur-md h-20 border-b border-slate-800/50' : 'bg-transparent h-24'}`}>
      <div className="container mx-auto px-16 h-full flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
            B
          </div>
          <span className="hidden sm:inline text-xl font-bold tracking-tight text-white">
            DVB<span className="text-blue-500">.</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium tracking-wide uppercase text-slate-400 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-2 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-400 uppercase tracking-widest"
          >
            Available for hire
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-slate-300 hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4 mb-8">
            <span className="text-blue-400 font-mono text-sm tracking-widest uppercase block animate-pulse">
              Xin chào, tôi là
            </span>
            <h1 className="text-6xl lg:text-8xl font-extrabold text-white leading-tight">
              Đàm Vĩnh <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Bằng
              </span>
            </h1>
            <p className="text-2xl font-light text-slate-400 tracking-wide">
              Full-stack Developer <span className="mx-2 text-slate-600">|</span> AI Enthusiast
            </p>
          </div>

          <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
            Sinh viên tại <span className="text-blue-400 font-semibold">Đại học Nam Cần Thơ (DNC)</span>. 
            Chuyên tâm xây dựng các giải pháp phần mềm hiện đại và tích hợp trí tuệ nhân tạo để tối ưu hóa trải nghiệm người dùng.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 flex items-center gap-2 transition-all group"
            >
              Xem Dự Án
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold border border-slate-700 transition-all flex items-center gap-2">
              Tải CV (PDF)
              <Download size={20} />
            </button>
          </div>

          <div className="flex gap-6 pt-12">
            <div className="h-px w-12 bg-slate-700 my-auto"></div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 hover:border-blue-500 cursor-pointer text-slate-400 hover:text-white transition-all"><Github size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 hover:border-blue-500 cursor-pointer text-slate-400 hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 hover:border-blue-500 cursor-pointer text-slate-400 hover:text-white transition-all"><Mail size={18} /></a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Decorative Rings */}
          <div className="absolute w-[450px] h-[450px] border border-blue-500/20 rounded-full animate-pulse" />
          <div className="absolute w-[400px] h-[400px] border border-purple-500/10 rounded-full" />
          
          <div className="relative w-[360px] h-[360px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 rounded-[40px] rotate-6 opacity-20 blur-xl"></div>
            <div className="relative w-full h-full bg-[#1e293b] rounded-[40px] border border-slate-700 overflow-hidden shadow-2xl group">
              <img 
                src="https://lh3.googleusercontent.com/d/1Q-HaTBguN50weIAeJ1ciq7PzAXmEUjj3" 
                alt="Dam Vinh Bang"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Neon Glow Corners */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-400 m-4 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500 m-4 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#020617] to-transparent">
                <div className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-1">DNC Student</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ children, index, subtitle }: { children: ReactNode, index: string, subtitle?: string }) => (
  <div className="mb-16">
    <div className="flex items-center gap-4 mb-2">
      <span className="text-blue-500 font-mono text-sm tracking-widest">{index}</span>
      <div className="h-[1px] w-12 bg-blue-500/30" />
      {subtitle && <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">{subtitle}</span>}
    </div>
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{children}</h2>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="text-blue-400" />,
      skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      color: 'blue'
    },
    {
      title: 'Backend',
      icon: <Terminal className="text-purple-400" />,
      skills: ['Node.js', 'Express', 'Python', 'Go', 'API Design'],
      color: 'purple'
    },
    {
      title: 'Database & Cloud',
      icon: <Database className="text-pink-400" />,
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'AWS', 'Docker'],
      color: 'pink'
    },
    {
      title: 'AI & Soft Skills',
      icon: <Cpu className="text-blue-400" />,
      skills: ['Gemini API', 'LangChain', 'Problem Solving', 'Teamwork', 'Agile'],
      color: 'blue'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#020617]">
      <div className="container mx-auto px-16">
        <SectionHeading index="01" subtitle="Năng lực">Kỹ năng & Chuyên môn</SectionHeading>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-slate-800/50 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-md bg-slate-800/50 border border-slate-700/30 text-slate-400 text-xs hover:text-white transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: 'Tự học & Freelance',
      role: 'Full-stack Developer',
      period: '2022 - Hiện tại',
      desc: 'Phát triển các ứng dụng web chuyên nghiệp, tập trung vào hiệu suất và trải nghiệm người dùng.',
      achievements: ['Hoàn thành hơn 10 dự án thương mại', 'Tích hợp AI vào quy trình làm việc']
    },
    {
      company: 'Đại học Nam Cần Thơ',
      role: 'Sinh viên CNTT',
      period: '2021 - 2025',
      desc: 'Nghiên cứu sâu về kiến trúc phần mềm, thuật toán và các công nghệ web hiện đại.',
      achievements: ['GPA Xuất sắc: 3.6/4.0', 'Dẫn đầu nhiều dự án nhóm']
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="container mx-auto px-16">
        <SectionHeading index="02" subtitle="Hành trình">Kinh nghiệm làm việc</SectionHeading>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-start relative"
            >
              <div className="md:w-1/3">
                <div className="text-blue-400 font-mono text-sm mb-2">{exp.period}</div>
                <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                <div className="text-slate-500 font-medium">{exp.role}</div>
              </div>
              <div className="md:w-2/3 p-8 rounded-2xl bg-white/5 border border-slate-800/50 relative overflow-hidden group hover:border-blue-500/20 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl" />
                <p className="text-slate-400 mb-6 leading-relaxed">{exp.desc}</p>
                <div className="space-y-3">
                  {exp.achievements.map(a => (
                    <div key={a} className="flex items-center gap-3 text-sm text-slate-500">
                      <div className="h-1 w-1 bg-blue-500" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Bài 1',
      category: 'Full-stack Solution',
      image: 'https://lh3.googleusercontent.com/d/1CONc_VBpg0SaXb758yE5ERqzINWTvWQ3',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Bài 2',
      category: 'Creative Frontend',
      image: 'https://lh3.googleusercontent.com/d/1D3cDZJT3923IjAIs2fObcCWSFJ6Xr-GR',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Bài 3',
      category: 'AI Integration',
      image: 'https://lh3.googleusercontent.com/d/1QrGP6Aowz7p3B0UlZLiSyiFI0v5pLbk7',
      tags: ['Gemini API', 'TypeScript', 'Node.js'],
      link: '#'
    },
    {
      title: 'Bài 4',
      category: 'Enterprise App',
      image: 'https://lh3.googleusercontent.com/d/1oHjs-n8KPX08BkjrhezvK5VGtJ8iJriM',
      tags: ['React', 'Firebase', 'Cloud Functions'],
      link: '#'
    },
    {
      title: 'Bài 5',
      category: 'Full-stack Development',
      image: 'https://lh3.googleusercontent.com/d/1fPd7bfAiuKu0ja1zzRgQHawSUHFQxWJ2',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      link: '#'
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#020617]">
      <div className="container mx-auto px-16">
        <SectionHeading index="03" subtitle="Sản phẩm">Dự án tiêu biểu</SectionHeading>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[32px] overflow-hidden bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-8">
                <div className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">{project.category}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags?.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-md text-[10px] font-bold bg-slate-800 text-slate-400 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.link} className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                    Chi tiết <ExternalLink size={14} />
                  </a>
                  <div className="flex gap-4">
                    <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={18} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-4 rounded-xl border border-blue-500/30 text-blue-400 font-bold hover:bg-blue-600 hover:text-white transition-all uppercase text-xs tracking-widest">
            Tất cả dự án trên GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-16 relative z-10">
        <SectionHeading index="04" subtitle="Giao lưu">Liên hệ với mình</SectionHeading>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white italic">Bạn có dự án hoặc câu hỏi?</h3>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Bạn có thể liên hệ trực tiếp qua form hoặc qua các mạng xã hội. 
              Mình luôn sẵn sàng để trao đổi về công nghệ, cơ hội việc làm hoặc phát triển các ý tưởng sáng tạo.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: 'Email', value: 'bang.dv@student.dnc.edu.vn' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/bangdv' },
                { icon: <Github size={20} />, label: 'GitHub', value: 'github.com/bangdv' }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-slate-800/30 hover:border-blue-500/20 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-slate-300 font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-blue-400/20 m-6 rounded-tr-3xl" />
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Tên của bạn</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#020617] border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-700" 
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Địa chỉ Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#020617] border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-700" 
                    placeholder="abc@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Lời nhắn</label>
                <textarea 
                  rows={4}
                  className="w-full bg-[#020617] border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-blue-500 outline-none transition-all resize-none placeholder:text-slate-700" 
                  placeholder="Tôi muốn thảo luận về dự án..."
                ></textarea>
              </div>
              <button 
                className="w-full py-5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 uppercase text-xs tracking-widest"
              >
                Gửi Lời Nhắn
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800/50 bg-[#020617] relative overflow-hidden">
      <div className="container mx-auto px-16 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Built with React + Tailwind CSS
        </div>
        
        <div>© {new Date().getFullYear()} Dam Vinh Bang — Nam Can Tho University</div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen selection:bg-blue-500/30 selection:text-blue-400 font-sans cursor-default scroll-smooth">
      {/* Background Decor from Theme */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 rounded-full blur-[120px]"></div>
      </div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
