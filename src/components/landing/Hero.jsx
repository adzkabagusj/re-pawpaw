import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[94vh] p-8 sm:flex-row sm:p-20 gap-8 font-medium text-2xl bg-white">
      <div className="absolute w-96 aspect-[293.94/412.01] -left-8 top-1/2 transform -translate-y-1/2">
        <Image
          src="/Cat.png"
          alt="Cat"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>

      <div className="text-center z-10">
        <h1 className="text-[90px] font-bold text-[#F3AAB5] mb-4 leading-tight">
          Welcome to <br />
          PawPaw!
        </h1>
        <p className="text-[#F3AAB5] text-[16px] max-w-[600px] mx-auto">
          Hai, Pawrents! Yuk, catat perjalanan si furry friend dengan mudah dan
          abadikan kenangan manis bareng mereka di sini!
        </p>
      </div>

      <div className="absolute w-96 aspect-[353/652] -right-8 top-1/2 transform -translate-y-1/2">
        <Image
          src="/Dog.png"
          alt="Dog"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>
    </section>
  );
};

export default Hero;
