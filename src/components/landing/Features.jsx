import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    <section
      id="Features"
      className="p-12 flex items-center justify-center min-h-[80vh] sah">
      <div>
        <h2 className="text-4xl font-bold text-center mb-8 text-[#FFBCC3]">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Grooming Schedule",
              icon: "/icons/Scissors.png",
              href: "/grooming",
              description:
                "Atur jadwal grooming hewan peliharaan Pawrents dengan mudah dan dapatkan pengingat otomatis agar hewan tetap terawat.",
            },
            {
              title: "Health Tracking",
              icon: "/icons/Medkit.png",
              href: "/health-tracking",
              description:
                "Pantau kondisi kesehatan hewan peliharaan Pawrents secara menyeluruh, mulai dari vaksinasi hingga catatan medis.",
            },
            {
              title: "Community Chat",
              icon: "/icons/Paw.png",
              href: "/community",
              description:
                "Terhubung dengan komunitas pecinta hewan, berbagi pengalaman, dan dapatkan tips merawat hewan peliharaan.",
            },
          ].map((feature, index) => (
            <Link key={index} href={feature.href} passHref>
              <div
                key={index}
                className="bg-[#FFFFFF] p-6 rounded-[25px] flex items-center gap-6 shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)] transition-transform transform hover:scale-105">
                {/* Icon di sisi kiri */}
                <div className="relative aspect-square w-16 flex flex-shrink-0">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    fill
                    style={{ objectFit: "contain" }}
                    draggable="false"
                  />
                </div>
                {/* Konten di sisi kanan */}
                <div>
                  <h3 className="text-[24px] font-bold mb-2 text-[#FFBCC3]">
                    {feature.title}
                  </h3>
                  <p className="text-[#9E9E9E] text-[14px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
