import { useRef } from 'react';
import gsap from 'gsap';
import { GraduationCap, Cpu, Users, ArrowRight } from 'lucide-react';

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);

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

  const solutions = [
    { title: "Smart Education", desc: "Cách mạng hóa giáo dục với trợ giảng AI.", icon: GraduationCap },
    { title: "Enterprise AI", desc: "Tối ưu hóa vận hành doanh nghiệp.", icon: Cpu },
    { title: "Healthcare", desc: "Chăm sóc sức khỏe thông minh.", icon: Users }
  ];

  return (
    <section id="solutions" ref={sectionRef} className="py-32 bg-light-bg">
      <div className="section-padding">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand uppercase tracking-[0.3em] mb-4">03. Solutions</h2>
          <h3 className="text-5xl font-bold text-black">ỨNG DỤNG THỰC TIỄN</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <div 
              key={i} 
              className="card-glass group cursor-pointer"
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
