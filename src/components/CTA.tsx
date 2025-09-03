import { Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-orange-500 py-16">
      <div className="space-y-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white font-bold text-3xl">
          Kuşunuzun Sağlığı İçin Hemen İletişime Geçin
        </h2>
        <p className="text-orange-100 text-xl">
          Deneyimli veteriner hekimimizden randevu alın
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+905321432121"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-4 hover:bg-orange-50 transition-colors max-w-fit"
          >
            <Phone className="h-5 w-5" />
            <span>+90 (531) 234 56 78</span>
          </a>
          <a
            href="/iletisim"
            className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold active:bg-orange-900"
          >
            <span>İletişim Bilgileri</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
