import {
  Clock,
  Heart,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const contactItems = [
    {
      icon: Phone,
      text: "+90 (531) 234 56 78",
    },
    {
      icon: MapPin,
      text: "Bursa",
    },
    {
      icon: Clock,
      text: "09:00 - 17:00",
    },
  ];

  const socialItems = [
    {
      icon: Instagram,
      text: "@busramestan",
    },
    {
      icon: Twitter,
      text: "@busramestan",
    },
    {
      icon: Linkedin,
      text: "@busramestan",
    },
  ];
  return (
    <footer className="bg-gray-900 text-white space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  place-items-start md:place-items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded-full">
                <Heart className="h-5 w-5 text-white" />
              </div>

              <div>
                <h3 className="text-lg font-bold ">Büşra Mestan</h3>
                <p>Veteriner Kliniği</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Kuş sağlığında uzmanlaşmış veteriner kliniği. Sevimli
              dostlarınızın sağlığı bizim önceliğimiz.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <div className="space-y-3">
              {contactItems.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">{contact.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sosyal Medya</h3>
            <div className="space-y-3">
              {socialItems.map((social, index) => {
                const Icon = social.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-gray-300" />
                    <span className="text-gray-300">{social.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 p-8 text-center">
        <p className="text-gray-400">
          © 2025 Büşra MESTAN Veteriner Kliniği. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
