import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Building2, Factory, HeartPulse } from 'lucide-react';

const tabs = [
  { 
    id: 'edu', 
    label: 'Giáo dục', 
    icon: BookOpen,
    title: 'Phòng Lab Robotics Hiện Đại',
    desc: 'Cung cấp giáo trình và robot thực hành cho các trường đại học kỹ thuật hàng đầu.',
    case: 'Đã triển khai tại 15+ trường Đại học trên toàn quốc.'
  },
  { 
    id: 'biz', 
    label: 'Doanh nghiệp', 
    icon: Building2,
    title: 'Lễ tân & Trình diễn sự kiện',
    desc: 'Robot nhân hình đón khách, thuyết trình và tạo ấn tượng mạnh mẽ cho thương hiệu.',
    case: 'Phục vụ tại các triển lãm công nghệ quy mô quốc tế.'
  },
  { 
    id: 'prod', 
    label: 'Sản xuất', 
    icon: Factory,
    title: 'Kiểm tra & Giám sát AI',
    desc: 'Tích hợp AI vào quy trình sản xuất để phát hiện lỗi và tối ưu hóa vận hành.',
    case: 'Giảm 30% tỷ lệ lỗi trong dây chuyền lắp ráp linh kiện.'
  },
  { 
    id: 'med', 
    label: 'Y tế', 
    icon: HeartPulse,
    title: 'Hỗ trợ chăm sóc bệnh nhân',
    desc: 'Robot hỗ trợ vận chuyển vật tư y tế và giao tiếp cơ bản với bệnh nhân.',
    case: 'Đang thử nghiệm tại các bệnh viện thông minh.'
  },
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-32 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-zinc-900 tracking-tight">Giải pháp & Giá trị</h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">Ứng dụng thực tế mang lại giá trị vượt trội và tối ưu hóa vận hành cho khách hàng.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all ${
                activeTab === tab.id 
                ? 'bg-wine text-white shadow-xl shadow-wine/20 scale-105' 
                : 'bg-white text-zinc-500 border border-zinc-200 hover:border-zinc-300 shadow-sm'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {tabs.map((tab) => tab.id === activeTab && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-16 items-center glass-card p-10 lg:p-16 shadow-2xl border-zinc-100"
              >
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-zinc-900 leading-tight">{tab.title}</h3>
                  <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
                    {tab.desc}
                  </p>
                  <div className="p-8 rounded-2xl bg-wine/5 border border-wine/10">
                    <div className="text-wine font-bold text-xs uppercase tracking-[0.2em] mb-3">Case Study</div>
                    <p className="text-zinc-800 italic text-lg font-medium">"{tab.case}"</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop`} 
                    alt={tab.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-wine/5 mix-blend-overlay" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
