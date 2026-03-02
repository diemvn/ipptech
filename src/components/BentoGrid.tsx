import { motion } from 'motion/react';
import { Cpu, GraduationCap, Users, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const BentoCard = ({ 
  title, 
  description, 
  className, 
  icon: Icon, 
  image,
  badge,
  index = 0
}: { 
  title: string; 
  description: string; 
  className?: string; 
  icon?: any;
  image?: string;
  badge?: string;
  index?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className={cn(
      "glass-card glass-card-hover group relative p-10 flex flex-col justify-between min-h-[320px]",
      className
    )}
  >
    {image && (
      <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
        <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>
    )}
    
    <div className="relative z-10">
      {badge && (
        <span className="text-[10px] uppercase tracking-[0.2em] text-wine font-bold mb-5 block">
          {badge}
        </span>
      )}
      {Icon && (
        <div className="w-14 h-14 rounded-2xl bg-wine/5 flex items-center justify-center mb-8 border border-wine/10 group-hover:bg-wine group-hover:text-white transition-colors">
          <Icon className="w-7 h-7" />
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4 text-zinc-900 leading-tight">{title}</h3>
      <p className="text-zinc-500 text-base leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>

    <div className="relative z-10 mt-8">
      <button className="text-sm font-bold flex items-center gap-3 group/btn text-zinc-900 uppercase tracking-wider">
        Tìm hiểu thêm
        <div className="w-8 h-[2px] bg-zinc-200 group-hover/btn:w-12 group-hover/btn:bg-wine transition-all" />
      </button>
    </div>
  </motion.div>
);

export default function BentoGrid() {
  return (
    <section className="py-32 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-zinc-900 tracking-tight">Hệ sinh thái IPPTECH</h2>
          <p className="text-xl text-zinc-500 max-w-2xl">Giải pháp toàn diện từ phần cứng đến trí tuệ nhân tạo, định hình tương lai Robotics tại Việt Nam.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Large Card */}
          <BentoCard
            title="Phân phối Robot Humanoid"
            description="Giới thiệu các dòng robot phục vụ nghiên cứu và trình diễn hàng đầu thế giới."
            className="md:col-span-2 md:row-span-2 p-10"
            image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop"
            badge="Core Business"
            icon={Cpu}
            index={0}
          />

          <BentoCard
            title="Giải pháp AI & Robotics"
            description="Hệ thống tích hợp cho trường học và doanh nghiệp tự động hóa."
            className="p-10"
            icon={Zap}
            badge="Innovation"
            index={1}
          />

          <BentoCard
            title="Đào tạo & Trải nghiệm"
            description="Dịch vụ đào tạo và cho thuê robot chuyên nghiệp cho sự kiện."
            className="p-10"
            icon={GraduationCap}
            badge="Services"
            index={2}
          />

          {/* Marquee Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-10 md:col-span-2 flex flex-col justify-center overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-8">
              <Users className="w-6 h-6 text-wine" />
              <h3 className="text-2xl font-bold text-zinc-900">Đối tượng khách hàng</h3>
            </div>
            
            <div className="relative flex overflow-x-hidden">
              <div className="animate-marquee whitespace-nowrap flex gap-8 items-center py-4">
                {['Trường học', 'Viện nghiên cứu', 'Doanh nghiệp công nghệ', 'Trung tâm triển lãm', 'Bệnh viện hiện đại'].map((item) => (
                  <span key={item} className="text-zinc-600 font-medium px-6 py-3 rounded-full border border-zinc-200 bg-white shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
              <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 items-center py-4">
                {['Trường học', 'Viện nghiên cứu', 'Doanh nghiệp công nghệ', 'Trung tâm triển lãm', 'Bệnh viện hiện đại'].map((item) => (
                  <span key={item} className="text-zinc-600 font-medium px-6 py-3 rounded-full border border-zinc-200 bg-white shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
