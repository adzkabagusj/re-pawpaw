import Image from "next/image";
import Link from "next/link";
import React from "react";

const articles = [
  {
    title: "Jenis Jenis Makanan Anjing yang Wajib Anda Ketahui",
    description:
      "Anjing adalah sahabat setia kita. Untuk menjaga kesehatannya, pastikan ia mendapatkan makanan bergizi. Yuk, kenali jenis makanan anjing yang tepat!",
    img: "/article_section/img1.png",
    url: "https://www.purina.co.id/artikel/anjing/pemberian-makan/ketahui-makanan-anjing",
  },
  {
    title: "Fakta Unik Tentang Kucing, Cat Lovers Wajib Tahu!",
    description:
      "Siapa sangka, kucing yang sering dianggap cuek ternyata punya banyak rahasia menarik? Yuk, ungkap fakta unik tentang kucing kesayanganmu!",
    img: "/article_section/img2.png",
    url: "https://www.gramedia.com/best-seller/fakta-unik-tentang-kucing/",
  },
  {
    title: "Kelinci, Hewan Menggemaskan Cocok untuk Dipelihara di Rumah",
    description:
      "Kelinci menjadi hewan peliharaan favorit banyak orang. Hewan ini memiliki ukuran tubuh yang relatif kecil dengan bulu halus membuat banyak orang menyukainya.",
    img: "/article_section/img3.png",
    url: "https://katadata.co.id/berita/lifestyle/615c5b8d9f3af/kelinci-hewan-menggemaskan-cocok-untuk-dipelihara-di-rumah",
  },
];

const Artikel = () => {
  return (
    <div
      id="Artikel"
      className="relative flex flex-col w-screen justify-center items-center gap-y-10 max-w-full h-[600px] overflow-clip">
      <h2 className="text-pink-main font-bold text-5xl">Useful Pet Article</h2>
      <div className="w-[80vw] relative h-fit flex gap-x-10">
        {articles.map(({ title, description, img, url }, index) => (
          <Link
            href={url}
            className="w-96 h-[450px] flex flex-col gap-y-2 items-start relative rounded-2xl p-4 shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)]"
            target="_blank"
            key={index}>
            <div className="relative w-full aspect-[364/243] overflow-clip rounded-xl">
              <Image
                src={img}
                alt={`article image-${index + 1}`}
                fill
                style={{ objectFit: "contain" }}
                draggable="false"
              />
            </div>
            <span className="bg-pink-main rounded-full px-3 py-1 text-[12px] text-white font-bold">
              Pet Article
            </span>
            <p className="text-black font-bold text-base">{title}</p>
            <p className="w-[95%] text-black font-medium text-sm text-justify">
              {description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Artikel;
