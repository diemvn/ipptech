import { ChevronRight } from 'lucide-react';

export default function News() {
  const articles = [
    { title: "Tương lai của Humanoid Robot tại Việt Nam 2026", date: "25 Feb, 2026", category: "Insights" },
    { title: "IPPTECH hợp tác cùng Đại học Bách Khoa xây dựng Lab AI", date: "20 Feb, 2026", category: "Events" },
    { title: "Top 5 ứng dụng của Robot hình người trong giáo dục", date: "15 Feb, 2026", category: "Education" },
  ];

  return (
    <section id="news" className="py-24 bg-light">
      <div className="section-padding">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-4">04. News & Insights</h2>
            <h3 className="text-4xl font-bold text-black">BÁO CHÍ & SỰ KIỆN</h3>
          </div>
          <button className="btn-secondary hidden md:block">Tất cả bài viết</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video rounded-[24px] overflow-hidden mb-6 bg-black/5 border border-black/5">
                <img 
                  src={`https://picsum.photos/seed/news${i}/600/400`} 
                  alt={art.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-wine/20 text-brand text-[10px] font-bold uppercase rounded-full">{art.category}</span>
                <span className="text-xs text-black/40">{art.date}</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-brand transition-colors">{art.title}</h4>
              <button className="text-sm font-bold flex items-center gap-2 text-black/60 group-hover:text-black">
                Đọc tiếp <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
