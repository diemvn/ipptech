import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-zinc-900 tracking-tight">Sẵn sàng cho kỷ nguyên mới?</h2>
            <p className="text-xl text-zinc-600 mb-16 leading-relaxed">
              Hãy để IPPTECH đồng hành cùng bạn trong việc tích hợp công nghệ Robotics 
              vào quy trình vận hành của bạn. Chúng tôi cam kết mang lại giải pháp tối ưu nhất.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-wine/5 flex items-center justify-center text-wine border border-wine/10">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-1">Email</div>
                  <div className="text-lg font-semibold text-zinc-900">contact@ipptech.vn</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-wine/5 flex items-center justify-center text-wine border border-wine/10">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-1">Hotline</div>
                  <div className="text-lg font-semibold text-zinc-900">+84 900 123 456</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-wine/5 flex items-center justify-center text-wine border border-wine/10">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-1">Địa chỉ</div>
                  <div className="text-lg font-semibold text-zinc-900">Khu Công nghệ cao, TP. Thủ Đức, TP. HCM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 lg:p-12 shadow-2xl border-zinc-100">
            <h3 className="text-3xl font-bold mb-10 text-zinc-900">Đặt lịch Demo</h3>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-zinc-500 mb-3 uppercase tracking-wider">Họ tên</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-wine transition-colors text-zinc-900 font-medium"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-500 mb-3 uppercase tracking-wider">Tổ chức</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-wine transition-colors text-zinc-900 font-medium"
                    placeholder="Trường học / Doanh nghiệp"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-500 mb-3 uppercase tracking-wider">Dòng robot quan tâm</label>
                <select className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-wine transition-colors appearance-none text-zinc-900 font-medium">
                  <option className="bg-white">Unitree H1 (Humanoid)</option>
                  <option className="bg-white">Unitree G1 (Compact)</option>
                  <option className="bg-white">Unitree Go2 (Quadruped)</option>
                  <option className="bg-white">Giải pháp AI tùy chỉnh</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-500 mb-3 uppercase tracking-wider">Lời nhắn</label>
                <textarea 
                  rows={4}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-wine transition-colors text-zinc-900 font-medium"
                  placeholder="Tôi muốn tìm hiểu về..."
                />
              </div>
              <button className="w-full py-5 bg-wine hover:bg-wine-dark text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-wine/20">
                Gửi yêu cầu
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
