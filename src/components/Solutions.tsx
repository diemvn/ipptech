import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Cpu, Users, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000
    });
  };

  const resetTilt = (card: HTMLDivElement) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    // Animate Orbs
    if (orb1Ref.current && orb2Ref.current) {
      gsap.to(orb1Ref.current, {
        x: '30vw',
        y: '20vh',
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(orb2Ref.current, {
        x: '-20vw',
        y: '-10vh',
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    if (titleRef.current) {
      const text = titleRef.current.textContent || "";
      titleRef.current.innerHTML = text
        .split("")
        .map((char) => `<span class="inline-block split-char-sol">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      const chars = titleRef.current.querySelectorAll(".split-char-sol");

      gsap.fromTo(chars,
        {
          y: 50,
          opacity: 0,
          rotateX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
          }
        }
      );
    }

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.solution-card');
      gsap.fromTo(cards,
        {
          y: 60,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const solutions = [
    { title: "Smart Education", desc: "Cách mạng hóa giáo dục với trợ giảng AI.", icon: GraduationCap },
    { title: "Enterprise AI", desc: "Tối ưu hóa vận hành doanh nghiệp.", icon: Cpu },
    { title: "Healthcare", desc: "Chăm sóc sức khỏe thông minh.", icon: Users }
  ];

  return (
    <section id="solutions" ref={sectionRef} className="relative py-32 bg-zinc-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40 tech-grid pointer-events-none" />
      
      <div 
        ref={orb1Ref}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-wine/5 rounded-full blur-[120px] z-0 pointer-events-none" 
      />
      <div 
        ref={orb2Ref}
        className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-wine/10 rounded-full blur-[150px] z-0 pointer-events-none" 
      />

      <div className="relative z-10 section-padding">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand uppercase tracking-[0.3em] mb-4">03. Solutions</h2>
          <h3 ref={titleRef} className="text-5xl font-bold text-black perspective-1000">ỨNG DỤNG THỰC TIỄN</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <div 
              key={i} 
              className="card-glass group cursor-pointer solution-card"
              onMouseMove={(e) => handleTilt(e, e.currentTarget)}
              onMouseLeave={(e) => resetTilt(e.currentTarget)}
            >
              <div className="w-16 h-16 bg-wine/20 rounded-2xl flex items-center justify-center text-brand mb-8 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                <sol.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-black">{sol.title}</h4>
              <p className="text-black/40 leading-relaxed mb-8">{sol.desc}</p>
              <div className="flex items-center gap-2 text-brand font-bold group-hover:gap-4 transition-all">
                Khám phá giải pháp <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
