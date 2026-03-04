import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Hero from './components/Hero';
import About from './components/About';
import RobotGrid from './components/RobotGrid';
import Solutions from './components/Solutions';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  const navRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 }
      );
    }
  }, []);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-wine z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[90] bg-white/90 backdrop-blur-lg border-b border-zinc-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <img 
              src="https://ippgroup.vn/business/new%20logo/logo-08.jpg" 
              alt="IPPTech Logo" 
              className="h-9 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-2 text-sm font-medium">
            {[
              { name: 'Trang chủ', active: true },
              { name: 'Sản phẩm', active: false },
              { name: 'Giải pháp', active: false },
              { name: 'Đào tạo', active: false },
              { name: 'Case study', active: false },
              { name: 'Tin tức', active: false }
            ].map((item) => (
              <a 
                key={item.name}
                href="#" 
                className={`relative px-4 py-2 transition-all duration-300 group overflow-hidden ${
                  item.active ? 'text-wine' : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {/* Tech Brackets */}
                <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-wine opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute top-0 right-0 w-1 h-1 border-t border-r border-wine opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-wine opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-wine opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Hover Background */}
                <span className="absolute inset-0 bg-wine/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.active && <span className="w-1 h-1 bg-wine rounded-full animate-pulse" />}
                  {item.name}
                </span>
              </a>
            ))}
            
            <div className="w-px h-6 bg-zinc-200 mx-4" />
            
            <button className="relative px-8 py-3 bg-wine text-white rounded-sm font-black text-xs uppercase tracking-[0.25em] overflow-hidden transition-all shadow-[0_0_30px_rgba(159,29,52,0.4)] active:scale-95 border border-white/20">
              <span className="relative z-10 flex items-center gap-2">
                Book Demo
              </span>
              
              {/* Laser Shimmer - Always Active */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_3s_infinite] z-20 pointer-events-none" />
              
              {/* Digital Scanline - Always Active */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-[2px] w-full -translate-y-full animate-[scanline_4s_infinite] z-20 pointer-events-none" />
              
              {/* Tech Corner Accents with Pulse - Always Active */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/80 z-30 animate-[corner-pulse_1.5s_infinite]" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/80 z-30 animate-[corner-pulse_1.5s_infinite_0.3s]" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/80 z-30 animate-[corner-pulse_1.5s_infinite_0.6s]" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/80 z-30 animate-[corner-pulse_1.5s_infinite_0.9s]" />
              
              {/* Subtle Grid Pattern - Always Active */}
              <div className="absolute inset-0 opacity-[0.15] z-10 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '4px 4px' }} />
              
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-wine-dark/20 z-0" />
            </button>
          </div>
        </div>
      </nav>

      <SmoothScroll>
        <main className="bg-white">
          <Hero />
          <About />
          <RobotGrid />
          <Solutions />
          <News />
          <Contact />
        </main>

        <Footer />
      </SmoothScroll>
    </div>
  );
}
