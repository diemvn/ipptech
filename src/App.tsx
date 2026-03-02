import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import RobotShowcase from './components/RobotShowcase';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
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
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5
      });
    }
  }, []);

  return (
    <SmoothScroll>
      <div className="relative">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-wine z-50 origin-left"
          style={{ scaleX }}
        />

        {/* Navigation */}
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg border-b border-zinc-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-wine rounded-lg flex items-center justify-center text-white font-black text-xl">I</div>
            <span className="text-xl font-bold tracking-tighter text-zinc-900">IPP<span className="text-wine">TECH</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#" className="hover:text-wine transition-colors">Sản phẩm</a>
            <a href="#" className="hover:text-wine transition-colors">Giải pháp</a>
            <a href="#" className="hover:text-wine transition-colors">Về chúng tôi</a>
            <button className="px-5 py-2 bg-wine/5 text-wine border border-wine/10 rounded-full hover:bg-wine hover:text-white transition-all">
              Liên hệ
            </button>
          </div>
        </div>
      </nav>

      <main className="bg-white">
        <Hero />
        <BentoGrid />
        <RobotShowcase />
        <Solutions />
        <Contact />
      </main>

      <footer className="py-12 border-t border-zinc-100 bg-zinc-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-wine rounded flex items-center justify-center text-white font-black text-sm">I</div>
            <span className="font-bold tracking-tighter text-zinc-900">IPP<span className="text-wine">TECH</span></span>
          </div>
          
          <div className="text-zinc-400 text-sm">
            © 2024 IPPTECH. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-zinc-400">
            <a href="#" className="hover:text-wine transition-colors">Facebook</a>
            <a href="#" className="hover:text-wine transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-wine transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
      </div>
    </SmoothScroll>
  );
}
