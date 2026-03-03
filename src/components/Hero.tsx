import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { ArrowRight, Play, ArrowDown } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

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
    <section ref={containerRef} className="relative h-screen flex items-center overflow-hidden bg-white">
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

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 pt-24 pb-12">
        <div className="flex flex-col justify-center py-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wine/5 border border-wine/10 text-wine text-sm font-medium mb-6 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wine opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-wine"></span>
            </span>
            Pioneering Humanoid Tech in Vietnam
          </motion.div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] mb-6 text-zinc-900 tracking-tight opacity-0 translate-y-8">
            Tương lai là <br />
            <span className="text-wine">Robot Nhân hình</span>
          </h1>
          
          <p className="text-base lg:text-lg text-zinc-600 mb-8 max-w-md leading-relaxed opacity-0 translate-y-8">
            Đơn vị tiên phong cung cấp giải pháp Robot hình người và Trí tuệ nhân tạo (AI) 
            cho Giáo dục, Doanh nghiệp và Y tế tại Việt Nam.
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 translate-y-8 btn-container">
            <button className="relative px-8 py-4 bg-wine text-white rounded-sm font-black text-xs uppercase tracking-[0.25em] overflow-hidden transition-all shadow-[0_0_30px_rgba(159,29,52,0.4)] active:scale-95 border border-white/20">
              <span className="relative z-10 flex items-center gap-2">
                Đặt lịch Demo ngay
                <ArrowRight className="w-4 h-4" />
              </span>
              
              {/* Laser Shimmer - Always Active */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_3s_infinite] z-20 pointer-events-none" />
              
              {/* Digital Scanline - Always Active */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-[1px] w-full -translate-y-full animate-[scanline_4s_infinite] z-20 pointer-events-none" />
              
              {/* Tech Corner Accents - Always Active */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/80 z-30 animate-[corner-pulse_1.5s_infinite]" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/80 z-30 animate-[corner-pulse_1.5s_infinite_0.75s]" />
              
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-wine-dark/10 z-0" />
            </button>
            <button className="px-8 py-4 border border-zinc-200 hover:border-zinc-400 text-zinc-900 rounded-sm font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2">
              Khám phá 7 mẫu Robot
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[380px] lg:h-[480px] xl:h-[550px] w-full flex items-center justify-center p-4"
        >
          <div className="relative z-10 w-full h-full max-w-xl mx-auto rounded-3xl overflow-hidden border border-zinc-100 shadow-2xl bg-zinc-50/50 backdrop-blur-sm">
            <iframe 
              title="Humanoid robot Ai" 
              className="w-full h-full"
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; fullscreen; xr-spatial-tracking" 
              src="https://sketchfab.com/models/e5de866d076646be8f20c610fefbbbcf/embed?autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"
            />
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-6 glass-card p-4 flex items-center gap-4 shadow-xl border-zinc-100 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                <Play className="w-4 h-4 text-wine fill-current" />
              </div>
              <div>
                <div className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold mb-0.5">Active Degrees</div>
                <div className="text-xl font-bold text-zinc-900">42 DoF</div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-wine/10 blur-[80px] rounded-full z-0" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-wine/10 blur-[80px] rounded-full z-0" />
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <button
        type="button"
        aria-label="Scroll down"
        onClick={handleScrollDown}
        className="absolute bottom-6 right-3 lg:right-10 z-20 h-28 w-28 rounded-full flex items-center justify-center text-wine"
      >
        <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full animate-[scroll-ring-rotate_10s_linear_infinite]">
          <defs>
            <path id="scroll-ring-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
          </defs>
          <text className="fill-current text-[9px] font-semibold uppercase">
            <textPath href="#scroll-ring-path" startOffset="0%" textLength="276" lengthAdjust="spacing">
              Scroll Down • Scroll Down • Scroll Down •
            </textPath>
          </text>
        </svg>

        <span className="h-14 w-14 rounded-full bg-[#ff6f7d] text-white flex items-center justify-center shadow-lg shadow-[#ff6f7d]/30 hover:scale-110 transition-transform duration-300">
          <ArrowDown className="w-5 h-5" />
        </span>
      </button>
    </section>
  );
}
