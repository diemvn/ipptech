import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-white text-zinc-900 pt-32 pb-10 border-t border-zinc-100">
      <div className="section-padding grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <img 
              src="https://ippgroup.vn/business/new%20logo/logo-08.jpg" 
              alt="IPPTech Logo" 
              className="h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-zinc-500 max-w-sm mb-10 text-lg leading-relaxed">
            Tiên phong trong lĩnh vực Humanoid Robot và AI tại Việt Nam. 
            Kiến tạo tương lai thông qua giáo dục và công nghệ.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href="#" 
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-wine hover:text-white hover:border-wine hover:shadow-lg hover:shadow-wine/20 transition-all duration-300 cursor-pointer group"
              >
                <social.icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h5 className="font-bold text-lg mb-8 uppercase tracking-widest text-zinc-900">Hệ sinh thái</h5>
          <ul className="space-y-4 text-zinc-500">
            <li><a href="#" className="hover:text-wine transition-colors">Robot Humanoid</a></li>
            <li><a href="#" className="hover:text-wine transition-colors">AI Education</a></li>
            <li><a href="#" className="hover:text-wine transition-colors">Smart Enterprise</a></li>
            <li><a href="#" className="hover:text-wine transition-colors">R&D Center</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-lg mb-8 uppercase tracking-widest text-zinc-900">Công ty</h5>
          <ul className="space-y-4 text-zinc-500">
            <li><a href="#" className="hover:text-wine transition-colors">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-wine transition-colors">Tin tức</a></li>
            <li><a href="#" className="hover:text-wine transition-colors">Tuyển dụng</a></li>
            <li><a href="#" className="hover:text-wine transition-colors">Liên hệ</a></li>
          </ul>
        </div>
      </div>
      <div className="section-padding py-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-400">
        <p>© 2026 IPPTECH. THE FUTURE IS HUMANOID.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
