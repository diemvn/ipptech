import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const robotModels = [
  { 
    id: 'as2', 
    title: 'As2', 
    subtitle: 'Compact Size Industrial Capability',
    specs: ['Tải trọng: 5kg', 'Tốc độ: 3.5m/s', 'Thời lượng pin: 4h'],
    image: "https://www.unitree.com/images/0b235c5ba3f64996a2731dd69e3cd90a_800x800.png"
  },
  { 
    id: 'h2', 
    title: 'H2', 
    subtitle: 'Destiny Awakening',
    specs: ['Chiều cao: 1.8m', 'Bậc tự do: 42', 'Cảm biến: LiDAR + Depth'],
    image: "https://www.unitree.com/images/f951770ea2e74197a6b0c089d13efc5a_800x800.png"
  },
  { 
    id: 'r1', 
    title: 'R1', 
    subtitle: 'Ultra-lightweight, fully customizable',
    specs: ['Trọng lượng: 15kg', 'Khớp nối linh hoạt', 'Hỗ trợ ROS 2'],
    image: "https://www.unitree.com/images/be9e7bde5e104a40bc1a8e8eccf71a00_1860x1550.png"
  },
  { 
    id: 'g1', 
    title: 'G1', 
    subtitle: 'Humanoid agent AI avatar',
    specs: ['AI tích hợp', 'Nhận diện khuôn mặt', 'Tương tác giọng nói'],
    image: "https://www.unitree.com/images/6613c61ef0d1412682b771fc62432a50_1464x1400.png"
  },
  { 
    id: 'b2', 
    title: 'B2', 
    subtitle: 'Go Beyond the Limits',
    specs: ['Chống nước: IP67', 'Leo dốc: 35 độ', 'Tải trọng max: 40kg'],
    image: "https://www.unitree.com/images/aa5d57b6dc794ca0bbd76a4c70f2ae42_800x800.png"
  },
  { 
    id: 'go2', 
    title: 'Go2', 
    subtitle: 'New Creature of Embodied AI',
    specs: ['Kết nối 4G/5G', 'Tránh vật cản 360', 'Follow-me mode'],
    image: "https://www.unitree.com/images/9c2641eab59d4deea9bb27c6d5e8b359_800x800.png"
  },
];

const BG_IMAGE = "https://www.unitree.com/images/07f40a5254ec42c298d1a541db9d07eb_1860x1550.png";

export default function RobotGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.robot-card');
      
      gsap.fromTo(cards, 
        { 
          opacity: 0, 
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <section className="w-full px-5 py-32 bg-white">
      {/* Section Header */}
      <div className="container mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-wine font-bold tracking-[0.3em] uppercase text-sm mb-4">
            02. PRODUCT SHOWCASE
          </p>
          <h2 className="text-6xl md:text-8xl font-black text-zinc-900 tracking-tighter uppercase mb-8">
            THE LINEUP
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light">
            Khám phá thế hệ Robot Humanoid tiếp theo. Click để xem chi tiết.
          </p>
        </motion.div>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {robotModels.map((robot) => (
          <a 
            key={robot.id} 
            href="#"
            className="robot-card group relative aspect-[3/4] overflow-hidden bg-zinc-50 flex flex-col items-center pt-16 pb-10 px-10 border border-zinc-100 transition-all duration-500 hover:shadow-2xl hover:shadow-wine/10"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-80"
              style={{ backgroundImage: `url(${BG_IMAGE})` }}
            />
            
            {/* Content Overlay */}
            <div className="relative z-20 text-center w-full mb-8">
              <p className="text-lg md:text-xl text-zinc-800 font-medium mb-2">
                {robot.subtitle}
              </p>
              <h3 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight">
                {robot.title}
              </h3>
            </div>

            {/* Product Image */}
            <div className="relative z-10 w-full flex-1 flex items-center justify-center overflow-visible">
              <img 
                src={robot.image} 
                alt={robot.title}
                className="w-full h-full max-h-[380px] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.25]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Specs Overlay (Visible on Hover) */}
            <div className="absolute bottom-[15px] left-0 right-0 z-20 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 pointer-events-none">
              <div className="grid grid-cols-3 gap-x-4 md:gap-x-8 gap-y-2 w-full max-w-[400px] px-6">
                {robot.specs.map((spec, idx) => (
                  <span key={idx} className="text-[10px] md:text-xs font-bold text-wine tracking-tight text-center whitespace-nowrap uppercase">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtle Gradient Bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
          </a>
        ))}
      </div>
    </section>
  );
}
