import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const robots = [
  { id: 'as2', name: 'Unitree AS2', height: '1.2m', dof: '24', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=500' },
  { id: 'h2', name: 'Unitree H1', height: '1.8m', dof: '42', img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=500' },
  { id: 'g1', name: 'Unitree G1', height: '1.4m', dof: '36', img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=500' },
  { id: 'go2', name: 'Unitree Go2', height: '0.6m', dof: '12', img: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=500' },
  { id: 'b2', name: 'Unitree B2', height: '0.8m', dof: '16', img: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=500' },
];

export default function RobotShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-6 z-20"
        >
          <h2 className="text-6xl font-black text-zinc-900/5 uppercase tracking-tighter">Humanoid Showcase</h2>
        </motion.div>
        
        <motion.div style={{ x }} className="flex gap-12 px-12">
          {robots.map((robot) => (
            <motion.div 
              key={robot.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2, margin: "0px -100px 0px -100px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] // Custom easeOutExpo
              }}
              className="group relative h-[500px] w-[400px] glass-card shrink-0 overflow-hidden border-zinc-100 shadow-xl"
            >
              <motion.div 
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img 
                  src={robot.img} 
                  alt={robot.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold mb-3 text-zinc-900">{robot.name}</h3>
                  <div className="flex gap-6 text-sm text-zinc-500 mb-8 font-medium">
                    <span className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-wine" />
                      Height: {robot.height}
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-wine" />
                      DoF: {robot.dof}
                    </span>
                  </div>
                </motion.div>
                
                <button className="w-full py-4 bg-zinc-900 hover:bg-wine text-white rounded-2xl transition-all duration-300 font-bold shadow-lg shadow-zinc-900/10 hover:shadow-wine/20 flex items-center justify-center gap-2 group/btn">
                  Xem chi tiết
                  <div className="w-0 group-hover/btn:w-4 h-[2px] bg-white transition-all duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
