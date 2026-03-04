import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formContainerRef.current) {
      gsap.fromTo(formContainerRef.current,
        {
          scale: 0.85,
          opacity: 0,
          y: 60
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: formContainerRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: 1, // Smoothly link animation to scroll progress
          }
        }
      );
    }
  }, []);

  return (
    <section id="contact" className="bg-zinc-50 py-32 overflow-hidden">
      <div className="section-padding">
        <div 
          ref={formContainerRef}
          className="bg-white rounded-[40px] overflow-hidden grid lg:grid-cols-2 shadow-2xl border border-zinc-100 origin-center"
        >
          {/* Left Side - Info */}
          <div className="p-12 lg:p-20 bg-wine flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-6 text-white uppercase tracking-tight">
              KẾT NỐI VỚI TƯƠNG LAI
            </h3>
            <p className="text-white/80 mb-16 text-lg leading-relaxed max-w-md">
              Bạn sẵn sàng cho cuộc cách mạng Humanoid? Hãy để đội ngũ chuyên gia của IPPTech đồng hành cùng bạn.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em] mb-1">Email</div>
                  <div className="font-bold text-xl text-white">contact@ipptech.vn</div>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em] mb-1">Hotline</div>
                  <div className="font-bold text-xl text-white">+84 123 456 789</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-12 lg:p-20 bg-white">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Họ và tên</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-100 px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-wine/20 outline-none transition-all text-zinc-900 placeholder:text-zinc-400" 
                    placeholder="Nguyễn Văn A" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Số điện thoại</label>
                  <input 
                    type="tel" 
                    className="w-full bg-zinc-100 px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-wine/20 outline-none transition-all text-zinc-900 placeholder:text-zinc-400" 
                    placeholder="090..." 
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Dịch vụ quan tâm</label>
                <div className="relative">
                  <select className="w-full bg-zinc-100 px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-wine/20 outline-none transition-all text-zinc-900 appearance-none cursor-pointer">
                    <option className="bg-white">Mua Robot Humanoid</option>
                    <option className="bg-white">Thuê Robot sự kiện</option>
                    <option className="bg-white">Giải pháp giáo dục</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Lời nhắn</label>
                <textarea 
                  className="w-full bg-zinc-100 px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-wine/20 outline-none transition-all text-zinc-900 h-32 resize-none placeholder:text-zinc-400" 
                  placeholder="Tôi muốn tìm hiểu về..."
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button className="w-full py-5 bg-[#8B1D22] hover:bg-[#72181C] text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-wine/30 active:scale-[0.98]">
                  Gửi yêu cầu ngay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
