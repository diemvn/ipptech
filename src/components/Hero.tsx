import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';
import Robot3D from './Robot3D';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const q = gsap.utils.selector(containerRef.current);
      gsap.to(q('h1, p, .btn-container'), {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.8
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
             backgroundSize: '40px 40px' 
           }} 
      />
      
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-wine/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-wine/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wine/5 border border-wine/10 text-wine text-sm font-medium mb-8 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wine opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-wine"></span>
            </span>
            Pioneering Humanoid Tech in Vietnam
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 text-zinc-900 tracking-tight opacity-0 translate-y-8">
            Tương lai là <br />
            <span className="text-wine">Robot Nhân hình</span>
          </h1>
          
          <p className="text-xl text-zinc-600 mb-10 max-w-lg leading-relaxed opacity-0 translate-y-8">
            Đơn vị tiên phong cung cấp giải pháp Robot hình người và Trí tuệ nhân tạo (AI) 
            cho Giáo dục, Doanh nghiệp và Y tế tại Việt Nam.
          </p>
          
          <div className="flex flex-wrap gap-5 opacity-0 translate-y-8 btn-container">
            <button className="px-10 py-4 bg-wine hover:bg-wine-dark text-white rounded-full font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-wine/20">
              Đặt lịch Demo ngay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 border border-zinc-200 hover:border-zinc-400 text-zinc-900 rounded-full font-semibold transition-all flex items-center gap-2">
              Khám phá 7 mẫu Robot
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[600px] lg:h-[800px]"
        >
          <div className="relative z-10 w-full h-full max-w-2xl mx-auto">
            <Robot3D />
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 glass-card p-5 flex items-center gap-4 shadow-xl border-zinc-100 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center">
                <Play className="w-5 h-5 text-wine fill-current" />
              </div>
              <div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-0.5">Active Degrees</div>
                <div className="text-2xl font-bold text-zinc-900">42 DoF</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
