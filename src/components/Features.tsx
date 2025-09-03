import { Clock, Heart, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Kuş Sağlığı Uzmanı",
      description: "Kuş sağlığı ve bakımında uzmanlaşmışveteriner hekimlik",
    },
    {
      icon: Shield,
      title: "Güvenilir Tedavi",
      description:
        "Modern ekipman ve güncel tedavi yöntemleri ile güvenili hizmet",
    },
    {
      icon: Clock,
      title: "Acil Durumlar",
      description: "7/24 acil durumlarda ulaşılabilir ve hızlı müdahale",
    },
  ];
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-15">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Neden Bizi Tercih Etmelisiniz ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kuş sağlığında uzmanlaşmış ekibimiz ve modern kliniğimiz ile sevimli
            dostlarınıza en iyi bakımı sunuyoruz
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 grid-">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="space-y-4 text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300 max-w-xs"
              >
                <div className="bg-orange-100 rounded-full mx-auto  flex justify-center w-16 h-16 items-center">
                  <Icon className="text-orange-600 w-8 h-8" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
