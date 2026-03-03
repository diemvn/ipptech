import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current) return;
      const spans = textRef.current.querySelectorAll('.text-reveal-span');
      
      gsap.to(spans, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
        color: "white",
        stagger: 0.1,
      });

      gsap.from(".about-stats", {
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Count up animation for stats
      const statValues = sectionRef.current?.querySelectorAll('.stat-value');
      statValues?.forEach((el) => {
        const target = parseInt(el.getAttribute('data-target') || '0');
        const suffix = el.getAttribute('data-suffix') || '';
        const obj = { val: 0 };
        
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toString() + suffix;
          }
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const storyText = "Tại IPPTech, chúng tôi không chỉ chế tạo máy móc. Chúng tôi đang kiến tạo những người cộng sự thông minh, có khả năng thấu hiểu và tương tác với con người một cách tự nhiên nhất. Sứ mệnh của chúng tôi là xóa nhòa ranh giới giữa trí tuệ nhân tạo và thực tại, mang đến những giải pháp đột phá cho giáo dục, y tế và đời sống xã hội.";

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-[#0f0f12] relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ 
             backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
             backgroundSize: '60px 60px' 
           }} 
      />
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-wine/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-wine/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      {/* Permanent Central Glow */}
      <div className="central-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-60 scale-125 z-0"
           style={{ 
             background: 'radial-gradient(circle, rgba(159, 29, 52, 0.45) 0%, rgba(159, 29, 52, 0) 70%)',
             filter: 'blur(100px)'
           }} 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-sm font-bold text-wine uppercase tracking-[0.3em] mb-8">Storytelling</h2>
          <p 
            ref={textRef}
            className="text-3xl md:text-5xl font-bold leading-tight text-white/20"
          >
            {storyText.split(' ').map((word, i) => (
              <span key={i} className="text-reveal-span inline-block mr-[0.3em]">{word}</span>
            ))}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 about-stats">
          {[
            { label: "Dự án AI", value: 150, suffix: "+" },
            { label: "Đối tác toàn cầu", value: 40, suffix: "+" },
            { label: "Bằng sáng chế", value: 12, suffix: "" },
            { label: "Đội ngũ chuyên gia", value: 80, suffix: "+" }
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-[32px] bg-white/5 border border-white/10 text-center group hover:border-wine/30 transition-all shadow-sm backdrop-blur-sm">
              <div 
                className="stat-value text-4xl font-bold text-wine mb-2 group-hover:scale-110 transition-transform"
                data-target={stat.value}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </div>
              <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
