import React from "react";
import {
  FileText,
  CheckCircle,
  MessageCircle,
  Star,
  Users,
  Award,
  Globe,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-Bold text-gray-900 mb-6 leading-tight">
              جاهز تترك انطباع أول
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-Bold mb-6 leading-tight">
                لا يُنسى؟
              </span>
            </h1>

            <p className="text-xl font-Regular md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              نصمّم لك سيرة ذاتية احترافية ومتوافقة تمامًا مع نظام تتبع
              المتقدمين (ATS) باللغتين العربية والإنجليزية، مع كفر تعريفي يعكس
              هويتك المهنية!
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-800 font-Bold">تصميم أنيق</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-800 font-Bold">صياغة قوية</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-800 font-Bold">
                  متوافقة مع أنظمة التوظيف الحديثة
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/966597207446?text=" +
                      encodeURIComponent(
                        `السلام عليكم،\nشفت إعلانكم بخصوص تصميم السيرة الذاتية وأرغب في عمل سيرة احترافية متوافقة مع نظام ATS،\nباللغتين + كفر تعريفي.\nوش الخطوات؟`
                      ),
                    "_blank"
                  )
                }
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-Bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto"
              >
                <MessageCircle className="h-6 w-6" />
                <span>اطلب سيرتك الآن عبر واتساب</span>
              </button>
              <p className="text-sm text-gray-600 font-Regular">
                استجابة فورية • تسليم سريع • ضمان الجودة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-Bold text-gray-900 mb-4">
              نماذج من أعمالنا المتميزة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-Regular">
              سير ذاتية احترافية صممناها لعملائنا تعكس هويتهم المهنية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Example for each CV card */}
            {[
              {
                src: "/Screenshot_٢٠٢٥٠٦٢٣_١٠٤٠٠١_Drive.jpg",
                alt: "نموذج سيرة ذاتية باللغة العربية",
                title: "سيرة ذاتية عربية",
                desc: "تصميم احترافي متوافق مع ATS",
              },
              {
                src: "/Screenshot_٢٠٢٥٠٦٢٣_١٠٣٩٢٣_Drive.jpg",
                alt: "نموذج سيرة ذاتية باللغة الإنجليزية",
                title: "English CV",
                desc: "Professional international format",
              },
              {
                src: "/Screenshot_٢٠٢٥٠٦٢٣_١٠٣٩٤٩_Drive.jpg",
                alt: "نموذج سيرة ذاتية تقنية",
                title: "سيرة ذاتية تقنية",
                desc: "مخصصة للمهندسين والتقنيين",
              },
              {
                src: "/Screenshot_٢٠٢٥٠٦٢٣_١٠٣٩٣٨_Drive.jpg",
                alt: "نموذج سيرة ذاتية متقدمة",
                title: "تصميم متقدم",
                desc: "للمناصب الإدارية العليا",
              },
            ].map((cv, index) => (
              <a
                key={index}
                href={cv.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {" "}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={cv.src}
                      alt={cv.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg mb-1">{cv.title}</h3>
                    <p className="text-sm text-gray-200">{cv.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
